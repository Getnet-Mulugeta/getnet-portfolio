import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Contact = () => {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const headerRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  useEffect(() => {
    if (headerRef.current) {
      gsap.set(headerRef.current, { opacity: 1, y: 0 })
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -30,
        duration: 1,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
      })
    }

    if (sectionRef.current) {
      gsap.set(sectionRef.current, { opacity: 1, y: 0 })
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
      })
    }

    if (formRef.current) {
      gsap.set(formRef.current, { opacity: 1, scale: 1 })
      gsap.from(formRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
      })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: '#', gradient: 'from-gray-700 to-gray-800' },
    { name: 'LinkedIn', icon: '💼', url: '#', gradient: 'from-blue-600 to-blue-700' },
    { name: 'Twitter', icon: '🐦', url: '#', gradient: 'from-cyan-500 to-cyan-600' },
    { name: 'Email', icon: '📧', url: 'mailto:your.email@example.com', gradient: 'from-purple-500 to-purple-600' },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800/50 to-gray-900"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20" ref={headerRef} style={{ opacity: 1 }}>
          <div className="inline-block mb-4">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Let's Work Together
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects and opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div ref={formRef} className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-500 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-500 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3.5 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-500 transition-all resize-none"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-gray-800/60 backdrop-blur-md p-5 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                  📧
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">Email</p>
                  <p className="text-white font-semibold">your.email@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gray-800/60 backdrop-blur-md p-5 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                  📱
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">Phone</p>
                  <p className="text-white font-semibold">+1 (234) 567-8900</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 shadow-xl">
              <h4 className="text-lg font-bold mb-6 text-white">Social Media</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className={`group relative overflow-hidden px-6 py-4 bg-gradient-to-br ${link.gradient} rounded-xl flex items-center justify-center gap-3 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}
                    aria-label={link.name}
                  >
                    <span className="text-2xl relative z-10">{link.icon}</span>
                    <span className="text-white font-semibold relative z-10">{link.name}</span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 text-center border-t border-gray-800/50 pt-12 relative z-10">
        <p className="text-gray-400">
          &copy; 2024 <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">Getnet</span>. All rights reserved.
        </p>
      </footer>
    </section>
  )
}

export default Contact
