import { FolderGit2, ArrowUpRight } from "lucide-react";

interface Props {
  projects: string[];
}

export function ProjectsSection({
  projects,
}: Props) {
  return (
    <section
      className="
      rounded-2xl
      border
      border-zinc-800
      bg-[#121313]
      p-6
      "
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            Projects
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Showcase of your work and experience
          </p>
        </div>

        <div
          className="
          rounded-full
          border
          border-zinc-800
          px-3
          py-1
          text-xs
          text-zinc-400
          "
        >
          {projects.length} Projects
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {projects.map((project, index) => (
          <div
            key={project}
            className="
            group
            flex
            items-center
            justify-between
            rounded-xl
            border
            border-zinc-800
            bg-zinc-900/40
            p-4
            transition-all
            hover:border-violet-500/30
            hover:bg-zinc-900
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                bg-violet-500/10
                text-violet-400
                "
              >
                <FolderGit2 size={18} />
              </div>

              <div>
                <p className="font-medium">
                  {project}
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  Project #{index + 1}
                </p>
              </div>
            </div>

            <ArrowUpRight
              size={16}
              className="
              text-zinc-600
              transition-all
              group-hover:text-violet-400
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}