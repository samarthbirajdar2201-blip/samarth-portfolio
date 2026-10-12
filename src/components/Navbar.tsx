"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-300 ${
          isScrolled ? "mt-3" : "mt-4"
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-full border px-4 py-2.5 sm:px-6 transition-all duration-300 ${
            isScrolled
              ? "border-white/10 bg-[#0c0e17]/85 backdrop-blur-md shadow-2xl shadow-black/60"
              : "border-white/[0.07] bg-[#0c0e17]/60 backdrop-blur-sm"
          }`}
        >
          {/* Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded-full py-1"
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 p-[1px] shadow-sm">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0a0c14] font-bold text-xs text-white group-hover:text-violet-300 transition-colors">
                SB
              </div>
            </div>
            <div className="flex items-center">
              <span className="font-semibold tracking-tight text-base sm:text-lg text-white">
                SAMARTH BIRAJDAR<span className="text-violet-400">.</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-colors rounded-full ${
                    isActive
                      ? "text-white bg-white/[0.08]"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-2.5">
            {/* Status indicator badge (desktop) */}
            <div className="hidden lg:flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              </span>
              <span>Open to Roles</span>
            </div>

            {/* Let's Connect CTA */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="button-glow-border hidden sm:inline-block"
            >
              <span className="flex items-center gap-1.5 rounded-full bg-[#0a0c14] px-4 py-1.5 text-xs font-semibold text-white shadow-inner transition-colors hover:bg-[#121522]">
                <Sparkles className="h-3 w-3 text-violet-400" />
                Let&apos;s Connect
              </span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white md:hidden focus:outline-none focus:ring-2 focus:ring-violet-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-[#0d0f19]/95 p-4 backdrop-blur-xl shadow-2xl md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/[0.06] hover:text-white transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-slate-500">→</span>
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-white/[0.08] flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Let&apos;s Connect
                </a>
                <div className="flex items-center justify-center gap-1.5 py-1 text-xs text-emerald-400 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Actively interviewing for frontend & SDE roles
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
