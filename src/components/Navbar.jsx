export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="nav-logo">omm.dev</div>
        <ul className="nav-links">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href="mailto:ommprda30@gmail.com" className="nav-hire">
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}