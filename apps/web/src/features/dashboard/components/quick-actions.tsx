import Link from "next/link";

import {
  FileText,
  MessageSquareCode,
  BarChart3,
  ArrowRight,
  Mic,
} from "lucide-react";

const actions = [
  {
    label: "Resume",
    description: "Edit profile & skills",
    href: "/resume",
    icon: FileText,
  },
  {
    label: "Interview",
    description: "Practice sessions",
    href: "/interview",
    icon: Mic,
  },
  {
    label: "Reports",
    description: "Performance insights",
    href: "/report",
    icon: BarChart3,
  },
];

export function QuickActions() {
  return (
 <div
  className="
  rounded-2xl
  border border-zinc-800
  bg-zinc-950
  p-6
  "
>
  <h2 className="font-semibold">
    Quick Actions
  </h2>

  <div className="mt-5 space-y-2">
    {actions.map((action) => {
      const Icon = action.icon;

      return (
        <Link
          key={action.label}
          href={action.href}
          className="
          group
          flex
          items-center
          justify-between
          rounded-xl
          px-4
          py-3
          transition-colors
          hover:bg-zinc-900
          "
        >
          <div className="flex items-center gap-3">
            <Icon
              size={18}
              className="
              text-zinc-500
              group-hover:text-white
              transition-colors
              "
            />

            <div>
              <p className="font-medium">
                {action.label}
              </p>

              <p className="text-xs text-zinc-500">
                {action.description}
              </p>
            </div>
          </div>

          <span
            className="
            text-zinc-600
            opacity-0
            -translate-x-2
            transition-all
            group-hover:opacity-100
            group-hover:translate-x-0
            "
          >
            →
          </span>
        </Link>
      );
    })}
  </div>
</div>
  );
}