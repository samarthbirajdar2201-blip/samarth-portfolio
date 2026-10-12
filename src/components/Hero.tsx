"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Code2,
  Terminal,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Layers,
  Cpu,
  Zap,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"code" | "preview">("code");
  const [copiedCode, setCopiedCode] = useState(false);

  const codeSnippet = `// Samarth Birajdar — Frontend & Systems
interface Engineer {
  name: "Samarth Birajdar";
  focus: "Frontend Architecture & AI Solutions";
  strengths: ["React.js", "Next.js", "TypeScript", "Python"];
  mindset: "Curious by nature, engineer by mindset";
}

export function buildDigitalExperience(): Product {
  return {
    interface: "Pixel-perfect, accessible & responsive",
    performance: "Optimized Core Web Vitals & lightweight",
    state: "Predictable, robust data contracts",
    impact: "Delivering real value for users & teams"
  };
}`;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden"
    >
      {/* Background radial glow and Steps-style grid */}
      <div className="absolute inset-0 bg-grid-steps pointer-events-none" />
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] sm:w-[800px] sm:h-[450px] rounded-full bg-violet-600/10 blur-[130px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-10 w-[350px] h-[350px] rounded-full bg-cyan-500/8 blur-[120px] pointer-events-none"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Pill Label */}
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-violet-300 backdrop-blur-md mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400"></span>
              </span>
              <span>SOFTWARE ENGINEER IN THE MAKING</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] sm:leading-[1.1] mb-6">
              Building{" "}
              <span className="gradient-digital font-extrabold pb-1 inline-block">
                Digital Experiences
              </span>{" "}
              That Matter.
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-8">
              I&apos;m Samarth Birajdar, an aspiring software engineer passionate about building
              intuitive web applications, solving challenging problems, and creating impactful
              digital experiences using modern frontend technologies.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {/* Primary Action 1 */}
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/50 hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Primary Action 2 */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/[0.08] hover:border-white/30 active:scale-[0.98] transition-all"
              >
                <Sparkles className="h-4 w-4 text-violet-400" />
                <span>Let&apos;s Connect</span>
              </a>
            </div>

            {/* Secondary Text Link */}
            <div className="mb-10">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-400 hover:text-violet-300 transition-colors"
              >
                <span>View GitHub Profile</span>
                <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Compact Technology Stack */}
            <div className="pt-6 border-t border-white/[0.08] w-full">
              <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-2.5">
                Core Engineering Stack
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-200 font-medium">
                {PERSONAL_INFO.coreStack.map((tech, index) => (
                  <React.Fragment key={tech}>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] hover:border-violet-500/30 transition-colors">
                      {tech}
                    </span>
                    {index < PERSONAL_INFO.coreStack.length - 1 && (
                      <span className="text-slate-600 hidden sm:inline">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Floating Developer Workspace Visual Element */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Subtle ambient light card behind */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-600/30 via-indigo-600/20 to-cyan-500/20 blur-xl opacity-70 group-hover:opacity-100 transition duration-1000" />

              {/* Main Workspace Frame */}
              <div className="relative rounded-2xl border border-white/10 bg-[#0d0f18]/90 backdrop-blur-xl shadow-2xl overflow-hidden card-rim">
                {/* Window Top Bar */}
                <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#090b12]/80 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 font-mono text-xs text-slate-400 hidden sm:inline-block">
                      samarth-workspace
                    </span>
                  </div>

                  {/* Tab Selector */}
                  <div className="flex items-center gap-1 rounded-lg bg-black/40 p-0.5 border border-white/[0.06]">
                    <button
                      type="button"
                      onClick={() => setActiveTab("code")}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                        activeTab === "code"
                          ? "bg-violet-600/30 text-violet-200 border border-violet-500/30"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <Code2 className="h-3 w-3" />
                      <span>Code</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("preview")}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                        activeTab === "preview"
                          ? "bg-violet-600/30 text-violet-200 border border-violet-500/30"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <Layers className="h-3 w-3" />
                      <span>Preview</span>
                    </button>
                  </div>
                </div>

                {/* Window Content */}
                {activeTab === "code" ? (
                  <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto bg-[#080910]">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 pb-2 mb-3 border-b border-white/[0.06]">
                      <span className="flex items-center gap-1 text-slate-400">
                        <Terminal className="h-3 w-3 text-violet-400" />
                        src/portfolio/Engineer.ts
                      </span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        TypeScript strict
                      </span>
                    </div>
                    <pre className="text-slate-300 leading-relaxed whitespace-pre font-mono">
                      <code>
                        <span className="text-slate-500">// Samarth Birajdar &mdash; Core Definition</span>
                        {"\n"}
                        <span className="text-violet-400">interface</span>{" "}
                        <span className="text-cyan-300">SoftwareEngineer</span> {"{\n"}
                        {"  "}name: <span className="text-emerald-300">&quot;Samarth Birajdar&quot;</span>;{"\n"}
                        {"  "}role: <span className="text-emerald-300">&quot;Frontend & Systems Engineer&quot;</span>;{"\n"}
                        {"  "}stack: [<span className="text-amber-300">&quot;React.js&quot;</span>, <span className="text-amber-300">&quot;Next.js&quot;</span>, <span className="text-amber-300">&quot;TypeScript&quot;</span>, <span className="text-amber-300">&quot;Python&quot;</span>];{"\n"}
                        {"  "}leetcode: <span className="text-indigo-300">&quot;175+ Problems Solved&quot;</span>;{"\n"}
                        {"  "}mindset: <span className="text-emerald-300">&quot;Curious by nature, engineer by mindset&quot;</span>;{"\n"}
                        {"}\n\n"}
                        <span className="text-violet-400">export function</span>{" "}
                        <span className="text-blue-400">deliverProduct</span>(): <span className="text-cyan-300">Output</span> {"{\n"}
                        {"  "}<span className="text-violet-400">return</span> {"{\n"}
                        {"    "}ui: <span className="text-amber-300">&quot;Pixel-perfect, accessible & modern&quot;</span>,{"\n"}
                        {"    "}architecture: <span className="text-amber-300">&quot;Clean components & typed APIs&quot;</span>,{"\n"}
                        {"    "}readyForScale: <span className="text-indigo-400">true</span>{"\n"}
                        {"  };\n"}
                        {"}"}
                      </code>
                    </pre>
                  </div>
                ) : (
                  <div className="p-5 bg-[#080910] space-y-3.5">
                    <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                      <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                        <Zap className="h-3.5 w-3.5 text-amber-400" />
                        Component Live State
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono">200 OK · 16ms</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                          LeetCode Solved
                        </div>
                        <div className="text-xl font-bold text-white mt-0.5">175+</div>
                        <div className="text-[10px] text-emerald-400 mt-0.5">50-Day Badge Earned</div>
                      </div>

                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                          Target Roles
                        </div>
                        <div className="text-sm font-bold text-violet-300 mt-0.5">Frontend / SDE</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">React & Full Stack</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-violet-950/20 border border-violet-500/20 text-xs text-slate-300">
                      <div className="flex items-center gap-1.5 font-medium text-violet-300 mb-1">
                        <CheckCircle2 className="h-3.5 w-3.5 text-violet-400" />
                        Verified Engineering Highlights
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        STQC Government of India Technical Intern &bull; iKawn AI Intern &bull; B.Tech E&amp;TC
                        at SVERI College (2023–2027).
                      </p>
                    </div>
                  </div>
                )}

                {/* Workspace Footer Bar */}
                <div className="flex items-center justify-between border-t border-white/[0.06] bg-[#0a0c14] px-4 py-2.5 text-[11px] text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Status: Ready
                    </span>
                    <span className="hidden sm:inline">UTF-8</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400">
                    <span>git:(main)</span>
                    <span className="text-emerald-400">&bull; clean</span>
                  </div>
                </div>
              </div>

              {/* Floating Pill Badges */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 rounded-full border border-white/10 bg-[#0f121d]/90 px-3.5 py-1.5 text-xs text-slate-200 backdrop-blur-md shadow-xl flex items-center gap-2 card-rim animate-float-slow">
                <Cpu className="h-3.5 w-3.5 text-cyan-400" />
                <span className="font-medium text-[11px] sm:text-xs">React 18 &bull; Next.js 14 App Router</span>
              </div>

              <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 rounded-full border border-violet-500/30 bg-[#121422]/90 px-3 py-1.5 text-xs text-violet-200 backdrop-blur-md shadow-xl flex items-center gap-1.5 card-rim animate-float-reverse">
                <Sparkles className="h-3 w-3 text-violet-400" />
                <span className="font-medium text-[11px]">Clean Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
