import React, { useState } from 'react'
import { Mail, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import profileImg from '../assets/profile.jpg'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const linkClass = 'block py-2 text-sm hover:text-gray-700'

  const navItems = [
    { id: '#skills', label: 'Skills', Icon: null },
    { id: '#projects', label: 'Projects', Icon: null },
    { id: '#certifications', label: 'Certifications', Icon: null },
    { id: '#about', label: 'About', Icon: null },
    { id: '#contact', label: 'Contact', Icon: Mail }
  ]

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
            <div className="text-xs text-gray-600">Cloud & Software Engineer</div>
          </div>
        </div>

        <nav role="navigation" aria-label="Primary" className="hidden md:flex items-center gap-4 text-sm">
          {navItems.map(({ id, label, Icon }) => (
            <motion.a
              key={id}
              href={id}
              onClick={(e) => handleNavClick(e, id)}
              className="px-3 py-2 rounded-full hover:text-gray-900 hover:bg-gray-50 transition-colors flex items-center gap-2"
              whileTap={{ scale: 0.94 }}
            >
              {label}
              {Icon ? <Icon size={14} className="translate-y-[1px]" /> : null}
            </motion.a>
          ))}
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
            {navItems.map(({ id, label, Icon }) => (
              <motion.a
                key={id}
                href={id}
                onClick={(e) => handleNavClick(e, id)}
                className={`${linkClass} flex items-center gap-2`}
                whileTap={{ scale: 0.96 }}
              >
                {label}
                {Icon ? <Icon size={16} className="translate-y-[1px]" /> : null}
              </motion.a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
