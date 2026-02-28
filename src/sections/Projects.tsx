"use client"
import { motion } from "framer-motion"
import { SectionObserver } from "@/components/SectionObserver"

function ProjectCard() {
  return (
    <motion.div
      initial={{ rotateY: -10, opacity: 0 }}
      whileInView={{ rotateY: 0, opacity: 1 }}
      viewport={{ amount: 0.4, once: false }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white"
    >
      <div className="text-sm uppercase tracking-widest text-white/60">Project</div>
      <div className="mt-2 text-white/90">Cinematic AI Portfolio</div>
      <a href="https://github.com" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
        <span>GitHub</span>
        <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-ping" />
      </a>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center">
      <SectionObserver id="projects" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 w-full max-w-6xl">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProjectCard key={i} />
        ))}
      </div>
    </section>
  )
}
