"use client";
import { useEffect, useState } from "react";
import { animate } from "framer-motion";

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.2,
      ease: [0.42, 0, 0.58, 1],
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return controls.stop;
  }, [value]);
  return <span>{display}</span>;
}

export default function AnimatedStats() {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-6">
      <StatCard
        label="Reports auto-classified by AI for faster routing"
        value={94}
        suffix="%"
      />
      <StatCard
        label="Departments connected for direct action"
        value={15}
        suffix="+"
      />
      <StatCard
        label="Users felt their issue was acknowledged by city staff"
        value={89}
        suffix="%"
      />
    </div>
  );
}

function StatCard({ label, value, suffix = "" }: { label: string; value: number; suffix?: string }) {
  return (
    <div className="bg-white/80 dark:bg-slate-800/80 rounded-xl shadow p-4 min-w-[180px] flex flex-col items-center">
      <div className="text-3xl font-extrabold text-blue-700 dark:text-blue-300 mb-1">
        <AnimatedNumber value={value} />
        <span className="text-xl font-bold">{suffix}</span>
      </div>
      <div className="text-sm text-slate-600 dark:text-slate-300 text-center">{label}</div>
    </div>
  );
} 