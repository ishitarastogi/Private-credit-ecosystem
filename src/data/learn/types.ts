export interface FlowStep {
  id: string;
  label: string;
  detail?: string;
  zone?: "onchain" | "offchain" | "neutral";
  actor?: string;
}

export type ContentBlock =
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "paragraph"; text: string; lead?: boolean }
  | {
      type: "callout";
      tone: "info" | "warning" | "key-concept";
      title?: string;
      text: string;
    }
  | {
      type: "flow-diagram";
      title?: string;
      orientation?: "horizontal" | "vertical";
      steps: FlowStep[];
      showZoneLegend?: boolean;
    }
  | {
      type: "list";
      style?: "bullet" | "numbered" | "check";
      title?: string;
      items: string[] | { label: string; detail?: string }[];
    }
  | {
      type: "comparison";
      title?: string;
      subjects: string[];
      rows: { attribute: string; values: string[] }[];
    }
  | {
      type: "scenario";
      title: string;
      setup: string;
      walkthrough: string[];
      lesson: string;
    }
  | { type: "takeaways"; items: string[] }
  | {
      type: "quiz";
      questions: {
        id: string;
        question: string;
        options: string[];
        correctIndex: number;
        explanation?: string;
      }[];
    }
  | WidgetBlock;

export interface WidgetConfigMap {
  "money-flow-roles": {
    steps: FlowStep[];
    roles: { id: string; name: string; description: string; onchain: boolean }[];
  };
  "claim-chain-explorer": {
    instruments: {
      id: string;
      name: string;
      holds: string;
      backedBy: string;
      legalOwner: string;
      legalClaimHolder: string;
      cashFlowMechanism: string;
      exitMechanism: string;
      legalClaimAnswer: string;
    }[];
  };
  "waterfall-simulator": {
    poolUsd: number;
    seniorUsd: number;
    mezzanineUsd?: number;
    juniorUsd: number;
    defaultLossUsd: number;
    maxLossUsd: number;
  };
  "collateral-ltv-slider": {
    collateralUsd: number;
    initialLoanUsd: number;
    maxLoanUsd: number;
  };
  "leverage-loop-simulator": {
    startUsd: number;
    maxLoops: number;
    loopBorrowRatio: number;
  };
  "lltv-simulator": {
    collateralUsd: number;
    initialLltv: number;
    initialNav: number;
  };
  "nav-vs-liquidity": {
    navPrice: number;
    marketPrice: number;
    liquidationValue: number;
  };
  "credit-check-tool": {
    questions: { id: string; question: string; guidance: string }[];
  };
  "credit-stack-diagram": {
    layers: { id: string; label: string; detail: string }[];
  };
  "vault-blowup-simulator": {
    steps: (FlowStep & { consequence?: string })[];
  };
}

export type WidgetName = keyof WidgetConfigMap;

export interface WidgetBlock<N extends WidgetName = WidgetName> {
  type: "widget";
  widget: N;
  title?: string;
  description?: string;
  config: WidgetConfigMap[N];
}

export type ModuleKind = "lessons" | "case-studies" | "reference";

export interface Module {
  key: string;
  index: number;
  title: string;
  description: string;
  kind: ModuleKind;
  lessonSlugs?: string[];
  href?: string;
}

export interface Lesson {
  slug: string;
  moduleKey: string;
  order: number;
  title: string;
  summary: string;
  blocks: ContentBlock[];
}

export const CASE_STUDY_QUESTIONS = [
  "Who is the borrower?",
  "What is the loan?",
  "Who originates it?",
  "Who owns the loan?",
  "Where is the SPV?",
  "What does the investor hold?",
  "How are repayments distributed?",
  "What protects investors?",
  "How liquid is the position?",
  "What happens in default?",
] as const;

type Ten<T> = [T, T, T, T, T, T, T, T, T, T];

export interface CaseStudyAnswer {
  question: string;
  answer: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  concepts: string[];
  summary: string;
  answers: Ten<CaseStudyAnswer>;
}

export interface GlossaryEntry {
  term: string;
  slug: string;
  definition: string;
  whyItMatters: string;
  related: string[];
}

export type ResourceCategory =
  | "Start Here"
  | "Market Structure"
  | "How Onchain Credit Works"
  | "Credit Risk"
  | "DeFi + RWA Collateral"
  | "Defaults / Failure Cases"
  | "Protocol Research"
  | "Traditional Private Credit"
  | "Securitization / Structured Credit";

export const RESOURCE_CATEGORIES: ResourceCategory[] = [
  "Start Here",
  "Market Structure",
  "How Onchain Credit Works",
  "Credit Risk",
  "DeFi + RWA Collateral",
  "Defaults / Failure Cases",
  "Protocol Research",
  "Traditional Private Credit",
  "Securitization / Structured Credit",
];

export interface ResourceEntry {
  id: string;
  title: string;
  author: string;
  date?: string;
  type: string;
  topic: string;
  whyItMatters: string;
  categories: ResourceCategory[];
  url: string | null;
  pending?: boolean;
}
