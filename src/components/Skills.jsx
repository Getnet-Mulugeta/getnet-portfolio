import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Skills = () => {
  const sectionRef = useRef(null)
  const categoryRefs = useRef([])

  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js', 'Vue.js'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Python', 'Express.js', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack', 'Vite', 'Figma'],
      color: 'from-purple-500 to-pink-500'
    },
  ]

  useEffect(() => {
    categoryRefs.current.forEach((category, index) => {
      if (category) {
        // Set initial state
        gsap.set(category, { opacity: 1, y: 0 })
        
        gsap.from(category, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: category,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
        })
      }
    })
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" style={{ opacity: 1 }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Skills & Technologies
          </h2>
          <p className="text-gray-300 text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              ref={(el) => (categoryRefs.current[index] = el)}
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`text-4xl bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-200 rounded-lg text-sm font-medium border border-gray-600 hover:border-blue-500 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-blue-600/20 hover:text-blue-300 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
