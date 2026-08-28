import type { Lesson } from "@/data/learn/types";

// Foundations
import { whatIsPrivateCredit } from "@/data/learn/lessons/foundations/what-is-private-credit";
import { whatIsOnchain } from "@/data/learn/lessons/foundations/what-is-onchain";
import { howOnchainPrivateCreditWorks } from "@/data/learn/lessons/foundations/how-onchain-private-credit-works";

// Credit Structure
import { theAnatomyOfACreditDeal } from "@/data/learn/lessons/credit-structure/the-anatomy-of-a-credit-deal";
import { whatIsAnSpv } from "@/data/learn/lessons/credit-structure/what-is-an-spv";
import { whatIsSecuritization } from "@/data/learn/lessons/credit-structure/what-is-securitization";
import { whatIsTranching } from "@/data/learn/lessons/credit-structure/what-is-tranching";
import { seniorVsJunior } from "@/data/learn/lessons/credit-structure/senior-vs-junior";
import { theWaterfall } from "@/data/learn/lessons/credit-structure/the-waterfall";
import { firstLossProtection } from "@/data/learn/lessons/credit-structure/first-loss-protection";

// Credit Products
import { whatCanYouActuallyBuy } from "@/data/learn/lessons/credit-products/what-can-you-actually-buy";
import { fundVsPoolVsNoteVsVault } from "@/data/learn/lessons/credit-products/fund-vs-pool-vs-note-vs-vault";
import { receivablesAndAssetBackedCredit } from "@/data/learn/lessons/credit-products/receivables-and-asset-backed-credit";
import { warehouseFacilities } from "@/data/learn/lessons/credit-products/warehouse-facilities";
import { yieldBearingCreditTokens } from "@/data/learn/lessons/credit-products/yield-bearing-credit-tokens";

// Risk
import { whereDoesTheRiskSit } from "@/data/learn/lessons/risk/where-does-the-risk-sit";
import { collateralAndLtv } from "@/data/learn/lessons/risk/collateral-and-ltv";
import { navVsFairValue } from "@/data/learn/lessons/risk/nav-vs-fair-value";
import { liquidityAndRedemption } from "@/data/learn/lessons/risk/liquidity-and-redemption";
import { defaultsAndRecoveries } from "@/data/learn/lessons/risk/defaults-and-recoveries";

// Credit x DeFi
import { creditTokensAsCollateral } from "@/data/learn/lessons/credit-defi/credit-tokens-as-collateral";
import { lltvAndLiquidations } from "@/data/learn/lessons/credit-defi/lltv-and-liquidations";
import { leverageAndLooping } from "@/data/learn/lessons/credit-defi/leverage-and-looping";
import { slowMoneyFastMoneyProblem } from "@/data/learn/lessons/credit-defi/slow-money-fast-money-problem";

// Analyze
import { the60SecondCreditCheck } from "@/data/learn/lessons/analyze/the-60-second-credit-check";
import { howToReadACreditProduct } from "@/data/learn/lessons/analyze/how-to-read-a-credit-product";
import { howToDetectDoubleCounting } from "@/data/learn/lessons/analyze/how-to-detect-double-counting";

// Failure Modes
import { whenBorrowersDefault } from "@/data/learn/lessons/failure-modes/when-borrowers-default";
import { whenNavBreaks } from "@/data/learn/lessons/failure-modes/when-nav-breaks";
import { whenLiquidityDisappears } from "@/data/learn/lessons/failure-modes/when-liquidity-disappears";
import { whenDefiLeverageAmplifiesLosses } from "@/data/learn/lessons/failure-modes/when-defi-leverage-amplifies-losses";

export const lessons: Lesson[] = [
  whatIsPrivateCredit,
  whatIsOnchain,
  howOnchainPrivateCreditWorks,

  theAnatomyOfACreditDeal,
  whatIsAnSpv,
  whatIsSecuritization,
  whatIsTranching,
  seniorVsJunior,
  theWaterfall,
  firstLossProtection,

  whatCanYouActuallyBuy,
  fundVsPoolVsNoteVsVault,
  receivablesAndAssetBackedCredit,
  warehouseFacilities,
  yieldBearingCreditTokens,

  whereDoesTheRiskSit,
  collateralAndLtv,
  navVsFairValue,
  liquidityAndRedemption,
  defaultsAndRecoveries,

  creditTokensAsCollateral,
  lltvAndLiquidations,
  leverageAndLooping,
  slowMoneyFastMoneyProblem,

  the60SecondCreditCheck,
  howToReadACreditProduct,
  howToDetectDoubleCounting,

  whenBorrowersDefault,
  whenNavBreaks,
  whenLiquidityDisappears,
  whenDefiLeverageAmplifiesLosses,
];

export const lessonBySlug = new Map(lessons.map((lesson) => [lesson.slug, lesson]));
export const lessonSlugs = lessons.map((lesson) => lesson.slug);
