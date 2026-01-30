import { profile } from "@/data/profile";

export function PipelineDiagram() {
  const steps = profile.research.pipeline;
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
        Bias evaluation pipeline
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70"
          >
            <span>{step}</span>
            {index < steps.length - 1 ? (
              <span className="text-white/30">→</span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
