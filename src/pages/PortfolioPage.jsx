import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Lock } from 'lucide-react'
import useIsMobile from '../hooks/useIsMobile'
import ContactSection from '../components/contact/ContactSection'

const PROJECTS = [
  {
    id: 1,
    name: 'DermAI',
    type: 'AI / Healthcare',
    stack: 'React · Node.js · AI',
    description: 'AI-powered dermatology platform with a patient-facing application, admin portal, and full backend services for automated skin condition analysis and clinical decision support.',
    link: 'https://derm-ai-five.vercel.app/',
    isPrivate: false,
  },
  {
    id: 2,
    name: 'Nahedris Foods',
    type: 'Full-Stack / E-commerce',
    stack: 'React · Spring Boot · Java',
    description: 'Full-stack platform for a food brand covering the complete customer-facing experience and backend services from order management to content delivery.',
    link: 'https://nahedris.com',
    isPrivate: false,
  },
  {
    id: 3,
    name: 'Haulo',
    type: 'Logistics / Mobile',
    stack: 'React Native · Node.js · Spring Boot · AWS',
    description: 'Last-mile delivery ecosystem built solo. Spans a customer app, merchant dashboard, delivery agent app, and admin portal with AI route optimisation and real-time GPS tracking.',
    link: null,
    isPrivate: true,
  },
  {
    id: 4,
    name: 'Squad Hackathon',
    type: 'Backend / Fintech',
    stack: 'Java · Spring Boot',
    description: 'Group project: AI-powered insurance fraud detection system for the Nigerian market. Built and owned the Spring Boot backend powering real-time claim scoring across photo forensics, document analysis, and identity checks.',
    link: null,
    isPrivate: true,
  },
  {
    id: 5,
    name: 'ClinicalAI',
    type: 'AI / Healthcare',
    stack: 'React · Node.js · Python',
    description: 'Clinical AI system with a patient-facing frontend, RESTful backend, and a machine learning layer for intelligent clinical data processing and decision support.',
    link: 'https://clinical-ai-frontend-dun.vercel.app',
    isPrivate: false,
  },
  {
    id: 6,
    name: 'QuizGenie',
    type: 'AI / EdTech',
    stack: 'React · Node.js · Python',
    description: 'AI-powered quiz generation platform that automatically produces assessments from source material using a Python AI component, with a full frontend and backend.',
    link: 'https://quiz-genie-ten.vercel.app',
    isPrivate: false,
  },
  {
    id: 7,
    name: 'HealthCare Portal',
    type: 'Full-Stack / Healthcare',
    stack: 'React · Node.js · JavaScript',
    description: 'Healthcare management system providing a structured portal for patient records, appointments, and clinical workflows across a full frontend and backend.',
    link: 'https://health-care-portal-dun.vercel.app',
    isPrivate: false,
  },
  {
    id: 8,
    name: 'LexiFlow',
    type: 'SaaS / Productivity',
    stack: 'React · Node.js · JavaScript',
    description: 'Document generation and management SaaS featuring a template library, digital signature workflow, billing with a credit system, and a complete document lifecycle.',
    link: 'https://lexi-flow-seven.vercel.app/',
    isPrivate: false,
  },
  {
    id: 9,
    name: 'AttendEase',
    type: 'Full-Stack / EdTech',
    stack: 'React · Node.js · JavaScript',
    description: 'Modern responsive web application for managing class attendance, tracking student presence, generating reports, and providing a clean administrative interface.',
    link: 'https://attend-ease-frontend-eta.vercel.app',
    isPrivate: false,
  },
  {
    id: 10,
    name: 'WallerSim',
    type: 'Backend / Fintech',
    stack: 'Java · Spring Boot',
    description: 'Java-based wallet simulation backend modelling core financial operations including account management, transactions, balance tracking, and ledger consistency.',
    link: null,
    isPrivate: true,
  },
  {
    id: 11,
    name: 'Norell PR',
    type: 'Frontend / Agency',
    stack: 'React · Vite · TailwindCSS',
    description: 'PR agency website converted from a static HTML prototype into a full React SPA with a homepage, about page, shared navigation, and fully branded sections.',
    link: 'https://norell-pr-ypdx.vercel.app/',
    isPrivate: false,
  },
]

const TOTAL = PROJECTS.length
const SEG = 100 / TOTAL

const PortfolioPage = () => {
  const scrollRef   = useRef(null)
  const [curr, set] = useState(0)
  const isMobile    = useIsMobile()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onScroll = () => {
      const idx = Math.round(el.scrollTop / el.clientHeight)
      set(Math.max(0, Math.min(idx, TOTAL - 1)))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const outerPad = isMobile ? 12 : 20
  const boxHeight = isMobile
    ? 'calc(100vh - 88px)'
    : 'calc(100vh - 104px)'

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>

      {/* Portfolio box section */}
      <section style={{
        paddingTop: '64px',
        paddingLeft: `${outerPad}px`,
        paddingRight: `${outerPad}px`,
        paddingBottom: `${outerPad}px`,
        boxSizing: 'border-box',
        position: 'relative',
      }}>

        {/* Counter */}
        <div style={{
          position: 'absolute',
          top: 64 + outerPad + 14,
          right: outerPad + 18,
          zIndex: 20,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.78rem',
          letterSpacing: '0.1em',
          userSelect: 'none',
        }}>
          <span style={{ color: '#f0f0f0' }}>{String(curr + 1).padStart(2, '0')}</span>
          <span style={{ color: '#4b5563' }}> / {String(TOTAL).padStart(2, '0')}</span>
        </div>

        {/* Box */}
        <div style={{
          height: boxHeight,
          border: '1px solid rgba(57,255,20,0.14)',
          borderRadius: isMobile ? '10px' : '16px',
          overflow: 'hidden',
          display: 'flex',
        }}>

          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="hide-scrollbar"
            style={{
              flex: 1,
              overflowY: 'auto',
              scrollSnapType: 'y mandatory',
              scrollbarWidth: 'none',
            }}
          >
            {PROJECTS.map((p, i) => (
              <div
                key={p.id}
                style={{
                  height: '100%',
                  scrollSnapAlign: 'start',
                  boxSizing: 'border-box',
                  padding: isMobile ? '36px 24px 28px' : '48px 72px 52px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {/* Type label */}
                <motion.div
                  animate={{ opacity: curr === i ? 1 : 0, y: curr === i ? 0 : -8 }}
                  transition={{ duration: 0.38, delay: curr === i ? 0.05 : 0 }}
                  style={{ textAlign: 'center' }}
                >
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.68rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#4b5563',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    paddingBottom: '5px',
                  }}>
                    {p.type}
                  </span>
                </motion.div>

                {/* Project name + stack */}
                <motion.div
                  animate={{ opacity: curr === i ? 1 : 0, y: curr === i ? 0 : 22 }}
                  transition={{ duration: 0.42, delay: curr === i ? 0.1 : 0 }}
                  style={{ textAlign: 'center' }}
                >
                  <h2 style={{
                    fontFamily: "'Clash Display', sans-serif",
                    fontWeight: 700,
                    fontSize: isMobile
                      ? 'clamp(2.2rem, 9vw, 3.5rem)'
                      : 'clamp(3.5rem, 6.5vw, 7rem)',
                    color: '#ffffff',
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                    marginBottom: isMobile ? '14px' : '22px',
                  }}>
                    {p.name}
                  </h2>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: isMobile ? '0.78rem' : '0.95rem',
                    color: '#00FFCC',
                    letterSpacing: '0.04em',
                    margin: 0,
                  }}>
                    {p.stack}
                  </p>
                </motion.div>

                {/* Description + button */}
                <motion.div
                  animate={{ opacity: curr === i ? 1 : 0, y: curr === i ? 0 : 12 }}
                  transition={{ duration: 0.38, delay: curr === i ? 0.16 : 0 }}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    gap: '24px',
                    flexWrap: isMobile ? 'wrap' : 'nowrap',
                  }}
                >
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: isMobile ? '0.78rem' : '0.88rem',
                    color: '#9ca3af',
                    lineHeight: 1.82,
                    maxWidth: isMobile ? '100%' : '52%',
                    margin: 0,
                  }}>
                    {p.description}
                  </p>

                  {p.isPrivate ? (
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      padding: '10px 22px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '100px',
                      color: '#4b5563',
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.78rem',
                      letterSpacing: '0.05em',
                      flexShrink: 0,
                    }}>
                      <Lock size={11} strokeWidth={1.5} /> Private
                    </div>
                  ) : (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '7px',
                        padding: '10px 24px',
                        border: '1px solid rgba(57,255,20,0.35)',
                        borderRadius: '100px',
                        color: '#39FF14',
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '0.78rem',
                        letterSpacing: '0.05em',
                        textDecoration: 'none',
                        flexShrink: 0,
                        transition: 'background 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(57,255,20,0.07)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                    >
                      Open Project <ArrowUpRight size={13} strokeWidth={1.5} />
                    </a>
                  )}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Vertical progress bar */}
          <div style={{
            width: '3px',
            background: 'rgba(255,255,255,0.05)',
            flexShrink: 0,
            position: 'relative',
          }}>
            <motion.div
              animate={{ top: `${curr * SEG}%` }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                left: 0,
                width: '100%',
                height: `${SEG}%`,
                background: '#39FF14',
                borderRadius: '2px',
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact section — visible when you scroll past the box */}
      <ContactSection />
    </div>
  )
}

export default PortfolioPage
