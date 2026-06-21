"use client"
import {
    Medal, Terminal, MessageCircleMore,
    Bolt, TrendingUp, Brain, AlertTriangle, CircleCheck,
    Sparkles, Calendar, Database, Clock,
    ShieldCheck,
    Award
} from "lucide-react";
import { useReport } from "../hooks/use-report";
import { Loader } from "@/shared/components/Loader";
import { useParams } from "next/navigation";

// const report = {
//     overallScore: 5,
//     technicalScore: 5,
//     communicationScore: 4.5,
//     strengths: [
//         "Comprehensive grasp of secure auth best practices — hashing, token generation (access/refresh), HTTP-only cookie storage.",
//         "Strong command of refresh token rotation, including database storage and physical deletion of old tokens.",
//         "Confident discussion of token blacklisting with practical backends: Redis for speed, MongoDB TTL indexes for expiry.",
//         "Clearly differentiated database vs. in-memory cache trade-offs based on scale and latency requirements.",
//         "Advanced knowledge of tokenVersion field for centralised, immediate 'log out all devices' invalidation.",
//         "Unprompted articulation of the stateless-vs-immediate-revocation design conflict — a nuanced systems insight.",
//         "Practical judgment in selecting solutions proportionate to specific constraints and performance targets.",
//     ],
//     improvements: [
//         "Minor typo ('auuthorization') in the first response — technical quality unaffected, but polish matters for written communication.",
//     ],
//     missedConcepts: [
//         "No significant gaps. All topics — including advanced trade-off scenarios — were addressed thoroughly and without prompting.",
//     ],
//     finalFeedback:
//         "The candidate performed exceptionally well, demonstrating deep and nuanced understanding of secure authentication in a MERN stack. From foundational concepts like password hashing and token generation to advanced strategies like refresh token rotation, blacklisting, and token versioning for immediate revocation — every response was accurate, detailed, and insightful. The ability to articulate performance implications and identify the fundamental conflict between stateless validation and immediate invalidation signals a mature, experienced engineering mindset. A valuable asset to any team building secure web applications.",
//     createdAt: "2026-06-17T10:28:37.302Z",
// };

function ScoreCard({
    label, score, perfect, icon: Icon, color, bg, accent,
}: {
    label: string; score: number; perfect: boolean;
    icon: React.ElementType; color: string; bg: string; accent: string;
}) {
    const pct = (score / 5) * 100;
    return (
        <div className="relative bg-[#13161f] border border-[#1e2231] rounded-2xl p-5 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-0.5 rounded-t-2xl" style={{ background: accent }} />
            <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#475569]">{label}</span>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: bg }}>
                    <Icon size={16} style={{ color }} />
                </div>
            </div>
            <div className="mb-1">
                <span className="text-4xl font-semibold leading-none" style={{ color }}>{score}</span>
                <span className="text-sm text-[#334155] ml-1">/5</span>
            </div>
            <p className="text-[11px] text-[#475569] mb-3">{perfect ? "Perfect score" : `Excellent · ${pct}%`}</p>
            <div className="h-1 bg-[#1e2231] rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${pct}%`, background: accent }} />
            </div>
        </div>
    );
}

function Panel({ title, icon: Icon, iconColor, iconBg, count, children }: {
    title: string; icon: React.ElementType; iconColor: string; iconBg: string;
    count?: string; children: React.ReactNode;
}) {
    return (
        <div className="bg-[#13161f] border border-[#1e2231] rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#1a1f2e]">
                <div className="flex items-center gap-2.5">
                    <div className="w-[30px] h-[30px] rounded-lg flex items-center justify-center" style={{ background: iconBg }}>
                        <Icon size={14} style={{ color: iconColor }} />
                    </div>
                    <span className="text-sm font-medium text-[#e2e8f0]">{title}</span>
                </div>
                {count && (
                    <span className="text-xs text-[#334155] bg-[#0d1017] border border-[#1e2231] rounded-full px-2.5 py-0.5">
                        {count}
                    </span>
                )}
            </div>
            <div className="p-5">{children}</div>
        </div>
    );
}

function AlertItem({ text, variant }: { text: string; variant: "amber" | "teal" }) {
    const cfg = {
        amber: { bg: "rgba(245,158,11,.07)", border: "rgba(245,158,11,.18)", iconBg: "rgba(245,158,11,.15)", iconColor: "#f59e0b", textColor: "#92400e", Icon: AlertTriangle },
        teal: { bg: "rgba(20,184,166,.07)", border: "rgba(20,184,166,.18)", iconBg: "rgba(20,184,166,.12)", iconColor: "#14b8a6", textColor: "#115e59", Icon: CircleCheck },
    }[variant];
    return (
        <div className="flex gap-3 items-start rounded-xl p-3.5" style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}>
            <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: cfg.iconBg }}>
                <cfg.Icon size={14} style={{ color: cfg.iconColor }} />
            </div>
            <p className="text-[13px] leading-relaxed" style={{ color: cfg.textColor }}>{text}</p>
        </div>
    );
}

export default function InterviewReport() {
    const { interviewId } = useParams()
    const { data, isLoading } = useReport(interviewId)
    if (isLoading) {
        return <Loader />
    }

    function getVerdict(score: number) {
        if (score>=5) {
            return "strongly recommended"
        } else if (score < 5 && score >= 4) {
            return "recommended"
        } else if (score < 4 && score > 3) {
            return "need improvment"
        }

        return "you need to study more"
    }




    console.log("data response", data)
    const report = data.data
    const date = new Date(report?.createdAt);
    const dateStr = date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
    const timeStr = date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });


    return (
        <div className="min-h-screen bg-[#0a0c12] text-[#e2e8f0] p-4 sm:p-7">
            <div className="max-w-5xl mx-auto">

                {/* Top bar */}
                <div className="flex items-center justify-between mb-7">
                    <div className="flex items-center gap-2 bg-[#13161f] border border-[#1e2231] rounded-xl px-3 py-2">
                        <div className="w-2 h-2 rounded-full bg-[#7c5cfc]" />
                        <span className="text-[13px] font-medium text-[#94a3b8]">HireIQ</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1.5 text-xs font-medium text-emerald-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Report complete
                    </div>
                </div>

                {/* Hero */}
                <div className="bg-[#13161f] border border-[#1e2231] rounded-2xl p-6 sm:p-8 mb-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[.1em] text-[#4b5563] mb-3">Technical Interview · {dateStr}</p>
                        <h1 className="text-2xl sm:text-3xl font-semibold text-[#f8fafc] leading-snug mb-1">
                            {report.interviewId?.role}
                        </h1>
                        <p className="text-sm text-[#475569] mb-5">{report.interviewId?.role}</p>
                        <div className="flex flex-wrap gap-2">
                            {[
                                { label: "Security", Icon: ShieldCheck, cls: "bg-violet-500/10 text-violet-400 border-violet-500/20" },
                                { label: "MERN stack", Icon: Database, cls: "bg-teal-500/10 text-teal-400 border-teal-500/20" },
                                { label: "45 min", Icon: Clock, cls: "bg-slate-500/10 text-slate-400 border-slate-500/20" },
                            ].map(({ label, Icon, cls }) => (
                                <span key={label} className={`inline-flex items-center gap-1.5 border rounded-lg px-2.5 py-1 text-xs font-medium ${cls}`}>
                                    <Icon size={11} />{label}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-[#0d1017] border border-[#1e2231] rounded-xl p-5 text-center shrink-0 sm:min-w-[148px]">
                        <Medal size={22} className="text-violet-500 mx-auto mb-2" />
                        <p className="text-[11px] uppercase tracking-widest text-[#475569] mb-1.5">Overall verdict</p>
                        <p className="text-[13px] font-medium text-[#a78bfa]">{getVerdict(report.overallScore)}</p>
                    </div>
                </div>

                {/* Score cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                    <ScoreCard label="Overall" score={5} perfect icon={Award} color="#a78bfa" bg="rgba(124,92,252,.14)" accent="#7c5cfc" />
                    <ScoreCard label="Technical" score={5} perfect icon={Terminal} color="#2dd4bf" bg="rgba(20,184,166,.12)" accent="#14b8a6" />
                    <ScoreCard label="Communication" score={4.5} perfect={false} icon={MessageCircleMore} color="#fbbf24" bg="rgba(245,158,11,.12)" accent="#f59e0b" />
                </div>

                {/* Two-column body */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    <Panel title="Strengths" icon={Bolt} iconColor="#7c5cfc" iconBg="rgba(124,92,252,.14)" count="7 identified">
                        <div className="space-y-2">
                            {report.strengths.map((s, i) => (
                                <div key={i} className="flex gap-3 items-start bg-[#0d1017] border border-[#1a1f2e] rounded-xl px-3.5 py-3">
                                    <span className="text-[11px] font-semibold text-[#2d3a4f] w-5 shrink-0 pt-0.5 tabular-nums">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <p className="text-[13px] leading-relaxed text-[#94a3b8]">{s}</p>
                                </div>
                            ))}
                        </div>
                    </Panel>

                    <div className="flex flex-col gap-4">
                        <Panel title="Improvements" icon={TrendingUp} iconColor="#f59e0b" iconBg="rgba(245,158,11,.12)">
                            <AlertItem text={report.improvements[0]} variant="amber" />
                        </Panel>
                        <Panel title="Missed concepts" icon={Brain} iconColor="#2dd4bf" iconBg="rgba(20,184,166,.10)">
                            <AlertItem text={report.missedConcepts[0]} variant="teal" />
                        </Panel>
                    </div>
                </div>

                {/* Final feedback */}
                <div className="bg-[#13161f] border border-[#1e2231] rounded-2xl p-6 sm:p-7">
                    <p className="text-[32px] leading-none text-[#4b3e8a] font-serif mb-2">"</p>
                    <p className="text-[13px] leading-[1.85] text-[#64748b]">{report.finalFeedback}</p>
                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#1a1f2e] flex-wrap gap-3">
                        <span className="flex items-center gap-2 text-xs text-[#2d3a4f]">
                            <Calendar size={13} />{dateStr} · {timeStr} UTC
                        </span>
                        <div className="flex items-center gap-1.5 bg-violet-500/10 border border-violet-500/20 rounded-lg px-2.5 py-1.5 text-xs font-medium text-violet-400">
                            <Sparkles size={11} />AI assessed
                        </div>
                    </div>
                </div>

                <p className="text-center text-[11px] text-[#1e2231] mt-6">
                    AI-generated · results should be reviewed by a human interviewer
                </p>
            </div>
        </div>
    );
}