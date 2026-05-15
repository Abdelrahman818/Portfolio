"use client"

import { motion } from "framer-motion"

const skills = [
  'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'JavaScript',
  'TypeScript', 'React Native', 'React.js', 'Electron.js',
  'Next.js', 'Vue.js', 'Node.js', 'Express.js', 'Rest APIs',
  'MongoDB','MySQL', 'Firebase', 'Python', 'PHP', 'C++',
  'AI & Machine Learning', 'Git & GitHub', 'Windows', 'Linux',
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12!"
        >
          Skills
        </motion.h2>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              className="
                bg-slate-800/60
                border border-slate-700/60
                rounded-2xl
                h-[50px]
                flex items-center justify-center
                text-sm font-medium
                cursor-default
                hover:border-blue-500
                transition-colors
              "
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Skills
