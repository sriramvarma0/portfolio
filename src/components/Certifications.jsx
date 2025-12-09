import React from 'react'

const certs = [
  'AWS Certified Solutions Architect – Associate',
  'AWS Certified Cloud Practitioner',
  'Salesforce Certified AI Associate',
  'Multicloud Network Associate – Aviatrix',
  'Oracle Certified Foundations Associate'
]

export default function Certifications(){
  return (
    <div className="card">
      <h4 className="font-semibold mb-3">Certifications</h4>
      <ul className="grid sm:grid-cols-2 gap-3 text-gray-800">
        {certs.map(c => (
          <li key={c} className="border border-gray-200 p-3">{c}</li>
        ))}
      </ul>
    </div>
  )
}
