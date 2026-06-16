import { ResumeFile } from '@/shared/types/resume.types';
import { Download, Eye, FileText, Loader2, RefreshCw, Trash2, Upload } from 'lucide-react';
import React, { ChangeEvent, useRef, useState } from 'react'
import { useUploadResume } from '../hooks/use-upload-resume';



const ResumeUploadForm = ({ formClose }) => {
    const { mutate, isPending, isSuccess, error } = useUploadResume();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [resume, setResume] = useState<ResumeFile | null>(null);

    function handleFile(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        console.log()
        if (!file) return;
        setResume({ name: file.name, size: file.size, url: URL.createObjectURL(file), file: e.target.files?.[0] });
        if (fileInputRef.current) fileInputRef.current.value = "";
    }

    function formatSize(bytes: number) {
        const kb = bytes / 1024;
        return kb > 1024 ? (kb / 1024).toFixed(1) + " MB" : Math.round(kb) + " KB";
    }

    const handleUplaodResume = () => {

        mutate(resume?.file, {
            onSuccess: (data) => {
                console.log(data);
            },
            onError: (error) => {
                console.error(error);
            },
        });

        formClose()
    };

    const ResumeActionData = [
        { Icon: Eye, label: "View", onClick: () => window.open(resume.url, "_blank"), hover: "hover:text-indigo-400 hover:border-indigo-500/30" },
        { Icon: Download, label: "Download", onClick: () => { const a = document.createElement("a"); a.href = resume.url; a.download = resume.name; a.click(); }, hover: "hover:text-blue-400 hover:border-blue-500/30" },
        { Icon: RefreshCw, label: "Replace", onClick: () => fileInputRef.current?.click(), hover: "hover:text-white hover:border-white/20" },
        { Icon: Trash2, label: "Remove", onClick: () => setResume(null), hover: "hover:text-red-400 hover:border-red-500/30" },
    ]

    return (
        <div className='mt-6'>
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
                            {ResumeActionData.map(({ Icon, label, onClick, hover }) => (
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
                        <button
                            disabled={isPending}
                            onClick={handleUplaodResume}
                            title={"upload resume"}
                            className={`flex-1 w-full my-4 flex items-center justify-center gap-1 text-[16px] py-1.5 rounded-lg bg-emerald-400/60  text-white transition-all `}
                        >
                            {isPending ? <Loader2 className='animate-spin' color='white' /> : <Upload size={11} />} {isPending ? "Uploading..." : "Upload Resume"}
                        </button>
                    </div>
                )}
                <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFile} />
            </div>
        </div>
    )
}

export default ResumeUploadForm
