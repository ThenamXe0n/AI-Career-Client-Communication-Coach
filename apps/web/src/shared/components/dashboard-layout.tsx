"use client";

import Sidebar
    from "./sidebar";

import { ProtectedRoute }
    from "./protected-route";

export function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <ProtectedRoute>

            <div
                className="flex min-h-screen "
            >
                <Sidebar />

                <main
                    className="flex-1  p-10">
                    {children}
                </main>

            </div>

        </ProtectedRoute>
    );

}