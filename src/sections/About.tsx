"use client"
import { motion } from "framer-motion"
import { glassReveal, stagger } from "@/animations/motion"
import { SectionObserver } from "@/components/SectionObserver"

export function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center">
      <SectionObserver id="about" />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 w-full max-w-6xl"
      >
        <motion.div variants={glassReveal} className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg text-white">
          <div className="text-sm uppercase tracking-widest text-white/60">Summary</div>
          <div className="mt-2 text-white/90">
            Enthusiastic and dedicated 2nd-year B.Tech student in Computer Science & Engineering (Artificial Intelligence and Machine Learning) at GIET University, Gunupur. Passionate about AI systems, machine learning, and software development. Actively building strong foundations in programming, problem-solving, and intelligent system design.
          </div>
        </motion.div>
        <motion.div variants={glassReveal} className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg text-white">
          <div className="text-sm uppercase tracking-widest text-white/60">Education</div>
          <div className="mt-2 font-medium text-white/90">GIET University, Gunupur, Odisha</div>
          <div className="text-white/80">B.Tech — CSE (AI & ML), 2024 – 2028</div>
          <div className="mt-2 text-white/80">
            Second-year Computer Science student passionate about AI and software development. Hands-on experience in machine learning projects and hackathon participation.
          </div>
        </motion.div>
        <motion.div variants={glassReveal} className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg text-white">
          <div className="text-sm uppercase tracking-widest text-white/60">Technical Focus</div>
          <div className="mt-2 text-white/90">AI systems, ML foundations, programming fundamentals, problem solving.</div>
        </motion.div>
        <motion.div variants={glassReveal} className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg text-white">
          <div className="text-sm uppercase tracking-widest text-white/60">Career Objective</div>
          <div className="mt-2 text-white/90">Build intelligent systems with solid foundations in AI, ML, and software engineering.</div>
        </motion.div>
        <motion.div variants={glassReveal} className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg text-white">
          <div className="text-sm uppercase tracking-widest text-white/60">Languages</div>
          <div className="mt-2 text-white/90">English • Hindi • Odia</div>
        </motion.div>
      </motion.div>
    </section>
  )
}
