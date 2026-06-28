import { Link } from 'react-router-dom'
import { SiGithub, SiX } from 'react-icons/si'
import LogoMark from '../logo/LogoVariants'
import useIsMobile from '../../hooks/useIsMobile'

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const NAV_LINKS = [
  { label: 'Terms', to: '/terms' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Skills', to: '/#skills' },
]

const SOCIALS = [
  { Icon: SiGithub,     href: 'https://github.com/DeboAdeniran',                         label: 'GitHub' },
  { Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/debo-adeniran-3b1998343',      label: 'LinkedIn' },
  { Icon: SiX,          href: 'https://x.com/deboaden?s=11',                             label: 'X' },
]

const linkStyle = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '0.78rem',
  color: '#4b5563',
  textDecoration: 'none',
  letterSpacing: '0.03em',
  transition: 'color 0.2s',
}

const Footer = () => {
  const isMobile = useIsMobile()

  return (
    <footer style={{
      backgroundColor: '#0a0a0a',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: isMobile ? '40px 6vw' : '48px 8vw',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: isMobile ? 'wrap' : 'nowrap',
        gap: isMobile ? '20px' : '0',
      }}>

        {/* Left: legal links + socials */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f0f0f0')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4b5563')}
            >
              {label}
            </Link>
          ))}
          <div style={{ width: '1px', height: '12px', background: 'rgba(255,255,255,0.1)' }} />
          {SOCIALS.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              style={{ color: '#4b5563', transition: 'color 0.2s', display: 'flex' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#39FF14')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4b5563')}
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        {/* Center: logo */}
        {!isMobile && (
          <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            <LogoMark size={28} />
          </div>
        )}

        {/* Right: copyright */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.72rem',
          color: '#4b5563',
          letterSpacing: '0.02em',
          whiteSpace: 'nowrap',
        }}>
          &copy; 2026 Adebowale Adeniran. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer
