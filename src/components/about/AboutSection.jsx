import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useIsMobile from '../../hooks/useIsMobile'

// ── Syntax token helpers ──
const KW  = ({ c }) => <span style={{ color: '#39FF14'  }}>{c}</span>   // keywords
const CLS = ({ c }) => <span style={{ color: '#00FFCC'  }}>{c}</span>   // class names / types
const STR = ({ c }) => <span style={{ color: '#e2e8f0'  }}>{c}</span>   // string values
const ANN = ({ c }) => <span style={{ color: '#7C1D34'  }}>{c}</span>   // annotations
const CMT = ({ c }) => <span style={{ color: '#4b5563', fontStyle: 'italic' }}>{c}</span>
const PUN = ({ c }) => <span style={{ color: '#6b7280'  }}>{c}</span>   // punctuation
const NUM = ({ c }) => <span style={{ color: '#39FF14'  }}>{c}</span>   // numbers / booleans
const FN  = ({ c }) => <span style={{ color: '#ffffff'  }}>{c}</span>   // method names
const sp  = (n = 1) => ' '.repeat(n * 4)

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ01'

const useScramble = (target, active) => {
  const [display, setDisplay] = useState(target)
  useEffect(() => {
    if (!active) { setDisplay(target); return }
    let step = 0
    const steps = 10
    const id = setInterval(() => {
      const progress = step / steps
      setDisplay(
        target.split('').map((ch, i) => {
          if (ch === '.' || i / target.length < progress) return ch
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
        }).join('')
      )
      if (++step > steps) clearInterval(id)
    }, 55)
    return () => clearInterval(id)
  }, [active, target])
  return display
}

const Counter = ({ to, delay = 0 }) => {
  const [val, setVal] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => {
      let n = 0
      const id = setInterval(() => { n++; setVal(n); if (n >= to) clearInterval(id) }, 60)
      return () => clearInterval(id)
    }, delay)
    return () => clearTimeout(t)
  }, [to, delay])
  return String(val).padStart(2, '0')
}

const SKILLS = [
  { label: 'React',        color: '#00FFCC' },
  { label: 'Spring Boot',  color: '#39FF14' },
  { label: 'Node.js',      color: '#00FFCC' },
  { label: 'PostgreSQL',   color: '#39FF14' },
  { label: 'Redis',        color: '#00FFCC' },
  { label: 'MongoDB',      color: '#39FF14' },
]

const CompiledCard = () => (
  <div style={{ padding: '32px 28px 36px' }}>
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{ marginBottom: '6px' }}
    >
      <span style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem',
        color: '#39FF14', letterSpacing: '0.16em', textTransform: 'uppercase',
      }}>
        compiled output
      </span>
    </motion.div>

    <motion.h3
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.08 }}
      style={{
        fontFamily: "'Clash Display', sans-serif", fontWeight: 700,
        fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#ffffff',
        letterSpacing: '-0.01em', lineHeight: 1.1, margin: '0 0 4px',
      }}
    >
      Adebowale<br />
      <span style={{ color: '#39FF14' }}>Adeniran</span>
    </motion.h3>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.18 }}
      style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem',
        color: '#4b5563', letterSpacing: '0.08em', marginBottom: '28px',
      }}
    >
      Full Stack Developer
    </motion.p>

    {/* Skills */}
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
      {SKILLS.map((s, i) => (
        <motion.span
          key={s.label}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.28 + i * 0.07, ease: 'backOut' }}
          style={{
            padding: '5px 14px', borderRadius: '100px',
            border: `1px solid ${s.color}35`,
            background: `${s.color}0e`, color: s.color,
            fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem',
            fontWeight: 500, letterSpacing: '0.05em',
            boxShadow: `0 0 10px ${s.color}18`,
          }}
        >
          {s.label}
        </motion.span>
      ))}
    </div>

    {/* Stats */}
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.7 }}
      style={{ display: 'flex', gap: '32px', marginBottom: '28px', alignItems: 'center' }}
    >
      <div>
        <div style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: '2rem', color: '#ffffff', lineHeight: 1 }}>
          <Counter to={4} delay={700} />
        </div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', color: '#4b5563', letterSpacing: '0.08em', marginTop: '3px' }}>years</div>
      </div>
      <div style={{ width: '1px', height: '36px', background: 'rgba(255,255,255,0.07)' }} />
      <div>
        <div style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: '2rem', color: '#ffffff', lineHeight: 1 }}>
          <Counter to={11} delay={800} />
        </div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', color: '#4b5563', letterSpacing: '0.08em', marginTop: '3px' }}>projects</div>
      </div>
      <div style={{ width: '1px', height: '36px', background: 'rgba(255,255,255,0.07)' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <motion.div
          animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 8, height: 8, borderRadius: '50%', background: '#39FF14', flexShrink: 0 }}
        />
        <div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: '#39FF14', fontWeight: 600 }}>available</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', color: '#4b5563' }}>for hire</div>
        </div>
      </div>
    </motion.div>

    {/* Quote */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.0 }}
      style={{
        borderLeft: '2px solid rgba(57,255,20,0.3)',
        paddingLeft: '14px',
      }}
    >
      <p style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem',
        color: '#6b7280', fontStyle: 'italic', lineHeight: 1.7, margin: 0,
      }}>
        "Architecture first, code second."
      </p>
    </motion.div>
  </div>
)

// ── Java Code Block ──
const JavaBlock = () => {
  const [compiled, setCompiled]   = useState(false)
  const [scrambling, setScrambling] = useState(false)

  const filename = useScramble(
    compiled ? 'Debo.class' : 'Debo.java',
    scrambling
  )

  const handleRun = () => {
    setScrambling(true)
    setTimeout(() => { setScrambling(false); setCompiled(true) }, 650)
  }

  const handleSource = () => {
    setScrambling(true)
    setTimeout(() => { setScrambling(false); setCompiled(false) }, 650)
  }

  return (
    <div style={{
      background: '#0d0d12',
      borderRadius: '12px',
      border: '1px solid rgba(255,255,255,0.07)',
      overflow: 'hidden',
    }}>
      {/* Title bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        padding: '12px 16px',
        background: '#161620',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        {['#FF5F56', '#FFBD2E', '#27C93F'].map((c) => (
          <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
        ))}
        <span style={{
          marginLeft: '8px', fontSize: '0.7rem',
          color: scrambling ? '#39FF14' : '#4b5563',
          fontFamily: "'Courier New', monospace", letterSpacing: '0.06em',
          flex: 1, transition: 'color 0.2s',
        }}>
          {filename}
        </span>

        <button
          onClick={compiled ? handleSource : handleRun}
          disabled={scrambling}
          style={{
            display: 'flex', alignItems: 'center', gap: '5px',
            padding: '4px 12px', borderRadius: '5px', border: 'none',
            cursor: scrambling ? 'default' : 'pointer',
            background: compiled ? 'rgba(255,255,255,0.06)' : 'rgba(57,255,20,0.12)',
            color: compiled ? '#9ca3af' : '#39FF14',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.05em',
            transition: 'all 0.2s', opacity: scrambling ? 0.4 : 1,
          }}
        >
          {compiled ? (
            <><span style={{ fontSize: '0.85rem' }}>{'{ }'}</span> Source</>
          ) : (
            <>
              <svg width="9" height="10" viewBox="0 0 9 10" fill="currentColor">
                <path d="M1 1.5l7 3.5-7 3.5V1.5z" />
              </svg>
              Run
            </>
          )}
        </button>
      </div>

      {/* Animated content swap */}
      <AnimatePresence mode="wait">
        {compiled ? (
          <motion.div
            key="compiled"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <CompiledCard />
          </motion.div>
        ) : (
          <motion.div
            key="source"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <div style={{
              padding: '22px 28px',
              fontFamily: "'Courier New', monospace",
              fontSize: '0.78rem',
              lineHeight: 2,
              overflowX: 'auto',
            }}>
              {[
                <><CMT c="// Debo.java" /></>,
                <></>,
                <><KW c="public" /> <KW c="class" /> <CLS c="Debo" /> <KW c="extends" /> <CLS c="FullStackDeveloper" /> <PUN c="{" /></>,
                <></>,
                <>{sp()}<KW c="private" /> <CLS c="String" />  <FN c="name" />      <PUN c="=" /> <PUN c='"'/><STR c="Adebowale Adeniran" /><PUN c='"' /><PUN c=";" /></>,
                <>{sp()}<KW c="private" /> <CLS c="String" />  <FN c="location" />  <PUN c="=" /> <PUN c='"'/><STR c="Nigeria" /><PUN c='"' /><PUN c=";" /></>,
                <>{sp()}<KW c="private" /> <KW c="int" />      <FN c="years" />      <PUN c="=" /> <NUM c="4" /><PUN c=";" /></>,
                <>{sp()}<KW c="private" /> <KW c="boolean" />  <FN c="available" /> <PUN c="=" /> <NUM c="true" /><PUN c=";" /></>,
                <></>,
                <>{sp()}<ANN c="@Override" /></>,
                <>{sp()}<KW c="public" /> <CLS c="String" /><PUN c="[]" /> <FN c="stack" /><PUN c="() {" /></>,
                <>{sp(2)}<KW c="return" /> <KW c="new" /> <CLS c="String" /><PUN c="[]{ " /><PUN c='"'/><STR c="React" /><PUN c='"' /><PUN c="," /> <PUN c='"'/><STR c="Spring Boot" /><PUN c='"' /><PUN c="," /> <PUN c='"'/><STR c="Node.js" /><PUN c='"' /><PUN c="," /></>,
                <>{sp(3)}<PUN c='"'/><STR c="PostgreSQL" /><PUN c='"' /><PUN c="," /> <PUN c='"'/><STR c="Redis" /><PUN c='"' /><PUN c="," /> <PUN c='"'/><STR c="MongoDB" /><PUN c='"' /> <PUN c="};" /></>,
                <>{sp()}<PUN c="}" /></>,
                <></>,
                <>{sp()}<KW c="public" /> <CLS c="String" /> <FN c="philosophy" /><PUN c="() {" /></>,
                <>{sp(2)}<KW c="return" /> <PUN c='"'/><STR c="Architecture first, code second." /><PUN c='"' /><PUN c=";" /></>,
                <>{sp()}<PUN c="}" /></>,
                <></>,
                <>{sp()}<KW c="public" /> <KW c="static" /> <KW c="void" /> <FN c="main" /><PUN c="(" /><CLS c="String" /><PUN c="[]" /> <FN c="args" /><PUN c=") {" /></>,
                <>{sp(2)}<CLS c="Debo" /> <FN c="dev" /> <PUN c="=" /> <KW c="new" /> <CLS c="Debo" /><PUN c="();" /></>,
                <>{sp(2)}<FN c="dev" /><PUN c="." /><FN c="stack" /><PUN c="();" /></>,
                <>{sp(2)}<FN c="dev" /><PUN c="." /><FN c="philosophy" /><PUN c="();" /></>,
                <>{sp()}<PUN c="}" /></>,
                <><PUN c="}" /></>,
              ].map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03, duration: 0.15 }}
                >
                  {line}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ────────────────────────────────────────────
// Main About Section
// ────────────────────────────────────────────
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

const AboutSection = () => {
  const isMobile = useIsMobile()

  return (
    <section
      id="about"
      style={{
        backgroundColor: '#0a0a0a',
        padding: isMobile ? '80px 6vw' : '0 8vw',
        minHeight: isMobile ? 'auto' : '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '48px' : '80px',
        alignItems: 'start',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>

        {/* ── Left: text ── */}
        <div>
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <h2 style={{
              fontFamily: "'Clash Display', sans-serif",
              fontWeight: 700,
              fontSize: isMobile ? '2rem' : 'clamp(2rem, 3.5vw, 3rem)',
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              marginBottom: '32px',
            }}>
              Who is{' '}
              <span style={{ color: '#39FF14' }}>Debo?</span>
            </h2>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.95rem',
              color: '#9ca3af',
              lineHeight: 1.8,
              marginBottom: '20px',
            }}>
              Debo Adeniran is a Full-Stack Developer based in Nigeria, building scalable products
              from architecture to deployment, front to back. Building since 2022.
            </p>

            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.95rem',
              color: '#9ca3af',
              lineHeight: 1.8,
              marginBottom: '20px',
            }}>
              I build across the full stack, whatever the problem demands. My stack
              spans React on the front, Spring Boot and Node.js on the back, and
              PostgreSQL, MongoDB, and Redis underneath.
            </p>

            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.95rem',
              color: '#9ca3af',
              lineHeight: 1.8,
              marginBottom: '40px',
            }}>
              I believe every great product starts long before the first line of code,
              with clear{' '}
              <span style={{ color: '#e2e8f0' }}>architecture and documentation</span>.
              When I'm not building, I'm researching and thinking about the next
              impactful idea.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}
          >
            <a
              href="/cv.pdf"
              download
              style={{
                padding: '12px 28px',
                borderRadius: '6px',
                background: '#39FF14',
                color: '#0a0a0a',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 600,
                textDecoration: 'none',
                letterSpacing: '0.04em',
              }}
            >
              Download CV
            </a>
            <a
              href="#portfolio"
              style={{
                padding: '12px 28px',
                borderRadius: '6px',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#e2e8f0',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.85rem',
                textDecoration: 'none',
                letterSpacing: '0.04em',
              }}
            >
              View Work
            </a>
          </motion.div>
        </div>

        {/* ── Right: Java code block ── */}
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
          <JavaBlock />
        </motion.div>

      </div>
    </section>
  )
}

export default AboutSection
