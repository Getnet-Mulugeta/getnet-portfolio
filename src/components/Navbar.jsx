import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const Navbar = ({ activeSection, setActiveSection }) => {
  const navRef = useRef(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Animate navbar on mount
    if (navRef.current) {
      // First, set the element to starting position (hidden)
      gsap.set(navRef.current, { y: -100, opacity: 0 })
      
      // Then animate to visible state
      gsap.to(navRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        onComplete: () => {
          // Ensure navbar is fully visible after animation
          if (navRef.current) {
            gsap.set(navRef.current, { opacity: 1, y: 0, visibility: 'visible' })
          }
        }
      })
    }
  }, [])

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-[100] bg-gray-900/95 backdrop-blur-lg border-b border-gray-700 shadow-lg"
      style={{ opacity: 1, visibility: 'visible' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gradient drop-shadow-lg">Portfolio</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-400 border-b-2 border-blue-400 font-semibold'
                      : 'text-white hover:text-blue-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-700 bg-gray-900/98">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-all duration-300 rounded-md ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-blue-500/20 font-semibold'
                      : 'text-white hover:text-blue-400 hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

