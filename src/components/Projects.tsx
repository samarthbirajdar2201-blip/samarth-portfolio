"use client";

import React, { useState } from "react";
import { FEATURED_PROJECTS } from "@/data/portfolioData";
import { SaveIQPreview } from "@/components/previews/SaveIQPreview";
import { AttendanceTrackingPreview } from "@/components/previews/AttendanceTrackingPreview";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowRight,
  Code2,
} from "lucide-react";

export const Projects: React.FC = () => {
  const [activeProjectTab, setActiveProjectTab] = useState<"all" | "featured" | "systems">("all");

  const saveIQ = FEATURED_PROJECTS.find((p) => p.id === "saveiq");
  const attendance = FEATURED_PROJECTS.find((p) => p.id === "attendance-tracking");
  const additionalProjects = FEATURED_PROJECTS.filter(
    (p) => p.id !== "saveiq" && p.id !== "attendance-tracking"
  );

  return (
    <section id="projects" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-indigo-600/5 blur-[140px] pointer-events-none"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300 backdrop-blur-md mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            <span>FEATURED PROJECTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Engineered with Precision.
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Real-world applications built with modern frontend frameworks, structured state
            management, resilient data contracts, and algorithmic problem-solving.
          </p>
        </div>

        {/* ======================================================== */}
        {/* FEATURED PROJECT 1: SaveIQ */}
        {/* ======================================================== */}
        {saveIQ && (
          <div className="mb-20 lg:mb-28 rounded-3xl border border-white/10 bg-[#0c0e17]/90 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl card-rim relative group">
            {/* Subtle card glow */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Project Details */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-0.5 rounded-full font-semibold">
                      Featured Project 01
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Personal Finance</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                    {saveIQ.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed mb-6">
                    {saveIQ.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2.5 mb-8">
                    <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
                      Key Highlights &amp; Capabilities
                    </div>
                    {saveIQ.features.slice(0, 5).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8">
                    {saveIQ.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/[0.08]">
                  {saveIQ.githubUrl && (
                    <a
                      href={saveIQ.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-2.5 text-xs font-semibold hover:bg-slate-200 transition-colors shadow-md"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub Repository</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}

                  <a
                    href="#saveiq-preview"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-slate-200 hover:bg-white/[0.08] hover:text-white transition-colors"
                  >
                    <span>Interactive Preview in View</span>
                    <Sparkles className="h-3.5 w-3.5 text-violet-400" />
                  </a>
                </div>
              </div>

              {/* Right Column: Live UI Component Preview */}
              <div id="saveiq-preview" className="lg:col-span-6 w-full">
                <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Interactive Component &mdash; Try Switching Tabs Below
                  </span>
                  <span className="text-slate-400">Live Simulation</span>
                </div>
                <SaveIQPreview />
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* FEATURED PROJECT 2: Attendance & Location Tracking System */}
        {/* ======================================================== */}
        {attendance && (
          <div className="mb-20 lg:mb-28 rounded-3xl border border-white/10 bg-[#0c0e17]/90 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl card-rim relative group">
            {/* Subtle card glow */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Live UI Component Preview */}
              <div className="lg:col-span-6 w-full order-2 lg:order-1">
                <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                    Interactive Component &mdash; Try Admin vs Employee Views
                  </span>
                  <span className="text-slate-400">Live Simulation</span>
                </div>
                <AttendanceTrackingPreview />
              </div>

              {/* Right Column: Project Details */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full order-1 lg:order-2">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full font-semibold">
                      Featured Project 02
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Enterprise Platform</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                    {attendance.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed mb-6">
                    {attendance.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2.5 mb-8">
                    <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
                      Key Highlights &amp; Architecture
                    </div>
                    {attendance.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8">
                    {attendance.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/[0.08]">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md hover:brightness-110 transition-all"
                  >
                    <span>Discuss Architecture</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>

                  <span className="text-xs text-slate-400 font-mono">
                    React &bull; Node.js &bull; MySQL Relational Schema
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* ADDITIONAL VERIFIED PROJECTS GRID */}
        {/* ======================================================== */}
        <div className="pt-8 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-violet-400">
                Additional Engineering Work
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Algorithms, Notes &amp; Prototypes
              </h3>
            </div>
            <a
              href="https://github.com/samarthbirajdar2201-blip?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors border border-white/10 px-3.5 py-2 rounded-full bg-white/[0.03]"
            >
              <span>View All Repositories on GitHub</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {additionalProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl border border-white/[0.08] bg-[#0c0e17]/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-violet-500/30 hover:bg-[#101320] hover:-translate-y-1 card-rim flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                    <span className="text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded text-[10px]">
                      {project.category}
                    </span>
                    {project.githubUrl && <Github className="h-3.5 w-3.5 text-slate-400" />}
                  </div>

                  <h4 className="text-lg font-bold text-white tracking-tight mb-2.5">
                    {project.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {project.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="text-violet-400 mt-0.5">&bull;</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-white/[0.04] px-2 py-0.5 text-[11px] font-mono text-slate-300 border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300 hover:text-white transition-colors"
                    >
                      <span>Explore Repository</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
