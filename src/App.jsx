import './index.css'
import Logo from './components/logo/Logo'
import HeroSection from './components/hero/HeroSection'

const App = () => (
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
        padding: '1.4rem 6vw',
        backgroundColor: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <Logo />

      <nav
        style={{
          display: 'flex',
          gap: '2.5rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {['home', 'about', 'skills', 'portfolio', 'articles'].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            style={{
              color: item === 'home' ? '#f0f0f0' : '#6b7280',
              textDecoration: 'none',
              fontSize: '0.9rem',
              letterSpacing: '0.03em',
              fontFamily: "'DM Sans', sans-serif",
              transition: 'color 0.2s ease',
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

      <a
        href="#contact"
        style={{
          color: '#f0f0f0',
          textDecoration: 'none',
          fontSize: '0.9rem',
          letterSpacing: '0.03em',
          fontFamily: "'DM Sans', sans-serif",
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        talk to me <span style={{ fontSize: '1rem' }}>↗</span>
      </a>
    </header>

    <main>
      <HeroSection />
    </main>
  </div>
)

export default App
