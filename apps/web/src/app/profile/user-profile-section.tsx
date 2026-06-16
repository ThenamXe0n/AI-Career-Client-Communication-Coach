"use client";

import { useState, useRef, ChangeEvent } from "react";
import {
    Mail,
    Briefcase,
    Building2,
    MapPin,
    Upload,
    FileText,
    Eye,
    Trash2,
    Calendar,
    Users,
    CheckCircle2,
    XCircle,
    Clock,
    CircleDot,
    TrendingUp,
    Edit3,
    Check,
    X,
    Download,
    RefreshCw,
} from "lucide-react";
import { useAuth } from "@/shared/hooks/use-auth";
import { Loader } from "@/shared/components/Loader";
import { InterviewList } from "@/features/interview/components/interview-list";

// ─── Types ───────────────────────────────────────────────────────────────────

interface UserProfile {
    name: string;
    email: string;
    role: string;
    department: string;
    location: string;
}


interface ResumeFile {
    name: string;
    size: number;
    url: string;
}

// ─── Static data ─────────────────────────────────────────────────────────────


// ─── Helpers ─────────────────────────────────────────────────────────────────

function getInitials(name: string) {
    return name
        ?.trim()
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
}

function formatSize(bytes: number) {
    const kb = bytes / 1024;
    return kb > 1024 ? (kb / 1024).toFixed(1) + " MB" : Math.round(kb) + " KB";
}


type FilterType = "all" | "offer" | "cleared" | "rejected" | "progress" | "pending";

const FILTERS: { key: FilterType; label: string }[] = [
    { key: "all", label: "All" },
    { key: "offer", label: "Offer" },
    { key: "cleared", label: "Cleared" },
    { key: "progress", label: "In progress" },
    { key: "pending", label: "Awaiting" },
    { key: "rejected", label: "Rejected" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function ProfilePage() {
    const { isLoading, user } = useAuth()
    const [profile, setProfile] = useState<UserProfile>({
        name: user?.name,
        email: user?.email,
        role: user?.role,
        department: "Developer",
        location: "Bangalore, IN",
    });
    const [editMode, setEditMode] = useState(false);
    const [draft, setDraft] = useState<UserProfile>(profile);
    const [resume, setResume] = useState<ResumeFile | null>(null);
    const [filter, setFilter] = useState<FilterType>("all");
    const fileInputRef = useRef<HTMLInputElement>(null);





    function handleSave() {
        setProfile(draft);
        setEditMode(false);
    }

    function handleCancel() {
        setDraft(profile);
        setEditMode(false);
    }

    function handleFile(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        console.log()
        if (!file) return;
        setResume({ name: file.name, size: file.size, url: URL.createObjectURL(file) });
        if (fileInputRef.current) fileInputRef.current.value = "";
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className="min-h-screen bg-gradient-to-br pt-24 from-gray-950 via-indigo-950 to-gray-900 p-6">

            {/* Ambient glow blobs */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden">
                <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl" />
                <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl" />
                <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-indigo-700/10 blur-3xl" />
            </div>

            <div className="relative max-w-5xl mx-auto flex gap-5 items-start">

                {/* ── Sidebar ──────────────────────────────────────────────────── */}
                <div className="w-64 flex-shrink-0 flex flex-col gap-4">

                    {/* Profile glass card */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">

                        {/* Header stripe */}
                        <div className="relative h-20 bg-gradient-to-br from-indigo-600/40 to-teal-600/30">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(52,211,153,0.15),transparent_60%)]" />
                        </div>

                        {/* Avatar + identity */}
                        <div className="flex flex-col items-center -mt-9 pb-4 px-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-teal-500 flex items-center justify-center text-lg font-medium text-white ring-4 ring-gray-950/60 mb-3 select-none">
                                {getInitials(profile.name)}
                            </div>

                            {!editMode ? (
                                <>
                                    <p className="text-white font-medium text-sm text-center leading-tight">{profile.name}</p>
                                    <p className="text-indigo-300/70 text-xs text-center mt-0.5">{profile.role}</p>
                                    <button
                                        onClick={() => { setDraft(profile); setEditMode(true); }}
                                        className="mt-3 flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-all"
                                    >
                                        <Edit3 size={12} /> Edit profile
                                    </button>
                                </>
                            ) : (
                                <div className="w-full space-y-2 mt-1">
                                    {(["name", "email", "role", "department", "location"] as (keyof UserProfile)[]).map((field) => (
                                        <div key={field}>
                                            <label className="text-[10px] text-white/40 uppercase tracking-wider block mb-0.5 capitalize">
                                                {field}
                                            </label>
                                            <input
                                                value={draft[field]}
                                                onChange={(e) => setDraft((p) => ({ ...p, [field]: e.target.value }))}
                                                className="w-full text-xs bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5 text-white outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                                            />
                                        </div>
                                    ))}
                                    <div className="flex gap-2 pt-1">
                                        <button
                                            onClick={handleSave}
                                            className="flex-1 flex items-center justify-center gap-1 text-xs py-1.5 rounded-lg bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/30 transition-all"
                                        >
                                            <Check size={12} /> Save
                                        </button>
                                        <button
                                            onClick={handleCancel}
                                            className="flex-1 flex items-center justify-center gap-1 text-xs py-1.5 rounded-lg border border-white/10 bg-white/5 text-white/50 hover:bg-white/10 transition-all"
                                        >
                                            <X size={12} /> Cancel
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>



                        {/* Info rows */}
                        <div className="px-4 py-3 border-t border-white/10 space-y-3">
                            {[
                                { Icon: Mail, val: profile.email },
                                { Icon: Briefcase, val: profile.role },
                                { Icon: Building2, val: profile.department },
                                { Icon: MapPin, val: profile.location },
                            ].map(({ Icon, val }) => (
                                <div key={val} className="flex items-center gap-2.5">
                                    <Icon size={13} className="text-indigo-400/70 flex-shrink-0" />
                                    <span className="text-xs text-white/55 truncate">{val}</span>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>

                {/* ── Main panel ───────────────────────────────────────────────── */}
                <div className="flex-1 min-w-0">
                    {/* Resume glass card */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
                        <p className="text-[10px] uppercase tracking-widest text-white/40 mb-3 flex items-center gap-1.5">
                            <FileText size={11} className="text-indigo-400/70" /> Resume
                        </p>

                        {!resume ? (
                            <div
                                onClick={() => fileInputRef.current?.click()}
                                className="border border-dashed border-white/20 rounded-xl p-4 flex flex-col items-center gap-2 cursor-pointer hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all group"
                            >
                                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-indigo-500/30 transition-all">
                                    <Upload size={16} className="text-white/40 group-hover:text-indigo-400 transition-colors" />
                                </div>
                                <p className="text-xs text-white/50 group-hover:text-white/70 transition-colors">Upload resume</p>
                                <p className="text-[10px] text-white/30">PDF, DOC · 10 MB max</p>
                            </div>
                        ) : (
                            <div className="border border-white/10 bg-white/5 rounded-xl p-3">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                                        <FileText size={14} className="text-indigo-400" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-medium text-white truncate">{resume.name}</p>
                                        <p className="text-[10px] text-white/40">{formatSize(resume.size)}</p>
                                    </div>
                                </div>
                                <div className="flex gap-1.5 mt-3">
                                    {[
                                        { Icon: Eye, label: "View", onClick: () => window.open(resume.url, "_blank"), hover: "hover:text-indigo-400 hover:border-indigo-500/30" },
                                        { Icon: Download, label: "Download", onClick: () => { const a = document.createElement("a"); a.href = resume.url; a.download = resume.name; a.click(); }, hover: "hover:text-blue-400 hover:border-blue-500/30" },
                                        { Icon: RefreshCw, label: "Replace", onClick: () => fileInputRef.current?.click(), hover: "hover:text-white hover:border-white/20" },
                                        { Icon: Trash2, label: "Remove", onClick: () => setResume(null), hover: "hover:text-red-400 hover:border-red-500/30" },
                                    ].map(({ Icon, label, onClick, hover }) => (
                                        <button
                                            key={label}
                                            onClick={onClick}
                                            title={label}
                                            className={`flex-1 flex items-center justify-center gap-1 text-[10px] py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/40 transition-all ${hover}`}
                                        >
                                            <Icon size={11} /> {label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFile} />
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
                        {/* Interview rows */}
                        <InterviewList />
                    </div>
                </div>

            </div>
        </div>
    );
}