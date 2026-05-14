import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/70 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-500" style={{ marginLeft: '24px' }}>
          Abdelrahman
        </h1>

        <ul className="hidden md:flex gap-8 text-sm">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><Link href="/Contact">Contact</Link></li>
          <li><Link href="/Abdelrahman_Ismaeel's_cv.pdf" download>Download Resume</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
