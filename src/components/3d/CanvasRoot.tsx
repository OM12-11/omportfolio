import { Canvas } from "@react-three/fiber"
import { Suspense, useMemo } from "react"
import { useExperience } from "@/store/experienceStore"
import { SceneController } from "@/components/three/SceneController"

export function CanvasRoot() {
  const dpr = useExperience((s) => s.dpr)
  const glAvailable = useMemo(() => {
    if (typeof window === "undefined") return false
    try {
      const c = document.createElement("canvas")
      const gl = c.getContext("webgl2") || c.getContext("webgl")
      return !!gl
    } catch {
      return false
    }
  }, [])
  if (!glAvailable) return null
  return (
    <Canvas dpr={dpr} gl={{ antialias: true, powerPreference: "high-performance" }}>
      <Suspense fallback={null}>
        <SceneController />
      </Suspense>
    </Canvas>
  )
}
