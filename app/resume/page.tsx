import Link from "next/link";
import { ResumeSnapshot } from "@/components/ResumeSnapshot";

export default function ResumePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
            Resume
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">
            Education and skills
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            A concise snapshot of education and technical skills.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-white/70">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
            Quick navigation
          </p>
          <p className="mt-3 text-sm text-white/60">
            Return to{" "}
            <Link
              href="/"
              className="text-cyan-200/80 transition hover:text-cyan-200"
            >
              the home page
            </Link>{" "}
            for a full overview.
          </p>
        </div>
      </div>
      <div className="mt-10 space-y-6">
        <ResumeSnapshot />
        <a
          href="https://drive.google.com/file/d/1P1UjMEfRohqo-eNWJE7ACPRDB3nzxBOv/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
        >
          View resume PDF
        </a>
      </div>
    </main>
  );
}
