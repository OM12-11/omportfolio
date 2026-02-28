"use client"
import { motion } from "framer-motion"
import { SectionObserver } from "@/components/SectionObserver"

export function Contact() {
  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center px-6">
      <SectionObserver id="contact" />
      <motion.form
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4, once: false }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-2xl space-y-6 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl text-white"
      >
        <div className="text-center text-white/80">Let’s collaborate and build intelligent systems.</div>
        <div>
          <label className="text-sm text-white/60">Name</label>
          <input className="w-full bg-transparent border-b border-white/20 focus:border-fuchsia-400 outline-none py-2" />
        </div>
        <div>
          <label className="text-sm text-white/60">Email</label>
          <input className="w-full bg-transparent border-b border-white/20 focus:border-cyan-400 outline-none py-2" />
        </div>
        <div>
          <label className="text-sm text-white/60">Message</label>
          <textarea className="w-full bg-transparent border-b border-white/20 focus:border-yellow-300 outline-none py-2 h-28" />
        </div>
        <button type="submit" className="px-6 py-3 rounded-full bg-white/10 border border-white/20">
          Send
        </button>
        <div className="pt-4 grid grid-cols-3 gap-4 text-center">
          <a href="mailto:ompra329@gmail.com" className="px-4 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition">
            Email
          </a>
          <a href="https://www.linkedin.com/in/om-prasad-93833a334" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition">
            LinkedIn
          </a>
          <a href="https://github.com/OM12-11" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition">
            GitHub
          </a>
        </div>
      </motion.form>
    </section>
  )
}
