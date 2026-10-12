"use client";

import React from "react";
import { EDUCATION_DATA, ACHIEVEMENTS_DATA } from "@/data/portfolioData";
import {
  GraduationCap,
  Trophy,
  Award,
  ExternalLink,
  Code2,
  Calendar,
  Building,
  CheckCircle,
} from "lucide-react";

export const EducationAchievements: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#07080c]/60">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* ======================================================== */}
          {/* EDUCATION (Left Column - 5 cols) */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300 backdrop-blur-md mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                <span>ACADEMICS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                Education
              </h2>

              <p className="text-sm sm:text-base text-slate-400 mb-8 leading-relaxed">
                Foundational engineering curriculum emphasizing electronics, telecommunications,
                signals, and computational systems.
              </p>

              {/* Education Card */}
              <div className="rounded-2xl border border-white/[0.08] bg-[#0c0e17]/85 p-6 sm:p-7 backdrop-blur-md card-rim relative group hover:border-violet-500/30 transition-all">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600/15 border border-violet-500/20 text-violet-300 mb-4">
                  <GraduationCap className="h-6 w-6" />
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span className="text-violet-400">{EDUCATION_DATA.status}</span>
                  <span className="flex items-center gap-1 bg-white/[0.04] px-2 py-0.5 rounded">
                    <Calendar className="h-3 w-3" />
                    {EDUCATION_DATA.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                  {EDUCATION_DATA.degree}
                </h3>

                <div className="flex items-center gap-2 text-sm text-slate-300 font-medium mb-4">
                  <Building className="h-4 w-4 text-violet-400 shrink-0" />
                  <span>{EDUCATION_DATA.college}</span>
                </div>

                <div className="pt-4 border-t border-white/[0.06] text-xs text-slate-400 leading-relaxed font-sans">
                  Rigorous coursework in Data Structures, Algorithms, Computer Networks, and Microprocessors.
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* ACHIEVEMENTS & CERTIFICATIONS (Right Column - 7 cols) */}
          {/* ======================================================== */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300 backdrop-blur-md mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>RECOGNITION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Achievements &amp; Certifications
            </h2>

            <p className="text-sm sm:text-base text-slate-400 mb-8 leading-relaxed">
              Demonstrated consistency in competitive problem solving and verified completion of industry certifications.
            </p>

            {/* LeetCode Milestone Card */}
            <div className="mb-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/20 via-[#0e1017] to-amber-950/10 p-6 backdrop-blur-md card-rim relative group hover:border-amber-400/50 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 shrink-0">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-white">
                        LeetCode Problem Solving
                      </h3>
                      <span className="font-mono text-[10px] text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded-full">
                        {ACHIEVEMENTS_DATA.leetcode.handle}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mt-1 text-sm">
                      <span className="font-bold text-amber-300">
                        {ACHIEVEMENTS_DATA.leetcode.problemsSolved} Problems Solved
                      </span>
                      <span className="text-slate-600">&bull;</span>
                      <span className="text-emerald-400 font-medium">
                        {ACHIEVEMENTS_DATA.leetcode.badge}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 mt-2">
                      {ACHIEVEMENTS_DATA.leetcode.description}
                    </p>
                  </div>
                </div>

                <a
                  href={ACHIEVEMENTS_DATA.leetcode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 self-start sm:self-center px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-xs font-semibold text-white border border-white/15 transition-colors shrink-0"
                >
                  <span>Verify Profile</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ACHIEVEMENTS_DATA.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/[0.08] bg-[#0c0e17]/80 p-4.5 backdrop-blur-sm card-rim hover:border-violet-500/30 transition-all flex items-start gap-3.5"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.08] text-violet-400 shrink-0 mt-0.5">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white tracking-tight leading-snug">
                      {cert.title}
                    </h4>
                    <div className="text-xs font-medium text-violet-300 mt-0.5">
                      {cert.issuer}
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono mt-1">
                      {cert.type}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
