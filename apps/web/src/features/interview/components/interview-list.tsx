"use client";

import Link from "next/link";

import { Eye, Trash2, Briefcase, Clock3 } from "lucide-react";

import { useInterviews } from "../hooks/use-interviews";

import { Loader } from "@/shared/components/Loader";
import { EmptyState } from "@/shared/components/empty-state";

export function InterviewList() {
  const { data, isLoading } = useInterviews();

  if (isLoading) {
    return <Loader />;
  }

  const interviews = data?.data ?? [];

  if (interviews.length === 0) {
    return (
      <EmptyState
        title="No Interviews"
        description="Start your first interview."
      />
    );
  }

  return (
    <div
      className="
      rounded-2xl
      border
      border-zinc-800
      bg-zinc-950
      overflow-hidden
      "
    >
      {/* Header */}

      <div
        className="
        flex
        items-center
        justify-between
        px-5
        py-4
        border-b
        border-zinc-800
        "
      >
        <div>
          <h2 className="font-semibold">Interview History</h2>

          <p className="text-sm text-zinc-500">Recent interview sessions</p>
        </div>

        <div
          className="
          rounded-full
          border
          border-zinc-800
          px-3
          py-1
          text-xs
          text-zinc-400
          "
        >
          {interviews.length} Total
        </div>
      </div>

      {/* List */}

      <div>
        {interviews.map((interview: any) => (
          <div
            key={interview._id}
            className="
              group
              flex
              items-center
              justify-between
              px-5
              py-4
              border-b
              border-zinc-800
              last:border-b-0
              hover:bg-zinc-900/50
              transition-colors
              "
          >
            {/* Left */}

            <div
              className="
                flex
                items-center
                gap-4
                "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  bg-violet-500/10
                  "
              >
                <Briefcase
                  size={18}
                  className="
                    text-violet-400
                    "
                />
              </div>

              <div>
                <h3 className="font-medium">{interview.role}</h3>

                <div
                  className="
                    mt-1
                    flex
                    items-center
                    gap-2
                    "
                >
                  <Clock3
                    size={12}
                    className="
                      text-zinc-500
                      "
                  />

                  <span
                    className="
                      text-xs
                      text-zinc-500
                      capitalize
                      "
                  >
                    {interview.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Right */}

            <div
              className="
                flex
                items-center
                gap-2
                "
            >
              <Link
                href={`/interview/${interview._id}`}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-zinc-800
                  px-3
                  py-2
                  text-sm
                  hover:bg-zinc-900
                  "
              >
                <Eye size={15} />
                View
              </Link>

              <button
                className="
                  flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-red-500/20
                  px-3
                  py-2
                  text-sm
                  text-red-400
                  hover:bg-red-500/10
                  "
              >
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
