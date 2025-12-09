import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project, index = 0 }){
  const delay = 0.06 * index
  return (
    <motion.article initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay }} whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }} className="card overflow-hidden">
      <div className="overflow-hidden rounded-lg border border-gray-100">
        <img src={project.image} alt={project.title} className="w-full h-44 sm:h-48 object-cover" />
      </div>

      <div className="mt-4">
        <div className="flex items-baseline justify-between">
          <h4 className="font-semibold text-gray-900">{project.title}</h4>
          <span className="text-sm text-gray-500">{project.year}</span>
        </div>
        <p className="mt-2 text-sm text-gray-700">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
        <div className="mt-4">
          <a href="#" className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm">View Project</a>
        </div>
      </div>
    </motion.article>
  )
}
