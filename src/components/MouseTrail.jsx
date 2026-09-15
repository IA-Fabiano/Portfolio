import { useEffect, useRef } from 'react'

const GAP = 38

export default function MouseTrail() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return undefined

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const activeDots = new Map()
    let frame
    let width = 0
    let height = 0
    let pixelRatio = 1

    const resize = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * pixelRatio
      canvas.height = height * pixelRatio
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    }

    const activateNearCursor = (event) => {
      const radius = 135
      const startX = Math.floor((event.clientX - radius) / GAP) * GAP
      const endX = event.clientX + radius
      const startY = Math.floor((event.clientY - radius) / GAP) * GAP
      const endY = event.clientY + radius

      for (let x = startX; x <= endX; x += GAP) {
        for (let y = startY; y <= endY; y += GAP) {
          const distance = Math.hypot(x - event.clientX, y - event.clientY)
          if (distance > radius) continue
          const strength = Math.pow(1 - distance / radius, 1.7)
          const key = x + ':' + y
          activeDots.set(key, Math.max(activeDots.get(key) || 0, strength))
        }
      }
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)

      for (let x = 1; x <= width; x += GAP) {
        for (let y = 1; y <= height; y += GAP) {
          context.fillStyle = 'rgba(120, 139, 129, 0.18)'
          context.beginPath()
          context.arc(x, y, 1, 0, Math.PI * 2)
          context.fill()
        }
      }

      activeDots.forEach((strength, key) => {
        const [x, y] = key.split(':').map(Number)
        const nextStrength = strength * 0.94
        if (nextStrength < 0.025) {
          activeDots.delete(key)
          return
        }
        activeDots.set(key, nextStrength)
        context.fillStyle = 'rgba(0, 245, 140, ' + (nextStrength * 0.95) + ')'
        context.shadowColor = 'rgba(0, 245, 140, ' + nextStrength + ')'
        context.shadowBlur = 12 * nextStrength
        context.beginPath()
        context.arc(x, y, 1.4 + nextStrength * 2.3, 0, Math.PI * 2)
        context.fill()
      })

      context.shadowBlur = 0
      frame = window.requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', activateNearCursor, { passive: true })
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', activateNearCursor)
    }
  }, [])

  return <canvas ref={canvasRef} className="mouse-grid" aria-hidden="true" />
}
