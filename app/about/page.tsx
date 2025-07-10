import { Users, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <div className="flex items-center gap-4 mb-6">
        <Users className="h-8 w-8 text-blue-600" />
        <h2 className="text-3xl font-bold text-blue-800">About CivicSight</h2>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 mb-8">
        <p className="text-lg text-slate-700 dark:text-slate-200 mb-6">
          CivicSight is a civic-tech platform designed to bridge the gap between College Park residents and the city services that support them. Born from the belief that local problems deserve local solutions, our mission is to empower everyday citizens to speak up and take action—without jumping through bureaucratic hoops.
        </p>
        <p className="text-lg text-slate-700 dark:text-slate-200 mb-6">
          Whether you've spotted a pothole, noticed a flickering streetlight, or want to report public safety concerns, CivicSight turns your input into structured, trackable reports using the latest in natural language processing and open data integration. We don't just collect issues—we help solve them.
        </p>
        <p className="text-lg text-slate-700 dark:text-slate-200 mb-6">
          Built by a student-engineer passionate about civic engagement, this platform uses AI and automation to create transparency and drive impact. Think of it as your direct line to a better, smarter, more responsive College Park.
        </p>
        <p className="text-lg text-slate-700 dark:text-slate-200">
          We believe real change begins at the sidewalk level. Let's build stronger communities—one report at a time.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <HeartHandshake className="h-10 w-10 text-emerald-500 mb-2" />
        <a
          href="/report"
          className="inline-block px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold text-lg shadow-lg hover:bg-blue-700 transition"
        >
          Join the Movement
        </a>
      </div>
    </section>
  );
} 