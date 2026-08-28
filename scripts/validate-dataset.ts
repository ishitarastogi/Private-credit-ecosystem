import { datasetRows, ecosystemLayers, layerKeys } from "../src/data/privateCreditDataset";
import { assets } from "../src/data/assets";
import { projects } from "../src/data/projects";

const EXPECTED_SOURCE_ROWS = 123;

function fail(message: string) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

console.log(`Source rows (as transcribed from the supplied dataset): ${datasetRows.length}`);
if (datasetRows.length !== EXPECTED_SOURCE_ROWS) {
  console.log(
    `NOTE: prompt claimed ${EXPECTED_SOURCE_ROWS} rows, but manual transcription of the tables yields ${datasetRows.length}. See report for per-layer breakdown.`,
  );
}

console.log(`Imported asset rows: ${assets.length}`);
if (assets.length !== datasetRows.length) {
  fail(`assets.length (${assets.length}) !== datasetRows.length (${datasetRows.length})`);
}

console.log(`Unique projects: ${projects.length}`);

const multiLayerProjects = projects.filter((p) => p.roles.length > 1);
console.log(`Projects with multiple layers: ${multiLayerProjects.length}`);
multiLayerProjects.forEach((p) => console.log(`  - ${p.name}: ${p.roles.join(" + ")}`));

// Per-layer row counts
console.log("\nRows per layer:");
for (const layer of ecosystemLayers) {
  const count = datasetRows.filter((r) => r.layerKey === layer.key).length;
  console.log(`  ${layer.layerNo} — ${layer.name}: ${count}`);
}

// Every dataset row's project must resolve to a project entity
const projectIds = new Set(projects.map((p) => p.id));
for (const asset of assets) {
  if (!projectIds.has(asset.projectId)) {
    fail(`asset ${asset.id} references missing project ${asset.projectId}`);
  }
}

// Every project's assetIds must resolve to a real asset, and vice versa
const assetIds = new Set(assets.map((a) => a.id));
for (const project of projects) {
  for (const assetId of project.assetIds) {
    if (!assetIds.has(assetId)) {
      fail(`project ${project.id} references missing asset ${assetId}`);
    }
  }
}
const assetIdCoverage = new Set(projects.flatMap((p) => p.assetIds));
if (assetIdCoverage.size !== assets.length) {
  fail(
    `assetIds coverage mismatch: ${assetIdCoverage.size} referenced vs ${assets.length} assets`,
  );
}

// Duplicate asset id check
const seenAssetIds = new Map<string, number>();
for (const asset of assets) {
  seenAssetIds.set(asset.id, (seenAssetIds.get(asset.id) ?? 0) + 1);
}
const duplicateAssetIds = [...seenAssetIds.entries()].filter(([, n]) => n > 1);
if (duplicateAssetIds.length > 0) {
  fail(`duplicate asset ids: ${duplicateAssetIds.map(([id, n]) => `${id} (x${n})`).join(", ")}`);
}

// Every source project/product/ticker/status/layer exists somewhere in assets
const missingTickers = datasetRows.filter((r) => !r.ticker).length;
const missingStatus = datasetRows.filter((r) => !r.status).length;
console.log(`\nMissing tickers (source has none): ${missingTickers}`);
console.log(`Missing status (source has none): ${missingStatus}`);

const knownLayerKeys = new Set(layerKeys);
for (const row of datasetRows) {
  if (!knownLayerKeys.has(row.layerKey)) {
    fail(`row for ${row.project} / ${row.product} has unknown layer key ${row.layerKey}`);
  }
}

// Spot-check special cases called out in the task
function expectAsset(ticker: string, projectName: string) {
  const asset = assets.find((a) => a.ticker === ticker);
  if (!asset) {
    fail(`expected ticker ${ticker} to exist`);
    return;
  }
  const project = projects.find((p) => p.id === asset.projectId);
  if (project?.name !== projectName) {
    fail(`expected ${ticker} to belong to ${projectName}, found ${project?.name}`);
  }
}

expectAsset("MF-ONE", "Fasanara");
expectAsset("MGLOBAL", "Fasanara");
expectAsset("VRPCQ", "R25");
expectAsset("APC3M", "R25");
expectAsset("OALS2T", "BlackOpal");
expectAsset("ACRED", "Apollo");
expectAsset("ACRDX", "Apollo");
expectAsset("JAAA", "Janus Henderson");
expectAsset("JTRSY", "Janus Henderson");

const nestTickers = ["NOPAL", "NFALCON", "NAXI", "NWISDOM", "NLCRD", "NACRDX", "NCREDIT", "NSCOPE", "NBYBIT1", "nALPHA"];
const nestAssets = assets.filter((a) => a.projectId === "nest-credit");
if (nestAssets.length !== nestTickers.length) {
  fail(`expected ${nestTickers.length} Nest Credit assets, found ${nestAssets.length}`);
}

const securitizeProject = projects.find((p) => p.id === "securitize");
if (!securitizeProject || securitizeProject.roles.length < 2) {
  fail("expected Securitize to carry multiple roles (tokenization-platform + helper)");
}

const statusChecks: Array<[string, string]> = [
  ["Atlendis V2", "deprecated"],
  ["CRDX pools", "winding_down"],
  ["Tinlake", "legacy"],
];
for (const [product, expectedStatus] of statusChecks) {
  const asset = assets.find((a) => a.name === product);
  if (asset?.status !== expectedStatus) {
    fail(`expected ${product} status ${expectedStatus}, found ${asset?.status}`);
  }
}

if (process.exitCode === 1) {
  console.log("\nValidation FAILED — see FAIL lines above.");
} else {
  console.log("\nValidation PASSED.");
}
