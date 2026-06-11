import { Briefcase, FileText } from "lucide-react";

interface Props {
    fileName: string;
    experienceYears: number;
}

export function ResumeHeader({
    fileName,
    experienceYears,
}: Props) {
    return (
        <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-blue-600/15 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-blue-400" strokeWidth={1.75} />
            </div>
            <div className="min-w-0">
                <h2 className="text-sm font-semibold text-slate-100 truncate">
                    {fileName}
                </h2>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                    <Briefcase className="w-3.5 h-3.5" strokeWidth={1.75} />
                    {experienceYears} years experience
                </div>
            </div>
        </div>
    );
}