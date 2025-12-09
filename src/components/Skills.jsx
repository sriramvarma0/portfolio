import React from 'react'
import { motion } from 'framer-motion'

const skillGroups = [
  { title: 'Languages', items: ['C', 'Java', 'Python', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'Frameworks & Libraries', items: ['Spring Boot', 'Django', 'Node.js', 'React.js', 'Hibernate', 'Git & GitHub'] },
  { title: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { title: 'Cloud & DevOps', items: ['AWS', 'Azure', 'GCP', 'CI/CD', 'Docker', 'Jenkins', 'GitHub Actions'] }
]

export default function Skills(){
  return (
    <motion.div
      id="skills"
      className="card"
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
    >
      <h4 className="font-semibold mb-3">Skills</h4>
      <div className="grid gap-3">
        {skillGroups.map((g, idx) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
          >
            <div className="text-sm font-medium mb-2">{g.title}</div>
            <div className="flex flex-wrap gap-2">
              {g.items.map(i => (
                <span key={i} className="chip">{i}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
