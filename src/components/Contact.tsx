"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Mail,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  Code2,
  ExternalLink,
  Sparkles,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: PERSONAL_INFO.github,
      handle: "@samarthbirajdar2201-blip",
      icon: <Github className="h-5 w-5" />,
      color: "hover:text-white hover:border-white/30",
    },
    {
      name: "LinkedIn",
      url: PERSONAL_INFO.linkedin,
      handle: "/in/samarthbirajdar01",
      icon: <Linkedin className="h-5 w-5 text-blue-400" />,
      color: "hover:text-blue-300 hover:border-blue-500/40",
    },
    {
      name: "LeetCode",
      url: PERSONAL_INFO.leetcode,
      handle: "175+ Problems Solved",
      icon: <Code2 className="h-5 w-5 text-amber-400" />,
      color: "hover:text-amber-300 hover:border-amber-500/40",
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden bg-[#07080c]/80">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-violet-600/10 blur-[140px] pointer-events-none"
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Pill Label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-violet-300 backdrop-blur-md mb-6">
          <Sparkles className="h-3 w-3 text-violet-400" />
          <span>GET IN TOUCH</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 leading-tight">
          Have an Interesting Opportunity?
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed mb-10">
          I&apos;m always interested in connecting with people who are building meaningful
          products and exploring exciting engineering challenges.
        </p>

        {/* Primary CTA Box */}
        <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-[#0c0e17]/90 p-8 sm:p-10 backdrop-blur-xl shadow-2xl card-rim mb-12">
          <div className="flex flex-col items-center gap-6">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-violet-900/30">
              <Mail className="h-7 w-7" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-1">
                Direct Email Inquiries
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-lg sm:text-xl font-bold text-white hover:text-violet-300 transition-colors"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* Action Buttons: Direct mailto & Copy Email */}
            <div className="flex flex-wrap items-center justify-center gap-3 w-full">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-950 px-7 py-3 text-sm font-semibold hover:bg-slate-200 transition-all shadow-lg"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-white/[0.08] hover:text-white transition-all backdrop-blur-md"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Typically replies within 24 hours &bull; Open for Remote &amp; Onsite</span>
            </div>
          </div>
        </div>

        {/* Social Platforms Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-2xl border border-white/[0.08] bg-[#0c0e17]/80 p-5 backdrop-blur-md card-rim transition-all duration-200 flex flex-col items-center text-center group ${social.color}`}
            >
              <div className="mb-2">{social.icon}</div>
              <span className="text-sm font-bold text-white group-hover:text-violet-200 transition-colors">
                {social.name}
              </span>
              <span className="text-xs text-slate-400 mt-0.5 truncate max-w-full font-mono">
                {social.handle}
              </span>
              <span className="mt-2 text-[10px] text-violet-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Visit Profile <ExternalLink className="h-2.5 w-2.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
