import { useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

const OrbitBadge = ({
  label,
  semiMajor = 280,
  semiMinor = 65,
  duration = 10,
  initialAngle = 0,
  ringAngle = 0,
  color = '#7C1D34',
}) => {
  const t = useMotionValue(initialAngle)

  useEffect(() => {
    const controls = animate(t, initialAngle + Math.PI * 2, {
      duration,
      repeat: Infinity,
      ease: 'linear',
    })
    return controls.stop
  }, [t, duration, initialAngle])

  const θ = (ringAngle * Math.PI) / 180

  const x = useTransform(t, (val) =>
    Math.cos(val) * semiMajor * Math.cos(θ) - Math.sin(val) * semiMinor * Math.sin(θ)
  )
  const y = useTransform(t, (val) =>
    Math.cos(val) * semiMajor * Math.sin(θ) + Math.sin(val) * semiMinor * Math.cos(θ)
  )
  const zIndex = useTransform(t, (val) => {
    const screenY =
      Math.cos(val) * semiMajor * Math.sin(θ) + Math.sin(val) * semiMinor * Math.cos(θ)
    return screenY > 0 ? 20 : 4
  })

  const [first, ...rest] = label.split(' ')

  // Derive rgba values from the hex color prop
  const r = parseInt(color.slice(1, 3), 16)
  const g = parseInt(color.slice(3, 5), 16)
  const b = parseInt(color.slice(5, 7), 16)

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        x,
        y,
        zIndex,
        translateX: '-50%',
        translateY: '-50%',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          padding: '9px 24px',
          borderRadius: '999px',
          background: `rgba(${r}, ${g}, ${b}, 0.1)`,
          border: `1px solid rgba(${r}, ${g}, ${b}, 0.45)`,
          color: '#e2e8f0',
          fontSize: '0.8rem',
          fontStyle: 'italic',
          whiteSpace: 'nowrap',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          letterSpacing: '0.04em',
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <span style={{ color, fontStyle: 'normal', fontWeight: 600 }}>
          {first}
        </span>{' '}
        {rest.join(' ')}
      </div>
    </motion.div>
  )
}

export default OrbitBadge
