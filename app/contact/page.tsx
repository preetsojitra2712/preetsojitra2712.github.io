import Link from "next/link";
import { profile } from "@/data/profile";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
            Contact
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">
            Let’s connect
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Open to early career software engineering and ML engineering roles.
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
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
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
    </main>
  );
}
