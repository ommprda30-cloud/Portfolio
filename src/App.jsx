import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Project from './components/Project'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Project />
      <Contact />
      <footer>
        <p>© 2026 Omm Ashish Parida · </p>
      </footer>
    </>
  )
}