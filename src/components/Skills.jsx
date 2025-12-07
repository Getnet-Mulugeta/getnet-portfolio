import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Skills = () => {
  const sectionRef = useRef(null)
  const skillsRef = useRef([])

  const skills = [
    { name: 'React', level: 90, color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Node.js', level: 80, color: 'from-green-400 to-green-600' },
    { name: 'TypeScript', level: 75, color: 'from-blue-500 to-blue-700' },
    { name: 'Tailwind CSS', level: 90, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Python', level: 70, color: 'from-indigo-400 to-indigo-600' },
    { name: 'MongoDB', level: 75, color: 'from-green-500 to-green-700' },
    { name: 'Git', level: 85, color: 'from-orange-400 to-orange-600' },
  ]

  useEffect(() => {
    skillsRef.current.forEach((skill, index) => {
      if (skill) {
        const progressBar = skill.querySelector('.progress-bar')
        const skillData = skills[index]

        ScrollTrigger.create({
          trigger: skill,
          start: 'top 80%',
          onEnter: () => {
            gsap.to(progressBar, {
              width: `${skillData.level}%`,
              duration: 1.5,
              ease: 'power2.out',
            })
          },
        })

        // Set initial state
        gsap.set(skill, { opacity: 1, x: 0 })
        
        gsap.from(skill, {
          opacity: 0,
          x: -50,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: skill,
            start: 'top 80%',
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
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" style={{ opacity: 1 }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Skills
          </h2>
          <p className="text-gray-300 text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => (skillsRef.current[index] = el)}
              className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-md"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-semibold text-white">
                  {skill.name}
                </span>
                <span className="text-blue-400 font-bold text-xl">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700/80 rounded-full h-4 overflow-hidden shadow-inner">
                <div
                  className={`progress-bar h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg`}
                  style={{ width: '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

