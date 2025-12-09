import React from 'react'

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-gray-200 mt-12 py-6">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between text-sm">
        <div>© {year} SRIRAM VARMA BHUPATHIRAJU</div>
        <div className="flex gap-4 mt-3 sm:mt-0">
          <a href="#projects" className="text-gray-700">Projects</a>
          <a href="#about" className="text-gray-700">About</a>
          <a href="#contact" className="text-gray-700">Contact</a>
        </div>
      </div>
    </footer>
  )
}
