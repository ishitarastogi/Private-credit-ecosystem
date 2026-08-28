import type { Lesson } from "@/data/learn/types";
import { whatIsPrivateCredit } from "@/data/learn/lessons/what-is-private-credit";
import { whatIsOnchain } from "@/data/learn/lessons/what-is-onchain";
import { howOnchainPrivateCreditWorks } from "@/data/learn/lessons/how-onchain-private-credit-works";
import { whatDoesYourTokenRepresent } from "@/data/learn/lessons/what-does-your-token-represent";
import { understandingCreditRisk } from "@/data/learn/lessons/understanding-credit-risk";
import { creditTokensAsDefiCollateral } from "@/data/learn/lessons/credit-tokens-as-defi-collateral";
import { howToAnalyzeACreditProduct } from "@/data/learn/lessons/how-to-analyze-a-credit-product";
import { howOnchainPrivateCreditFails } from "@/data/learn/lessons/how-onchain-private-credit-fails";
import { howAnRwaCreditVaultBlowsUp } from "@/data/learn/lessons/how-an-rwa-credit-vault-blows-up";

export const lessons: Lesson[] = [
  whatIsPrivateCredit,
  whatIsOnchain,
  howOnchainPrivateCreditWorks,
  whatDoesYourTokenRepresent,
  understandingCreditRisk,
  creditTokensAsDefiCollateral,
  howToAnalyzeACreditProduct,
  howOnchainPrivateCreditFails,
  howAnRwaCreditVaultBlowsUp,
];

export const lessonBySlug = new Map(lessons.map((lesson) => [lesson.slug, lesson]));
export const lessonSlugs = lessons.map((lesson) => lesson.slug);
