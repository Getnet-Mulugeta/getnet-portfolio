import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Skills = () => {
  const sectionRef = useRef(null)
  const categoryRefs = useRef([])
  const headerRef = useRef(null)

  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js', 'Vue.js'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Python', 'Express.js', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack', 'Vite', 'Figma'],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
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

    categoryRefs.current.forEach((category, index) => {
      if (category) {
        gsap.set(category, { opacity: 1, y: 0, scale: 1 })
        
        gsap.from(category, {
          opacity: 0,
          y: 40,
          scale: 0.95,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: category,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
          onComplete: () => {
            if (category) gsap.set(category, { opacity: 1, y: 0, scale: 1 })
          }
        })
      }
    })
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800/30 to-gray-900"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20" ref={headerRef} style={{ opacity: 1 }}>
          <div className="inline-block mb-4">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">My Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              ref={(el) => (categoryRefs.current[index] = el)}
              className="group relative bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
              style={{ opacity: 1 }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-3xl shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2.5 bg-gray-700/50 backdrop-blur-sm text-gray-200 rounded-xl text-sm font-medium border border-gray-600/50 hover:border-blue-500/50 hover:text-blue-300 hover:bg-gray-700/70 transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
