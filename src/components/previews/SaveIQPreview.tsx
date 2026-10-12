"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  DollarSign,
  PieChart,
  Bot,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Send,
  Calendar,
} from "lucide-react";

export const SaveIQPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "coach" | "goals">("overview");
  const [selectedQuestion, setSelectedQuestion] = useState<string>(
    "What is my current savings rate and health?"
  );
  const [coachResponse, setCoachResponse] = useState<string>(
    "Your current savings rate is 36.8% (₹16,550 saved from ₹45,000 income). Financial health: Strong. You are on track to complete your Laptop savings goal in 2 months."
  );

  const sampleQuestions = [
    {
      q: "What is my current savings rate and health?",
      a: "Your current savings rate is 36.8% (₹16,550 saved from ₹45,000 income). Financial health: Strong. You are on track to complete your Laptop savings goal in 2 months.",
    },
    {
      q: "How much did I spend on Food & Dining?",
      a: "You have spent ₹8,200 out of your ₹10,000 monthly food budget (82% used). ₹1,800 remaining for the next 11 days.",
    },
    {
      q: "Can I afford the Goa Trip milestone?",
      a: "Yes! Your Goa Trip goal has ₹21,000 saved out of ₹25,000 (84% completed). With your current monthly allocation of ₹4,000, it completes this month.",
    },
  ];

  const handleAskQuestion = (q: string, a: string) => {
    setSelectedQuestion(q);
    setCoachResponse(a);
  };

  return (
    <div className="rounded-xl border border-white/10 bg-[#0a0c14] overflow-hidden shadow-2xl">
      {/* Dashboard Mini Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] bg-[#0f121d] px-4 py-2.5 gap-2">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs border border-emerald-500/30">
            ₹
          </div>
          <span className="font-semibold text-xs text-white">SaveIQ Finance OS</span>
          <span className="text-[10px] font-mono text-slate-400 bg-white/[0.05] px-2 py-0.5 rounded">
            INR · Monthly
          </span>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1 rounded-lg bg-black/40 p-0.5 border border-white/[0.06]">
          <button
            type="button"
            onClick={() => setActiveTab("overview")}
            className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors ${
              activeTab === "overview"
                ? "bg-violet-600/30 text-violet-200 border border-violet-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Dashboard
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("goals")}
            className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors ${
              activeTab === "goals"
                ? "bg-violet-600/30 text-violet-200 border border-violet-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Goals (4)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("coach")}
            className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors ${
              activeTab === "coach"
                ? "bg-violet-600/30 text-violet-200 border border-violet-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Bot className="h-3 w-3 text-cyan-400" />
            AI Coach
          </button>
        </div>
      </div>

      {/* Main Tab Views */}
      {activeTab === "overview" && (
        <div className="p-4 space-y-3.5 bg-[#080910]">
          {/* Top Metrics Grid */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <span className="text-[10px] text-slate-400 block">Monthly Income</span>
              <span className="text-sm sm:text-base font-bold text-white block mt-0.5">₹45,000</span>
              <span className="text-[9px] text-emerald-400">Regular salary</span>
            </div>

            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <span className="text-[10px] text-slate-400 block">Total Spent</span>
              <span className="text-sm sm:text-base font-bold text-slate-200 block mt-0.5">₹28,450</span>
              <span className="text-[9px] text-amber-400">63.2% of income</span>
            </div>

            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-[10px] text-emerald-300 block">Saved Amount</span>
              <span className="text-sm sm:text-base font-bold text-emerald-400 block mt-0.5">₹16,550</span>
              <span className="text-[9px] text-emerald-300 font-semibold">36.8% rate</span>
            </div>
          </div>

          {/* Budget Progress Bars */}
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-2.5">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-300 font-medium">Monthly Category Budgets</span>
              <span className="text-slate-500 font-mono text-[10px]">₹28,450 / ₹32,000 Limit</span>
            </div>

            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                  <span>Housing & Rent</span>
                  <span className="text-white">₹15,000 / ₹15,000 (100%)</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-violet-500 rounded-full w-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                  <span>Food & Groceries</span>
                  <span className="text-white">₹8,200 / ₹10,000 (82%)</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-full w-[82%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                  <span>Tech & Subscriptions</span>
                  <span className="text-white">₹3,250 / ₹4,500 (72%)</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full w-[72%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Transaction Feed */}
          <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Calendar className="h-3 w-3 text-violet-400" />
              Latest: Amazon AWS Dev Hosting (₹1,450)
            </span>
            <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-1.5 py-0.5 rounded">
              Synced LocalStorage
            </span>
          </div>
        </div>
      )}

      {activeTab === "goals" && (
        <div className="p-4 space-y-3 bg-[#080910]">
          <div className="text-[11px] font-medium text-slate-300 flex items-center justify-between pb-1 border-b border-white/[0.06]">
            <span>Active Financial Targets & Forecasts</span>
            <span className="text-[10px] text-violet-400">4 Goals Active</span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-white">New Engineering Laptop</span>
                <span className="font-mono text-emerald-400 text-[11px]">80% · ₹52k / ₹65k</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mt-2">
                <div className="h-full bg-emerald-400 rounded-full w-[80%]" />
              </div>
              <span className="text-[10px] text-slate-400 mt-1 block">Forecast: Complete in 55 days</span>
            </div>

            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-white">Emergency Fund (6 Months)</span>
                <span className="font-mono text-cyan-300 text-[11px]">45% · ₹45k / ₹100k</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mt-2">
                <div className="h-full bg-cyan-400 rounded-full w-[45%]" />
              </div>
              <span className="text-[10px] text-slate-400 mt-1 block">Forecast: Auto-contributing ₹5k/mo</span>
            </div>

            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-white">Goa Team Vacation</span>
                <span className="font-mono text-violet-300 text-[11px]">84% · ₹21k / ₹25k</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mt-2">
                <div className="h-full bg-violet-400 rounded-full w-[84%]" />
              </div>
              <span className="text-[10px] text-slate-400 mt-1 block">Forecast: Target reached this month!</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === "coach" && (
        <div className="p-4 space-y-3 bg-[#080910]">
          <div className="flex items-center gap-2 pb-2 border-b border-white/[0.06]">
            <Bot className="h-4 w-4 text-violet-400" />
            <span className="text-xs font-semibold text-white">Rule-Based Local AI Finance Coach</span>
            <span className="ml-auto text-[9px] font-mono text-slate-400 bg-white/[0.06] px-1.5 py-0.5 rounded">
              Zero External API Dependency
            </span>
          </div>

          {/* Pre-canned interactive queries */}
          <div className="space-y-1.5">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-mono">
              Click supported query:
            </span>
            <div className="flex flex-col gap-1.5">
              {sampleQuestions.map((item) => (
                <button
                  key={item.q}
                  type="button"
                  onClick={() => handleAskQuestion(item.q, item.a)}
                  className={`text-left text-[11px] p-2 rounded-md transition-colors border ${
                    selectedQuestion === item.q
                      ? "bg-violet-600/20 text-violet-200 border-violet-500/40"
                      : "bg-white/[0.02] text-slate-300 border-white/[0.06] hover:bg-white/[0.05]"
                  }`}
                >
                  &ldquo;{item.q}&rdquo;
                </button>
              ))}
            </div>
          </div>

          {/* Coach Chat Output */}
          <div className="p-3 rounded-xl bg-violet-950/30 border border-violet-500/30 text-xs space-y-1.5">
            <div className="flex items-center gap-1.5 text-violet-300 font-semibold text-[11px]">
              <Sparkles className="h-3 w-3 text-cyan-400" />
              Coach Analysis:
            </div>
            <p className="text-[11px] text-slate-200 leading-relaxed font-sans">{coachResponse}</p>
          </div>
        </div>
      )}

      {/* Preview Footer */}
      <div className="border-t border-white/[0.08] bg-[#0c0e17] px-4 py-2 flex items-center justify-between text-[10px] text-slate-400">
        <span className="flex items-center gap-1">
          <ShieldCheck className="h-3 w-3 text-emerald-400" />
          100% Private Client-Side Architecture
        </span>
        <span className="font-mono text-slate-400">Next.js 16 App Router</span>
      </div>
    </div>
  );
};
