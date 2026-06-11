"use client";

import { useResume }
from "@/features/resume/hooks/use-resume";

export const useDashboard =
  () => {

    const resumeQuery =
      useResume();

    return {
      resumeQuery,
    };

  };