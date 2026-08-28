"use client";

import { useState } from "react";

type CreditCheckToolProps = {
  questions: { id: string; question: string; guidance: string }[];
};

export function CreditCheckTool({ questions }: CreditCheckToolProps) {
  const [expandedId, setExpandedId] = useState<string | null>(questions[0]?.id ?? null);
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggleChecked = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="rounded-md border border-line bg-white">
      <div className="flex items-center justify-between px-5 py-3.5 text-xs text-muted">
        <span>{checked.size} of {questions.length} checked</span>
      </div>
      <div className="divide-y divide-line border-t border-line">
        {questions.map((item, index) => {
          const isExpanded = expandedId === item.id;
          const isChecked = checked.has(item.id);

          return (
            <div key={item.id} className="px-5 py-3.5">
              <div className="flex items-start gap-3">
                <button
                  type="button"
                  onClick={() => toggleChecked(item.id)}
                  aria-pressed={isChecked}
                  aria-label={`Mark question ${index + 1} checked`}
                  className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                    isChecked ? "border-accent bg-accent text-background" : "border-line"
                  }`}
                >
                  {isChecked && (
                    <span aria-hidden="true" className="text-[10px] leading-none">
                      ✓
                    </span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className="flex-1 text-left"
                >
                  <p className="text-sm font-medium text-foreground">
                    {index + 1}. {item.question}
                  </p>
                  {isExpanded && (
                    <p className="mt-1.5 text-sm leading-6 text-muted">{item.guidance}</p>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
