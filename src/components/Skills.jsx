import { useEffect, useRef } from 'react'

const skills = [
  { icon: '🌐', name: 'HTML',       level: 'Proficient',   percent: 88 },
  { icon: '🎨', name: 'CSS',        level: 'Proficient',   percent: 85 },
  { icon: '⚡', name: 'JavaScript', level: 'Intermediate', percent: 78 },
  { icon: '⚛️', name: 'React JS',   level: 'Intermediate', percent: 75 },
  { icon: '📄', name: 'JSX',        level: 'Intermediate', percent: 75 },
]

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.15 }
    )
    const cards = ref.current?.querySelectorAll('.fade-up')
    cards?.forEach((el, i) => {
      el.style.transitionDelay = `${i * 80}ms`
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <section className="skills-section" id="skills">
      <div className="container" ref={ref}>
        <p className="section-label">What I Use</p>
        <h2 className="section-title">Frontend Skills</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill-card fade-up" key={s.name}>
              <span className="skill-icon">{s.icon}</span>
              <div className="skill-name">{s.name}</div>
              <div className="skill-level">{s.level}</div>
              <div className="skill-bar">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${s.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}