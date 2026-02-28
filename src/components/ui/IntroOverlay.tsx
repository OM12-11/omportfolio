"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function IntroOverlay() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1400)
    return () => clearTimeout(t)
  }, [])
  return (
    <AnimatePresence>
      {!ready && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        >
          <div className="text-center text-white">
            <div className="text-sm tracking-widest">Initializing Om Prasad Bartia AI Interface...</div>
            <div className="mt-4 h-16 w-64 bg-gradient-to-r from-[#0ff] via-[#f0f] to-[#ff0] blur-md opacity-30" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
