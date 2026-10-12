"use client";

import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Users,
  Shield,
  CheckCircle2,
  CalendarCheck,
  Building,
  Navigation,
} from "lucide-react";

export const AttendanceTrackingPreview: React.FC = () => {
  const [activeModule, setActiveModule] = useState<"admin" | "employee">("admin");
  const [isCheckedIn, setIsCheckedIn] = useState(true);

  const employees = [
    {
      id: "EMP-104",
      name: "Samarth Birajdar",
      dept: "Frontend Engineering",
      checkIn: "09:12 AM",
      location: "Bengaluru HQ (GPS Verified)",
      status: "Present",
      hours: "7h 15m",
    },
    {
      id: "EMP-108",
      name: "Rohan Deshmukh",
      dept: "Backend Systems",
      checkIn: "09:28 AM",
      location: "Bengaluru HQ (GPS Verified)",
      status: "Present",
      hours: "6h 58m",
    },
    {
      id: "EMP-112",
      name: "Ananya Iyer",
      dept: "AI & Data Solutions",
      checkIn: "08:55 AM",
      location: "Remote (Geo-fenced)",
      status: "Present",
      hours: "7h 35m",
    },
    {
      id: "EMP-119",
      name: "Vikram Patil",
      dept: "Quality Assurance",
      checkIn: "--:--",
      location: "--",
      status: "On Leave",
      hours: "0h 00m",
    },
  ];

  return (
    <div className="rounded-xl border border-white/10 bg-[#0a0c14] overflow-hidden shadow-2xl">
      {/* Top Bar with Role Switcher */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] bg-[#0f121d] px-4 py-2.5 gap-2">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs border border-indigo-500/30">
            <Building className="h-3.5 w-3.5" />
          </div>
          <span className="font-semibold text-xs text-white">Attendance &amp; Location Suite</span>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
            <Navigation className="h-2.5 w-2.5" /> GPS Active
          </span>
        </div>

        {/* Module Switcher */}
        <div className="flex items-center gap-1 rounded-lg bg-black/40 p-0.5 border border-white/[0.06]">
          <button
            type="button"
            onClick={() => setActiveModule("admin")}
            className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors ${
              activeModule === "admin"
                ? "bg-indigo-600/30 text-indigo-200 border border-indigo-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Shield className="h-3 w-3" />
            Admin Portal
          </button>
          <button
            type="button"
            onClick={() => setActiveModule("employee")}
            className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors ${
              activeModule === "employee"
                ? "bg-indigo-600/30 text-indigo-200 border border-indigo-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Users className="h-3 w-3" />
            Employee Self-Service
          </button>
        </div>
      </div>

      {activeModule === "admin" ? (
        <div className="p-4 space-y-3 bg-[#080910]">
          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <span className="text-[10px] text-slate-400 block">Total Staff</span>
              <span className="text-sm sm:text-base font-bold text-white block mt-0.5">38 Members</span>
              <span className="text-[9px] text-slate-400">All registered</span>
            </div>

            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-[10px] text-emerald-300 block">Present Today</span>
              <span className="text-sm sm:text-base font-bold text-emerald-400 block mt-0.5">35 / 38</span>
              <span className="text-[9px] text-emerald-400">92% Compliance</span>
            </div>

            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <span className="text-[10px] text-slate-400 block">GPS Validated</span>
              <span className="text-sm sm:text-base font-bold text-indigo-300 block mt-0.5">100% Verified</span>
              <span className="text-[9px] text-indigo-400">No spoofing detected</span>
            </div>
          </div>

          {/* Employee Attendance Table */}
          <div className="rounded-lg border border-white/[0.08] overflow-hidden">
            <div className="bg-white/[0.03] px-3 py-2 border-b border-white/[0.06] text-[11px] font-semibold text-slate-300 flex items-center justify-between">
              <span>Live Attendance Log (MySQL Backed)</span>
              <span className="text-[10px] text-slate-400 font-mono">Date: Today</span>
            </div>
            <div className="divide-y divide-white/[0.04] text-[11px]">
              {employees.map((emp) => (
                <div
                  key={emp.id}
                  className="px-3 py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 hover:bg-white/[0.02]"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-slate-500">{emp.id}</span>
                    <span className="font-medium text-white">{emp.name}</span>
                    <span className="text-[10px] text-slate-400 hidden md:inline">({emp.dept})</span>
                  </div>
                  <div className="flex items-center gap-3 text-[10px]">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock className="h-3 w-3 text-slate-500" />
                      {emp.checkIn}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded font-medium ${
                        emp.status === "Present"
                          ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                          : "bg-amber-500/15 text-amber-300 border border-amber-500/30"
                      }`}
                    >
                      {emp.status}
                    </span>
                    <span className="font-mono text-slate-300">{emp.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 space-y-3.5 bg-[#080910]">
          {/* Employee Self-Service Punch Simulator */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-white block">Current Work Session</span>
                <span className="text-[10px] text-slate-400">Staff: Samarth Birajdar &bull; EMP-104</span>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                7h 15m Logged
              </span>
            </div>

            {/* Simulated GPS Geolocation Status */}
            <div className="p-2.5 rounded-lg bg-indigo-950/20 border border-indigo-500/20 text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-indigo-300 font-medium text-[11px]">
                <MapPin className="h-3 w-3 text-cyan-400" />
                GPS Geo-Fence Verification:
              </div>
              <div className="text-[10px] text-slate-300 font-mono flex flex-wrap items-center gap-3">
                <span>Lat: 12.9716&deg; N</span>
                <span>Long: 77.5946&deg; E</span>
                <span className="text-emerald-400">&bull; Within Designated Radius (15m)</span>
              </div>
            </div>

            {/* Punch Action Simulator */}
            <div className="flex items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => setIsCheckedIn(!isCheckedIn)}
                className={`flex-1 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  isCheckedIn
                    ? "bg-rose-500/20 text-rose-300 border border-rose-500/30 hover:bg-rose-500/30"
                    : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30"
                }`}
              >
                <CalendarCheck className="h-3.5 w-3.5" />
                {isCheckedIn ? "Punch Out & Sign Off" : "Punch In with GPS Verification"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preview Footer */}
      <div className="border-t border-white/[0.08] bg-[#0c0e17] px-4 py-2 flex items-center justify-between text-[10px] text-slate-400">
        <span className="flex items-center gap-1">
          <Shield className="h-3 w-3 text-indigo-400" />
          Role-Based Access Control (RBAC) &bull; MySQL Schema
        </span>
        <span className="font-mono text-slate-400">React.js + Node.js REST API</span>
      </div>
    </div>
  );
};
