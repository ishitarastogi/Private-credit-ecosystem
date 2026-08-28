"use client";

import { useState } from "react";

type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
};

type QuizProps = {
  questions: QuizQuestion[];
};

export function Quiz({ questions }: QuizProps) {
  const [answers, setAnswers] = useState<Record<string, number>>({});

  return (
    <div className="rounded-md border border-line bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
        Test yourself
      </p>
      <div className="mt-4 space-y-6">
        {questions.map((q, qIndex) => {
          const selected = answers[q.id];
          const isAnswered = selected !== undefined;

          return (
            <div key={q.id}>
              <p className="text-sm font-medium text-foreground">
                {qIndex + 1}. {q.question}
              </p>
              <div className="mt-2.5 space-y-1.5">
                {q.options.map((option, optionIndex) => {
                  const isSelected = selected === optionIndex;
                  const isCorrect = optionIndex === q.correctIndex;

                  let stateClass = "border-line hover:border-accent/50";
                  if (isAnswered && isCorrect) {
                    stateClass = "border-accent bg-accent/[0.06] text-foreground";
                  } else if (isAnswered && isSelected && !isCorrect) {
                    stateClass = "border-amber-300 bg-amber-50 text-amber-900";
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={isAnswered}
                      onClick={() =>
                        setAnswers((prev) => ({ ...prev, [q.id]: optionIndex }))
                      }
                      className={`block w-full rounded-md border px-3 py-2 text-left text-sm transition-colors disabled:cursor-default ${stateClass}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {isAnswered && q.explanation && (
                <p className="mt-2 text-xs leading-5 text-muted">{q.explanation}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
