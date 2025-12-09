import React from 'react'

const skillGroups = [
  {title: 'Languages', items: ['C', 'Java', 'Python', 'JavaScript', 'HTML', 'CSS']},
  {title: 'Frameworks & Libraries', items: ['Spring Boot', 'Django', 'Node.js', 'React.js', 'Hibernate', 'Git & GitHub']},
  {title: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB']},
  {title: 'Cloud & DevOps', items: ['AWS', 'Azure', 'GCP', 'CI/CD', 'Docker', 'Jenkins', 'GitHub Actions']}
]

export default function Skills(){
  return (
    <div id="skills" className="card">
      <h4 className="font-semibold mb-3">Skills</h4>
      <div className="grid gap-3">
        {skillGroups.map(g => (
          <div key={g.title}>
            <div className="text-sm font-medium mb-2">{g.title}</div>
            <div className="flex flex-wrap gap-2">
              {g.items.map(i => (
                <span key={i} className="chip">{i}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
