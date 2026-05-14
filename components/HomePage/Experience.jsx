"use client"

import { motion } from "framer-motion"

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
}

const Experience = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl font-bold mb-12!"
        >
          Experience & Learning
        </motion.h2>

        <div className="space-y-6">

          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-slate-800 p-6 rounded-2xl border border-slate-700"
            style={{ margin: "1rem 0", padding: "1rem" }}
          >
            Learning AI & LLM Engineering
          </motion.div>

          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-slate-800 p-6 rounded-2xl border border-slate-700"
            style={{ margin: "1rem 0", padding: "1rem" }}
          >
            Building Full Stack MERN Applications
          </motion.div>

          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-slate-800 p-6 rounded-2xl border border-slate-700"
            style={{ margin: "1rem 0", padding: "1rem" }}
          >
            React Native Mobile Development
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default Experience
