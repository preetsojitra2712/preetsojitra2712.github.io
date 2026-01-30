import { profile } from "@/data/profile";

export function MetricRow() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">
        Project highlights
      </p>
      <ul className="mt-3 space-y-2 text-sm text-white/70">
        {profile.metrics.map((metric) => (
          <li key={metric.label} className="flex flex-wrap gap-2">
            <span className="text-white">{metric.label}:</span>
            <span>{metric.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
