import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import './index.css'
import Logo from './components/logo/Logo'
import HeroSection from './components/hero/HeroSection'
import AboutSection from './components/about/AboutSection'
import SkillsSection from './components/skills/SkillsSection'
import ExperienceSection from './components/experience/ExperienceSection'
import PortfolioPreview from './components/portfolio/PortfolioPreview'
import ContactSection from './components/contact/ContactSection'
import Footer from './components/footer/Footer'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import useIsMobile from './hooks/useIsMobile'

const NAV_ITEMS = ['home', 'about', 'skills', 'portfolio', 'articles']

const NAV_LINK_STYLE = {
  textDecoration: 'none',
  fontSize: '0.9rem',
  letterSpacing: '0.03em',
  fontFamily: "'DM Sans', sans-serif",
  transition: 'color 0.2s ease',
}

const Navbar = () => {
  const isMobile = useIsMobile()
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const goHome = (hash) => {
    navigate('/')
    setTimeout(() => {
      const el = document.getElementById(hash.replace('#', ''))
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
    setMenuOpen(false)
  }

  return (
    <>
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
        <button
          onClick={() => goHome('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <Logo />
        </button>

        {/* Desktop nav */}
        {!isMobile && (
          <nav style={{ display: 'flex', gap: '2.5rem' }}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => goHome(item)}
                style={{
                  ...NAV_LINK_STYLE,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: item === 'home' ? '#f0f0f0' : '#6b7280',
                  padding: 0,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#f0f0f0')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = item === 'home' ? '#f0f0f0' : '#6b7280')
                }
              >
                {item}
              </button>
            ))}
          </nav>
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <button
            onClick={() => goHome('contact')}
            style={{
              ...NAV_LINK_STYLE,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: 0,
            }}
          >
            talk to me <ArrowUpRight size={14} strokeWidth={1.5} />
          </button>
        )}

        {/* Mobile hamburger */}
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

      {/* Mobile overlay */}
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
            <button
              key={item}
              onClick={() => goHome(item)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#f0f0f0',
                textDecoration: 'none',
                fontSize: '2rem',
                fontFamily: "'Clash Display', sans-serif",
                fontWeight: 600,
                letterSpacing: '0.04em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#39FF14')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#f0f0f0')}
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => goHome('contact')}
            style={{
              ...NAV_LINK_STYLE,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#39FF14',
              fontSize: '0.95rem',
              marginTop: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            talk to me <ArrowUpRight size={14} strokeWidth={1.5} />
          </button>
        </div>
      )}
    </>
  )
}

const HomePage = () => (
  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <PortfolioPreview />
    <ContactSection />
  </main>
)

const App = () => (
  <BrowserRouter>
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/"               element={<HomePage />} />
          <Route path="/terms"          element={<TermsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
)

export default App
