import { useEffect } from "react"
import { detectDeviceTier } from "@/performance/detectDeviceTier"
import { useExperience } from "@/store/experienceStore"

export function useAdaptivePerformance() {
  const { setPerformanceTier, setReducedMotion } = useExperience.getState()
  useEffect(() => {
    const tier = detectDeviceTier()
    setPerformanceTier(tier)
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    setReducedMotion(reduced)
  }, [setPerformanceTier, setReducedMotion])
}
