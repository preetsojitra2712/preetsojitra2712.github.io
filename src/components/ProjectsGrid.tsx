"use client";

import { useMemo, useState } from "react";
import { profile } from "@/data/profile";
import { TagChips } from "@/components/TagChips";
import { ProjectCard } from "@/components/ProjectCard";
import { Modal } from "@/components/Modal";
import { MiniDiagram } from "@/components/MiniDiagram";

type ProjectsGridProps = {
  limit?: number;
};

const allTag = "All";

export function ProjectsGrid({ limit }: ProjectsGridProps) {
  const tags = useMemo(
    () => [allTag, ...new Set(profile.projects.map((p) => p.category))],
    [],
  );
  const [active, setActive] = useState(allTag);
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = profile.projects.filter((project) =>
    active === allTag ? true : project.category === active,
  );
  const visible = limit ? filtered.slice(0, limit) : filtered;
  const activeProject = profile.projects.find((p) => p.id === openId);

  return (
    <div>
      <TagChips tags={tags} active={active} onChange={setActive} />
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            summary={project.summary}
            category={project.category}
            metrics={project.metrics}
            onOpen={() => setOpenId(project.id)}
          />
        ))}
      </div>
      {activeProject ? (
        <Modal
          open={Boolean(activeProject)}
          onClose={() => setOpenId(null)}
          title={activeProject.title}
        >
          <div className="space-y-6 text-sm text-white/70">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
                Problem
              </p>
              <p className="mt-2">{activeProject.problem}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
                Approach
              </p>
              <p className="mt-2">{activeProject.approach}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
                Outcome
              </p>
              <p className="mt-2">{activeProject.outcome}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
                Architecture highlights
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                {activeProject.architecture.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <MiniDiagram steps={activeProject.diagram} />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
                Metrics
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {activeProject.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-full border border-white/10 px-2 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
                Tech stack
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {activeProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-2 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
                Learning and next steps
              </p>
              <p className="mt-2">{activeProject.learning}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {activeProject.learningPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
