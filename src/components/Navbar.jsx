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
      // Calculate offset to account for navbar
      const navbarHeight = 80 // h-20 = 80px
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
    
  ]

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-[100] bg-gray-900/90 backdrop-blur-xl shadow-2xl"
      style={{ opacity: 1, visibility: 'visible' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="text-3xl font-bold text-gradient drop-shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              Getnet
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeSection === item.id && (
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-sm opacity-50"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800/50"
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
          <div className="md:hidden bg-gray-900/98 backdrop-blur-xl pb-4">
            <div className="px-2 pt-2 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
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

