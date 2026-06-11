"use client";

import { useResume } from "../hooks/use-resume";


import { ErrorState } from "@/shared/components/error-state";

import { ResumeHeader } from "./resume-header";
import { SkillsSection } from "./skills-section";
import { Loader } from "@/shared/components/Loader";
import { ProjectsSection } from "./project-section";

export function ResumeOverview() {

  const {
    data,
    isLoading,
    isError,
  } = useResume();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <ErrorState />
    );
  }

  const resume =
    data?.data;

  return (
    <div className="space-y-6 border-[#1E2D45] bg-emerald-900/20 p-6 rounded-xl">

      <ResumeHeader
        fileName={resume.fileName}
        experienceYears={
          resume.experienceYears
        }
      />

      <ProjectsSection
        projects={
          resume.projects
        }
      />

      <SkillsSection
        skills={
          resume.skills
        }
      />

    </div>
  );
}