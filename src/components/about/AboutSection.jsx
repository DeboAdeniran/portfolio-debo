import { useState } from 'react'
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

const TERM_LINES = [
  { text: '$ javac Debo.java',                                          color: '#6b7280', delay: 0.05 },
  { text: '$ java Debo',                                                color: '#6b7280', delay: 0.55 },
  { text: '',                                                           color: '',        delay: 0.8  },
  { text: 'Compiling Debo.java...',                                     color: '#9ca3af', delay: 1.0  },
  { text: '  BUILD SUCCESS  (0.4s)',                                    color: '#39FF14', delay: 1.9  },
  { text: '',                                                           color: '',        delay: 2.1  },
  { text: 'Running Debo.main()...',                                     color: '#9ca3af', delay: 2.3  },
  { text: '',                                                           color: '',        delay: 2.6  },
  { text: '  stack      →  ["React", "Spring Boot", "Node.js", "PostgreSQL", "Redis", "MongoDB"]', color: '#00FFCC', delay: 2.8 },
  { text: '  philosophy →  "Architecture first, code second."',         color: '#00FFCC', delay: 3.3  },
  { text: '  available  →  true',                                       color: '#39FF14', delay: 3.7  },
  { text: '  location   →  "Nigeria"',                                  color: '#00FFCC', delay: 4.0  },
  { text: '',                                                           color: '',        delay: 4.3  },
  { text: 'Process finished with exit code 0',                          color: '#4b5563', delay: 4.5  },
]

// ── Java Code Block ──
const JavaBlock = () => {
  const [runKey, setRunKey]         = useState(0)
  const [showTerm, setShowTerm]     = useState(false)

  const handleRun = () => {
    setRunKey((k) => k + 1)
    setShowTerm(true)
  }

  const handleReset = () => {
    setShowTerm(false)
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
          marginLeft: '8px', fontSize: '0.7rem', color: '#4b5563',
          fontFamily: "'Courier New', monospace", letterSpacing: '0.06em',
          flex: 1,
        }}>
          Debo.java
        </span>

        {/* Run / Reset button */}
        <button
          onClick={showTerm ? handleReset : handleRun}
          style={{
            display: 'flex', alignItems: 'center', gap: '5px',
            padding: '4px 12px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            background: showTerm ? 'rgba(255,255,255,0.06)' : 'rgba(57,255,20,0.12)',
            color: showTerm ? '#6b7280' : '#39FF14',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            transition: 'all 0.2s',
          }}
        >
          {showTerm ? (
            <>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 1a4 4 0 1 1-2.83 1.17M5 1V4M5 1 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Reset
            </>
          ) : (
            <>
              <svg width="9" height="10" viewBox="0 0 9 10" fill="currentColor">
                <path d="M1 1.5l7 3.5-7 3.5V1.5z"/>
              </svg>
              Run
            </>
          )}
        </button>
      </div>

      {/* Code */}
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
          <>{sp()}<KW c="private" /> <KW c="int" />     <FN c="years" />      <PUN c="=" /> <NUM c="4" /><PUN c=";" /></>,
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

      {/* Terminal output */}
      <AnimatePresence>
        {showTerm && (
          <motion.div
            key={runKey}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.05)',
              background: '#080c08',
              padding: '16px 28px 20px',
              fontFamily: "'Courier New', monospace",
              fontSize: '0.74rem',
              lineHeight: 1.95,
            }}>
              <div style={{
                fontSize: '0.62rem', color: '#374151', letterSpacing: '0.1em',
                marginBottom: '10px', textTransform: 'uppercase',
              }}>
                Terminal
              </div>
              {TERM_LINES.map((line, i) => (
                <motion.div
                  key={`${runKey}-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: line.delay, duration: 0.2 }}
                  style={{ color: line.color || 'transparent', minHeight: '1.95em' }}
                >
                  {line.text}
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
