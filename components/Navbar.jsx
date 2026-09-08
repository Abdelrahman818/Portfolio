'use client'

import Link from 'next/link'
import { motion, useScroll } from 'framer-motion'

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/70 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-500" style={{ marginLeft: '24px' }}>
          Abdelrahman
        </h1>
        <div className='flex w-full m-auto'>
          <motion.div
            style={{
              margin: 'auto',
              transform: 'translateX(-50%)',
              scaleX: scrollYProgress,
            }}
            className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50"
          />
        </div>

        <ul className="hidden md:flex gap-8 text-sm">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><Link href="/Contact">Contact</Link></li>
        </ul>
        <span className='absolute top-10 right-5 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer transition-all duration-300 rounded-lg' style={{ padding: '5px 10px' }}><Link href="/Abdelrahman\ Ismaeel\ resume.pdf" download>Download Resume</Link></span>
      </div>
    </nav>
  )
}

export default Navbar
