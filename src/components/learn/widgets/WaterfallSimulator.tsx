"use client";

import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { axisTickStyle, chartColors, chartMargin } from "@/components/learn/charts/ChartTheme";
import { MinimalTooltip } from "@/components/learn/charts/MinimalTooltip";
import { formatUsd } from "@/lib/utils";

type WaterfallSimulatorProps = {
  poolUsd: number;
  seniorUsd: number;
  mezzanineUsd?: number;
  juniorUsd: number;
  defaultLossUsd: number;
  maxLossUsd: number;
};

export function WaterfallSimulator({
  poolUsd,
  seniorUsd,
  mezzanineUsd,
  juniorUsd,
  defaultLossUsd,
  maxLossUsd,
}: WaterfallSimulatorProps) {
  const [loss, setLoss] = useState(defaultLossUsd);
  const hasMezzanine = mezzanineUsd !== undefined && mezzanineUsd > 0;

  // Loss absorption order: junior first, then mezzanine (if present), then senior last.
  const juniorLoss = Math.min(loss, juniorUsd);
  const remainingAfterJunior = Math.max(0, loss - juniorUsd);
  const mezzanineLoss = hasMezzanine ? Math.min(remainingAfterJunior, mezzanineUsd) : 0;
  const remainingAfterMezzanine = hasMezzanine
    ? Math.max(0, remainingAfterJunior - mezzanineUsd)
    : remainingAfterJunior;
  const seniorLoss = Math.min(remainingAfterMezzanine, seniorUsd);

  const juniorRemaining = juniorUsd - juniorLoss;
  const mezzanineRemaining = hasMezzanine ? mezzanineUsd - mezzanineLoss : 0;
  const seniorRemaining = seniorUsd - seniorLoss;

  const data = [
    { name: "Senior", remaining: seniorRemaining, lost: seniorUsd - seniorRemaining },
    ...(hasMezzanine
      ? [{ name: "Mezzanine", remaining: mezzanineRemaining, lost: mezzanineUsd - mezzanineRemaining }]
      : []),
    { name: "Junior", remaining: juniorRemaining, lost: juniorUsd - juniorRemaining },
  ];

  return (
    <div className="rounded-md border border-line bg-white p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 text-xs text-muted">
        <span>
          Pool <span className="font-medium text-foreground">{formatUsd(poolUsd)}</span>
        </span>
        <span>
          Senior <span className="font-medium text-foreground">{formatUsd(seniorUsd)}</span>
        </span>
        {hasMezzanine && (
          <span>
            Mezzanine <span className="font-medium text-foreground">{formatUsd(mezzanineUsd)}</span>
          </span>
        )}
        <span>
          Junior <span className="font-medium text-foreground">{formatUsd(juniorUsd)}</span>
        </span>
      </div>

      <div className="mt-4">
        <label htmlFor="loss-slider" className="flex items-baseline justify-between text-xs text-muted">
          <span>Loss amount</span>
          <span className="text-sm font-semibold text-foreground">{formatUsd(loss)}</span>
        </label>
        <input
          id="loss-slider"
          type="range"
          min={0}
          max={maxLossUsd}
          step={1_000_000}
          value={loss}
          onChange={(event) => setLoss(Number(event.target.value))}
          className="mt-2 w-full accent-[#4f46e5]"
        />
      </div>

      <div className="mt-4 h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={chartMargin} barCategoryGap="30%">
            <CartesianGrid vertical={false} stroke={chartColors.line} />
            <XAxis dataKey="name" tickLine={false} axisLine={{ stroke: chartColors.line }} tick={axisTickStyle} />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={axisTickStyle}
              tickFormatter={(value: number) => formatUsd(value) ?? String(value)}
              width={56}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              content={<MinimalTooltip formatValue={(v) => formatUsd(Number(v)) ?? String(v)} />}
            />
            <Bar dataKey="remaining" name="Remaining" stackId="a" fill={chartColors.accent} radius={[0, 0, 0, 0]} />
            <Bar dataKey="lost" name="Lost" stackId="a" fill={chartColors.dangerSoft} radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted">
        <span className="flex items-center gap-1.5">
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: chartColors.accent }} />
          Remaining value
        </span>
        <span className="flex items-center gap-1.5">
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: chartColors.dangerSoft }} />
          Absorbed loss
        </span>
      </div>
    </div>
  );
}
