"use client"
import { motion } from "framer-motion"
import { SectionObserver } from "@/components/SectionObserver"
import { glassReveal, stagger } from "@/animations/motion"

const certs = [
  {
    title: "GIAN — Cognitive Engineering & Human Factors (NIT Rourkela)",
    desc: "Completed 5-day certified course on human-centered design, cognitive systems, and usability engineering.",
  },
  {
    title: "Machine Learning & Communication Workshop",
    desc: "Hands-on experience in Python basics and ML implementation using Google Colab.",
  },
  {
    title: "Design Fundamentals with AI — Adobe (Score: 100%)",
    desc: "Learned AI-integrated design principles and practical applications of AI in creative workflows.",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="relative min-h-screen flex items-center justify-center">
      <SectionObserver id="certifications" />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 w-full max-w-6xl"
      >
        {certs.map((c) => (
          <motion.div
            key={c.title}
            variants={glassReveal}
            className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg text-white"
          >
            <div className="text-sm uppercase tracking-widest text-white/60">Certification</div>
            <div className="mt-2 font-medium text-white/90">{c.title}</div>
            <div className="mt-2 text-white/80">{c.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
