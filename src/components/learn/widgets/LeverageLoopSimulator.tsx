"use client";

import { useMemo, useState } from "react";
import { formatUsd } from "@/lib/utils";

type LeverageLoopSimulatorProps = {
  startUsd: number;
  maxLoops: number;
  loopBorrowRatio: number;
};

export function LeverageLoopSimulator({
  startUsd,
  maxLoops,
  loopBorrowRatio,
}: LeverageLoopSimulatorProps) {
  const [loops, setLoops] = useState(0);

  const { exposure, debt, equity, dangerDecline } = useMemo(() => {
    let currentExposure = startUsd;
    let currentDebt = 0;
    for (let i = 0; i < loops; i += 1) {
      const borrowed = currentExposure * loopBorrowRatio;
      currentExposure += borrowed;
      currentDebt += borrowed;
    }
    const currentEquity = currentExposure - currentDebt;
    const decline = currentExposure > 0 ? (currentEquity / currentExposure) * 100 : 0;
    return { exposure: currentExposure, debt: currentDebt, equity: currentEquity, dangerDecline: decline };
  }, [startUsd, loops, loopBorrowRatio]);

  const leverageMultiple = exposure / startUsd;

  return (
    <div className="rounded-md border border-line bg-white p-5">
      <div className="grid grid-cols-3 gap-4 text-center">
        <Stat label="Position size" value={formatUsd(exposure)} />
        <Stat label="Debt" value={formatUsd(debt)} />
        <Stat label="Leverage" value={`${leverageMultiple.toFixed(2)}×`} />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setLoops((n) => Math.min(maxLoops, n + 1))}
          disabled={loops >= maxLoops}
          className="rounded-md bg-foreground px-3 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Loop again
        </button>
        <button
          type="button"
          onClick={() => setLoops(0)}
          disabled={loops === 0}
          className="rounded-md border border-line px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent disabled:cursor-not-allowed disabled:opacity-40"
        >
          Reset
        </button>
        <span className="text-xs text-muted">
          {loops} of {maxLoops} loops
        </span>
      </div>

      {loops > 0 && (
        <p
          className={`mt-4 rounded-md border p-3 text-xs leading-5 ${
            dangerDecline < 15
              ? "border-amber-300 bg-amber-50 text-amber-900"
              : "border-line bg-background text-muted"
          }`}
        >
          Equity is now {formatUsd(equity)} against a {formatUsd(exposure)} position. A collateral
          value decline of just {dangerDecline.toFixed(1)}% would wipe out all of your equity.
        </p>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string | undefined }) {
  return (
    <div>
      <p className="text-lg font-semibold text-foreground">{value}</p>
      <p className="mt-0.5 text-[11px] uppercase tracking-wide text-muted">{label}</p>
    </div>
  );
}
