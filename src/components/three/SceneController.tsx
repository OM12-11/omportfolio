import { useEffect, useMemo, useRef } from "react"
import type React from "react"
import { useThree } from "@react-three/fiber"
import { OrbitControls, Grid, Environment } from "@react-three/drei"
import { EffectComposer, Bloom, ChromaticAberration, DepthOfField, Noise, Vignette } from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"
import { useExperience } from "@/store/experienceStore"
import { sectionCamera } from "@/lib/sectionsConfig"
import gsap from "gsap"
import { NeuralWorld } from "@/components/three/NeuralWorld"
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib"

export function SceneController() {
  const { camera } = useThree()
  const currentSection = useExperience((s) => s.currentSection)
  const postLevel = useExperience((s) => s.postprocessingLevel)
  const performanceTier = useExperience((s) => s.performanceTier)
  const targetRef = useRef<[number, number, number]>([0, 0, 0])
  const controlsRef = useRef<OrbitControlsImpl | null>(null)
  const reducedMotion = useExperience((s) => s.reducedMotion)
  const density = useExperience((s) => s.particleDensity)

  useEffect(() => {
    const s = sectionCamera[currentSection]
    const t = { x: targetRef.current[0], y: targetRef.current[1], z: targetRef.current[2] }
    gsap.to(camera.position, { x: s.position[0], y: s.position[1], z: s.position[2], duration: 0.8, ease: s.easing })
    gsap.to(t, {
      x: s.target[0],
      y: s.target[1],
      z: s.target[2],
      duration: 0.8,
      ease: s.easing,
      onUpdate: () => {
        targetRef.current = [t.x, t.y, t.z]
        camera.lookAt(t.x, t.y, t.z)
        controlsRef.current?.target.set(t.x, t.y, t.z)
      },
    })
  }, [currentSection, camera])

  const dofIntensity = useMemo(() => {
    if (performanceTier === "low") return 0
    if (performanceTier === "mid") return 0.2 * postLevel
    return 0.35 * postLevel
  }, [performanceTier, postLevel])

  const bloomIntensity = useMemo(() => {
    if (performanceTier === "low") return 0
    return 0.25 * postLevel
  }, [performanceTier, postLevel])

  const chromaOffset = useMemo(() => {
    if (performanceTier === "low") return 0
    return 0.00075 * postLevel
  }, [performanceTier, postLevel])

  const noiseOpacity = useMemo(() => {
    if (performanceTier === "low") return 0
    return 0.03 * postLevel
  }, [performanceTier, postLevel])

  const vignetteOffset = useMemo(() => {
    const s = sectionCamera[currentSection]
    return Math.max(0, 0.25 + s.depthOffset * 0.5) * postLevel
  }, [currentSection, postLevel])

  const effects: React.ReactElement[] = []
  if (bloomIntensity > 0) effects.push(<Bloom key="bloom" intensity={bloomIntensity} luminanceThreshold={0.2} luminanceSmoothing={0.1} />)
  if (dofIntensity > 0) effects.push(<DepthOfField key="dof" focusDistance={0.015} focalLength={0.015} bokehScale={2} />)
  if (chromaOffset > 0) effects.push(<ChromaticAberration key="ca" blendFunction={BlendFunction.NORMAL} offset={[chromaOffset, chromaOffset]} />)
  if (noiseOpacity > 0) effects.push(<Noise key="noise" premultiply blendFunction={BlendFunction.SOFT_LIGHT} opacity={noiseOpacity} />)
  if (vignetteOffset > 0) effects.push(<Vignette key="vig" darkness={vignetteOffset} offset={0.3} eskil />)
  return (
    <>
      <fog attach="fog" args={["#0a0a0a", 2, 12]} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[3, 5, 2]} intensity={0.8} />
      <Environment preset="city" />
      <Grid infiniteGrid fadeDistance={30} fadeStrength={4} position={[0, -0.25, 0]} cellSize={0.6} sectionSize={3} />
      <NeuralWorld density={density} reduced={reducedMotion} />
      <EffectComposer multisampling={0}>{effects}</EffectComposer>
      <OrbitControls ref={controlsRef} enablePan={false} enableZoom={false} enableRotate={true} />
    </>
  )
}
