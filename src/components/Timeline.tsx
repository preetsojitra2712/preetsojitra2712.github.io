import { profile } from "@/data/profile";

export function Timeline() {
  return (
    <div className="space-y-6">
      {profile.experience.map((item) => (
        <div
          key={item.company}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">
                {item.company}
              </h3>
              <p className="text-sm text-white/60">{item.role}</p>
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
              {item.period}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            <span className="text-white/50">Worked on: </span>
            {item.built}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            <span className="text-white/50">Problem: </span>
            {item.problem}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.impact.map((impact) => (
              <span
                key={impact}
                className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60"
              >
                {impact}
              </span>
            ))}
          </div>
          <details className="group mt-4">
            <summary className="cursor-pointer text-sm font-medium text-cyan-200/80 transition group-open:text-cyan-200">
              View deeper highlights
            </summary>
            <div className="mt-3 space-y-2 text-sm text-white/65">
              <ul className="list-disc pl-5">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                Tech stack
              </p>
              <div className="flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-2 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </details>
        </div>
      ))}
    </div>
  );
}
