import { profile } from "@/data/profile";
import { Card } from "@/components/Card";

export function ResumeSnapshot() {
  return (
    <Card>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
            Education
          </p>
          <div className="mt-3 space-y-4 text-sm text-white/70">
            {profile.education.map((edu) => (
              <div key={edu.degree}>
                <p className="font-semibold text-white">{edu.degree}</p>
                <p>{edu.school}</p>
                <p className="text-white/50">
                  GPA {edu.gpa} • {edu.graduation}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
            Skills
          </p>
          <div className="mt-3 space-y-3 text-sm text-white/70">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                Languages
              </p>
              <p className="mt-2">{profile.skills.languages.join(", ")}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                Frameworks
              </p>
              <p className="mt-2">{profile.skills.frameworks.join(", ")}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                Platforms
              </p>
              <p className="mt-2">{profile.skills.platforms.join(", ")}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
