import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

const HeroText = () => (
  <div className="flex flex-col gap-6 max-w-xl">
    <motion.h1
      className="text-6xl font-bold leading-tight tracking-tight text-white"
      style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700 }}
      {...fadeUp(0.1)}
    >
      Adebowale{' '}
      <span style={{ color: '#39FF14' }}>(Debo)</span>{' '}
      Adeniran.
    </motion.h1>

    <motion.p
      className="text-base leading-relaxed"
      style={{ color: '#9ca3af', fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem' }}
      {...fadeUp(0.3)}
    >
      A Full-Stack Developer skilled in{' '}
      <span style={{ color: '#00FFCC' }}>React.js</span>,{' '}
      <span style={{ color: '#00FFCC' }}>TailwindCSS</span>,{' '}
      <span style={{ color: '#00FFCC' }}>SQL</span>, and{' '}
      <span style={{ color: '#00FFCC' }}>Java</span>.
    </motion.p>
  </div>
)

export default HeroText
