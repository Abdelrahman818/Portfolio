"use client"

import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-4xl font-bold mb-10"
        >
          About Me
        </motion.h2>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-slate-400 leading-9 text-lg max-w-4xl"
        >
          I'm Abdelrahman Ismaeel, a MERN Stack Developer and AI learner.
          I enjoy building scalable web applications and modern user experiences.
          I work with React, Node.js, MongoDB, Firebase, Python, and AI tools.
        </motion.p>

      </div>
    </section>
  )
}

export default About
