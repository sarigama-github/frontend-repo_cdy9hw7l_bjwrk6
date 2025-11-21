import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import Spline from '@splinetool/react-spline'

// Fixed full-viewport 3D background that swaps scenes per route
export default function Background3D() {
  const { pathname } = useLocation()

  const scene = useMemo(() => {
    // Map each route to a specific Spline scene
    // These are lightweight tech-themed public scenes
    const map = {
      '/': 'https://prod.spline.design/6YVwBEmc6k9Rdtqf/scene.splinecode', // abstract tech orbs
      '/services': 'https://prod.spline.design/8wG3EoZo4PMBVXgv/scene.splinecode', // circuits/grid
      '/team': 'https://prod.spline.design/1oP9Y6pY70HQp9rB/scene.splinecode', // floating shapes
      '/about': 'https://prod.spline.design/3a6sQb0o2F5L6pQe/scene.splinecode', // neon waves
      '/contact': 'https://prod.spline.design/0xg2b1x0HfFh0z3P/scene.splinecode', // subtle particles
    }
    return map[pathname] || map['/']
  }, [pathname])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* Spline canvas */}
      <div className="absolute inset-0 opacity-70">
        <Spline scene={scene} />
      </div>
      {/* Readability overlays */}
      <div className="absolute inset-0 bg-slate-950/50" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950/60 to-transparent" />
    </div>
  )
}
