import { Tag } from "lucide-react";

interface Props {
    skills: string[];
}

export function SkillsSection({
    skills,
}: Props) {

    return (
        <div>
            <h3 className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-slate-500 mb-3">
                <Tag className="w-3.5 h-3.5" strokeWidth={1.75} />
                Skills
            </h3>

            <div className="flex flex-wrap gap-2">
                {skills?.map((skill: string) => (
                    <span
                        key={skill}
                        className="rounded-full border border-[#1E2D45] bg-blue-600/10 px-3 py-1 text-xs text-blue-300"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}