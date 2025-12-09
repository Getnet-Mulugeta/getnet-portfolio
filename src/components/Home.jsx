import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Home = () => {
  const homeRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Animate image first
    gsap.from(imageRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })

    // Animate text content
    tl.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
      .from(
        subtitleRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
        },
        '-=0.4'
      )
      .from(
        descriptionRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
        },
        '-=0.4'
      )
      .from(
        buttonRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.3'
      )

    // Subtle floating animation for profile picture
    gsap.to(imageRef.current, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    })
  }, [])

  return (
    <section
      id="home"
      ref={homeRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1
              ref={titleRef}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
              style={{ opacity: 1 }}
            >
              <span className="text-white">Hi, I'm </span>
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Getnet
              </span>
            </h1>
            <h2
              ref={subtitleRef}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-gray-300"
              style={{ opacity: 1 }}
            >
              Full Stack Developer
            </h2>
            <p
              ref={descriptionRef}
              className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
              style={{ opacity: 1 }}
            >
              I create amazing web experiences with modern technologies. Passionate about
              building scalable applications and beautiful user interfaces.
            </p>
            <div ref={buttonRef} style={{ opacity: 1 }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30"
              >
                Contact Me
              </button>
              <button
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-3 bg-transparent border-2 border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View Work
              </button>
            </div>
          </div>

          {/* Right side - Profile Picture */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Simple gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-30"></div>
              
              {/* Profile picture container */}
              <div
                ref={imageRef}
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl"
                style={{ opacity: 1 }}
              >
                <img
                  src="https://via.placeholder.com/500x500/6366f1/ffffff?text=Your+Photo"
                  alt="Getnet - Full Stack Developer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    const fallback = document.createElement('div')
                    fallback.className = 'w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold'
                    fallback.textContent = 'G'
                    e.target.parentElement.appendChild(fallback)
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Home
