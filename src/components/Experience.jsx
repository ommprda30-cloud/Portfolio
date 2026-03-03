import { useEffect, useRef } from 'react'

const experiences = [
  {
    role: 'Java Full Stack Developer',
    company: 'QSpiders, Bhubaneswar — Incubation Program',
    duration: '1 Year',
    points: [
      'Intensive training in Java Full Stack Development covering end-to-end web app building.',
      'Developed user interfaces using HTML, CSS, JavaScript, and React JS.',
      'Built backend applications using Spring Boot and Hibernate.',
      'Performed CRUD operations and database management using MySQL.',
      'Learned MVC architecture, real-time application flow, and SDLC basics.',
      'Improved problem-solving, debugging, and clean coding practices.',
    ],
  },
  {
    role: 'Full Stack Web Development Intern',
    company: 'Seeree Services Pvt. Ltd.',
    duration: 'Internship',
    points: [
      'Gained practical exposure to frontend and backend web development in a live environment.',
      'Worked with HTML, CSS, and JavaScript to build responsive web modules.',
      'Integrated frontend UI with Spring Boot backend via REST APIs.',
      'Understood real-world development lifecycle and team collaboration.',
      'Developed simple features and contributed to production-ready modules.',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    const cards = ref.current?.querySelectorAll('.fade-up')
    cards?.forEach((el, i) => {
      el.style.transitionDelay = `${i * 120}ms`
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience">
      <div className="container" ref={ref}>
        <p className="section-label">Where I've Worked</p>
        <h2 className="section-title">Experience</h2>
        <div className="exp-list">
          {experiences.map((exp) => (
            <div className="exp-card fade-up" key={exp.role}>
              <div className="exp-card-top">
                <div>
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-company">{exp.company}</div>
                </div>
                <div className="exp-badge">{exp.duration}</div>
              </div>
              <ul className="exp-points">
                {exp.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}