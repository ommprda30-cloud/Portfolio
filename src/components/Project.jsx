import { useEffect, useRef } from 'react'

const techs = [
  'HTML', 'CSS', 'JavaScript', 'React JS', 'JSX',
  'Core Java', 'Advanced Java', 'Spring Boot', 'REST API', 'MySQL',
]

const features = [
  { icon: '📝', title: 'Resume Builder UI',     desc: 'Interactive form-based UI built with React JS and JSX to input and preview resume data.' },
  { icon: '🎨', title: 'Live Preview',           desc: 'Real-time resume preview with clean formatting using HTML and CSS.' },
  { icon: '🔗', title: 'REST API Integration',   desc: 'Spring Boot REST APIs handle resume data submission and retrieval seamlessly.' },
  { icon: '📄', title: 'PDF Export',             desc: 'Export your resume as a downloadable PDF directly from the browser.' },
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
            <div className="project-title">📄 Resume Builder</div>
            <span className="project-type">Web Application</span>
          </div>

          <p className="project-desc">
            A full-stack Resume Builder web application that allows users to create,
            customize, and download professional resumes. Built with React JS on the
            frontend and Spring Boot on the backend, it offers a smooth form-filling
            experience with live preview and PDF export functionality.
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