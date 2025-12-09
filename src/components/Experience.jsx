import React from 'react'

export default function Experience(){
  return (
    <div className="card">
      <h4 className="font-semibold mb-3">Experience</h4>
      <div className="border border-gray-100 rounded p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium">Data Engineer Virtual Intern, AWS Academy - Eduskills</div>
            <div className="text-sm text-gray-600">April – June 2025</div>
          </div>
        </div>
        <p className="mt-3 text-gray-700 text-sm">Earned AWS Academy badges in Cloud Foundations and Data Engineering. Worked with AWS cloud services, architecture, automation workflows, and data engineering pipelines.</p>
      </div>
      <div className="mt-4 text-sm text-gray-700">
        <div className="font-medium">Education</div>
        <ul className="mt-2">
          <li>KL University, B.Tech in Computer Science & Engineering | CGPA: 8.95 | 2022–2026</li>
          <li>Tirumala Junior College, Bhimavaram | Class XII: 77% | 2020–2022</li>
          <li>Bharatiya Vidya Bhavans, Bhimavaram | Class X: 75% | 2013–2020</li>
        </ul>
      </div>
    </div>
  )
}
