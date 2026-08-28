"use client";

import { useMemo, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { axisTickStyle, chartColors, chartMargin } from "@/components/learn/charts/ChartTheme";
import { MinimalTooltip } from "@/components/learn/charts/MinimalTooltip";
import { formatUsd } from "@/lib/utils";

type LltvSimulatorProps = {
  collateralUsd: number;
  initialLltv: number;
  initialNav: number;
};

export function LltvSimulator({ collateralUsd, initialLltv, initialNav }: LltvSimulatorProps) {
  const [nav, setNav] = useState(initialNav);
  const [lltv, setLltv] = useState(initialLltv);
  const [debt, setDebt] = useState(Math.round(collateralUsd * (initialLltv / 100) * 0.93));

  const { collateralValue, maxDebt, isLiquidatable } = useMemo(() => {
    const value = collateralUsd * (nav / initialNav);
    const max = value * (lltv / 100);
    return { collateralValue: value, maxDebt: max, isLiquidatable: debt > max };
  }, [collateralUsd, nav, initialNav, lltv, debt]);

  const data = [{ name: "Position", debt, maxDebt }];

  return (
    <div className="rounded-md border border-line bg-white p-5">
      <div className="grid grid-cols-3 gap-4 text-center">
        <Stat label="Collateral value" value={formatUsd(collateralValue)} />
        <Stat label="Liquidation threshold" value={formatUsd(maxDebt)} />
        <Stat label="Debt" value={formatUsd(debt)} danger={isLiquidatable} />
      </div>

      <div className="mt-4 h-40">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={chartMargin} barCategoryGap="40%">
            <CartesianGrid horizontal={false} stroke={chartColors.line} />
            <XAxis
              type="number"
              tickLine={false}
              axisLine={{ stroke: chartColors.line }}
              tick={axisTickStyle}
              tickFormatter={(value: number) => formatUsd(value) ?? String(value)}
            />
            <YAxis type="category" dataKey="name" hide />
            <Tooltip
              cursor={{ fill: "transparent" }}
              content={<MinimalTooltip formatValue={(v) => formatUsd(Number(v)) ?? String(v)} />}
            />
            <Bar
              dataKey="maxDebt"
              name="Liquidation threshold"
              fill={chartColors.accentSoft}
              radius={[0, 3, 3, 0]}
              barSize={28}
            />
            <Bar
              dataKey="debt"
              name="Debt"
              fill={isLiquidatable ? chartColors.danger : chartColors.accent}
              radius={[0, 3, 3, 0]}
              barSize={12}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 space-y-3">
        <Slider label="NAV" value={nav} min={initialNav * 0.7} max={initialNav * 1.05} step={0.5} unit="" onChange={setNav} />
        <Slider label="LLTV" value={lltv} min={50} max={97} step={0.5} unit="%" onChange={setLltv} />
        <Slider label="Debt" value={debt} min={0} max={collateralUsd} step={0.5} unit="" prefix="$" onChange={setDebt} />
      </div>

      {isLiquidatable && (
        <p className="mt-4 rounded-md border border-amber-300 bg-amber-50 p-3 text-xs leading-5 text-amber-900">
          Debt now exceeds the liquidation threshold — this position is eligible for liquidation.
        </p>
      )}
    </div>
  );
}

function Stat({ label, value, danger }: { label: string; value: string | undefined; danger?: boolean }) {
  return (
    <div>
      <p className={`text-lg font-semibold ${danger ? "text-amber-700" : "text-foreground"}`}>{value}</p>
      <p className="mt-0.5 text-[11px] uppercase tracking-wide text-muted">{label}</p>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  unit,
  prefix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  prefix?: string;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between text-xs text-muted">
        <span>{label}</span>
        <span className="text-sm font-semibold text-foreground">
          {prefix ?? ""}
          {value.toFixed(unit === "%" ? 1 : 0)}
          {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-1.5 w-full accent-[#4f46e5]"
      />
    </div>
  );
}
