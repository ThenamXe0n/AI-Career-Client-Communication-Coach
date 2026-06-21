"use client";

import { useEffect, useRef, useState } from "react";
import {
    CalendarCheck,
    CircleCheck,
    Star,
    Target,
} from "lucide-react";
import { useDashboardStats } from "../hooks/use-dashboard";

// ─── Types ───────────────────────────────────────────────────────────────────

interface DashboardStatsData {
    totalInterviews: number;
    completedInterviews: number;
    averageScore: number;
    passRate: number;
}

// ─── Animated counter hook ───────────────────────────────────────────────────

function useCountUp(target: number, duration = 900, decimals = 0) {
    const [value, setValue] = useState(0);
    const frame = useRef<number>(0);

    useEffect(() => {
        const start = performance.now();
        const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(target * eased);
            if (progress < 1) frame.current = requestAnimationFrame(tick);
        };
        frame.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame.current);
    }, [target, duration]);

    return decimals ? Number(value.toFixed(decimals)) : Math.round(value);
}

// ─── Glass card shell ─────────────────────────────────────────────────────────

function GlassCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 overflow-hidden transition-colors duration-200 hover:bg-white/[0.06] hover:border-white/[0.12]">
            {children}
        </div>
    );
}

function IconBadge({ icon: Icon, color, bg }: { icon: React.ElementType; color: string; bg: string }) {
    return (
        <div className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center" style={{ background: bg }}>
            <Icon size={16} style={{ color }} />
        </div>
    );
}

// ─── Stars ───────────────────────────────────────────────────────────────────

function StarRow({ score }: { score: number }) {
    const full = Math.floor(score);
    const hasHalf = score % 1 >= 0.3;
    return (
        <div className="flex gap-[3px]">
            {Array.from({ length: 5 }).map((_, i) => {
                const filled = i < full;
                const half = i === full && hasHalf;
                return (
                    <Star
                        key={i}
                        size={13}
                        className={filled || half ? "text-amber-400" : "text-white/[0.15]"}
                        fill={filled ? "currentColor" : half ? "url(#half)" : "none"}
                        strokeWidth={filled || half ? 0 : 1.5}
                    />
                );
            })}
        </div>
    );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function DashboardStats() {

    const { data: response } = useDashboardStats()
    const data = response.data[0]
    console.log("dash", data)
    const total = useCountUp(data.totalInterviews);
    const completed = useCountUp(data.completedInterviews);
    const avgScore = useCountUp(data.averageScore, 900, 1);
    const passRate = useCountUp(data.passRate);

    const completePct = Math.round((data.completedInterviews / data.totalInterviews) * 100);

    // Ring math for pass rate
    const radius = 24;
    const circumference = 2 * Math.PI * radius;
    const [ringOffset, setRingOffset] = useState(circumference);
    const [barWidth, setBarWidth] = useState(0);

    useEffect(() => {
        const t = setTimeout(() => {
            setRingOffset(circumference * (1 - data.passRate / 100));
            setBarWidth(completePct);
        }, 80);
        return () => clearTimeout(t);
    }, [circumference, data.passRate, completePct]);

    return (
        <div className="bg-[#0a0c12] p-6 sm:p-7 rounded-[20px]">
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3.5">

                {/* Total interviews */}
                <GlassCard>
                    <div className="flex items-center justify-between mb-[18px]">
                        <IconBadge icon={CalendarCheck} color="#a78bfa" bg="rgba(124,92,252,.16)" />
                        <span className="text-[11px] font-medium text-white/30 tracking-wide">ALL TIME</span>
                    </div>
                    <p className="text-[32px] font-medium text-white leading-none mb-1.5 tabular-nums">{total}</p>
                    <p className="text-xs text-white/45">Total interviews</p>
                </GlassCard>

                {/* Completed */}
                <GlassCard>
                    <div className="flex items-center justify-between mb-[18px]">
                        <IconBadge icon={CircleCheck} color="#2dd4bf" bg="rgba(20,184,166,.16)" />
                        <span className="text-[11px] font-medium text-white/30 tracking-wide">{completePct}%</span>
                    </div>
                    <p className="text-[32px] font-medium text-white leading-none mb-1.5 tabular-nums">{completed}</p>
                    <p className="text-xs text-white/45 mb-3">Completed</p>
                    <div className="h-1 bg-white/[0.08] rounded-full overflow-hidden">
                        <div
                            className="h-full bg-teal-400 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${barWidth}%` }}
                        />
                    </div>
                </GlassCard>

                {/* Average score */}
                <GlassCard>
                    <div className="flex items-center justify-between mb-[18px]">
                        <IconBadge icon={Star} color="#fbbf24" bg="rgba(245,158,11,.16)" />
                        <span className="text-[11px] font-medium text-white/30 tracking-wide">OUT OF 5</span>
                    </div>
                    <p className="text-[32px] font-medium text-white leading-none mb-1.5 tabular-nums">{avgScore}</p>
                    <p className="text-xs text-white/45 mb-3">Average score</p>
                    <StarRow score={data.averageScore} />
                </GlassCard>

                {/* Pass rate */}
                <GlassCard>
                    <div className="mb-3.5">
                        <IconBadge icon={Target} color="#a78bfa" bg="rgba(167,139,250,.16)" />
                    </div>
                    <div className="flex items-center gap-3.5">
                        <div className="relative w-14 h-14 shrink-0">
                            <svg width="56" height="56" className="-rotate-90">
                                <circle cx="28" cy="28" r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
                                <circle
                                    cx="28"
                                    cy="28"
                                    r={radius}
                                    fill="none"
                                    stroke="#a78bfa"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                    strokeDasharray={circumference}
                                    strokeDashoffset={ringOffset}
                                    className="transition-[stroke-dashoffset] duration-1000 ease-out"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center text-[13px] font-medium text-white tabular-nums">
                                {passRate}%
                            </div>
                        </div>
                        <div>
                            <p className="text-2xl font-medium text-white leading-none mb-1 tabular-nums">{passRate}%</p>
                            <p className="text-xs text-white/45">Pass rate</p>
                        </div>
                    </div>
                </GlassCard>

            </div>
        </div>
    );
}