import React from 'react'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import awsSaBadge from '../assets/aws-sa.png'
import awsCpBadge from '../assets/aws-cp.png'
import aviaBadge from '../assets/avia.png'
import oracleBadge from '../assets/oraclefoundations.png'
import salesAiBadge from '../assets/salesai.png'

const certs = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    link: 'https://www.credly.com/badges/db63141a-e1fe-43e3-ab6b-9297c49675fd/public_url',
    badge: awsSaBadge
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    link: 'https://www.credly.com/badges/65c4415c-c925-42ec-a3fc-e4e36398cceb/public_url',
    badge: awsCpBadge
  },
  {
    name: 'Salesforce Certified AI Associate',
    link: 'https://www.salesforce.com/trailblazer/k6fekcs49ni4fpqaj7',
    badge: salesAiBadge
  },
  {
    name: 'Multicloud Network Associate – Aviatrix',
    link: 'https://www.credly.com/badges/4c2e9f52-70ca-469f-8f34-42c2823c48de/public_url',
    badge: aviaBadge
  },
  {
    name: 'Oracle Certified Foundations Associate',
    link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=FDEA77D0C45B1A314E981D469F984F41AC4FDDDA77584B3081E817B927648158',
    badge: oracleBadge
  }
]

export default function Certifications(){
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
    >
      <h4 className="font-semibold mb-3">Certifications</h4>
      <div className="grid sm:grid-cols-2 gap-3 text-gray-800">
        {certs.map((c, idx) => (
          <motion.a
            key={c.name}
            href={c.link}
            target="_blank"
            rel="noreferrer"
            className="border border-gray-200 p-3 rounded-xl flex items-center gap-3 group"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(0,0,0,0.08)' }}
          >
            {c.badge ? (
              <img
                src={c.badge}
                alt={c.name}
                className={`w-[6.25rem] h-[6.25rem] rounded-3xl border border-gray-100 bg-white ${
                  c.badge === oracleBadge ? 'object-cover p-0.5' : 'object-contain'
                }`}
              />
            ) : (
              <span className="w-[6.25rem] h-[6.25rem] rounded-3xl border border-gray-100 bg-gray-50 flex items-center justify-center text-gray-500">
                <Award size={26} />
              </span>
            )}
            <div className="flex-1">
              <div className="font-medium leading-snug group-hover:text-gray-900">{c.name}</div>
              <span className="inline-flex mt-2 px-2 py-1 text-xs rounded-full bg-gray-900 text-white">
                View Certificate
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}
