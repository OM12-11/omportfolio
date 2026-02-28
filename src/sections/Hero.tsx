"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { fadeUp, stagger } from "@/animations/motion"
import { SectionObserver } from "@/components/SectionObserver"

const roles = [
  "Machine Learning Engineer",
  "AI Systems Developer",
  "Problem Solver",
  "Competitive Hackathon Finalist",
]

export function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      <SectionObserver id="hero" />
      <motion.div variants={stagger} initial="hidden" animate="show" className="text-center">
        <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-300">
          Om Prasad Bartia
        </motion.h1>
        <motion.div variants={fadeUp} className="mt-3 text-lg text-white/80">
          AI & Machine Learning Engineer
        </motion.div>
        <motion.div variants={fadeUp} className="mt-1 text-sm text-white/60">
          AI Systems Enthusiast | Software Developer
        </motion.div>
        <motion.div variants={fadeUp} className="mt-4 text-xl text-white/80">
          <RotatingText items={roles} />
        </motion.div>
        <motion.div variants={fadeUp} className="mt-10 flex justify-center">
          <div className="w-6 h-10 rounded-full border border-white/30 flex items-start justify-center">
            <div className="w-1 h-2 bg-white/70 rounded mt-1 animate-bounce" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function RotatingText({ items }: { items: string[] }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), 1200)
    return () => clearInterval(id)
  }, [items.length])
  return (
    <motion.span
      key={items[i]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="inline-block"
    >
      {items[i]}
    </motion.span>
  )
}
