import type { ComponentType } from "react";
import type { WidgetConfigMap, WidgetName } from "@/data/learn/types";
import { MoneyFlowRoleDiagram } from "@/components/learn/widgets/MoneyFlowRoleDiagram";
import { ClaimChainExplorer } from "@/components/learn/widgets/ClaimChainExplorer";
import { WaterfallSimulator } from "@/components/learn/widgets/WaterfallSimulator";
import { CollateralLtvSlider } from "@/components/learn/widgets/CollateralLtvSlider";
import { LeverageLoopSimulator } from "@/components/learn/widgets/LeverageLoopSimulator";
import { LltvSimulator } from "@/components/learn/widgets/LltvSimulator";
import { NavVsLiquidityChart } from "@/components/learn/widgets/NavVsLiquidityChart";
import { CreditCheckTool } from "@/components/learn/widgets/CreditCheckTool";
import { CreditStackDiagram } from "@/components/learn/widgets/CreditStackDiagram";
import { VaultBlowupSimulator } from "@/components/learn/widgets/VaultBlowupSimulator";

type WidgetComponentMap = {
  [N in WidgetName]: ComponentType<WidgetConfigMap[N]>;
};

export const widgetRegistry: WidgetComponentMap = {
  "money-flow-roles": MoneyFlowRoleDiagram,
  "claim-chain-explorer": ClaimChainExplorer,
  "waterfall-simulator": WaterfallSimulator,
  "collateral-ltv-slider": CollateralLtvSlider,
  "leverage-loop-simulator": LeverageLoopSimulator,
  "lltv-simulator": LltvSimulator,
  "nav-vs-liquidity": NavVsLiquidityChart,
  "credit-check-tool": CreditCheckTool,
  "credit-stack-diagram": CreditStackDiagram,
  "vault-blowup-simulator": VaultBlowupSimulator,
};
