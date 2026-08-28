"use client";

import { useMemo, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { axisTickStyle, chartColors, chartMargin } from "@/components/learn/charts/ChartTheme";
import { MinimalTooltip } from "@/components/learn/charts/MinimalTooltip";

type NavVsLiquidityChartProps = {
  navPrice: number;
  marketPrice: number;
  liquidationValue: number;
};

const formatPrice = (value: number) => `$${value.toFixed(2)}`;

export function NavVsLiquidityChart({
  navPrice,
  marketPrice,
  liquidationValue,
}: NavVsLiquidityChartProps) {
  const [stress, setStress] = useState(0);

  const { currentMarket, currentLiquidation } = useMemo(() => {
    const scale = 1 + stress / 50;
    const marketGap = (navPrice - marketPrice) * scale;
    const liquidationGap = (navPrice - liquidationValue) * scale;
    return {
      currentMarket: Math.max(0, navPrice - marketGap),
      currentLiquidation: Math.max(0, navPrice - liquidationGap),
    };
  }, [navPrice, marketPrice, liquidationValue, stress]);

  const data = [
    { name: "NAV", value: navPrice },
    { name: "Market price", value: currentMarket },
    { name: "Liquidation value", value: currentLiquidation },
  ];

  return (
    <div className="rounded-md border border-line bg-white p-5">
      <div className="h-44">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={chartMargin} barCategoryGap="25%">
            <CartesianGrid vertical={false} stroke={chartColors.line} />
            <XAxis dataKey="name" tickLine={false} axisLine={{ stroke: chartColors.line }} tick={axisTickStyle} />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={axisTickStyle}
              tickFormatter={(value: number) => formatPrice(value)}
              width={48}
            />
            <Tooltip cursor={{ fill: "transparent" }} content={<MinimalTooltip formatValue={(v) => formatPrice(Number(v))} />} />
            <Bar dataKey="value" name="Price" radius={[3, 3, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={[chartColors.accent, chartColors.accentSoft, chartColors.dangerSoft][index]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4">
        <label htmlFor="stress-slider" className="flex items-baseline justify-between text-xs text-muted">
          <span>Market stress</span>
          <span className="text-sm font-semibold text-foreground">{stress}%</span>
        </label>
        <input
          id="stress-slider"
          type="range"
          min={0}
          max={100}
          step={5}
          value={stress}
          onChange={(event) => setStress(Number(event.target.value))}
          className="mt-1.5 w-full accent-[#4f46e5]"
        />
      </div>

      <p className="mt-3 text-xs leading-5 text-muted">
        As stress increases, the gap between NAV, market price, and realizable liquidation value widens —
        the mark you see is not always the price you&rsquo;d actually get.
      </p>
    </div>
  );
}
