"use client";

import { Conversation } from "@/features/interview/components/conversation";
import { MessageForm } from "@/features/interview/components/message-form";
import { useInterviewDetails } from "@/features/interview/hooks/use-interview-details";
import { InterviewLoader } from "@/shared/components/interviewLoader";
import { cn } from "@/shared/lib/cn";
import { ArrowLeftCircle, BrainCircuit, Briefcase, CalendarDays, EyeIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface InterviewHeaderProps {
    role: string;
    mode: string;
    status: string;
    createdAt: string;
}

const STATUS_STYLES: Record<string, string> = {
    completed:
        "bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20",
    "in-progress":
        "bg-blue-50 text-blue-700 ring-blue-600/20 dark:bg-blue-500/10 dark:text-blue-400 dark:ring-blue-500/20",
    pending:
        "bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-500/20",
    cancelled:
        "bg-red-50 text-red-700 ring-red-600/20 dark:bg-red-500/10 dark:text-red-400 dark:ring-red-500/20",
};

const STATUS_DOT: Record<string, string> = {
    completed: "bg-emerald-500",
    "in-progress": "bg-blue-500",
    pending: "bg-amber-500",
    cancelled: "bg-red-500",
};

function InterviewHeader({
    role,
    mode,
    status,
    createdAt,
}: InterviewHeaderProps) {
    const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    const statusKey = status.toLowerCase();

    const statusClass = STATUS_STYLES[statusKey] ?? STATUS_STYLES.pending;

    const dotClass = STATUS_DOT[statusKey] ?? STATUS_DOT.pending;

    return (
        <div
            className="
            overflow-hidden
            rounded-2xl
            sticky
            top-0
            border
            border-zinc-800
            bg-zinc-950
            py-3 px-4
            "
        >


            <div
                className="
                flex
                flex-col
                gap-5
                lg:flex-row
                lg:items-center
                lg:justify-between
                "
            >
                {/* Left */}

                <div className="flex items-center gap-4">
                    <div
                        className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-violet-500/10
                        text-violet-400
                        "
                    >
                        <ArrowLeftCircle size={22} />
                    </div>

                    <div>

                        <div
                            className="
                            mb-2
                            flex
                            flex-wrap
                            items-center
                            gap-4
                            "
                        >
                            <span
                                className="
                            text-2xl
                            font-semibold
                            tracking-tight
                            text-white
                            "
                            >
                                {role}
                            </span>
                            <span
                                className="
                                rounded-full
                                border
                                border-violet-500/20
                                bg-violet-500/10
                                px-2.5
                                py-1
                                text-xs
                                font-medium
                                text-violet-400
                                "
                            >
                                {mode}
                            </span>

                            <span
                                className="
                                text-xs
                                text-zinc-500
                                "
                            >
                                AI Interview Session
                            </span>
                        </div>



                        <div
                            className="
                            mt-2
                            flex
                            items-center
                            gap-4
                            text-sm
                            text-zinc-500
                            "
                        >
                            <div className="flex items-center gap-2">
                                <CalendarDays size={14} />
                                <span>{formattedDate}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Briefcase size={14} />
                                <span>Interview</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Status */}

                <div
                    className="
                    flex
                    flex-col
                    items-start
                    gap-2
                    lg:items-end
                    "
                >
                    <span
                        className={cn(
                            "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ring-1 ring-inset",
                            statusClass,
                        )}
                    >
                        <span className={cn("h-2 w-2 rounded-full", dotClass)} />

                        {status.charAt(0).toUpperCase() + status.slice(1)}
                    </span>

                    <p
                        className="
                        text-xs
                        text-zinc-500
                        "
                    >
                        Session Status
                    </p>
                </div>
            </div>
        </div>
    );
}
const InterviewScreen = () => {
    const params = useParams();
    const interviewId = params.id;

    const { data, isLoading } = useInterviewDetails(interviewId);

    if (isLoading) {
        return <InterviewLoader />;
    }

    const interview = data?.data?.interview;
    const messages = data?.data?.messages ?? [];

    return (
        <div className="space-y-6">
            {interview && (
                <InterviewHeader
                    role={interview.role}
                    mode={interview.mode}
                    status={interview.status}
                    createdAt={interview.createdAt}
                />
            )}

            <Conversation messages={messages} />

            {interview.status === "completed" ? <div className="fixed right-1/3 translate-x-1/3 bottom-20 flex items-center gap-4 font-bold  bg-black p-4 rounded-2xl justify-between backdrop-blur-3xl border-2 border-blue-400 shadow-2xl shadow-emerald-400/30 w-5xl ">
                <div className="flex items-center gap-2 text-white">
                    <div className="size-4 rounded-full bg-green-400"></div>
                    Interview Completed
                </div>
                <Link href={`/report/${interviewId}`} className="flex items-center gap-2 bg-indigo-800 px-2 py-1 rounded-full font-medium text-sm shadow-lg shadow-white/10 capitalize"><EyeIcon /> view report</Link>
            </div> : <MessageForm messagesLength={messages.length} interviewId={interviewId} />}
        </div>
    );
};



export default InterviewScreen;
