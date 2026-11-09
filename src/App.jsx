import orchestroImg from './assets/screenshots/orchestro.png'
import connectTurretImg from './assets/screenshots/connect-turret.png'
import './index.css'

const LINKS = {
  email: 'adityasudan21@gmail.com',
  github: 'https://github.com/Adityasudan21',
}

const EXPERIENCE = [
  {
    period: '2024 — Present',
    role: 'Software Engineer',
    company: 'Amdocs',
    desc: 'Backend development on Kenan/KDE/C1CV product lines with Java and Spring Boot. Built SmartDoc Assistant, an AI-assisted internal tool that auto-generates documentation from JIRA tickets, cutting manual doc effort by roughly 70% for the team.',
  },
  {
    period: 'Jan — Jun 2024',
    role: 'Software Engineering Intern',
    company: 'Nucleus Software',
    desc: 'Worked on backend systems and internal tooling, gaining hands-on exposure to production-grade Java services before joining full-time at Amdocs.',
  },
]

const PROJECTS = [
  {
    name: 'Orchestro',
    img: orchestroImg,
    desc: 'A JIRA-like ticketing and project-management tool with a Spring Boot 4 backend and React frontend. Supports Projects → Stories → Tasks with role-based access (Admin/Manager/Developer), and an architecture built for Kafka + AI-agent integration — a live agent picks up tickets, analyzes them, and opens GitHub PRs on its own.',
    tags: ['Spring Boot 4', 'React', 'Kafka', 'AI Agent'],
    live: 'https://orchestro.co.in',
    github: 'https://github.com/Adityasudan21/Orchestro',
  },
  {
    name: 'Connect-Turret',
    img: connectTurretImg,
    desc: 'A social networking app built with React and Redux, modeled on professional-network patterns — friends, jobs, messaging, and notifications as first-class flows.',
    tags: ['React', 'Redux'],
    live: 'https://connect-turret-app.vercel.app',
    github: 'https://github.com/Adityasudan21/Connect-Turret-App',
  },
]

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo">Aditya Sudan</a>
        <ul className="nav-links">
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li className="hide-mobile">
            <a className="nav-cta" href={`mailto:${LINKS.email}`}>Contact me</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header id="top" className="hero">
      <div className="container">
        <div className="hero-badge">
          <span className="dot" />
          Open to backend opportunities
        </div>
        <h1>
          Aditya Sudan
          <span className="title">Backend Engineer</span>
        </h1>
        <p className="tagline">
          I build backend systems with Java, Spring Boot, and distributed
          architectures — from production microservices at Amdocs to
          AI-agent-driven side projects.
        </p>
        <div className="hero-actions">
          <a className="btn btn-light" href={`mailto:${LINKS.email}`}>
            Contact me
          </a>
          <a
            className="btn btn-ghost"
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
        </div>
      </div>
    </header>
  )
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-label">01 · Experience</div>
        <h2 className="section-heading">Where I've worked</h2>
        <p className="section-sub">
          Backend engineering roles focused on Java, Spring Boot, and
          production systems.
        </p>
        <div className="exp-list">
          {EXPERIENCE.map((item) => (
            <div className="exp-item" key={item.company}>
              <div className="exp-period">{item.period}</div>
              <div>
                <h3 className="exp-role">{item.role}</h3>
                <div className="exp-company">{item.company}</div>
                <p className="exp-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-label">02 · Projects</div>
        <h2 className="section-heading">Things I've built</h2>
        <p className="section-sub">
          Side projects exploring backend architecture, AI agents, and
          full-stack delivery.
        </p>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div className="project-card" key={p.name}>
              <div className="project-media">
                <img src={p.img} alt={`${p.name} screenshot`} />
              </div>
              <div className="project-body">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    className="btn btn-light"
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live site
                  </a>
                  <a
                    className="btn btn-ghost"
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>
          03 · Contact
        </div>
        <h2 className="section-heading">Let's talk</h2>
        <p className="section-sub" style={{ margin: '0 auto 0' }}>
          Open to backend/Java/Spring opportunities. Reach out by email or
          check out my work on GitHub.
        </p>
        <div className="contact-grid">
          <a className="contact-card" href={`mailto:${LINKS.email}`}>
            <span className="label">Email</span>
            <span className="value">{LINKS.email}</span>
          </a>
          <a
            className="contact-card"
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
          >
            <span className="label">GitHub</span>
            <span className="value">github.com/Adityasudan21</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Aditya Sudan. Built with React.</p>
    </footer>
  )
}

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
