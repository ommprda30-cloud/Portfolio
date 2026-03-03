import { useEffect, useRef } from 'react'

const techs = [
  'HTML', 'CSS', 'JavaScript', 'React JS', 'JSX',
  'Spring Boot', 'Hibernate', 'MySQL', 'REST API', 'Core Java',
]

const features = [
  { icon: '🖥️', title: 'Responsive UI',       desc: 'Built with HTML, CSS & React JS — works across all screen sizes.' },
  { icon: '📊', title: 'Data Visualization',   desc: 'Dynamic charts and graphs to monitor energy usage patterns.' },
  { icon: '🔗', title: 'REST API Integration', desc: 'Seamless frontend-backend communication via RESTful APIs.' },
  { icon: '🗄️', title: 'Database Layer',       desc: 'Hibernate ORM with MySQL for reliable CRUD operations.' },
]

export default function Project() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    const el = ref.current?.querySelector('.fade-up')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="project-section" id="project">
      <div className="container" ref={ref}>
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">Featured Project</h2>

        <div className="project-card fade-up">
          <div className="project-top">
            <div className="project-title">⚡ Sustainable Energy Monitoring Dashboard</div>
            <span className="project-type">Web Application</span>
          </div>

          <p className="project-desc">
            A full-stack web application to track and visualize energy consumption
            data in real time. Helps users monitor usage patterns and promotes
            sustainable energy awareness through a clean, interactive UI and
            data visualization.
          </p>

          <div className="tech-tags">
            {techs.map((t) => (
              <span className="tech-tag" key={t}>{t}</span>
            ))}
          </div>

          <div className="project-features">
            {features.map((f) => (
              <div className="feature-box" key={f.title}>
                <strong>{f.icon} {f.title}</strong>
                <span>{f.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}