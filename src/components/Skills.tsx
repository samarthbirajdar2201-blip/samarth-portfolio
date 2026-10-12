"use client";

import React from "react";
import { SKILLS_DATA } from "@/data/portfolioData";
import {
  Code,
  Layout,
  Server,
  Database,
  BrainCircuit,
  Wrench,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export const Skills: React.FC = () => {
  const categoryIcons: Record<string, React.ReactNode> = {
    "Programming Languages": <Code className="h-4 w-4 text-amber-400" />,
    "Frontend Development": <Layout className="h-4 w-4 text-violet-400" />,
    "Backend Development": <Server className="h-4 w-4 text-cyan-400" />,
    "Databases": <Database className="h-4 w-4 text-emerald-400" />,
    "AI & Machine Learning": <BrainCircuit className="h-4 w-4 text-rose-400" />,
    "Tools & Platforms": <Wrench className="h-4 w-4 text-indigo-400" />,
  };

  return (
    <section id="skills" className="relative py-20 sm:py-28 overflow-hidden bg-[#07080c]/50">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300 backdrop-blur-md mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Skills &amp; Technology Stack
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Targeted across frontend engineering, systems development, and applied AI &mdash;
            emphasizing type-safety, clean component architecture, and algorithmic problem solving.
          </p>
        </div>

        {/* Frontend Core Spotlight Banner */}
        <div className="mb-12 rounded-2xl border border-violet-500/30 bg-gradient-to-r from-violet-950/30 via-[#0e101c] to-indigo-950/30 p-5 sm:p-6 backdrop-blur-md card-rim">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/20 text-violet-300 border border-violet-500/30">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span>Primary Target: Frontend &amp; SDE Roles</span>
                  <span className="text-[10px] uppercase font-mono bg-violet-500/20 text-violet-300 px-2 py-0.5 rounded-full border border-violet-500/30">
                    High Priority Focus
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  Deep experience in modern React ecosystem: React 19, Next.js 16 App Router,
                  TypeScript generics &amp; interfaces, and modern JavaScript.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <span className="px-3 py-1 rounded-full bg-violet-500/15 border border-violet-500/30 text-xs font-semibold text-violet-200">
                React.js
              </span>
              <span className="px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-xs font-semibold text-indigo-200">
                Next.js
              </span>
              <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-xs font-semibold text-cyan-200">
                TypeScript
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-xs font-semibold text-amber-200">
                JavaScript
              </span>
            </div>
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.categories.map((category) => (
            <div
              key={category.name}
              className="rounded-2xl border border-white/[0.08] bg-[#0c0e17]/80 p-6 backdrop-blur-md card-rim hover:border-white/15 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-white/[0.06]">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.05] border border-white/[0.08]">
                    {categoryIcons[category.name] || <Code className="h-4 w-4 text-violet-400" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-tight">
                      {category.name}
                    </h4>
                  </div>
                </div>

                {/* Skills Item List */}
                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`group flex items-center justify-between rounded-xl px-3 py-2 text-xs transition-all ${
                        skill.prominent
                          ? "bg-violet-600/15 border border-violet-500/30 text-white shadow-sm"
                          : "bg-white/[0.02] border border-white/[0.05] text-slate-300 hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            skill.prominent
                              ? "bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.8)]"
                              : "bg-slate-500 group-hover:bg-violet-400"
                          }`}
                        />
                        <span className="font-medium text-xs text-slate-100">{skill.name}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono text-right max-w-[150px] truncate">
                        {skill.note}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Tag */}
              <div className="mt-5 pt-3 border-t border-white/[0.04] text-[10px] text-slate-500 font-mono">
                {category.skills.length} verified technologies
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
