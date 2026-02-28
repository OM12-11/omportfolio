import { CameraState, SectionId } from "@/store/experienceStore"

export const sectionCamera: Record<SectionId, CameraState> = {
  hero: {
    position: [0, 1.2, 4],
    target: [0, 0, 0],
    depthOffset: 0,
    easing: "power3.out",
  },
  about: {
    position: [0.4, 1.1, 3.4],
    target: [0.2, 0.2, 0],
    depthOffset: -0.2,
    easing: "power2.out",
  },
  skills: {
    position: [-0.4, 1.0, 3.1],
    target: [-0.2, 0.15, 0],
    depthOffset: -0.35,
    easing: "power2.out",
  },
  timeline: {
    position: [0, 0.9, 2.9],
    target: [0, 0.05, 0],
    depthOffset: -0.5,
    easing: "power1.out",
  },
  certifications: {
    position: [-0.2, 1.1, 3.2],
    target: [-0.1, 0.1, 0],
    depthOffset: -0.3,
    easing: "power2.out",
  },
  projects: {
    position: [0.2, 0.9, 3.0],
    target: [0.2, 0.1, 0],
    depthOffset: -0.45,
    easing: "power3.out",
  },
  contact: {
    position: [0, 1.2, 3.6],
    target: [0, 0.1, 0],
    depthOffset: -0.1,
    easing: "power3.out",
  },
}
