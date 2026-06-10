"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    BrainCircuit,
    LayoutDashboard,
    FileText,
    MessageSquare,
    BarChart2,
    LogOut,
    ChevronLeft,
    ChevronRight,
    Menu,
    X,
} from "lucide-react";

export default function Sidebar() {
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const linkClass = (href: string) =>
        `group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150 ${pathname === href
            ? "bg-emerald-600/15 text-emerald-400"
            : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
        } ${collapsed ? "justify-center px-2.5" : ""}`;

    const iconClass = (href: string) =>
        `flex-shrink-0 w-[18px] h-[18px] transition-colors duration-150 ${pathname === href ? "text-emerald-400" : "text-slate-500 group-hover:text-slate-300"
        }`;

    return (
        <>
            {/* Mobile hamburger */}
            <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden fixed top-4 left-4 z-50 w-9 h-9 rounded-lg bg-[#000000] border border-[#1E2D45] flex items-center justify-center text-slate-400 hover:text-slate-200 transition-colors"
                aria-label="Open menu"
            >
                <Menu className="w-4 h-4" />
            </button>

            {/* Mobile overlay */}
            {mobileOpen && (
                <div
                    className="md:hidden fixed inset-0 z-40 bg-black/60"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            {/* Mobile drawer */}
            <aside className={`md:hidden fixed top-0 left-0 z-50 h-full w-64 bg-[#000000] border-r border-[#1E2D45] p-5 flex flex-col transition-transform duration-200 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button
                    onClick={() => setMobileOpen(false)}
                    className="absolute top-4 right-4 text-slate-500 hover:text-slate-300 transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>

                {/* Logo */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-9 h-9 rounded-lg bg-emerald-600/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                        <BrainCircuit className="w-5 h-5 text-emerald-400" strokeWidth={1.75} />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-slate-100 leading-tight">
                            CareerCoach <span className="text-emerald-400">AI</span>
                        </p>
                        <p className="text-[9px] text-slate-600 uppercase tracking-widest">
                            Communication Coach
                        </p>
                    </div>
                </div>

                <p className="px-1 mb-2 text-[10px] font-medium uppercase tracking-widest text-slate-600">
                    Menu
                </p>

                <nav className="flex flex-col gap-1 flex-1">
                    <Link href="/dashboard" onClick={() => setMobileOpen(false)} className={linkClass("/dashboard")}>
                        {pathname === "/dashboard" && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full bg-emerald-400" />}
                        <LayoutDashboard className={iconClass("/dashboard")} strokeWidth={1.75} />
                        <span>Dashboard</span>
                    </Link>

                    <Link href="/resume" onClick={() => setMobileOpen(false)} className={linkClass("/resume")}>
                        {pathname === "/resume" && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full bg-emerald-400" />}
                        <FileText className={iconClass("/resume")} strokeWidth={1.75} />
                        <span>Resume</span>
                    </Link>

                    <Link href="/interview" onClick={() => setMobileOpen(false)} className={linkClass("/interview")}>
                        {pathname === "/interview" && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full bg-emerald-400" />}
                        <MessageSquare className={iconClass("/interview")} strokeWidth={1.75} />
                        <span>Interview</span>
                    </Link>

                    <Link href="/report" onClick={() => setMobileOpen(false)} className={linkClass("/report")}>
                        {pathname === "/report" && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full bg-emerald-400" />}
                        <BarChart2 className={iconClass("/report")} strokeWidth={1.75} />
                        <span>Reports</span>
                    </Link>
                </nav>

                <div className="border-t border-[#1E2D45] my-4" />

                <button className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-red-500/10 hover:text-red-400 transition-all duration-150 w-full">
                    <LogOut className="flex-shrink-0 w-[18px] h-[18px]" strokeWidth={1.75} />
                    <span>Log out</span>
                </button>
            </aside>

            {/* Desktop sidebar */}
            <aside className={`hidden md:flex flex-col relative bg-[#000000] border-r border-[#1E2D45] min-h-screen p-5 transition-all duration-200 ease-in-out ${collapsed ? "w-[68px]" : "w-64"}`}>

                {/* Logo */}
                <div className={`flex items-center gap-3 mb-8 ${collapsed ? "justify-center" : ""}`}>
                    <div className="w-9 h-9 rounded-lg bg-emerald-600/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                        <BrainCircuit className="w-5 h-5 text-emerald-400" strokeWidth={1.75} />
                    </div>
                    {!collapsed && (
                        <div>
                            <p className="text-sm font-semibold text-slate-100 leading-tight whitespace-nowrap">
                                CareerCoach <span className="text-emerald-400">AI</span>
                            </p>
                            <p className="text-[9px] text-slate-600 uppercase tracking-widest whitespace-nowrap">
                                Communication Coach
                            </p>
                        </div>
                    )}
                </div>

                {!collapsed && (
                    <p className="px-1 mb-2 text-[10px] font-medium uppercase tracking-widest text-slate-600">
                        Menu
                    </p>
                )}

                <nav className="flex flex-col gap-1 flex-1">
                    <Link href="/dashboard" className={linkClass("/dashboard")}>
                        {pathname === "/dashboard" && !collapsed && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full bg-emerald-400" />}
                        <LayoutDashboard className={iconClass("/dashboard")} strokeWidth={1.75} />
                        {!collapsed && <span className="whitespace-nowrap">Dashboard</span>}
                        {collapsed && <span className="pointer-events-none absolute left-full ml-3 z-50 rounded-md bg-[#1E2D45] border border-[#253650] px-2.5 py-1 text-xs text-slate-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150">Dashboard</span>}
                    </Link>

                    <Link href="/resume" className={linkClass("/resume")}>
                        {pathname === "/resume" && !collapsed && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full bg-emerald-400" />}
                        <FileText className={iconClass("/resume")} strokeWidth={1.75} />
                        {!collapsed && <span className="whitespace-nowrap">Resume</span>}
                        {collapsed && <span className="pointer-events-none absolute left-full ml-3 z-50 rounded-md bg-[#1E2D45] border border-[#253650] px-2.5 py-1 text-xs text-slate-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150">Resume</span>}
                    </Link>

                    <Link href="/interview" className={linkClass("/interview")}>
                        {pathname === "/interview" && !collapsed && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full bg-emerald-400" />}
                        <MessageSquare className={iconClass("/interview")} strokeWidth={1.75} />
                        {!collapsed && <span className="whitespace-nowrap">Interview</span>}
                        {collapsed && <span className="pointer-events-none absolute left-full ml-3 z-50 rounded-md bg-[#1E2D45] border border-[#253650] px-2.5 py-1 text-xs text-slate-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150">Interview</span>}
                    </Link>

                    <Link href="/report" className={linkClass("/report")}>
                        {pathname === "/report" && !collapsed && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full bg-emerald-400" />}
                        <BarChart2 className={iconClass("/report")} strokeWidth={1.75} />
                        {!collapsed && <span className="whitespace-nowrap">Reports</span>}
                        {collapsed && <span className="pointer-events-none absolute left-full ml-3 z-50 rounded-md bg-[#1E2D45] border border-[#253650] px-2.5 py-1 text-xs text-slate-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150">Reports</span>}
                    </Link>
                </nav>

                <div className="border-t border-[#1E2D45] my-4" />

                <button className={`group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-red-500/10 hover:text-red-400 transition-all duration-150 w-full ${collapsed ? "justify-center px-2.5" : ""}`}>
                    <LogOut className="flex-shrink-0 w-[18px] h-[18px]" strokeWidth={1.75} />
                    {!collapsed && <span className="whitespace-nowrap">Log out</span>}
                    {collapsed && <span className="pointer-events-none absolute left-full ml-3 z-50 rounded-md bg-[#1E2D45] border border-[#253650] px-2.5 py-1 text-xs text-slate-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150">Log out</span>}
                </button>

                {/* Collapse toggle */}
                <button
                    onClick={() => setCollapsed((c) => !c)}
                    className="absolute -right-3 top-6 w-6 h-6 rounded-full bg-[#1E2D45] border border-[#253650] flex items-center justify-center text-slate-500 hover:text-slate-200 transition-colors duration-150 shadow-md"
                    aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                    {collapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
                </button>
            </aside>
        </>
    );
}