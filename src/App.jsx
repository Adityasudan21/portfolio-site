import orchestroImg from './assets/screenshots/orchestro.png'
import connectTurretImg from './assets/screenshots/connect-turret.png'
import './index.css'

const LINKS = {
  email: 'adityasudan21@gmail.com',
  github: 'https://github.com/Adityasudan21',
}

const EXPERIENCE = [
  {
    period: 'Aug 2024 — Present',
    role: 'Software Engineer',
    company: 'Amdocs',
    location: 'Gurugram, India',
    bullets: [
      'Engineered a payment-processing microservice integrated with PayPal using Spring Boot, Oracle DB, Elasticsearch, and Kafka, enabling real-time transaction status updates and reducing payment-data querying time by 8%.',
      'Led the design and delivery of 37+ REST APIs for integration with SITA using Spring Boot, enabling end-to-end service communication and reducing manual data handoff across systems.',
      'Created Spring Boot batch jobs to transform and migrate Payment, Audit Entry, and Text Message data, enabling structured reporting and downstream system compatibility.',
      'Resolved 65+ critical production issues by deep-diving into server logs and database queries, consistently meeting client SLA timelines and reducing repeat ticket occurrence.',
      'Built and deployed SmartDoc Assistant Hub, an internal AI-assisted workflow tool that indexes JIRA tickets, retrieves attachments, and runs them through a RAG-based AI pipeline to generate business-level documentation — reduced manual documentation effort by 70% via a CI/CD-triggered auto-documentation workflow.',
      'Developed a microservice for RAG-based internal tooling to visualize and navigate complex business relationships through a graph-based representation of 1,100+ database tables.',
    ],
  },
  {
    period: 'Jan 2024 — Jun 2024',
    role: 'Software Engineering Intern',
    company: 'Nucleus Software',
    location: 'Noida, India',
    bullets: [
      'Developed a Java + Selenium automation test suite for Yes Bank, improving workflow reliability and reducing manual QA effort.',
      'Built supporting Java Servlet components for the frontend.',
    ],
  },
]

const EDUCATION = {
  school: 'Thapar Institute of Engineering and Technology, Patiala',
  period: '2020 — 2024',
  degree: 'B.E. in Computer Engineering',
  detail: 'CGPA: 7.27 / 10.00',
}

const CERTIFICATIONS = [
  'Solved 350+ DSA problems on LeetCode',
  'Securing GenAI Systems Course — Udemy',
]

const PROJECTS = [
  {
    name: 'SmartDoc Assistant Hub',
    img: null,
    internal: true,
    desc: 'An AI-assisted internal tool built at Amdocs that auto-generates technical documentation directly from JIRA tickets using LLM-based summarization and retrieval. Cut manual documentation effort by roughly 70% for the team by turning raw ticket context into structured, review-ready docs.',
    tags: ['Java', 'Spring Boot', 'LLM / RAG', 'JIRA Integration'],
  },
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
                <div className="exp-company">
                  {item.company} · {item.location}
                </div>
                <ul className="exp-bullets">
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-label">02 · Education</div>
        <h2 className="section-heading">Where I studied</h2>
        <div className="exp-list">
          <div className="exp-item">
            <div className="exp-period">{EDUCATION.period}</div>
            <div>
              <h3 className="exp-role">{EDUCATION.school}</h3>
              <div className="exp-company">{EDUCATION.degree}</div>
              <p className="exp-desc">{EDUCATION.detail}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-label">03 · Certifications &amp; Achievements</div>
        <h2 className="section-heading">Credentials</h2>
        <ul className="cert-list">
          {CERTIFICATIONS.map((c, i) => (
            <li key={i} className="cert-item">
              <span className="cert-dot" />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-label">04 · Projects</div>
        <h2 className="section-heading">Things I've built</h2>
        <p className="section-sub">
          Side projects exploring backend architecture, AI agents, and
          full-stack delivery.
        </p>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div className="project-card" key={p.name}>
              <div className="project-media">
                {p.img ? (
                  <img src={p.img} alt={`${p.name} screenshot`} />
                ) : (
                  <div className="project-media-placeholder">
                    <span className="lock-icon">🔒</span>
                    <span>Amdocs Internal Tool</span>
                    <span className="placeholder-sub">No public screenshot available</span>
                  </div>
                )}
              </div>
              <div className="project-body">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                {p.internal ? (
                  <div className="project-links">
                    <span className="btn btn-ghost" style={{ cursor: 'default' }}>
                      Private · Internal to Amdocs
                    </span>
                  </div>
                ) : (
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
                )}
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
          05 · Contact
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
      <Education />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
