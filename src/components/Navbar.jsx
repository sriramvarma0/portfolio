import React, { useState } from 'react'
import { Mail, Menu, X } from 'lucide-react'
import profileImg from '../assets/profile.jpg'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const linkClass = 'block py-2 text-sm hover:text-gray-700'

  const handleNavClick = (e, id) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if(el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header role="banner" className="sticky top-0 z-30 bg-white/70 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={profileImg} alt="profile" className="w-10 h-10 rounded-full border border-gray-200 object-cover" />
          <div>
            <div className="text-sm font-semibold">SRIRAM VARMA BHUPATHIRAJU</div>
            <div className="text-xs text-gray-600">Cloud & Frontend Engineer</div>
          </div>
        </div>

        <nav role="navigation" aria-label="Primary" className="hidden md:flex items-center gap-6 text-sm">
          <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="hover:text-gray-700">Skills</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="hover:text-gray-700">Projects</a>
          <a href="#certifications" onClick={(e) => handleNavClick(e, '#certifications')} className="hover:text-gray-700">Certifications</a>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-gray-700">About</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="flex items-center gap-2 hover:text-gray-700"><Mail size={14} /> Contact</a>
        </nav>

        <div className="md:hidden">
          <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} className="p-2 rounded hover:bg-gray-100">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className={linkClass}>Skills</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className={linkClass}>Projects</a>
            <a href="#certifications" onClick={(e) => handleNavClick(e, '#certifications')} className={linkClass}>Certifications</a>
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className={linkClass}>About</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className={linkClass + ' flex items-center gap-2'}><Mail size={14} /> Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
