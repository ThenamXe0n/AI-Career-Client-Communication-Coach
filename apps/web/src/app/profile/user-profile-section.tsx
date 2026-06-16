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
import { UserProfile } from "@/shared/types/profile.types";
import { ResumeFile } from "@/shared/types/resume.types";
import ResumeUploadForm from "@/features/resume/components/resume-upload-form";

// ─── Types ───────────────────────────────────────────────────────────────────



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






    function handleSave() {
        setProfile(draft);
        setEditMode(false);
    }

    function handleCancel() {
        setDraft(profile);
        setEditMode(false);
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
                    <ResumeUploadForm/>
                    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
                        {/* Interview rows */}
                        <InterviewList />
                    </div>
                </div>

            </div>
        </div>
    );
}