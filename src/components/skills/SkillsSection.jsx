import { motion } from 'framer-motion'
import useIsMobile from '../../hooks/useIsMobile'
import {
  SiJavascript, SiTypescript,
  SiReact, SiTailwindcss, SiHtml5, SiCss, SiVite, SiNextdotjs, SiCapacitor,
  SiSpringboot, SiSpringsecurity, SiSpring, SiHibernate, SiNodedotjs, SiExpress,
  SiPostgresql, SiMysql, SiMongodb, SiRedis,
  SiIntellijidea, SiGit, SiGithub, SiPostman, SiApachemaven, SiSwagger,
} from 'react-icons/si'
import { Layers, GitBranch, Code2, Globe, Lock, Database, Coffee, Monitor } from 'lucide-react'

const SKILLS = [
  // Languages
  { name: 'Java',        Icon: Coffee,        color: '#ED8B00', cat: 'Languages' },
  { name: 'JavaScript',  Icon: SiJavascript,   color: '#F7DF1E', cat: 'Languages' },
  { name: 'TypeScript',  Icon: SiTypescript,   color: '#3178C6', cat: 'Languages' },
  { name: 'SQL',         Icon: Database,       color: '#00FFCC', cat: 'Languages' },
  // Frontend
  { name: 'React',       Icon: SiReact,        color: '#61DAFB', cat: 'Frontend' },
  { name: 'TailwindCSS', Icon: SiTailwindcss,  color: '#06B6D4', cat: 'Frontend' },
  { name: 'HTML5',       Icon: SiHtml5,        color: '#E34F26', cat: 'Frontend' },
  { name: 'CSS3',        Icon: SiCss,          color: '#1572B6', cat: 'Frontend' },
  { name: 'Vite',        Icon: SiVite,         color: '#646CFF', cat: 'Frontend' },
  { name: 'Next.js',     Icon: SiNextdotjs,    color: '#ffffff', cat: 'Frontend' },
  { name: 'Capacitor',   Icon: SiCapacitor,    color: '#119EFF', cat: 'Frontend' },
  // Backend
  { name: 'Spring Boot',     Icon: SiSpringboot,    color: '#6DB33F', cat: 'Backend' },
  { name: 'Spring Security', Icon: SiSpringsecurity, color: '#6DB33F', cat: 'Backend' },
  { name: 'Spring MVC',      Icon: SiSpring,        color: '#6DB33F', cat: 'Backend' },
  { name: 'Hibernate / JPA', Icon: SiHibernate,     color: '#BCAE79', cat: 'Backend' },
  { name: 'Node.js',         Icon: SiNodedotjs,     color: '#339933', cat: 'Backend' },
  { name: 'Express.js',      Icon: SiExpress,       color: '#ffffff', cat: 'Backend' },
  { name: 'REST APIs',       Icon: Globe,           color: '#39FF14', cat: 'Backend' },
  // Databases
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1', cat: 'Databases' },
  { name: 'MySQL',      Icon: SiMysql,      color: '#4479A1', cat: 'Databases' },
  { name: 'MongoDB',    Icon: SiMongodb,    color: '#47A248',  cat: 'Databases' },
  { name: 'Redis',      Icon: SiRedis,      color: '#DC382D', cat: 'Databases' },
  // Tools
  { name: 'IntelliJ IDEA', Icon: SiIntellijidea,     color: '#FE315D', cat: 'Tools' },
  { name: 'VS Code',        Icon: Monitor,            color: '#007ACC', cat: 'Tools' },
  { name: 'Git',            Icon: SiGit,              color: '#F05032', cat: 'Tools' },
  { name: 'GitHub',         Icon: SiGithub,           color: '#ffffff', cat: 'Tools' },
  { name: 'Postman',        Icon: SiPostman,          color: '#FF6C37', cat: 'Tools' },
  { name: 'Maven',          Icon: SiApachemaven,      color: '#C71A36', cat: 'Tools' },
  { name: 'Swagger',        Icon: SiSwagger,          color: '#85EA2D', cat: 'Tools' },
  // Architecture
  { name: 'System Design',   Icon: Layers,     color: '#39FF14', cat: 'Architecture' },
  { name: 'Microservices',   Icon: GitBranch,  color: '#00FFCC', cat: 'Architecture' },
  { name: 'MVC Pattern',     Icon: Code2,      color: '#39FF14', cat: 'Architecture' },
  { name: 'API Design',      Icon: Globe,      color: '#00FFCC', cat: 'Architecture' },
  { name: 'Auth / JWT',      Icon: Lock,       color: '#39FF14', cat: 'Architecture' },
  { name: 'Database Design', Icon: Database,   color: '#00FFCC', cat: 'Architecture' },
]

const CATS = [...new Set(SKILLS.map((s) => s.cat))]

// ─────────────────────────────────────────────
// Skills section — large icons, categorised
// ─────────────────────────────────────────────
const SkillGrid = () => {
  const isMobile = useIsMobile()
  return (
  <div style={{
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
    gap: isMobile ? '40px' : '56px 80px',
  }}>
    {CATS.map((cat) => (
      <div key={cat}>
        <motion.p
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.72rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#39FF14',
            marginBottom: '20px',
          }}
        >{cat}</motion.p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {SKILLS.filter((s) => s.cat === cat).map(({ name, Icon, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.12, y: -4 }}
              viewport={{ once: true }}
              transition={{
                opacity: { duration: 0.35, delay: i * 0.06 },
                y: { duration: 0.35, delay: i * 0.06 },
                scale: { duration: 0.18 },
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                cursor: 'default',
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '14px',
                background: `${color}12`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1px solid ${color}28`,
              }}>
                <Icon size={32} color={color} />
              </div>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.65rem',
                color: '#6b7280',
                textAlign: 'center',
                maxWidth: '64px',
                lineHeight: 1.3,
              }}>{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    ))}
  </div>
  )
}

const SkillsSection = () => (
  <section
    id="skills"
    style={{ backgroundColor: '#0a0a0a', padding: '100px 8vw' }}
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
          marginBottom: '56px',
        }}
      >
        Skills <span style={{ color: '#39FF14' }}>&</span> Tools
      </motion.h2>

      <SkillGrid />
    </div>
  </section>
)

export default SkillsSection
