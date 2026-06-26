import { motion } from 'framer-motion'
import AtomOrbit from '../AtomOrbit'

const TEXT_STYLE = {
  fontFamily: "'Clash Display', sans-serif",
  fontWeight: 700,
  fontSize: 'clamp(2.6rem, 10.5vw, 11rem)',
  lineHeight: 0.88,
  letterSpacing: '0.06em',
  userSelect: 'none',
}

const LayoutC = () => (
  <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

    {/* ── Layer 1: solid text — centered, behind image ── */}
    <div
      className="absolute inset-0 flex flex-col justify-center px-[4vw] pointer-events-none"
      style={{ zIndex: 2 }}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        style={{ ...TEXT_STYLE, color: '#ffffff' }}
      >
        ADEBOWALE
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut', delay: 0.08 }}
        style={{ ...TEXT_STYLE }}
      >
        <span style={{ color: '#39FF14' }}>(DEBO)</span>{' '}
        <span style={{ color: '#ffffff' }}>ADENIRAN.</span>
      </motion.h1>
    </div>

    {/* ── Layer 2: image cropped to shoulders + atom orbit ── */}
    <div
      style={{
        position: 'relative',
        zIndex: 10,
        height: '80vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    >
      <AtomOrbit />
      <img
        src="/me/profile.png"
        alt="Adebowale Adeniran"
        style={{
          height: '98vh',
          width: 'auto',
          objectFit: 'contain',
          objectPosition: 'top',
          display: 'block',
          position: 'relative',
          zIndex: 10,
          flexShrink: 0,
        }}
      />
    </div>

    {/* ── Layer 3: hollow outline — same centered position as Layer 1.
        No clip — outline covers wherever the body overlaps the text.
        On transparent areas solid + outline stack (barely visible).
        On body areas solid hides behind, outline shows on top = hollow effect.
    ── */}
    <div
      className="absolute inset-0 flex flex-col justify-center px-[4vw] pointer-events-none"
      style={{ zIndex: 15 }}
    >
      <h1
        style={{
          ...TEXT_STYLE,
          color: 'transparent',
          WebkitTextStroke: '2.5px rgba(255,255,255,0.55)',
        }}
      >
        ADEBOWALE
      </h1>
      <h1
        style={{
          ...TEXT_STYLE,
          color: 'transparent',
          WebkitTextStroke: '2.5px rgba(255,255,255,0.55)',
        }}
      >
        <span style={{ WebkitTextStroke: '2.5px rgba(57,255,20,0.65)', color: 'transparent' }}>
          (DEBO)
        </span>{' '}
        ADENIRAN.
      </h1>
    </div>

    {/* ── Bio — bottom ── */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="absolute bottom-8 left-0 right-0 text-center"
      style={{ zIndex: 20 }}
    >
      <p style={{ color: '#4b5563', fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', letterSpacing: '0.02em' }}>
        A Full-Stack Developer skilled in{' '}
        <span style={{ color: '#00FFCC' }}>React.js</span>,{' '}
        <span style={{ color: '#00FFCC' }}>TailwindCSS</span>,{' '}
        <span style={{ color: '#00FFCC' }}>SQL</span>, and{' '}
        <span style={{ color: '#00FFCC' }}>Java</span>.
      </p>
    </motion.div>
  </section>
)

export default LayoutC
