import { useEffect, useRef } from "react"
import { useExperience } from "@/store/experienceStore"

export function useFps() {
  const { setFps, setParticleDensity, setPostprocessingLevel, setDpr } = useExperience.getState()
  const last = useRef(performance.now())
  const frames = useRef(0)
  useEffect(() => {
    let raf = 0
    const loop = () => {
      frames.current += 1
      const now = performance.now()
      const diff = now - last.current
      if (diff >= 1000) {
        const fps = Math.round((frames.current * 1000) / diff)
        setFps(fps)
        frames.current = 0
        last.current = now
        if (fps < 30) {
          setParticleDensity(0.4)
          setPostprocessingLevel(0)
          setDpr(0.75)
        } else if (fps < 40) {
          setParticleDensity(0.7)
          setPostprocessingLevel(0.5)
          setDpr(0.85)
        } else {
          setParticleDensity(1)
          setPostprocessingLevel(1)
          setDpr(Math.min(window.devicePixelRatio || 1, 2))
        }
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [setFps, setParticleDensity, setPostprocessingLevel, setDpr])
}
