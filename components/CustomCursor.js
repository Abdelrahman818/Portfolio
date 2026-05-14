'use client'

import { useEffect, useRef, useState } from 'react'

const CustomCursor = () => {
  const [points, setPoints] = useState([])
  const [cursor, setCursor] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)

  const idleTimer = useRef(null)

  useEffect(() => {
    const showCursor = (x, y) => {
      setCursor({ x, y })
      setVisible(true)

      clearTimeout(idleTimer.current)

      idleTimer.current = setTimeout(() => {
        setVisible(false)
      }, 150)
    }

    const handleMove = (e) => {
      const x = e.clientX
      const y = e.clientY

      showCursor(x, y)

      setPoints((prev) => {
        const newPoints = [...prev, { x, y }]
        return newPoints.slice(-30)
      })
    }

    const handleClick = (e) => {
      // مهم جدًا: click يعيد إظهار الكورسر في نفس المكان
      showCursor(e.clientX, e.clientY)
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('click', handleClick)
      clearTimeout(idleTimer.current)
    }
  }, [])

  // smooth trail
  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prev) => (prev.length ? prev.slice(1) : prev))
    }, 25)

    return () => clearInterval(interval)
  }, [])

  const pathData = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
    .join(' ')

  return (
    <>
      {/* LINE */}
      <svg className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]">
        <path
          d={pathData}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            filter: 'drop-shadow(0 0 10px #3b82f6)',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        />
      </svg>

      {/* CURSOR */}
      <div
        className="fixed w-4 h-4 rounded-full bg-blue-500 pointer-events-none z-[10000]"
        style={{
          left: cursor.x,
          top: cursor.y,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 20px #3b82f6',

          opacity: visible ? 1 : 0,
          transition: 'opacity 0.35s ease',
        }}
      />
    </>
  )
}

export default CustomCursor
