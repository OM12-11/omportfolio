import { create } from "zustand"

export type SectionId = "hero" | "about" | "skills" | "timeline" | "certifications" | "projects" | "contact"

export type CameraState = {
  position: [number, number, number]
  target: [number, number, number]
  depthOffset: number
  easing: string
}

export type ExperienceManager = {
  currentSection: SectionId
  cameraState: CameraState
  performanceTier: "high" | "mid" | "low"
  fps: number
  particleDensity: number
  postprocessingLevel: number
  interactionState: "idle" | "hover" | "scroll" | "drag"
  reducedMotion: boolean
  dpr: number
  setSection: (id: SectionId) => void
  setCameraState: (s: CameraState) => void
  setPerformanceTier: (t: "high" | "mid" | "low") => void
  setFps: (f: number) => void
  setParticleDensity: (v: number) => void
  setPostprocessingLevel: (v: number) => void
  setInteractionState: (s: "idle" | "hover" | "scroll" | "drag") => void
  setReducedMotion: (v: boolean) => void
  setDpr: (v: number) => void
}

export const useExperience = create<ExperienceManager>((set) => ({
  currentSection: "hero",
  cameraState: {
    position: [0, 1.2, 4],
    target: [0, 0, 0],
    depthOffset: 0,
    easing: "power3.out",
  },
  performanceTier: "high",
  fps: 60,
  particleDensity: 1,
  postprocessingLevel: 1,
  interactionState: "idle",
  reducedMotion: false,
  dpr: 1,
  setSection: (id) => set({ currentSection: id }),
  setCameraState: (s) => set({ cameraState: s }),
  setPerformanceTier: (t) => set({ performanceTier: t }),
  setFps: (f) => set({ fps: f }),
  setParticleDensity: (v) => set({ particleDensity: v }),
  setPostprocessingLevel: (v) => set({ postprocessingLevel: v }),
  setInteractionState: (s) => set({ interactionState: s }),
  setReducedMotion: (v) => set({ reducedMotion: v }),
  setDpr: (v) => set({ dpr: v }),
}))
