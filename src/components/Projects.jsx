import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Projects = () => {
  const sectionRef = useRef(null)
  const projectsRef = useRef([])

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with data visualization and reporting tools.',
      tech: ['React', 'TypeScript', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    },
    {
      title: 'Weather App',
      description: 'Beautiful weather application with location-based forecasts and interactive maps.',
      tech: ['React', 'API Integration', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
    },
  ]

  useEffect(() => {
    projectsRef.current.forEach((project, index) => {
      if (project) {
        // Set initial state to ensure visibility
        gsap.set(project, { opacity: 1, y: 0 })
        
        gsap.from(project, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: project,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
        })

        // Hover animation
        project.addEventListener('mouseenter', () => {
          gsap.to(project, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out',
          })
        })

        project.addEventListener('mouseleave', () => {
          gsap.to(project, {
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
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" style={{ opacity: 1 }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Projects
          </h2>
          <p className="text-gray-300 text-lg">
            Some of my recent work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (projectsRef.current[index] = el)}
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 cursor-pointer group shadow-lg"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/50 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors flex items-center gap-2">
                  View Project 
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
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

