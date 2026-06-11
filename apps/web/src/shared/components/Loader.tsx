"use client";

import { Loader2, BrainCircuit } from "lucide-react";

export function Loader() {
    return (
        <div className="min-h-screen bg-[#0A0F1E] flex items-center justify-center px-4">

            {/* Ambient glow */}
            <div
                className="absolute w-[420px] h-[420px] rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{
                    background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            />

            <div className="relative flex flex-col items-center gap-4">

                {/* Logo */}
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-600/15 border border-emerald-500/30">
                    <BrainCircuit className="w-7 h-7 text-emerald-400" strokeWidth={1.75} />
                </div>

                {/* App name */}
                <div className="flex flex-col items-center gap-1">
                    <h1 className="text-lg font-semibold tracking-tight text-slate-100">
                        CareerCoach<span className="text-emerald-400"> AI</span>
                    </h1>
                    <p className="text-xs text-slate-500 tracking-wide uppercase">
                        Communication Coach
                    </p>
                </div>

                {/* Spinner */}
                <Loader2 className="w-5 h-5 text-emerald-400 animate-spin mt-2" />
            </div>
        </div>
    );
}