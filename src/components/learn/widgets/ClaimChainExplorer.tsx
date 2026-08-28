"use client";

import { useState } from "react";

type Instrument = {
  id: string;
  name: string;
  holds: string;
  backedBy: string;
  legalOwner: string;
  legalClaimHolder: string;
  cashFlowMechanism: string;
  exitMechanism: string;
  legalClaimAnswer: string;
};

type ClaimChainExplorerProps = {
  instruments: Instrument[];
};

const QUESTIONS: { key: keyof Instrument; label: string }[] = [
  { key: "holds", label: "What does the investor hold?" },
  { key: "backedBy", label: "What asset backs it?" },
  { key: "legalOwner", label: "Who owns the underlying loan?" },
  { key: "legalClaimHolder", label: "Who has the legal claim?" },
  { key: "cashFlowMechanism", label: "How does the investor receive cash flows?" },
  { key: "exitMechanism", label: "How can the investor exit?" },
];

export function ClaimChainExplorer({ instruments }: ClaimChainExplorerProps) {
  const [selectedId, setSelectedId] = useState(instruments[0]?.id ?? null);
  const [revealed, setRevealed] = useState(false);
  const instrument = instruments.find((item) => item.id === selectedId) ?? null;

  return (
    <div className="space-y-4">
      <div className="rounded-md border border-line bg-white p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
          Choose an instrument
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {instruments.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setSelectedId(item.id);
                setRevealed(false);
              }}
              aria-pressed={selectedId === item.id}
              className={`rounded-md border px-3 py-1.5 text-xs font-medium transition-colors ${
                selectedId === item.id
                  ? "border-accent bg-accent/[0.06] text-foreground"
                  : "border-line text-muted hover:border-accent/50"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {instrument && (
          <dl className="mt-4 space-y-3 border-t border-line pt-4">
            {QUESTIONS.map(({ key, label }) => (
              <div key={key}>
                <dt className="text-xs font-medium text-zinc-400">{label}</dt>
                <dd className="mt-0.5 text-sm leading-6 text-foreground">{instrument[key]}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      {instrument && (
        <div className="rounded-md border border-amber-300 bg-amber-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-amber-900">
            The Legal Claim Test
          </p>
          <p className="mt-1.5 text-sm leading-6 text-amber-900">
            If the borrower defaults, who can legally pursue the borrower or the collateral?
          </p>
          {revealed ? (
            <p className="mt-3 border-t border-amber-200 pt-3 text-sm leading-6 text-amber-900">
              {instrument.legalClaimAnswer}
            </p>
          ) : (
            <button
              type="button"
              onClick={() => setRevealed(true)}
              className="mt-3 rounded-md border border-amber-400 bg-white px-3 py-1.5 text-xs font-medium text-amber-900 transition-colors hover:border-amber-500"
            >
              Reveal the answer for {instrument.name}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
