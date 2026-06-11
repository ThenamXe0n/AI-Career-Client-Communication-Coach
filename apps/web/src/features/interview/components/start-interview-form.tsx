"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
    Briefcase,
    ChevronDown,
    Mic,
    X,
} from "lucide-react";

import { interviewModes } from "../constants/interview-modes";
import { useStartInterview } from "../hooks/use-start-interview";

interface Props {
    onClose: () => void;
}

export function StartInterviewForm({ onClose }: Props) {
    const router = useRouter();

    const startInterviewMutation =
        useStartInterview();

    const [role, setRole] =
        useState("MERN Developer");

    const [mode, setMode] =
        useState("technical");

    const handleStart = async () => {
        const response =
            await startInterviewMutation.mutateAsync({
                role,
                mode,
            });

        const interviewId =
            response.data.interview._id;

        router.push(
            `/interview/${interviewId}`
        );
    };

    return (
        <div
            className="
      rounded-2xl
      border
      border-zinc-800
      bg-zinc-950
      p-6
      "
        >
            <div className="mb-6 flex items-center">
                <div className="flex-1">
                    <h2 className="text-xl font-semibold">
                        Start Interview
                    </h2>

                    <p className="mt-1 text-sm text-zinc-500">
                        Configure your interview session
                    </p>
                </div>
                <div onClick={onClose} className="bg-red-500/20 text-white p-2 rounded-lg"><X /></div>
            </div>

            <div className="space-y-5">
                {/* Role */}
                <div>
                    <label
                        className="
            mb-2
            flex
            items-center
            gap-2
            text-sm
            font-medium
            text-zinc-300
            "
                    >
                        <Briefcase size={14} />
                        Target Role
                    </label>

                    <input
                        value={role}
                        onChange={(e) =>
                            setRole(e.target.value)
                        }
                        placeholder="MERN Developer"
                        className="
            h-11
            w-full
            rounded-xl
            border
            border-zinc-800
            bg-zinc-900
            px-4
            text-sm
            outline-none
            transition-colors
            placeholder:text-zinc-500
            focus:border-violet-500
            "
                    />
                </div>

                {/* Mode */}
                <div>
                    <label
                        className="
            mb-2
            flex
            items-center
            gap-2
            text-sm
            font-medium
            text-zinc-300
            "
                    >
                        <Mic size={14} />
                        Interview Mode
                    </label>

                    <div className="relative">
                        <select
                            value={mode}
                            onChange={(e) =>
                                setMode(e.target.value)
                            }
                            className="
              h-11
              w-full
              appearance-none
              rounded-xl
              border
              border-zinc-800
              bg-zinc-900
              px-4
              pr-10
              text-sm
              outline-none
              transition-colors
              focus:border-violet-500
              "
                        >
                            {interviewModes.map(
                                (mode) => (
                                    <option
                                        key={mode.value}
                                        value={mode.value}
                                    >
                                        {mode.label}
                                    </option>
                                )
                            )}
                        </select>

                        <ChevronDown
                            size={16}
                            className="
              pointer-events-none
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-zinc-500
              "
                        />
                    </div>
                </div>

                {/* Preview */}
                <div
                    className="
          rounded-xl
          border
          border-zinc-800
          bg-zinc-900/50
          p-4
          "
                >
                    <p className="text-xs text-zinc-500">
                        Interview Setup
                    </p>

                    <div className="mt-3 space-y-2">
                        <div className="flex justify-between">
                            <span className="text-zinc-400">
                                Role
                            </span>

                            <span className="font-medium">
                                {role}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-zinc-400">
                                Mode
                            </span>

                            <span className="font-medium capitalize">
                                {mode}
                            </span>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <button
                    onClick={handleStart}
                    disabled={
                        startInterviewMutation.isPending
                    }
                    className="
          flex
          h-11
          w-full
          items-center
          justify-center
          rounded-xl
          bg-violet-600
          px-4
          text-sm
          font-medium
          text-white
          transition-all
          hover:bg-violet-500
          disabled:cursor-not-allowed
          disabled:opacity-50
          "
                >
                    {startInterviewMutation.isPending
                        ? "Starting..."
                        : "Start Interview"}
                </button>
            </div>
        </div>
    );
}