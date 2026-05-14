"use client"

import { motion } from "framer-motion"
import { projects } from "@/data/projects"
import Image from "next/image"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl font-bold mb-12!"
        >
          Projects
        </motion.h2>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              style={{ willChange: "transform, opacity" }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
              className="
                bg-slate-800
                border border-slate-700
                rounded-3xl
                overflow-hidden
                hover:border-blue-500
                shadow-lg
              "
            >
              {/* IMAGE */}
              <div className="h-52 overflow-hidden bg-slate-700">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-500
                    hover:scale-105
                  "
                  loading="lazy"
                  width={200}
                  height={200}
                />
              </div>

              {/* CONTENT */}
              <div style={{ padding: "10px" }}>
                <h3 className="text-2xl font-bold capitalize mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-7 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.stack.map((item, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "3px 10px"
                      }}
                      className="
                        bg-blue-500/20
                        text-blue-400
                        rounded-full
                        text-sm
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Projects
