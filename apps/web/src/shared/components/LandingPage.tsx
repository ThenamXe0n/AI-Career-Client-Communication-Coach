/**
 * Fonts: this page uses a `font-display` utility class for headings
 * (Space Grotesk) on top of the default `font-sans` (Inter) and
 * `font-mono` (JetBrains Mono) for the transcript.
 *
 * In your root layout:
 *
 *   import { Space_Grotesk } from "next/font/google";
 *   const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
 *   // add spaceGrotesk.variable to <html className={...}>
 *
 * In tailwind.config:
 *
 *   theme: { extend: { fontFamily: { display: ["var(--font-display)"] } } }
 */

import {
  Mic,
  Bot,
  MessagesSquare,
  Activity,
  BarChart3,
  FileText,
  ClipboardCheck,
  ArrowRight,
  X,
  FileSearch,
  Brain,
  ListChecks,
  MessageCircleQuestion,
  Gauge,
  Briefcase,
  Users,
} from "lucide-react";
import { Navbar } from "./NavBar";

/* ── Data ── */

const FEATURES = [
  {
    icon: Bot,
    title: "AI interviewer avatar",
    desc: "A senior-engineer persona that leads the conversation, not a static form.",
  },
  {
    icon: Mic,
    title: "Voice conversation",
    desc: "Speak your answers naturally, just like a real interview call.",
  },
  {
    icon: MessagesSquare,
    title: "Follow-up questions",
    desc: "The AI digs into what you said — no two interviews follow the same path.",
  },
  {
    icon: Activity,
    title: "Emotion & confidence detection",
    desc: "Reads tone and pacing to flag where you sounded unsure.",
  },
  {
    icon: BarChart3,
    title: "Real-time scoring",
    desc: "Every answer is scored as you go, across technical and communication axes.",
  },
  {
    icon: FileText,
    title: "Interview transcript",
    desc: "A full, searchable record of everything asked and answered.",
  },
  {
    icon: ClipboardCheck,
    title: "Final report",
    desc: "A breakdown of strengths, gaps, and what to practice next.",
  },
];

const PIPELINE = [
  {
    icon: FileSearch,
    title: "Read resume",
    desc: "Parses your resume to know your stack, role, and years of experience.",
  },
  {
    icon: Brain,
    title: "Understand experience",
    desc: "Builds a model of what you've actually built and shipped.",
  },
  {
    icon: ListChecks,
    title: "Generate questions",
    desc: "Drafts an opening line of questions tailored to your background.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Ask follow-ups",
    desc: "Listens to each answer and decides what to ask next — live.",
  },
  {
    icon: Gauge,
    title: "Evaluate answers",
    desc: "Scores depth, accuracy, and clarity of every response.",
  },
  {
    icon: ClipboardCheck,
    title: "Produce report",
    desc: "Compiles a final report with scores, gaps, and recommendations.",
  },
];

export default function LandingPage() {
  return (
    <div className="bg-[#060B16] text-slate-200 font-sans">
    <Navbar/>

      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute w-[560px] h-[560px] rounded-full opacity-[0.15] blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
            top: "-120px",
            left: "-120px",
          }}
        />
        <div
          className="absolute w-[480px] h-[480px] rounded-full opacity-[0.12] blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, #10B981 0%, transparent 70%)",
            bottom: "-160px",
            right: "-100px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1E2D45] bg-[#0D1526] px-3 py-1 text-xs text-slate-400 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AI Career &amp; Client Communication Coach
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-slate-100 leading-[1.1]">
              The interview room
              <br />
              that actually <span className="text-blue-400">listens</span>.
            </h1>

            <p className="mt-5 text-base text-slate-400 leading-relaxed max-w-md">
              Most prep tools recite a fixed list of questions. Ours reads your
              resume, hears your answers, and asks what a senior engineer would
              actually ask next.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/register"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 text-sm font-medium transition-colors"
              >
                Start a mock interview
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#engine"
                className="inline-flex items-center gap-2 rounded-lg border border-[#1E2D45] hover:border-[#2A3D5C] text-slate-300 px-5 py-3 text-sm font-medium transition-colors"
              >
                See how it thinks
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                Technical interview prep
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                Client communication practice
              </div>
            </div>
          </div>

          {/* Right: signature transcript panel */}
          <div className="relative">
            <div className="rounded-2xl border border-[#1E2D45] bg-[#0D1526] shadow-2xl shadow-blue-950/40 overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#1E2D45]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1E2D45]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1E2D45]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1E2D45]" />
                </div>
                <span className="text-[11px] text-slate-500 font-mono">
                  interview_session.live
                </span>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  live
                </div>
              </div>

              {/* Transcript */}
              <div className="p-5 space-y-4 font-mono text-[13px] leading-relaxed">
                <div>
                  <p className="text-blue-400 text-xs mb-1">AI INTERVIEWER</p>
                  <p className="text-slate-300">
                    Tell me about your latest project.
                  </p>
                </div>

                <div>
                  <p className="text-emerald-400 text-xs mb-1 flex items-center gap-1.5">
                    <Mic className="w-3 h-3" /> CANDIDATE
                  </p>
                  <p className="text-slate-300">
                    I built an e-commerce app using the MERN stack.
                  </p>
                </div>

                <div>
                  <p className="text-blue-400 text-xs mb-1">AI INTERVIEWER</p>
                  <p className="text-slate-300">
                    How did you handle authentication?
                  </p>
                </div>

                <div>
                  <p className="text-emerald-400 text-xs mb-1 flex items-center gap-1.5">
                    <Mic className="w-3 h-3" /> CANDIDATE
                  </p>
                  <p className="text-slate-300">
                    JWT tokens stored in HTTP-only cookies.
                  </p>
                </div>

                <div>
                  <p className="text-blue-400 text-xs mb-1">AI INTERVIEWER</p>
                  <p className="text-slate-300">
                    What security concerns exist with that approach — and how
                    would you scale this to 100k users?
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-slate-600 text-xs pt-1">
                  <span className="flex gap-0.5">
                    <span className="w-1 h-1 rounded-full bg-slate-600 animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1 h-1 rounded-full bg-slate-600 animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1 h-1 rounded-full bg-slate-600 animate-bounce" />
                  </span>
                  candidate is responding
                </div>
              </div>
            </div>

            <p className="mt-3 text-center text-xs text-slate-600">
              No two sessions ask the same questions in the same order.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────────── NOT A QUIZ ───────────────────────── */}
      <section className="border-t border-[#1E2D45]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-medium uppercase tracking-widest text-blue-400 mb-3">
              Why this is different
            </p>
            <h2 className="font-display text-3xl font-semibold text-slate-100 tracking-tight">
              This isn&apos;t a question bank.
            </h2>
            <p className="mt-3 text-slate-400">
              Quiz-style prep tools ask the same four questions to everyone.
              Real interviews don&apos;t work that way — and neither do we.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Static quiz */}
            <div className="rounded-2xl border border-[#1E2D45] bg-[#0D1526] p-6 opacity-60">
              <p className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-4">
                Static question bank
              </p>
              <div className="space-y-3">
                {[
                  "Q1 — Tell me about yourself",
                  "Q2 — What is your biggest weakness?",
                  "Q3 — Describe a challenge you faced",
                  "Q4 — Why should we hire you?",
                ].map((q) => (
                  <div
                    key={q}
                    className="flex items-center gap-3 rounded-lg border border-[#1E2D45] px-3 py-2.5 text-sm text-slate-500"
                  >
                    <X className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                    {q}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-slate-600">
                Same script, every candidate, every time.
              </p>
            </div>

            {/* Dynamic engine */}
            <div className="rounded-2xl border border-blue-500/30 bg-blue-600/[0.06] p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-blue-400 mb-4">
                Dynamic interview engine
              </p>
              <div className="space-y-3 font-mono text-xs leading-relaxed">
                <p className="text-slate-400">
                  <span className="text-blue-400">AI:</span> You mentioned a
                  MERN project. What challenge did you face scaling it?
                </p>
                <p className="text-slate-400">
                  <span className="text-emerald-400">You:</span> Our database
                  reads got slow under load.
                </p>
                <p className="text-slate-400">
                  <span className="text-blue-400">AI:</span> Interesting — how
                  would Redis help here?
                </p>
              </div>
              <p className="mt-4 text-xs text-blue-300/80">
                Built on what you said one minute ago.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── FEATURES ───────────────────────── */}
      <section id="features" className="border-t border-[#1E2D45]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-medium uppercase tracking-widest text-emerald-400 mb-3">
              Inside the interview room
            </p>
            <h2 className="font-display text-3xl font-semibold text-slate-100 tracking-tight">
              Everything a real interview has.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-[#1E2D45] bg-[#0D1526] p-5 hover:border-[#2A3D5C] transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-600/15 border border-blue-500/30 flex items-center justify-center mb-4">
                  <Icon className="w-4 h-4 text-blue-400" strokeWidth={1.75} />
                </div>
                <h3 className="text-sm font-semibold text-slate-100 mb-1.5">
                  {title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── ENGINE / PIPELINE ───────────────────────── */}
      <section id="engine" className="border-t border-[#1E2D45]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-medium uppercase tracking-widest text-blue-400 mb-3">
              The core intelligence
            </p>
            <h2 className="font-display text-3xl font-semibold text-slate-100 tracking-tight">
              How the engine thinks.
            </h2>
            <p className="mt-3 text-slate-400">
              Six steps run behind every session — resume parsing, context
              tracking, and live evaluation, in order.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E2D45] rounded-2xl overflow-hidden border border-[#1E2D45]">
            {PIPELINE.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="bg-[#0A0F1E] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-slate-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon
                    className="w-4 h-4 text-emerald-400"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="text-sm font-semibold text-slate-100 mb-1.5">
                  {title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── TRACKS ───────────────────────── */}
      <section id="tracks" className="border-t border-[#1E2D45]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-medium uppercase tracking-widest text-emerald-400 mb-3">
              Two ways to practice
            </p>
            <h2 className="font-display text-3xl font-semibold text-slate-100 tracking-tight">
              Built for the whole job, not just the resume.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#1E2D45] bg-[#0D1526] p-7">
              <div className="w-10 h-10 rounded-lg bg-blue-600/15 border border-blue-500/30 flex items-center justify-center mb-5">
                <Briefcase
                  className="w-5 h-5 text-blue-400"
                  strokeWidth={1.75}
                />
              </div>
              <h3 className="font-display text-lg font-semibold text-slate-100 mb-2">
                Technical interview prep
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Walk into a session as a senior engineer probes your projects —
                architecture decisions, trade-offs, and the &quot;how would you
                scale this&quot; question that always comes last.
              </p>
              <p className="text-xs text-slate-600">
                MERN · Backend systems · System design · Databases
              </p>
            </div>

            <div className="rounded-2xl border border-[#1E2D45] bg-[#0D1526] p-7">
              <div className="w-10 h-10 rounded-lg bg-emerald-600/15 border border-emerald-500/30 flex items-center justify-center mb-5">
                <Users
                  className="w-5 h-5 text-emerald-400"
                  strokeWidth={1.75}
                />
              </div>
              <h3 className="font-display text-lg font-semibold text-slate-100 mb-2">
                Client communication practice
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Rehearse the conversations that don&apos;t show up in textbooks
                — explaining delays, pushing back on scope, and presenting
                technical decisions to a non-technical client.
              </p>
              <p className="text-xs text-slate-600">
                Status updates · Scope negotiation · Difficult feedback
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── CTA ───────────────────────── */}
      <section className="border-t border-[#1E2D45]">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 tracking-tight">
            Your next interview won&apos;t be a guess.
          </h2>
          <p className="mt-3 text-slate-400 max-w-md mx-auto">
            Upload your resume, pick a track, and start a session that adapts to
            you in real time.
          </p>
          <a
            href="/register"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 text-sm font-medium transition-colors"
          >
            Start a mock interview
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ───────────────────────── FOOTER ───────────────────────── */}
      <footer className="border-t border-[#1E2D45]">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Brain className="w-3.5 h-3.5 text-blue-400" />
            <span>CareerCoach AI — Communication Coach</span>
          </div>
          <p>
            © {new Date().getFullYear()} CareerCoach AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
