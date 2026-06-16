"use client";

import { useResume } from "../hooks/use-resume";


import { ErrorState } from "@/shared/components/error-state";

import { ResumeHeader } from "./resume-header";
import { SkillsSection } from "./skills-section";
import { Loader } from "@/shared/components/Loader";
import { ProjectsSection } from "./project-section";
import ResumeUploadForm from "./resume-upload-form";
import { EyeOff, ScanSearchIcon, UploadIcon } from "lucide-react";
import { useState } from "react";
import { AxiosError } from "axios";
import { useAnalyseResume } from "../hooks/use-analyse-resume";

export function ResumeOverview() {
  const [openForm, setOpenForm] = useState<boolean>(false)
  const { mutate, isPending } = useAnalyseResume()


  function handleAnalyseResume() {
    mutate()
  }

  const {
    data,
    isLoading,
    isError,
    error
  } = useResume();
  const ErrorResponse = (error as AxiosError)?.response
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <>
        {!openForm ? <button onClick={() => setOpenForm(true)} className="rounded-md px-3 py-2 flex border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black hover:scale-90 active:scale-75 cursor-pointer duration-150 items-centers gap-4 border"> <UploadIcon /> Upload resume</button>
          : <button onClick={() => setOpenForm(false)} className="rounded-md px-3 py-2 flex border-red-400 text-red-400 hover:bg-red-400 hover:text-black hover:scale-90 active:scale-75 cursor-pointer duration-150 items-centers gap-4 border"> <EyeOff /> Hide Form</button>}

        {openForm && <ResumeUploadForm formClose={() => setOpenForm(false)} />}


        <ErrorState message={ErrorResponse?.data?.message} />

      </>
    );
  }

  const resume =
    data?.data;
  console.log(resume)

  return (
    <div className="space-y-6 border-[#1E2D45] bg-emerald-900/20 p-6 rounded-xl">
      {!openForm ? <button onClick={() => setOpenForm(true)} className="rounded-md px-3 py-2 flex border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black hover:scale-90 active:scale-75 cursor-pointer duration-150 items-centers gap-4 border"> <UploadIcon /> Upload resume</button>
        : <button onClick={() => setOpenForm(false)} className="rounded-md px-3 py-2 flex border-red-400 text-red-400 hover:bg-red-400 hover:text-black hover:scale-90 active:scale-75 cursor-pointer duration-150 items-centers gap-4 border"> <EyeOff /> Hide Form</button>}

      {openForm && <ResumeUploadForm formClose={() => setOpenForm(false)} />}

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

      <button
        onClick={handleAnalyseResume}

        className={`flex-1 flex items-center justify-center gap-1 gap-2.5 text-[16px] py-1.5 px-4 rounded-lg bg-white/5 border active:scale-90 duration-100 hover:bg-emerald-700 hover:text-white cursor-pointer border-white/10 text-yellow-300/40 transition-all `}
      >
        <ScanSearchIcon /> Analyse Resume
      </button>

      <SkillsSection
        skills={
          resume.skills
        }
      />

    </div>
  );
}