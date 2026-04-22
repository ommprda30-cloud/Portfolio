import { useEffect, useRef } from 'react'

const techs = [
  'HTML', 'CSS', 'JavaScript', 'React JS', 'JSX',
  'Core Java', 'Advanced Java', 'Spring Boot', 'REST API', 'MySQL',
]

const features = [
  {
    icon: '📝',
    title: 'AI-Based Learning Management System',
    desc: 'Interactive user interface built with React JS and JSX to manage courses, students, and learning activities.',
  },
  {
    icon: '🎨',
    title: 'Progress Tracking',
    desc: 'Real-time progress tracking with a clean and responsive UI for students and instructors.',
  },
  {
    icon: '🔗',
    title: 'REST API Integration',
    desc: 'Spring Boot REST APIs handle course data, user details, and learning records seamlessly.',
  },
  {
    icon: '📄',
    title: 'Database Management',
    desc: 'SQL is used to store and manage users, courses, assessments, and progress data efficiently.',
  },
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
            <div className="project-title">📄 AI-Based Learning Management System</div>
            <span className="project-type">Web Application</span>
          </div>

          <p className="project-desc">
            An AI-Based Learning Management System web application that allows users to access courses,
             manage learning content, and track progress efficiently. 
            Built with React JS on the frontend and Spring Boot on the backend,it offers a smooth learning experience with personalized recommendations, 
            interactive course management, and secure database-driven functionality.
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