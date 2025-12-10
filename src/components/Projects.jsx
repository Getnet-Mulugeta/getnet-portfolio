import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Projects = () => {
  const sectionRef = useRef(null)
  const projectsRef = useRef([])
  const headerRef = useRef(null)

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with data visualization and reporting tools.',
      tech: ['React', 'TypeScript', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Weather App',
      description: 'Beautiful weather application with location-based forecasts and interactive maps.',
      tech: ['React', 'API Integration', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  useEffect(() => {
    if (headerRef.current) {
      gsap.set(headerRef.current, { opacity: 1, y: 0 })
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.6,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
        onComplete: () => {
          if (headerRef.current) gsap.set(headerRef.current, { opacity: 1, y: 0 })
        }
      })
    }

    projectsRef.current.forEach((project, index) => {
      if (project) {
        gsap.set(project, { opacity: 1, y: 0, scale: 1 })
        
        gsap.from(project, {
          opacity: 0,
          y: 60,
          scale: 0.9,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: project,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
          onComplete: () => {
            if (project) gsap.set(project, { opacity: 1, y: 0, scale: 1 })
          }
        })

        project.addEventListener('mouseenter', () => {
          gsap.to(project, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out',
          })
        })

        project.addEventListener('mouseleave', () => {
          gsap.to(project, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          })
        })
      }
    })
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800/50 to-gray-900"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20" ref={headerRef} style={{ opacity: 1 }}>
          <div className="inline-block mb-4">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">My Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Some of my recent work that showcases my skills and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (projectsRef.current[index] = el)}
              className="group relative bg-gray-800/60 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-blue-500/20"
              style={{ opacity: 1 }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Image container */}
              <div className="relative h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                
                {/* Tech badge overlay */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-bold rounded-full shadow-lg`}>
                    {project.tech[0]}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-700/50 backdrop-blur-sm text-gray-300 rounded-lg text-xs font-medium border border-gray-600/50 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="group/btn flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                  <span>View Project</span>
                  <span className="transform group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
