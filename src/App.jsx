import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import './index.css'
import Logo from './components/logo/Logo'
import HeroSection from './components/hero/HeroSection'
import AboutSection from './components/about/AboutSection'
import SkillsSection from './components/skills/SkillsSection'
import ExperienceSection from './components/experience/ExperienceSection'
import PortfolioPreview from './components/portfolio/PortfolioPreview'
import useIsMobile from './hooks/useIsMobile'

const NAV_ITEMS = ['home', 'about', 'skills', 'portfolio', 'articles']

const NAV_LINK_STYLE = {
  textDecoration: 'none',
  fontSize: '0.9rem',
  letterSpacing: '0.03em',
  fontFamily: "'DM Sans', sans-serif",
  transition: 'color 0.2s ease',
}

const App = () => {
  const isMobile = useIsMobile()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isMobile ? '1rem 5vw' : '1.4rem 6vw',
          backgroundColor: 'rgba(10, 10, 10, 0.8)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
        }}
      >
        <Logo />

        {/* ── Desktop nav ── */}
        {!isMobile && (
          <nav style={{ display: 'flex', gap: '2.5rem' }}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                style={{
                  ...NAV_LINK_STYLE,
                  color: item === 'home' ? '#f0f0f0' : '#6b7280',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#f0f0f0')}
                onMouseLeave={(e) =>
                  (e.target.style.color = item === 'home' ? '#f0f0f0' : '#6b7280')
                }
              >
                {item}
              </a>
            ))}
          </nav>
        )}

        {/* ── Desktop CTA ── */}
        {!isMobile && (
          <a
            href="#contact"
            style={{
              ...NAV_LINK_STYLE,
              color: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            talk to me <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>
        )}

        {/* ── Mobile hamburger ── */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              color: menuOpen ? '#39FF14' : '#f0f0f0',
              transition: 'color 0.2s ease',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        )}
      </header>

      {/* ── Mobile full-screen menu overlay ── */}
      {isMobile && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            backgroundColor: 'rgba(10,10,10,0.97)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2.4rem',
            pointerEvents: menuOpen ? 'all' : 'none',
            opacity: menuOpen ? 1 : 0,
            transition: 'opacity 0.25s ease',
          }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: '#f0f0f0',
                textDecoration: 'none',
                fontSize: '2rem',
                fontFamily: "'Clash Display', sans-serif",
                fontWeight: 600,
                letterSpacing: '0.04em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#39FF14')}
              onMouseLeave={(e) => (e.target.style.color = '#f0f0f0')}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              ...NAV_LINK_STYLE,
              color: '#39FF14',
              fontSize: '0.95rem',
              marginTop: '0.5rem',
            }}
          >
            talk to me <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>
        </div>
      )}

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <PortfolioPreview />
      </main>
    </div>
  )
}

export default App
