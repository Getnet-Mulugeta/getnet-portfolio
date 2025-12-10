import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const isScrollingRef = useRef(false)

  useEffect(() => {
    // Update active section on scroll
    const sections = ['home', 'projects', 'skills', 'contact']
    
    let scrollTimeout
    const handleScroll = () => {
      // Don't update if user just clicked (scrolling programmatically)
      if (isScrollingRef.current) {
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          isScrollingRef.current = false
        }, 1000)
        return
      }

      const scrollPosition = window.scrollY + 300 // Account for navbar height
      let currentSection = 'home'

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight
          const sectionBottom = sectionTop + sectionHeight

          // Check if scroll position is within this section
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = sections[i]
            break
          }
        }
      }

      // Also check if we're past the last section
      const lastSection = document.getElementById(sections[sections.length - 1])
      if (lastSection && scrollPosition >= lastSection.offsetTop) {
        currentSection = sections[sections.length - 1]
      }

      setActiveSection(currentSection)
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  // Wrapper to set active section and prevent scroll override
  const handleSetActiveSection = (section) => {
    isScrollingRef.current = true
    setActiveSection(section)
    setTimeout(() => {
      isScrollingRef.current = false
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
      <Navbar activeSection={activeSection} setActiveSection={handleSetActiveSection} />
      <main className="relative z-0">
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App

