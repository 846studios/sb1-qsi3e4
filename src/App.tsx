import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Star, ArrowRight } from 'lucide-react'

const NavBar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg">
    <div className="container mx-auto px-6 py-3">
      <div className="flex justify-center space-x-4">
        {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="px-4 py-2 rounded-full bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-70 transition duration-300"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  </nav>
)

const FourPointStar = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L14 10H22L16 14L18 22L12 18L6 22L8 14L2 10H10L12 2Z" fill="currentColor" />
  </svg>
)

const StarBackground = () => {
  const stars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 16 + 8,
    angle: Math.random() * 360,
    distance: Math.random() * 150 + 100,
    duration: Math.random() * 20 + 30,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute left-1/2 top-1/2"
          style={{
            width: star.size,
            height: star.size,
          }}
          animate={{
            rotate: [star.angle, star.angle + 360],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            style={{
              width: star.size,
              height: star.size,
              transformOrigin: `${star.distance}px 50%`,
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <FourPointStar className="w-full h-full text-teal-300 opacity-30" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

const GradientBackground = () => (
  <div className="absolute inset-0">
    {[300, 400, 500, 600].map((size, index) => (
      <div
        key={size}
        className="absolute rounded-full opacity-5 bg-gradient-to-r from-teal-500 to-transparent"
        style={{
          width: size,
          height: size,
          left: `calc(50% - ${size / 2}px)`,
          top: `calc(50% - ${size / 2}px)`,
        }}
      />
    ))}
  </div>
)

const HeroSection = () => {
  return (
    <div id="about" className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center overflow-hidden">
      <GradientBackground />
      <StarBackground />
      <div className="text-center z-10 max-w-4xl px-4">
        <div className="mb-4 text-6xl">👨🏿‍💻</div>
        <div className="bg-gray-800 text-green-400 px-3 py-1 rounded-full text-sm mb-4 inline-block">
          <span className="mr-2 text-green-400">●</span>
          Available for new projects
        </div>
        <h1 className="text-4xl font-bold mb-2">Building Exceptional<br />User Experiences</h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          I specialize in transforming designs into functional, high-performing web applications. Let's discuss your next project.
        </p>
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full flex items-center"
          >
            Explore My Work <ChevronDown className="ml-2" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-full flex items-center"
          >
            Let's Connect 👋
          </motion.button>
        </div>
      </div>
    </div>
  )
}

const SlantedCarousel = () => {
  const items = ['maintainable', 'search optimized', 'usable', 'reliable', 'performant', 'accessible', 'secure', 'interactive']

  return (
    <div className="bg-teal-400 transform -skew-y-3 py-8 overflow-hidden my-16">
      <motion.div 
        className="flex whitespace-nowrap transform skew-y-3"
        animate={{ x: '-100%' }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((item, index) => (
          <React.Fragment key={item}>
            <span className="mx-4 text-gray-900 text-xl font-bold uppercase">{item}</span>
            {index < items.length - 1 && <Star className="text-gray-900" />}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}

const ClientTestimonials = () => {
  const testimonials = [
    {
      name: 'Michael Brown',
      role: 'Director of IT @ MegaCorp',
      content: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
      avatar: 'https://source.unsplash.com/random/100x100?face=1'
    },
    {
      name: 'Sarah Johnson',
      role: 'Marketing Manager @ TechStart',
      content: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand needs were exceptional. We're thrilled with the results.",
      avatar: 'https://source.unsplash.com/random/100x100?face=2'
    }
  ]

  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-teal-400">HAPPY CLIENTS</h2>
        <h3 className="text-4xl font-bold text-center mb-4 text-white">What Clients Say about Me</h3>
        <p className="text-center text-gray-400 mb-12">Don't just take my word for it. See what my clients have to say about my work.</p>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const SkillsCarousel = () => {
  const skills = ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Framer Motion', 'Shadcn UI', 'v0', 'Uploadthing', 'Resend', 'TriggerDev']
  const [hoveredSkill, setHoveredSkill] = useState(null)

  return (
    <div id="skills" className="bg-gray-800 text-white py-16">
      <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
      <motion.div 
        className="flex justify-center"
        animate={{ x: hoveredSkill ? 0 : '-100%' }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="mx-4 p-4 bg-gray-700 rounded"
            whileHover={{ scale: 1.1, rotate: 5 }}
            onHoverStart={() => setHoveredSkill(skill)}
            onHoverEnd={() => setHoveredSkill(null)}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

const ProjectsShowcase = () => {
  const projects = [
    { title: 'Project 1', description: 'A Next.js and Supabase application' },
    { title: 'Project 2', description: 'React-based UI/UX implementation' },
    { title: 'Project 3', description: 'JAMstack solution with cloud integration' },
  ]

  return (
    <div id="projects" className="bg-gray-900 text-white py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
      <div className="max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-gray-800 p-6 rounded-lg mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const BentoGrid = () => {
  const tools = [
    { name: 'JavaScript', icon: 'JS' },
    { name: 'HTML5', icon: '5' },
    { name: 'CSS3', icon: '3' },
    { name: 'React', icon: '⚛️' },
    { name: 'GitHub', icon: '' },
  ]

  const hobbies = [
    { name: 'Painting', emoji: '🎨' },
    { name: 'Photography', emoji: '📷' },
    { name: 'Gaming', emoji: '🎮' },
    { name: 'Hiking', emoji: '🥾' },
    { name: 'Music', emoji: '🎵' },
    { name: 'Fitness', emoji: '💪' },
    { name: 'Reading', emoji: '📚' },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-2 flex items-center">
          <span className="text-teal-400 mr-2">✦</span>
          My Reads
        </h3>
        <p className="text-gray-400 mb-4">Explore the books shaping my perspectives.</p>
        <img src="https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg" alt="Atomic Habits book cover" className="w-1/2 mx-auto" />
      </div>
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-2 flex items-center">
          <span className="text-teal-400 mr-2">✦</span>
          My Toolbox
        </h3>
        <p className="text-gray-400 mb-4">Explore the technologies and tools I use to craft exceptional digital experiences.</p>
        <div className="grid grid-cols-3 gap-4">
          {tools.map((tool) => (
            <div key={tool.name} className="bg-gray-700 p-2 rounded flex items-center justify-center">
              <span className="text-2xl mr-2">{tool.icon}</span>
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg col-span-full md:col-span-1">
        <h3 className="text-xl font-bold mb-2 flex items-center">
          <span className="text-teal-400 mr-2">✦</span>
          Beyond the Code
        </h3>
        <p className="text-gray-400 mb-4">Explore my interests and hobbies beyond the digital realm.</p>
        <div className="flex flex-wrap gap-2">
          {hobbies.map((hobby) => (
            <span key={hobby.name} className="bg-teal-500 text-gray-900 px-3 py-1 rounded-full text-sm">
              {hobby.name} {hobby.emoji}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg">
        <img src="https://source.unsplash.com/random/400x300?map" alt="Map" className="w-full h-full object-cover rounded" />
      </div>
    </div>
  )
}

const ContactSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's create something amazing together</h2>
        <p className="mb-8 text-xl">Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-900 text-white font-bold py-3 px-6 rounded-full text-lg inline-flex items-center"
        >
          Contact Me <ArrowRight className="ml-2" />
        </motion.button>
      </div>
    </div>
  )
}

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-6 text-center">
      <p>© 2024 Your Name. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-4">
        {['YouTube', 'Twitter', 'Instagram', 'LinkedIn'].map((platform) => (
          <a key={platform} href="#" className="text-gray-400 hover:text-white inline-flex items-center">
            {platform} <ArrowRight className="ml-1 w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
)

export default function Portfolio() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <NavBar />
      <HeroSection />
      <SlantedCarousel />
      <ClientTestimonials />
      <SkillsCarousel />
      <ProjectsShowcase />
      <BentoGrid />
      <ContactSection />
      <Footer />
    </div>
  )
}