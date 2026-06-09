"use client";

import Link from "next/link";

export function Sidebar() {

    return (
        <aside
            className="
      w-64
      border-r
      min-h-screen
      p-4
      "
        >
            <h2
                className="
        text-xl
        font-bold
        mb-6
        "
            >
                AI Career Coach
            </h2>

            <nav
                className="
        flex
        flex-col
        gap-3
        "
            >
                <Link href="/dashboard">
                    Dashboard
                </Link>

                <Link href="/resume">
                    Resume
                </Link>

                <Link href="/interview">
                    Interview
                </Link>

                <Link href="/report">
                    Reports
                </Link>
            </nav>
        </aside>
    );
}