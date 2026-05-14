'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import { BiArrowBack } from 'react-icons/bi'

import '@/styles/contact.css'

const ContactForm = () => {
  const form = useRef()

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault()

    setLoading(true)
    setSuccess(false)

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLEATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )

      toast.success('Message sent successfully!')

      setSuccess(true)

      form.current.reset()

      setTimeout(() => {
        setSuccess(false)
      }, 3000)
    } catch (error) {
      console.log(error)

      toast.error('Failed to send message.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact-section">

      <Link href="/" className="contact-back flex absolute top-10 left-10 z-10" style={{ alignItems: 'center', gap: '10px' }}>
        <BiArrowBack />
        <span>Back to Home</span>
      </Link>

      <div className="contact-glow" />

      <div className="contact-container">

        {/* HEADING */}

        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span>CONTACT</span>

          <h2>
            Let’s Build
            <span> Something Great</span>
          </h2>

          <p>
            Have a project idea, collaboration, or opportunity?
            Send me a message and let’s create something amazing together.
          </p>
        </motion.div>

        {/* FORM */}

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="contact-grid">

            {/* NAME */}

            <div className="contact-field">
              <label>Your Name</label>

              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
              />
            </div>

            {/* EMAIL */}

            <div className="contact-field">
              <label>Your Email</label>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* MESSAGE */}

            <div className="contact-field contact-full">
              <label>Your Message</label>

              <textarea
                name="message"
                placeholder="Tell me about your project..."
                required
              />
            </div>

          </div>

          {/* BUTTON */}

          <motion.button
            type="submit"
            disabled={loading}
            className="contact-btn"
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? (
              <div className="contact-loading">
                <div className="contact-spinner" />
                Sending...
              </div>
            ) : success ? (
              'Message Sent!'
            ) : (
              'Send Message'
            )}
          </motion.button>

        </motion.form>

      </div>
    </section>
  )
}

export default ContactForm
