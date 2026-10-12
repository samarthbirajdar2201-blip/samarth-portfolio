"use client";

import React, { useState, useEffect } from "react";
import { GITHUB_REPOSITORIES, PERSONAL_INFO } from "@/data/portfolioData";
import {
  Github,
  Star,
  GitFork,
  ExternalLink,
  Code2,
  RefreshCw,
  FolderGit2,
  Sparkles,
} from "lucide-react";

interface RepoItem {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  updated_at?: string;
}

export const GitHubSection: React.FC = () => {
  const [repos, setRepos] = useState<RepoItem[]>(
    GITHUB_REPOSITORIES.map((r) => ({
      name: r.name,
      description: r.description,
      language: r.language,
      stargazers_count: r.stars,
      forks_count: r.forks,
      html_url: r.url,
    }))
  );
  const [loading, setLoading] = useState(false);
  const [apiSynced, setApiSynced] = useState(false);

  const fetchLiveRepos = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.github.com/users/samarthbirajdar2201-blip/repos?sort=updated&per_page=6");
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          // Filter out the profile readme repo if desired or format cleanly
          const formatted: RepoItem[] = data.map((item: any) => ({
            name: item.name,
            description: item.description || "Public repository containing clean source code and documentation.",
            language: item.language || "Code",
            stargazers_count: item.stargazers_count || 0,
            forks_count: item.forks_count || 0,
            html_url: item.html_url,
            updated_at: item.updated_at,
          }));
          setRepos(formatted);
          setApiSynced(true);
        }
      }
    } catch {
      // Gracefully maintain verified fallback repos
      setApiSynced(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveRepos();
  }, []);

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background radial highlight */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/5 blur-[140px] pointer-events-none"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300 backdrop-blur-md mb-4">
              <Github className="h-3.5 w-3.5 text-violet-400" />
              <span>OPEN SOURCE &amp; CODEBASE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
              Built in Code. Shared on GitHub.
            </h2>

            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
              Explore my projects, experiments, and ongoing journey as a software engineer.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={fetchLiveRepos}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
              title="Sync with GitHub API"
            >
              <RefreshCw className={`h-3 w-3 ${loading ? "animate-spin text-violet-400" : ""}`} />
              <span>{loading ? "Syncing..." : apiSynced ? "Live GitHub Synced" : "Refresh Data"}</span>
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-2 text-xs font-semibold hover:bg-slate-200 transition-colors shadow-lg"
            >
              <Github className="h-4 w-4" />
              <span>Explore My GitHub</span>
              <ExternalLink className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/[0.08] bg-[#0c0e17]/80 p-6 backdrop-blur-md card-rim hover:border-violet-500/40 hover:bg-[#111422] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Repo Top: Icon & external link indicator */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="h-4 w-4 text-violet-400" />
                    <span className="font-mono text-sm font-bold text-white group-hover:text-violet-200 transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-600 group-hover:text-violet-400 transition-colors" />
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 line-clamp-3">
                  {repo.description || "Public repository with source code and engineering documentation."}
                </p>
              </div>

              {/* Bottom Metadata: Language & Stars */}
              <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-violet-400 inline-block" />
                  <span>{repo.language || "TypeScript"}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-slate-500" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3 w-3 text-slate-500" />
                    {repo.forks_count}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-violet-400 shrink-0" />
            <span>
              All repositories are public and actively maintained under{" "}
              <strong className="text-white font-mono">@samarthbirajdar2201-blip</strong>.
            </span>
          </div>

          <a
            href={PERSONAL_INFO.githubRepos}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-400 hover:text-violet-300 font-medium inline-flex items-center gap-1 shrink-0"
          >
            <span>View All Repositories Tab</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
