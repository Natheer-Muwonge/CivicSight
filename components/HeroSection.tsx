"use client";
import { motion } from "framer-motion";
import { Megaphone, Building2 } from "lucide-react";
import AnimatedStats from "./AnimatedStats";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-950 dark:to-blue-900 py-20">
      {/* Animated SVG or floating icons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 container mx-auto flex flex-col items-center text-center"
      >
        <div className="flex items-center gap-3 mb-4">
          <Building2 className="h-10 w-10 text-blue-600" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 dark:text-blue-200 drop-shadow">
            CivicSight
          </h1>
        </div>
        <p className="text-lg md:text-2xl text-slate-700 dark:text-slate-200 mb-8 max-w-2xl">
          Empowering College Park to report, track, and resolve local issues—AI-powered, community-driven.
        </p>
        <Link
          href="/report"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold text-lg shadow-lg hover:bg-blue-700 transition"
        >
          <Megaphone className="h-5 w-5" />
          Report an Issue
        </Link>
        <AnimatedStats />
      </motion.div>
      {/* Subtle animated background shapes */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        <svg viewBox="0 0 1440 320" fill="none" className="w-full h-full">
          <path
            fill="#2563eb"
            fillOpacity="0.08"
            d="M0,224L60,202.7C120,181,240,139,360,154.7C480,171,600,245,720,250.7C840,256,960,192,1080,154.7C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </motion.div>
    </section>
  );
} 