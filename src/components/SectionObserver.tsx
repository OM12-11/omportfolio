"use client"
import { useEffect, useRef } from "react"
import { useExperience, SectionId } from "@/store/experienceStore"

export function SectionObserver({ id }: { id: SectionId }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const setSection = useExperience((s) => s.setSection)
  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setSection(id)
        })
      },
      { threshold: 0.6 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [id, setSection])
  return <div ref={ref} className="pointer-events-none absolute inset-0" />
}
