import { motion } from 'framer-motion'

const FloatingBadge = ({ label, color = '#39FF14', style = {}, delay = 0 }) => {
  const [first, ...rest] = label.split(' ')
  const r = parseInt(color.slice(1, 3), 16)
  const g = parseInt(color.slice(3, 5), 16)
  const b = parseInt(color.slice(5, 7), 16)

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        zIndex: 20,
        ...style,
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
        <span style={{ color, fontStyle: 'normal', fontWeight: 600 }}>{first}</span>{' '}
        {rest.join(' ')}
      </div>
    </motion.div>
  )
}

export default FloatingBadge
