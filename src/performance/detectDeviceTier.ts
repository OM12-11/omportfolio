export type DeviceTier = "high" | "mid" | "low"

export function detectDeviceTier(): DeviceTier {
  const memory = ((navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4)
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const isMobile = /Mobi|Android/i.test(navigator.userAgent)
  let tier: DeviceTier = "mid"
  if (!isMobile && memory >= 8 && dpr >= 2) tier = "high"
  if (isMobile || memory <= 4) tier = "low"
  try {
    const canvas = document.createElement("canvas")
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl")
    if (!gl) tier = "low"
  } catch {
    tier = "low"
  }
  return tier
}
