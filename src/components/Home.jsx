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

    tl.from(imageRef.current, {
      scale: 0,
      opacity: 0,
      rotation: -180,
      duration: 1.2,
      ease: 'back.out(1.7)',
    })
      .from(
        titleRef.current,
        {
          x: -50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.8'
      )
      .from(
        subtitleRef.current,
        {
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.5'
      )
      .from(
        descriptionRef.current,
        {
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.5'
      )
      .from(
        buttonRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.3'
      )

    // Floating animation for decorative elements
    gsap.to('.floating', {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    })

    // Subtle floating animation for profile picture
    gsap.to(imageRef.current, {
      y: -15,
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
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="floating absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="floating absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-block mb-4">
              <span className="text-blue-400 text-sm md:text-base font-semibold uppercase tracking-wider">
                Welcome to my Portfolio
              </span>
            </div>
            <h1
              ref={titleRef}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-gradient drop-shadow-lg leading-tight"
              style={{ opacity: 1 }}
            >
              Hi, I'm{' '}
              <span className="text-white">Getnet</span>
            </h1>
            <h2
              ref={subtitleRef}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-gray-300 drop-shadow-lg"
              style={{ opacity: 1 }}
            >
              Full Stack Developer
            </h2>
            <p
              ref={descriptionRef}
              className="text-base md:text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              style={{ opacity: 1 }}
            >
              I create amazing web experiences with modern technologies. Passionate about
              building scalable applications and beautiful user interfaces that make a difference.
            </p>
            <div ref={buttonRef} style={{ opacity: 1 }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                Get In Touch
              </button>
              <button
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border-2 border-gray-700 text-white font-semibold rounded-xl hover:border-blue-500 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                View Work
              </button>
            </div>

            {/* Social links or stats */}
            <div className="mt-12 flex gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">50+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">100%</div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right side - Profile Picture */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              
              {/* Profile picture container */}
              <div
                ref={imageRef}
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                style={{ opacity: 1 }}
              >
                {/* Replace this placeholder with your actual image */}
                {/* Use: src="/path/to/your/image.jpg" or src={require('./path/to/image.jpg')} */}
                <img
                  src="https://via.placeholder.com/500x500/6366f1/ffffff?text=Your+Photo"
                  alt="Getnet - Full Stack Developer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback gradient if image doesn't load
                    e.target.style.display = 'none'
                    const fallback = document.createElement('div')
                    fallback.className = 'w-full h-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center text-white text-6xl font-bold'
                    fallback.textContent = 'G'
                    e.target.parentElement.appendChild(fallback)
                  }}
                />
                
                {/* Overlay gradient for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
              </div>

              {/* Decorative floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-12 w-16 h-16 bg-pink-500/20 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm">Scroll</span>
          <svg
            className="w-6 h-6 text-gray-400"
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
