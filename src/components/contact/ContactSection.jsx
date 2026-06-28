import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SiGithub, SiX } from 'react-icons/si'

const LinkedInIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)
import useIsMobile from '../../hooks/useIsMobile'

const BUDGETS = ['100k - 250k', '250k - 1m', '1m+']

const SERVICES = [
  'Full-Stack Development',
  'API Design & Development',
  'Mobile App Development',
  'Database Architecture',
  'System Design',
  'AI Integration',
]

const SOCIALS = [
  { Icon: SiGithub,   href: 'https://github.com/DeboAdeniran',                          label: 'GitHub' },
  { Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/debo-adeniran-3b1998343',      label: 'LinkedIn' },
  { Icon: SiX,        href: 'https://x.com/deboaden?s=11',                              label: 'X' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
})

const ContactSection = () => {
  const isMobile = useIsMobile()
  const [selected, setSelected] = useState([])
  const [budget, setBudget]     = useState(null)
  const [form, setForm]         = useState({ name: '', email: '', message: '' })
  const [focused, setFocused]   = useState(null)

  const toggle = (s) =>
    setSelected((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Project Inquiry${form.name ? ` from ${form.name}` : ''}`
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      selected.length ? `Services: ${selected.join(', ')}` : '',
      budget ? `Budget: ${budget}` : '',
      '',
      'Message:',
      form.message,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(
      `mailto:raqibadeniran03@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    )
  }

  const inputStyle = (field) => ({
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${focused === field ? '#39FF14' : 'rgba(255,255,255,0.1)'}`,
    color: '#f0f0f0',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.9rem',
    padding: '10px 0',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.25s ease',
    caretColor: '#39FF14',
  })

  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#0a0a0a',
        padding: isMobile ? '80px 6vw 60px' : '0 8vw',
        minHeight: isMobile ? 'auto' : '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>

        {/* ── Heading ── */}
        <motion.div {...fadeUp()} style={{ marginBottom: isMobile ? '40px' : '32px' }}>
          <h2 style={{
            fontFamily: "'Clash Display', sans-serif",
            fontWeight: 700,
            fontSize: isMobile ? 'clamp(2.4rem, 10vw, 3.2rem)' : 'clamp(2rem, 3.2vw, 3.5rem)',
            color: '#ffffff',
            lineHeight: 1.04,
            letterSpacing: '-0.02em',
          }}>
            Have something<br />
            in mind?{' '}
            <span style={{ color: '#39FF14' }}>Let's talk.</span>
          </h2>
        </motion.div>

        {/* ── Animated divider ── */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: '1px',
            background: 'rgba(255,255,255,0.07)',
            marginBottom: isMobile ? '48px' : '36px',
          }}
        />

        {/* ── Body ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1.7fr',
          gap: isMobile ? '56px' : '60px',
          alignItems: 'start',
        }}>

          {/* Left — contact info */}
          <motion.div {...fadeUp(0.1)}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.68rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#39FF14',
              marginBottom: '28px',
            }}>
              Contact
            </p>

            <a
              href="mailto:raqibadeniran03@gmail.com"
              style={{
                display: 'block',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.88rem',
                color: '#9ca3af',
                textDecoration: 'none',
                marginBottom: '10px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f0f0f0')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
            >
              raqibadeniran03@gmail.com
            </a>

            <a
              href="tel:+2349154368899"
              style={{
                display: 'block',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.88rem',
                color: '#9ca3af',
                textDecoration: 'none',
                marginBottom: isMobile ? '44px' : '28px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f0f0f0')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
            >
              +234 915 436 8899
            </a>

            {/* Socials */}
            <div style={{ display: 'flex', gap: '18px' }}>
              {SOCIALS.map(({ Icon, href, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.07 }}
                  style={{ color: '#4b5563', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#39FF14')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#4b5563')}
                >
                  <Icon size={19} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div {...fadeUp(0.2)}>

            {/* Services */}
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.68rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#4b5563',
              marginBottom: '14px',
            }}>
              What do you need?
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: isMobile ? '44px' : '24px' }}>
              {SERVICES.map((s, i) => (
                <motion.button
                  key={s}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.25 + i * 0.06 }}
                  onClick={() => toggle(s)}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.78rem',
                    padding: '7px 16px',
                    borderRadius: '100px',
                    border: `1px solid ${selected.includes(s) ? 'rgba(57,255,20,0.45)' : 'rgba(255,255,255,0.09)'}`,
                    background: selected.includes(s) ? 'rgba(57,255,20,0.07)' : 'transparent',
                    color: selected.includes(s) ? '#39FF14' : '#6b7280',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    letterSpacing: '0.02em',
                  }}
                >
                  {s}
                </motion.button>
              ))}
            </div>

            {/* Budget */}
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.68rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#4b5563',
              marginBottom: '14px',
            }}>
              Budget (₦)
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: isMobile ? '44px' : '24px' }}>
              {BUDGETS.map((b, i) => (
                <motion.button
                  key={b}
                  type="button"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.35 + i * 0.06 }}
                  onClick={() => setBudget(budget === b ? null : b)}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.78rem',
                    padding: '7px 16px',
                    borderRadius: '100px',
                    border: `1px solid ${budget === b ? 'rgba(0,255,204,0.45)' : 'rgba(255,255,255,0.09)'}`,
                    background: budget === b ? 'rgba(0,255,204,0.07)' : 'transparent',
                    color: budget === b ? '#00FFCC' : '#6b7280',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    letterSpacing: '0.02em',
                  }}
                >
                  {b}
                </motion.button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: '20px',
                marginBottom: '20px',
              }}>
                {[
                  { key: 'name',  label: 'Your Name',  type: 'text' },
                  { key: 'email', label: 'Your Email', type: 'email' },
                ].map(({ key, label, type }) => (
                  <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.65rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: focused === key ? '#39FF14' : '#4b5563',
                      transition: 'color 0.25s',
                    }}>
                      {label}
                    </label>
                    <input
                      type={type}
                      value={form[key]}
                      onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                      onFocus={() => setFocused(key)}
                      onBlur={() => setFocused(null)}
                      style={inputStyle(key)}
                      required
                    />
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: isMobile ? '40px' : '24px' }}>
                <label style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: focused === 'message' ? '#39FF14' : '#4b5563',
                  transition: 'color 0.25s',
                }}>
                  Tell me about the project
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  rows={4}
                  style={{ ...inputStyle('message'), resize: 'none', lineHeight: 1.75 }}
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '13px 30px',
                  background: '#39FF14',
                  color: '#0a0a0a',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                Send Message <ArrowUpRight size={15} strokeWidth={2} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection
