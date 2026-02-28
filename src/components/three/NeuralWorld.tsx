import { useEffect, useMemo, useRef, useState } from "react"
import { Points, PointMaterial } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useExperience } from "@/store/experienceStore"

function createSphere(count: number, radius: number) {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const r = Math.random() * radius
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const x = r * Math.sin(phi) * Math.cos(theta)
    const y = r * Math.sin(phi) * Math.sin(theta)
    const z = r * Math.cos(phi)
    positions.set([x, y, z], i * 3)
  }
  return positions
}

export function NeuralWorld({ density, reduced }: { density: number; reduced: boolean }) {
  const tier = useExperience((s) => s.performanceTier)
  const currentSection = useExperience((s) => s.currentSection)
  const particleCount = Math.floor((tier === "high" ? 8000 : tier === "mid" ? 5000 : 2500) * density)
  const positionsMemo = useMemo(() => createSphere(particleCount, 3), [particleCount])
  const [positionsOverride, setPositionsOverride] = useState<Float32Array | undefined>(undefined)
  const burst = useRef(0)
  useEffect(() => {
    if (currentSection === "timeline") {
      burst.current = 1
      const id = setTimeout(() => {
        burst.current = 0
      }, 600)
      return () => clearTimeout(id)
    }
  }, [currentSection])
  useEffect(() => {
    if (particleCount > 5000 && typeof window !== "undefined") {
      try {
        const worker = new Worker(new URL("../../performance/workers/positions.worker.ts", import.meta.url), { type: "module" })
        worker.onmessage = (e) => {
          setPositionsOverride(e.data as Float32Array)
          worker.terminate()
        }
        worker.onerror = () => {
          setPositionsOverride(undefined)
          worker.terminate()
        }
        worker.postMessage({ count: particleCount, radius: 3 })
        return () => worker.terminate()
      } catch {
        if (typeof window !== "undefined") {
          requestAnimationFrame(() => setPositionsOverride(undefined))
        }
      }
    }
  }, [particleCount])
  const pointsRef = useRef<THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial> | null>(null)
  const t = useRef(0)
  useFrame((_, delta) => {
    t.current += delta
    if (!pointsRef.current) return
    pointsRef.current.rotation.y += delta * 0.02
    pointsRef.current.rotation.x += delta * 0.01
    const colorShift = reduced ? 0.0 : Math.sin(t.current * 0.5) * 0.02
    ;(pointsRef.current.material as THREE.PointsMaterial).color = new THREE.Color(0.6 + colorShift, 0.8, 1)
    const material = pointsRef.current.material as THREE.PointsMaterial
    const spike = Math.max(0, burst.current) * 0.06
    material.size = 0.03 + spike
    burst.current = Math.max(0, burst.current - delta * 2.0)
  })
  return (
    <group>
      <Points ref={pointsRef} positions={positionsOverride ?? positionsMemo} stride={3} frustumCulled>
        <PointMaterial transparent color="#99dfff" size={0.03} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  )
}
