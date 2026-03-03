
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-inner">

          
          <div className="hero-text">
            <div className="hero-tag">
              <span className="hero-dot"></span>
              Available for Work
            </div>

            <h1>
              Hi, I'm <span>Ashish</span><br />
            </h1>

            <p className="hero-role">// Frontend Developer</p>

            <p className="hero-desc">
              Passionate about building clean, responsive, and interactive web
              experiences using <strong>HTML, CSS, JavaScript, and React JS</strong>.
              I turn ideas into pixel-perfect interfaces.
            </p>

            <div className="hero-btns">
              
              <a href="mailto:ommprda30@gmail.com" className="btn-primary">
                ✉️ Hire Me
              </a>
              <a>            
                href="/Omm_Java_FullstackDeveloper.pdf"
                download="public/Omm_Java_FullstackDeveloper.pdf"
                className="btn-outline"
            </a> 
             <a>
                ⬇️ Download CV
              </a>
            </div>
          </div>

          
          <div className="hero-image-wrap">
            <div className="hero-image-ring">
              <img src="/omm.jpg" alt="Omm Ashish Parida" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}