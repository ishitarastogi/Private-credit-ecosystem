import { modules } from "../src/data/learn/modules";
import { lessons } from "../src/data/learn/lessons";
import { caseStudies } from "../src/data/learn/caseStudies";
import { glossary } from "../src/data/learn/glossary";
import { resources } from "../src/data/learn/resources";
import { RESOURCE_CATEGORIES, CASE_STUDY_QUESTIONS } from "../src/data/learn/types";

function fail(message: string) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

console.log(`Modules: ${modules.length}`);
console.log(`Lessons: ${lessons.length}`);
console.log(`Case studies: ${caseStudies.length}`);
console.log(`Glossary entries: ${glossary.length}`);
if (glossary.length !== 38) fail(`expected 38 glossary entries, found ${glossary.length}`);

console.log(`Resources: ${resources.length}`);

for (const category of RESOURCE_CATEGORIES) {
  const count = resources.filter((r) => r.categories.includes(category)).length;
  if (count === 0) fail(`resource category "${category}" has zero entries`);
}

const glossarySlugs = new Set(glossary.map((g) => g.slug));
for (const entry of glossary) {
  for (const relatedSlug of entry.related) {
    if (!glossarySlugs.has(relatedSlug)) {
      fail(`glossary entry "${entry.term}" references missing related slug "${relatedSlug}"`);
    }
  }
}

for (const study of caseStudies) {
  if (study.answers.length !== 10) {
    fail(`case study "${study.name}" has ${study.answers.length} answers, expected 10`);
  }
  study.answers.forEach((a, i) => {
    if (a.question !== CASE_STUDY_QUESTIONS[i]) {
      fail(`case study "${study.name}" answer ${i} question mismatch: "${a.question}" vs "${CASE_STUDY_QUESTIONS[i]}"`);
    }
  });
}

const lessonModuleKeys = new Set(modules.filter((m) => m.kind === "lessons").map((m) => m.key));
for (const lesson of lessons) {
  if (!lessonModuleKeys.has(lesson.moduleKey)) {
    fail(`lesson "${lesson.slug}" references unknown module key "${lesson.moduleKey}"`);
  }
}

const declaredLessonSlugs = modules.flatMap((m) => m.lessonSlugs ?? []);
const actualLessonSlugs = lessons.map((l) => l.slug);
if (JSON.stringify([...declaredLessonSlugs].sort()) !== JSON.stringify([...actualLessonSlugs].sort())) {
  fail(
    `module.lessonSlugs and lessons[].slug are out of sync: declared=${declaredLessonSlugs.length} actual=${actualLessonSlugs.length}`,
  );
}

if (process.exitCode === 1) {
  console.log("\nValidation FAILED — see FAIL lines above.");
} else {
  console.log("\nValidation PASSED.");
}
