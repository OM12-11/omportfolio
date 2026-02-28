"use client"
import { useEffect } from "react"
import Lenis from "lenis"
import { useAdaptivePerformance } from "@/performance/useAdaptivePerformance"
import { useFps } from "@/performance/useFps"
import dynamic from "next/dynamic"
import { useExperience } from "@/store/experienceStore"

const CanvasRoot = dynamic(() => import("@/components/3d/CanvasRoot").then((m) => m.CanvasRoot), { ssr: false })

export function ClientRoot({ children }: { children: React.ReactNode }) {
  useAdaptivePerformance()
  useFps()
  const reduced = useExperience((s) => s.reducedMotion)
  useEffect(() => {
    if (reduced) return
    const lenis = new Lenis({ duration: 1.2, easing: (t: number) => 1 - Math.pow(1 - t, 3) })
    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [reduced])
  return (
    <div className="relative w-full h-full">
      <div className="fixed inset-0 -z-10">
        <CanvasRoot />
      </div>
      <div className="scanline" />
      {children}
    </div>
  )
}
