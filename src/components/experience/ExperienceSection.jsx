import { motion } from 'framer-motion'
import useIsMobile from '../../hooks/useIsMobile'

const EXPERIENCE = [
  {
    company: 'Avien Solutions',
    role: 'Software Engineer',
    period: '2026 - Present',
    current: true,
    description:
      'Contributing to CareerPlex, an AI-powered job application platform. Work spans LLM integration, replacing rule-based classifiers with AI batch classification, improving the auto-apply pipeline, performance optimisation across caching and database connections, and privacy-safe resume generation.',
    tags: ['FastAPI', 'React', 'PostgreSQL', 'Claude AI', 'Supabase'],
  },
  {
    company: 'Consulaw Technologies',
    role: 'Software Engineer',
    period: '2024 - Present',
    current: true,
    description:
      'Built Nahedris Foods, a full-stack platform for a food brand, covering both the frontend experience and backend services. Currently leading the redesign of the company website.',
    tags: ['React', 'Spring Boot', 'Java'],
  },
  {
    company: 'Independent',
    role: 'Freelance Full-Stack Developer',
    period: '2025 - Present',
    current: false,
    description:
      'Delivered production systems across logistics, healthcare, and media. Built Haulo, a last-mile delivery ecosystem with AI route optimisation, real-time GPS tracking, and a multi-app architecture spanning customer, merchant, agent, and admin interfaces. Won recognition at the Squad Hackathon for an AI insurance fraud detection system built for the Nigerian market.',
    tags: ['React Native', 'Node.js', 'Next.js', 'Spring Boot', 'PostgreSQL', 'Redis', 'AWS'],
  },
]

const Dot = ({ active }) => (
  <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    {active && (
      <motion.div
        animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          background: '#39FF14',
        }}
      />
    )}
    <div style={{
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: active ? '#39FF14' : 'rgba(255,255,255,0.18)',
      position: 'relative',
      zIndex: 1,
    }} />
  </div>
)

const ExperienceSection = () => {
  const isMobile = useIsMobile()
  const leftPad = isMobile ? '28px' : '40px'

  return (
    <section
      id="experience"
      style={{ backgroundColor: '#0a0a0a', padding: isMobile ? '80px 6vw' : '100px 8vw' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            color: '#ffffff',
            letterSpacing: '-0.01em',
            marginBottom: '64px',
          }}
        >
          Experience <span style={{ color: '#39FF14' }}>&</span> Work
        </motion.h2>

        <div style={{ position: 'relative', paddingLeft: leftPad }}>

          {/* Vertical timeline line */}
          <div style={{
            position: 'absolute',
            left: isMobile ? '3px' : '3px',
            top: '8px',
            bottom: '80px',
            width: '1px',
            background: 'rgba(255,255,255,0.07)',
          }} />

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              style={{
                position: 'relative',
                paddingBottom: i < EXPERIENCE.length - 1 ? '56px' : 0,
              }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: isMobile ? '-25px' : '-37px',
                top: '7px',
              }}>
                <Dot active={exp.current} />
              </div>

              {/* Company + badge */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                flexWrap: 'wrap',
                marginBottom: '8px',
              }}>
                <h3 style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontWeight: 600,
                  fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)',
                  color: '#ffffff',
                  letterSpacing: '-0.01em',
                }}>
                  {exp.company}
                </h3>
                {exp.current && (
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.6rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#39FF14',
                    border: '1px solid rgba(57,255,20,0.4)',
                    borderRadius: '100px',
                    padding: '2px 10px',
                  }}>
                    Current
                  </span>
                )}
              </div>

              {/* Role + period */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                flexWrap: 'wrap',
                marginBottom: '16px',
              }}>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.85rem',
                  color: '#9ca3af',
                }}>
                  {exp.role}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.12)', fontSize: '0.9rem' }}>·</span>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.78rem',
                  color: '#6b7280',
                  letterSpacing: '0.02em',
                }}>
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.9rem',
                color: '#9ca3af',
                lineHeight: 1.85,
                marginBottom: '20px',
                maxWidth: '600px',
              }}>
                {exp.description}
              </p>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.68rem',
                      letterSpacing: '0.05em',
                      color: '#6b7280',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '4px',
                      padding: '3px 10px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
