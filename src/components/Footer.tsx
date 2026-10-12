"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Github, Linkedin, Code2, Mail, Heart, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#07080c] py-14 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-xl font-bold tracking-tight text-white flex items-center gap-1 group"
            >
              <span>SAMARTH BIRAJDAR</span>
              <span className="text-violet-400 group-hover:text-cyan-400 transition-colors">.</span>
            </a>
            <p className="text-xs text-slate-400 mt-1.5 flex items-center gap-1">
              <span>Designed and built with care.</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="h-8 w-8 rounded-full border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="h-8 w-8 rounded-full border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 hover:bg-white/[0.08] transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              className="h-8 w-8 rounded-full border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/30 hover:bg-white/[0.08] transition-colors"
            >
              <Code2 className="h-4 w-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Send Email"
              className="h-8 w-8 rounded-full border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-slate-400 hover:text-violet-400 hover:border-violet-500/30 hover:bg-white/[0.08] transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-2 h-8 w-8 rounded-full border border-violet-500/30 bg-violet-600/10 flex items-center justify-center text-violet-300 hover:bg-violet-600/20 transition-colors"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Tech Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Samarth Birajdar. All rights reserved.
          </div>
          <div className="font-mono text-[11px] text-slate-400">
            Next.js 16 &bull; React 19 &bull; TypeScript &bull; Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};
