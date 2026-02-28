"use client"
import { useRef } from "react"
import { motion } from "framer-motion"
import { fadeUp, stagger } from "@/animations/motion"
import { SectionObserver } from "@/components/SectionObserver"

function TiltCard({ title }: { title: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width) * 2 - 1
    const y = ((e.clientY - r.top) / r.height) * 2 - 1
    el.style.transform = `rotateY(${x * 6}deg) rotateX(${y * -6}deg) translateZ(0)`
  }
  const onLeave = () => {
    const el = ref.current
    if (el) el.style.transform = ""
  }
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg text-white transition-transform will-change-transform"
    >
      <div className="text-sm uppercase tracking-widest text-white/60">Skill</div>
      <div className="mt-2 text-white/90">{title}</div>
      <div className="mt-4 h-2 w-full bg-white/10 rounded">
        <div className="h-2 w-3/4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded" />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center">
      <SectionObserver id="skills" />
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 w-full max-w-6xl">
        {[
          "Java",
          "C",
          "Python",
          "Object-Oriented Programming (Java)",
          "Basic Data Structures",
          "Problem Solving",
          "Python for ML",
          "Google Colab experimentation",
          "ML implementation fundamentals",
          "VS Code",
        ].map((t) => (
          <motion.div key={t} variants={fadeUp}>
            <TiltCard title={t} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
