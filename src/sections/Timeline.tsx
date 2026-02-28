"use client"
import { motion } from "framer-motion"
import { SectionObserver } from "@/components/SectionObserver"

function NeonTimeline() {
  return (
    <div className="flex justify-center">
      <svg width="4" height="600" viewBox="0 0 4 600" className="drop-shadow-[0_0_12px_#0ff]">
        <motion.rect
          x="0"
          y="0"
          width="4"
          height="600"
          fill="#00ffff"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
    </div>
  )
}

export function Timeline() {
  return (
    <section id="timeline" className="relative min-h-screen flex items-center justify-center">
      <SectionObserver id="timeline" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-6">
        <div className="text-white">
          <div className="text-3xl font-semibold">Hackathon Timeline</div>
          <div className="mt-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.5, once: false }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10"
            >
              <div className="text-sm uppercase tracking-widest text-white/60">2025</div>
              <div className="mt-2 font-medium text-white/90">Lernathon 3.0 — Runner-Up (2nd Position)</div>
              <div className="mt-2 text-white/80">Secured 2nd position by developing an innovative solution in a competitive environment.</div>
              <span className="absolute -inset-2 rounded-xl bg-fuchsia-400/10 blur-lg animate-pulse" />
            </motion.div>
          </div>
        </div>
        <NeonTimeline />
      </div>
    </section>
  )
}
