import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Lock } from 'lucide-react'
import useIsMobile from '../../hooks/useIsMobile'

const PROJECTS = [
  {
    id: 'dermAI',
    name: 'DermAI',
    category: 'AI / Healthcare',
    description: 'AI-powered dermatology platform with a patient-facing app, admin portal, and full backend services.',
    image: '/portfolio/dermAI.png',
    link: 'https://derm-ai-five.vercel.app/',
    isPrivate: false,
  },
  {
    id: 'nahedris',
    name: 'Nahedris Foods',
    category: 'Full-Stack / Food',
    description: 'Full-stack platform for a food brand, covering the complete customer experience and backend.',
    image: '/portfolio/nahedrisFood.png',
    link: 'https://nahedris.com',
    isPrivate: false,
  },
  {
    id: 'haulo',
    name: 'Haulo',
    category: 'Logistics / Mobile',
    description: 'Last-mile delivery ecosystem with AI route optimisation, real-time GPS tracking, and a multi-app architecture spanning customer, merchant, agent, and admin interfaces.',
    image: null,
    link: null,
    isPrivate: true,
  },
]

const HauloPlaceholder = () => (
  <div style={{
    width: '100%',
    height: '100%',
    background: 'linear-gradient(145deg, #0e0e14 0%, #161620 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Subtle grid */}
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.06 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
    <span style={{
      fontFamily: "'Clash Display', sans-serif",
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: 700,
      color: 'rgba(255,255,255,0.05)',
      letterSpacing: '-0.02em',
      userSelect: 'none',
      position: 'relative',
      zIndex: 1,
    }}>
      HAULO
    </span>
  </div>
)

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.07)',
        aspectRatio: '4/3',
      }}
    >
      {/* Visual */}
      {project.image ? (
        <img
          src={project.image}
          alt={project.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
          }}
        />
      ) : (
        <HauloPlaceholder />
      )}

      {/* Hover overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(10,10,10,0.88)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '24px',
      }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.85rem',
          color: '#9ca3af',
          lineHeight: 1.75,
          marginBottom: '18px',
        }}>
          {project.description}
        </p>

        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              color: '#39FF14',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.8rem',
              letterSpacing: '0.04em',
              textDecoration: 'none',
            }}
          >
            View Live <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>
        ) : (
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#4b5563',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.75rem',
            letterSpacing: '0.04em',
          }}>
            <Lock size={11} strokeWidth={1.5} /> Private Project
          </span>
        )}
      </div>

      {/* Bottom label — visible when not hovered */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '40px 20px 18px',
        background: 'linear-gradient(to top, rgba(10,10,10,0.96) 0%, transparent 100%)',
        opacity: hovered ? 0 : 1,
        transition: 'opacity 0.3s ease',
        pointerEvents: 'none',
      }}>
        <p style={{
          fontFamily: "'Clash Display', sans-serif",
          fontSize: '1rem',
          fontWeight: 600,
          color: '#ffffff',
          letterSpacing: '-0.01em',
          marginBottom: '3px',
        }}>
          {project.name}
        </p>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.65rem',
          color: '#6b7280',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>
          {project.category}
        </p>
      </div>

      {/* Private badge */}
      {project.isPrivate && (
        <div style={{
          position: 'absolute',
          top: '14px',
          right: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          background: 'rgba(10,10,10,0.75)',
          border: '1px solid rgba(255,255,255,0.09)',
          borderRadius: '100px',
          padding: '4px 10px',
          backdropFilter: 'blur(6px)',
        }}>
          <Lock size={10} color="#4b5563" strokeWidth={1.5} />
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.6rem',
            color: '#4b5563',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            Private
          </span>
        </div>
      )}
    </motion.div>
  )
}

const PortfolioPreview = () => {
  const isMobile = useIsMobile()

  return (
    <section
      id="portfolio"
      style={{ backgroundColor: '#0a0a0a', padding: isMobile ? '80px 6vw' : '100px 8vw' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '56px' }}
        >
          <h2 style={{
            fontFamily: "'Clash Display', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            color: '#ffffff',
            letterSpacing: '-0.01em',
            marginBottom: '10px',
          }}>
            Selected <span style={{ color: '#39FF14' }}>Work</span>
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.9rem',
            color: '#6b7280',
          }}>
            A few things I have shipped
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '20px',
        }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginTop: '48px', textAlign: 'center' }}
        >
          <a
            href="/portfolio"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.85rem',
              color: '#6b7280',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#39FF14')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#6b7280')}
          >
            View all projects <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default PortfolioPreview
