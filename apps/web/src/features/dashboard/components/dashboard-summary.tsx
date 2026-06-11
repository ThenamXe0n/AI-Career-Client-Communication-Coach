"use client";

import {
  Briefcase,
  FolderGit2,
  Mail,
  Sparkles,
} from "lucide-react";

import { Loader } from "@/shared/components/Loader";
import { EmptyState } from "@/shared/components/empty-state";
import { useDashboard } from "../hooks/use-dashboard";
import { useAuth } from "@/shared/hooks/use-auth";

export function DashboardSummary() {
  const { user } = useAuth();
  const { resumeQuery } = useDashboard();

  if (resumeQuery.isLoading) {
    return <Loader />;
  }

  const resume = resumeQuery.data?.data;

  if (!resume) {
    return (
      <EmptyState
        title="No Resume Found"
        description="Upload your resume to begin."
      />
    );
  }

  const stats = [
    {
      label: "Experience",
      value: `${resume.experienceYears}y`,
      icon: Briefcase,
    },
    {
      label: "Skills",
      value: resume.skills?.length ?? 0,
      icon: Sparkles,
    },
    {
      label: "Projects",
      value: resume.projects?.length ?? 0,
      icon: FolderGit2,
    },
  ];

  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-2xl
      border
      border-zinc-800
      bg-zinc-950
      p-5
      "
    >
      {/* Accent */}
      <div
        className="
        absolute
        inset-x-0
        top-0
        h-[2px]
        bg-gradient-to-r
        from-violet-500
        via-blue-500
        to-cyan-500
        "
      />

      {/* Header */}
      <div className="flex items-center gap-4">
        <div
          className="
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-gradient-to-br
          from-violet-600
          to-blue-600
          text-lg
          font-semibold
          text-white
          shadow-lg
          shadow-violet-900/30
          "
        >
          {user?.name?.charAt(0)?.toUpperCase() ?? "U"}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="truncate text-lg font-semibold">
            {user?.name}
          </h2>

          <div className="mt-1 flex items-center gap-2 text-sm text-zinc-400">
            <Mail size={14} />
            <span className="truncate">
              {user?.email}
            </span>
          </div>
        </div>

        <div
          className="
          hidden
          sm:flex
          items-center
          gap-2
          rounded-full
          border
          border-emerald-500/20
          bg-emerald-500/10
          px-3
          py-1
          "
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400" />

          <span className="text-xs font-medium text-emerald-400">
            Active
          </span>
        </div>
      </div>

      {/* Resume Summary */}
      <div
        className="
        mt-5
        rounded-xl
        border
        border-zinc-800
        bg-zinc-900/50
        p-4
        "
      >
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Resume Overview
            </p>

            <p className="mt-1 text-sm text-zinc-400">
              Professional Snapshot
            </p>
          </div>

          <div
            className="
            rounded-lg
            bg-violet-500/10
            px-2.5
            py-1
            text-xs
            font-medium
            text-violet-400
            "
          >
            Ready
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="
                rounded-lg
                border
                border-zinc-800
                bg-zinc-950/70
                p-3
                "
              >
                <div className="flex items-center justify-between">
                  <Icon
                    size={15}
                    className="text-zinc-500"
                  />

                  <span className="text-lg font-semibold">
                    {stat.value}
                  </span>
                </div>

                <p className="mt-3 text-xs text-zinc-500">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}