import Link from "next/link";
import { profile } from "@/data/profile";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";
import { PipelineDiagram } from "@/components/PipelineDiagram";
import { ResumeSnapshot } from "@/components/ResumeSnapshot";
import { ContactForm } from "@/components/ContactForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroVisual } from "@/components/HeroVisual";
import { LazyProjectsGrid } from "@/components/LazySections";
import { ProfilePortrait } from "@/components/ProfilePortrait";
import { MetricRow } from "@/components/MetricRow";

export default function Home() {
  return (
    <main className="relative" id="home">
      <section className="mx-auto w-full max-w-6xl px-6 pb-12 pt-16 sm:pt-20">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-7">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
                {profile.location}
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-4 text-lg text-white/80">
                {profile.headline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                {profile.subheading}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/50">
                Target roles: Software Engineer, Machine Learning Engineer
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
                >
                  View Projects
                </Link>
                <a
                  href={profile.links.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
                >
                  View Resume
                </a>
                <Link
                  href="#contact"
                  className="text-sm text-cyan-200/80 transition hover:text-cyan-200"
                >
                  Contact me →
                </Link>
              </div>
            </ScrollReveal>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="space-y-4">
              <ProfilePortrait />
              <HeroVisual />
              <MetricRow />
            </div>
          </div>
        </div>
      </section>

      <Section
        id="about"
        eyebrow="About"
        title="Systems thinking through hands-on work"
        description="Focused on correctness, reliability, and clear outcomes."
      >
        <ScrollReveal>
          <div className="space-y-4 text-sm text-white/70">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      <Section
        id="work"
        eyebrow="Work"
        title="Experience and outcomes"
        description="Early career roles across research, open source, and product teams."
      >
        <ScrollReveal>
          <Timeline />
        </ScrollReveal>
      </Section>

      <Section
        id="projects"
        eyebrow="Projects"
        title="Project work and outcomes"
        description="Agentic workflows, search, cloud reliability, and streaming systems."
      >
        <ScrollReveal>
          <LazyProjectsGrid />
        </ScrollReveal>
      </Section>

      <Section
        id="research"
        eyebrow="Research"
        title="Research and evaluation"
        description="Method-driven evaluation and analysis of ML systems."
      >
        <ScrollReveal>
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
                Themes
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.research.themes.map((theme) => (
                  <span
                    key={theme}
                    className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60"
                  >
                    {theme}
                  </span>
                ))}
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
                {profile.research.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
            <PipelineDiagram />
          </div>
        </ScrollReveal>
      </Section>

      <Section
        id="resume"
        eyebrow="Resume"
        title="Snapshot of experience and skills"
        description="A clean, recruiter-friendly overview with a downloadable PDF."
      >
        <ScrollReveal>
          <div className="space-y-6">
            <ResumeSnapshot />
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
            >
              View resume PDF
            </a>
          </div>
        </ScrollReveal>
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="Get in touch"
        description="Reach out for early career roles or collaborations."
      >
        <ScrollReveal>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-white/70">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
                  Email
                </p>
                <p className="mt-2">{profile.emails[0].value}</p>
                <p>{profile.emails[1].value}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
                  Phone
                </p>
                <p className="mt-2">{profile.phone}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
                  Links
                </p>
                <div className="mt-2 space-y-1">
                  <a
                    href={profile.links.linkedin}
                    className="block text-cyan-200/80 transition hover:text-cyan-200"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={profile.links.github}
                    className="block text-cyan-200/80 transition hover:text-cyan-200"
                  >
                    GitHub
                  </a>
                  <span className="block text-white/40">
                    {profile.links.portfolio}
                  </span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </ScrollReveal>
      </Section>
    </main>
  );
}
