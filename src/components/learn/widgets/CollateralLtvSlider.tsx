"use client";

import { useState } from "react";
import { formatUsd } from "@/lib/utils";

type CollateralLtvSliderProps = {
  collateralUsd: number;
  initialLoanUsd: number;
  maxLoanUsd: number;
};

export function CollateralLtvSlider({
  collateralUsd,
  initialLoanUsd,
  maxLoanUsd,
}: CollateralLtvSliderProps) {
  const [loan, setLoan] = useState(initialLoanUsd);
  const ltv = (loan / collateralUsd) * 100;
  const fillWidth = Math.min(100, ltv);
  const isOverLeveraged = ltv > 100;

  return (
    <div className="rounded-md border border-line bg-white p-5">
      <div className="flex items-baseline justify-between">
        <p className="text-xs text-muted">
          Collateral <span className="font-medium text-foreground">{formatUsd(collateralUsd)}</span>
        </p>
        <p className={`text-lg font-semibold ${isOverLeveraged ? "text-amber-700" : "text-foreground"}`}>
          {ltv.toFixed(0)}% LTV
        </p>
      </div>

      <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-zinc-100">
        <div
          className={`h-full rounded-full transition-all ${isOverLeveraged ? "bg-amber-400" : "bg-accent"}`}
          style={{ width: `${fillWidth}%` }}
        />
      </div>

      <div className="mt-4">
        <label htmlFor="loan-slider" className="flex items-baseline justify-between text-xs text-muted">
          <span>Loan amount</span>
          <span className="text-sm font-semibold text-foreground">{formatUsd(loan)}</span>
        </label>
        <input
          id="loan-slider"
          type="range"
          min={0}
          max={maxLoanUsd}
          step={1}
          value={loan}
          onChange={(event) => setLoan(Number(event.target.value))}
          className="mt-2 w-full accent-[#4f46e5]"
        />
      </div>

      {isOverLeveraged && (
        <p className="mt-3 text-xs leading-5 text-amber-700">
          The loan now exceeds the collateral&rsquo;s value — there is no cushion left if the collateral loses any value at all.
        </p>
      )}
    </div>
  );
}
