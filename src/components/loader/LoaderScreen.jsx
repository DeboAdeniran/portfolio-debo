import { motion } from 'framer-motion'

const BADGES = [
  { label: 'React',        color: '#00FFCC', top: '8%',  left: '7%',  delay: 0,    dur: 2.4, amp: 14 },
  { label: 'TypeScript',   color: '#39FF14', top: '10%', left: '40%', delay: 0.4,  dur: 2.1, amp: 18 },
  { label: 'Node.js',      color: '#39FF14', top: '7%',  left: '66%', delay: 0.2,  dur: 2.6, amp: 12 },
  { label: 'Spring Boot',  color: '#f0f0f0', top: '24%', left: '74%', delay: 0.7,  dur: 2.3, amp: 16 },
  { label: 'TailwindCSS',  color: '#00FFCC', top: '25%', left: '4%',  delay: 0.5,  dur: 2.8, amp: 14 },
  { label: 'Java',         color: '#39FF14', top: '44%', left: '76%', delay: 0.3,  dur: 2.2, amp: 20 },
  { label: 'PostgreSQL',   color: '#00FFCC', top: '46%', left: '2%',  delay: 0.8,  dur: 2.5, amp: 15 },
  { label: 'Docker',       color: '#f0f0f0', top: '60%', left: '72%', delay: 0.1,  dur: 2.7, amp: 18 },
  { label: 'Python',       color: '#00FFCC', top: '62%', left: '5%',  delay: 0.6,  dur: 2.2, amp: 12 },
  { label: 'AWS',          color: '#39FF14', top: '76%', left: '60%', delay: 0.4,  dur: 2.4, amp: 16 },
  { label: 'MongoDB',      color: '#f0f0f0', top: '78%', left: '9%',  delay: 0.9,  dur: 2.1, amp: 14 },
  { label: 'React Native', color: '#00FFCC', top: '88%', left: '36%', delay: 0.2,  dur: 2.6, amp: 18 },
  { label: 'REST APIs',    color: '#39FF14', top: '34%', left: '16%', delay: 0.6,  dur: 2.3, amp: 20 },
  { label: 'Git',          color: '#00FFCC', top: '70%', left: '28%', delay: 0.3,  dur: 2.5, amp: 14 },
]

const LoaderScreen = () => (
  <motion.div
    key="loader"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.7, ease: 'easeInOut' }}
    style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: '#0a0a0a',
      zIndex: 9999,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {BADGES.map((b) => (
      <motion.div
        key={b.label}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -b.amp, 0],
        }}
        transition={{
          opacity: { duration: 0.5, delay: b.delay },
          scale: { duration: 0.5, delay: b.delay, ease: 'backOut' },
          y: { duration: b.dur, repeat: Infinity, ease: 'easeInOut', delay: b.delay },
        }}
        style={{
          position: 'absolute',
          top: b.top,
          left: b.left,
          padding: '6px 15px',
          borderRadius: '100px',
          border: `1px solid ${b.color}35`,
          backgroundColor: `${b.color}0e`,
          color: b.color,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.72rem',
          fontWeight: 500,
          letterSpacing: '0.06em',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          boxShadow: `0 0 14px ${b.color}22`,
        }}
      >
        {b.label}
      </motion.div>
    ))}

    <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: [0.5, 1, 0.5], y: 0 }}
        transition={{
          y: { duration: 0.6, ease: 'easeOut' },
          opacity: { duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 },
        }}
        style={{
          fontFamily: "'Clash Display', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(3.5rem, 10vw, 8rem)',
          color: '#39FF14',
          letterSpacing: '0.1em',
          lineHeight: 1,
          margin: 0,
          textShadow: '0 0 40px rgba(57,255,20,0.35)',
        }}
      >
        DEBO
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.55, 0.2] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        style={{
          fontFamily: "'Clash Display', sans-serif",
          fontWeight: 600,
          fontSize: 'clamp(0.9rem, 2.5vw, 1.8rem)',
          color: '#ffffff',
          letterSpacing: '0.18em',
          margin: '4px 0 28px',
        }}
      >
        ADENIRAN
      </motion.p>

      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -9, 0], opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 0.85,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.18,
            }}
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#39FF14',
            }}
          />
        ))}
      </div>
    </div>
  </motion.div>
)

export default LoaderScreen
