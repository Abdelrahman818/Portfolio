"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import Link from "next/link"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
}

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 px-6 flex justify-center items-center"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-4xl font-bold"
          style={{ marginBottom: "1.25rem" }}
        >
          Contact Me
        </motion.h2>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: true }}
          className="text-slate-400 mb-10!"
        >
          Let's build something amazing together.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex justify-center gap-5 flex-wrap"
        >

          {/* GITHUB */}
          <motion.a
            variants={item}
            href="https://github.com/Abdelrahman818/"
            target="_blank"
            className="
              bg-blue-500
              py-3
              rounded-xl
              flex items-center gap-2
              text-white
              hover:bg-blue-600
              transition
            "
            style={{ padding: ".25rem 1rem" }}
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ type: "tween", duration: 0.15 }}
          >
            <FaGithub />
            GitHub
          </motion.a>

          {/* LINKEDIN */}
          <motion.a
            variants={item}
            className="
              bg-blue-500
              py-3
              rounded-xl
              flex items-center gap-2
              text-white
              hover:bg-blue-600
              transition
            "
            style={{ padding: ".25rem 1rem" }}
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ type: "tween", duration: 0.15 }}
          >
            <FaLinkedin />
            <Link href="https://www.linkedin.com/in/abdelrahman-ismael-551a13265/" target="_blank">
              LinkedIn
            </Link>
          </motion.a>

          {/* EMAIL */}
          <motion.a
            variants={item}
            href="mailto:your@email.com"
            className="
              bg-blue-500
              py-3
              rounded-xl
              flex items-center gap-2
              text-white
              hover:bg-blue-600
              transition
            "
            style={{ padding: ".25rem 1rem" }}
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ type: "tween", duration: 0.15 }}
          >
            <FaEnvelope />
            Email
          </motion.a>

        </motion.div>

      </div>
    </section>
  )
}

export default Contact
