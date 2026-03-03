import { useEffect, useRef } from 'react'

export default function Contact() {
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
    <section id="contact">
      <div className="container" ref={ref}>
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">Contact</h2>

        <div className="contact-box fade-up">
          <p className="contact-title">Let's Work Together 🤝</p>
          <p className="contact-subtitle">
            I'm open to frontend developer roles, internships, and freelance
            projects. Feel free to reach out anytime!
          </p>

          <div className="contact-links">
            <a href="tel:9776985138" className="contact-link">
              📞 9776985138
            </a>
            <a href="mailto:ommprda30@gmail.com" className="contact-link">
              ✉️ ommprda30@gmail.com
            </a>
            <div className="contact-link">
              📍 Bhubaneswar, Odisha
            </div>
          </div>

          <a href="mailto:ommprda30@gmail.com" className="hire-big-btn">
            ✉️ Hire Me Now
          </a>
        </div>
      </div>
    </section>
  )
}