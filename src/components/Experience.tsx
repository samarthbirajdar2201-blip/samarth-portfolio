"use client";

import React from "react";
import { EXPERIENCE_DATA } from "@/data/portfolioData";
import { Building2, Calendar, MapPin, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background radial highlight */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-0 w-[450px] h-[450px] rounded-full bg-violet-600/5 blur-[130px] pointer-events-none"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300 backdrop-blur-md mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            <span>PROFESSIONAL BACKGROUND</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Work Experience
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Engineering internships with government standardization bodies and AI technology startups &mdash;
            adhering to rigorous technical guidelines and hands-on experimentation.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/[0.1] ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Marker Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                  exp.isCurrent
                    ? "border-emerald-400 bg-emerald-500 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
                    : "border-violet-400 bg-violet-500 shadow-[0_0_10px_rgba(167,139,250,0.5)]"
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-black" />
              </div>

              {/* Experience Card */}
              <div className="rounded-2xl border border-white/[0.08] bg-[#0c0e17]/85 p-6 sm:p-8 backdrop-blur-md card-rim hover:border-violet-500/30 transition-all duration-300">
                {/* Header row: Role, Organization, Duration */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/[0.06]">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400 font-mono">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Present Role
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 text-sm text-violet-300 font-medium mt-1">
                      <span className="flex items-center gap-1.5">
                        <Building2 className="h-4 w-4 text-violet-400" />
                        {exp.organization}
                      </span>
                      {exp.location && (
                        <span className="flex items-center gap-1 text-slate-400 text-xs">
                          <MapPin className="h-3.5 w-3.5 text-slate-500" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-white/[0.04] px-3 py-1 rounded-lg border border-white/[0.08] self-start sm:self-center">
                    <Calendar className="h-3.5 w-3.5 text-violet-400" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Sub Focus if present */}
                {exp.focus && (
                  <div className="mb-4 inline-flex items-center gap-1.5 text-xs font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-500/20 px-3 py-1 rounded-md">
                    <Sparkles className="h-3 w-3 text-cyan-400" />
                    <span>Focus: {exp.focus}</span>
                  </div>
                )}

                {/* Responsibilities list */}
                <div className="space-y-2.5">
                  <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
                    Key Contributions &amp; Responsibilities
                  </div>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-violet-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
