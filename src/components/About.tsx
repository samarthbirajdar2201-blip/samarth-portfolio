"use client";

import React from "react";
import { ABOUT_DATA } from "@/data/portfolioData";
import { Compass, Lightbulb, Code, BookOpen, Layers } from "lucide-react";

export const About: React.FC = () => {
  const icons = [
    <Compass key="01" className="h-5 w-5 text-violet-400" />,
    <Code key="02" className="h-5 w-5 text-indigo-400" />,
    <BookOpen key="03" className="h-5 w-5 text-cyan-400" />,
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background radial highlight */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300 backdrop-blur-md mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            <span>{ABOUT_DATA.label}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            {ABOUT_DATA.heading}
          </h2>

          <div className="max-w-3xl space-y-4 text-base sm:text-lg text-slate-300/90 leading-relaxed">
            <p>{ABOUT_DATA.introParagraph1}</p>
            <p>{ABOUT_DATA.introParagraph2}</p>
          </div>
        </div>

        {/* 3 Core Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {ABOUT_DATA.pillars.map((pillar, index) => (
            <div
              key={pillar.number}
              className="group relative rounded-2xl border border-white/[0.08] bg-[#0c0e17]/80 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:border-violet-500/30 hover:bg-[#101320] hover:-translate-y-1 card-rim"
            >
              {/* Top Row: Index number and Icon */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs font-bold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 rounded-md">
                  {pillar.number}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] group-hover:border-violet-500/30 group-hover:bg-violet-500/10 transition-colors">
                  {icons[index]}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white tracking-tight mb-3 group-hover:text-violet-200 transition-colors">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed">
                {pillar.description}
              </p>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center gap-2 text-xs text-slate-500 font-mono">
                <span className="h-1 w-1 rounded-full bg-slate-600 group-hover:bg-violet-400 transition-colors" />
                <span>Foundation Pillar</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
