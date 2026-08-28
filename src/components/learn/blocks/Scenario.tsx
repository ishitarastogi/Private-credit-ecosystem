type ScenarioProps = {
  title: string;
  setup: string;
  walkthrough: string[];
  lesson: string;
};

export function Scenario({ title, setup, walkthrough, lesson }: ScenarioProps) {
  return (
    <div className="rounded-md border border-line bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
        Scenario
      </p>
      <h4 className="mt-1.5 text-sm font-semibold text-foreground">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-muted">{setup}</p>
      <ol className="mt-3 space-y-1.5 border-l border-line pl-4">
        {walkthrough.map((step, index) => (
          <li key={step} className="text-sm leading-6 text-muted">
            <span className="text-zinc-400">{index + 1}.</span> {step}
          </li>
        ))}
      </ol>
      <p className="mt-3 border-t border-line pt-3 text-sm leading-6 text-foreground">
        {lesson}
      </p>
    </div>
  );
}
