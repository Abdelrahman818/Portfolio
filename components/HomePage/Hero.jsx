"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* BACKGROUND BLUR */}
      <motion.div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[280px]
          h-[280px]
          md:w-[500px]
          md:h-[500px]
          rounded-full
          bg-gradient-to-r
          from-blue-500
          to-purple-500
          blur-2xl
          md:blur-3xl
          opacity-30
          pointer-events-none
        "

        animate={{
          x: [0, 40, -30, 20, 0],
          y: [0, -35, 25, -15, 0],
          scale: [1, 1.08, 0.95, 1.03, 1],
          rotate: [0, 8, -8, 4, 0],
        }}

        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >

          <motion.p
            className="text-blue-400"
            style={{ marginBottom: ".75rem" }}

            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl font-bold leading-tight"

            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}

            transition={{
              delay: 0.15,
              duration: 0.7,
            }}
          >
            Abdelrahman
            <span className="text-blue-500"> Ismaeel</span>
          </motion.h1>

          <motion.h2
            className="text-2xl text-slate-300"
            style={{ marginTop: "1rem" }}

            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}

            transition={{
              delay: 0.25,
              duration: 0.6,
            }}
          >
            MERN Stack & AI Developer
          </motion.h2>

          <motion.p
            className="text-slate-400 leading-8 max-w-xl"
            style={{ marginBottom: "1.5rem" }}

            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}

            transition={{
              delay: 0.35,
              duration: 0.6,
            }}
          >
            I build modern web applications, AI-powered tools,
            and scalable full stack experiences.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            style={{ marginTop: "2rem" }}

            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}

            transition={{
              delay: 0.45,
              duration: 0.6,
            }}
          >

            <motion.button
              className="
                bg-blue-500
                hover:bg-blue-600
                rounded-xl
                font-semibold
                transition
              "

              style={{ padding: ".8rem 1.3rem" }}

              whileHover={{
                scale: 1.03,
                y: -2,
              }}

              whileTap={{
                scale: 0.98,
              }}

              transition={{
                duration: 0.2,
              }}
            >
              View Projects
            </motion.button>

            <motion.div
              whileHover={{
                scale: 1.03,
                y: -2,
              }}

              whileTap={{
                scale: 0.98,
              }}

              transition={{
                duration: 0.2,
              }}
            >
              <Link
                href="/Contact"

                className="
                  flex
                  justify-center
                  items-center
                  border
                  border-slate-600
                  hover:border-blue-500
                  rounded-xl
                  transition
                  block
                "

                style={{ padding: ".8rem 1.3rem" }}
              >
                Contact Me
              </Link>
            </motion.div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}

export default Hero
