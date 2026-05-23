"use client";

import { useMemo, useState } from "react";

type RangeFieldProps = {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  unit?: string;
  onChange: (value: number) => void;
  formatter?: (value: number) => string;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function RangeField({
  label,
  min,
  max,
  step,
  value,
  unit,
  onChange,
  formatter = (nextValue) => nextValue.toLocaleString("en-IN"),
}: RangeFieldProps) {
  const fill = `${((value - min) / (max - min)) * 100}%`;

  return (
    <label className="grid gap-3 text-sm font-medium text-slate-700">
      <div className="flex items-center justify-between gap-4">
        <span className="min-w-0">{label}</span>
        <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {unit ? `${unit}${formatter(value)}` : formatter(value)}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        onInput={(event) =>
          onChange(Number((event.target as HTMLInputElement).value))
        }
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[var(--color-secondary)]"
        style={{
          background: `linear-gradient(to right, var(--color-secondary) 0%, var(--color-secondary) ${fill}, rgb(226 232 240) ${fill}, rgb(226 232 240) 100%)`,
        }}
      />

      <input
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) =>
          onChange(clamp(Number(event.target.value || min), min, max))
        }
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[var(--color-secondary)]"
      />
    </label>
  );
}

export function RoiCalculator() {
  const [monthlyTraffic, setMonthlyTraffic] = useState(10000);
  const [conversionRate, setConversionRate] = useState(2);
  const [averageDeal, setAverageDeal] = useState(25000);

  const projection = useMemo(() => {
    const currentLeads = monthlyTraffic * (conversionRate / 100);
    const improvedRate = conversionRate + 0.8;
    const improvedLeads = monthlyTraffic * (improvedRate / 100);
    const additionalLeads = improvedLeads - currentLeads;
    const revenueLift = additionalLeads * averageDeal;

    return {
      currentLeads: Math.round(currentLeads),
      improvedLeads: Math.round(improvedLeads),
      revenueLift: Math.round(revenueLift),
      improvedRate,
    };
  }, [averageDeal, conversionRate, monthlyTraffic]);

  return (
    <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:grid-cols-[1fr_0.9fr] lg:p-8">
      <div>
        <h3 className="text-2xl font-bold tracking-tight text-slate-950">
          Quick ROI calculator
        </h3>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Estimate how a stronger conversion system can impact pipeline.
        </p>

        <div className="mt-6 grid gap-5">
          <RangeField
            label="Monthly website visitors"
            min={1000}
            max={50000}
            step={500}
            value={monthlyTraffic}
            onChange={setMonthlyTraffic}
          />

          <RangeField
            label="Current conversion rate (%)"
            min={1}
            max={10}
            step={0.5}
            value={conversionRate}
            formatter={(value) => `${value}%`}
            onChange={setConversionRate}
          />

          <RangeField
            label="Average customer value"
            min={5000}
            max={100000}
            step={2500}
            value={averageDeal}
            unit="Rs "
            onChange={setAverageDeal}
          />
        </div>
      </div>

      <div className="rounded-[1.75rem] bg-[linear-gradient(160deg,#03345f,#0477BF)] p-6 text-white">
        <p className="text-sm uppercase tracking-[0.3em] text-white/70">Estimated upside</p>
        <div className="mt-6 grid gap-5">
          <div>
            <p className="text-sm text-white/70">Current monthly leads</p>
            <p className="mt-1 whitespace-nowrap text-3xl font-bold tabular-nums">
              {projection.currentLeads}
            </p>
          </div>
          <div>
            <p className="text-sm text-white/70">
              Projected monthly leads at {projection.improvedRate.toFixed(1)}%
            </p>
            <p className="mt-1 whitespace-nowrap text-3xl font-bold tabular-nums">
              {projection.improvedLeads}
            </p>
          </div>
          <div>
            <p className="text-sm text-white/70">Potential monthly revenue lift</p>
            <p className="mt-1 whitespace-nowrap text-[2rem] font-bold leading-none tabular-nums sm:text-4xl">
              Rs {projection.revenueLift.toLocaleString("en-IN")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
