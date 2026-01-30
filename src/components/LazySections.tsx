"use client";

import dynamic from "next/dynamic";

const ProjectsGrid = dynamic(
  () => import("@/components/ProjectsGrid").then((mod) => mod.ProjectsGrid),
  { ssr: false },
);

export function LazyProjectsGrid() {
  return <ProjectsGrid />;
}
