self.onmessage = (e) => {
  const { count, radius } = e.data as { count: number; radius: number }
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
  postMessage(positions)
}
