import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, X, Download } from 'lucide-react'
import awsSolutionsArchitectBadge from '../assets/aws-solutions-architect-badge.png'
import awsCloudPractitionerBadge from '../assets/aws-cloud-practitioner-badge.png'
import aviatrixBadge from '../assets/aviatrix-badge.png'
import oracleFoundationsBadge from '../assets/oracle-foundations-badge.png'
import salesforceAiBadge from '../assets/salesforce-ai-badge.png'

// Certificate images
import awsSolutionsArchitectCert from '../assets/aws-solutions-architect-certificate.jpg'
import awsCloudPractitionerCert from '../assets/aws-cloud-practitioner-certificate.jpg'
import aviatrixCert from '../assets/aviatrix-certificate.jpg'
import oracleFoundationsCert from '../assets/oracle-foundations-certificate.jpg'
import salesforceAiCert from '../assets/salesforce-ai-associate-certificate.jpg'

// Certificate PDFs
import awsSolutionsArchitectPdf from '../assets/aws-solutions-architect-certificate.pdf'
import awsCloudPractitionerPdf from '../assets/aws-cloud-practitioner-certificate.pdf'
import aviatrixPdf from '../assets/aviatrix-certificate.pdf'
import oracleFoundationsPdf from '../assets/oracle-foundations-certificate.pdf'
import salesforceAiPdf from '../assets/salesforce-ai-associate-certificate.pdf'

const certs = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    link: 'https://www.credly.com/badges/db63141a-e1fe-43e3-ab6b-9297c49675fd/public_url',
    badge: awsSolutionsArchitectBadge,
    certificate: awsSolutionsArchitectCert,
    pdf: awsSolutionsArchitectPdf
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    link: 'https://www.credly.com/badges/65c4415c-c925-42ec-a3fc-e4e36398cceb/public_url',
    badge: awsCloudPractitionerBadge,
    certificate: awsCloudPractitionerCert,
    pdf: awsCloudPractitionerPdf
  },
  {
    name: 'Salesforce Certified AI Associate',
    link: 'https://www.salesforce.com/trailblazer/k6fekcs49ni4fpqaj7',
    badge: salesforceAiBadge,
    certificate: salesforceAiCert,
    pdf: salesforceAiPdf
  },
  {
    name: 'Multicloud Network Associate – Aviatrix',
    link: 'https://www.credly.com/badges/4c2e9f52-70ca-469f-8f34-42c2823c48de/public_url',
    badge: aviatrixBadge,
    certificate: aviatrixCert,
    pdf: aviatrixPdf
  },
  {
    name: 'Oracle Certified Foundations Associate',
    link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=FDEA77D0C45B1A314E981D469F984F41AC4FDDDA77584B3081E817B927648158',
    badge: oracleFoundationsBadge,
    certificate: oracleFoundationsCert,
    pdf: oracleFoundationsPdf
  }
]

export default function Certifications(){
  const [selectedCert, setSelectedCert] = useState(null)

  const handleDownload = (cert) => {
    if (cert.pdf) {
      // If PDF exists, download it
      const link = document.createElement('a')
      link.href = cert.pdf
      link.download = `${cert.name.replace(/\s+/g, '-')}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else if (cert.certificate) {
      // If certificate image exists, download it as image
      const link = document.createElement('a')
      link.href = cert.certificate
      link.download = `${cert.name.replace(/\s+/g, '-')}.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      // Fallback: open the credential link
      window.open(cert.link, '_blank')
    }
  }

  return (
    <>
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
            <motion.div
              key={c.name}
              className="border border-gray-200 p-3 rounded-xl flex items-center gap-3 group text-left w-full"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(0,0,0,0.08)' }}
            >
              <div 
                onClick={() => window.open(c.link, '_blank')}
                className="flex items-center gap-3 flex-1 cursor-pointer"
              >
                {c.badge ? (
                  <img
                    src={c.badge}
                    alt={c.name}
                    className={`w-[6.25rem] h-[6.25rem] rounded-3xl border border-gray-100 bg-white ${
                      c.badge === oracleFoundationsBadge ? 'object-cover p-0.5' : 'object-contain'
                    }`}
                  />
                ) : (
                  <span className="w-[6.25rem] h-[6.25rem] rounded-3xl border border-gray-100 bg-gray-50 flex items-center justify-center text-gray-500">
                    <Award size={26} />
                  </span>
                )}
                <div className="flex-1">
                  <div className="font-medium leading-snug group-hover:text-gray-900">{c.name}</div>
                  <span 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCert(c);
                    }}
                    className="inline-flex mt-2 px-2 py-1 text-xs rounded-full bg-gray-900 text-white hover:bg-gray-700 cursor-pointer transition-colors"
                  >
                    View Certificate
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} className="text-gray-700" />
                </button>

                {/* Certificate Image */}
                <div className="flex-1 overflow-auto p-4 sm:p-6 md:p-8 flex items-center justify-center bg-gray-50">
                  {selectedCert.certificate ? (
                    <img
                      src={selectedCert.certificate}
                      alt={selectedCert.name}
                      className="max-w-full max-h-[70vh] object-contain rounded-lg"
                    />
                  ) : selectedCert.badge ? (
                    <img
                      src={selectedCert.badge}
                      alt={selectedCert.name}
                      className="max-w-full max-h-[70vh] object-contain rounded-lg"
                    />
                  ) : (
                    <div className="text-gray-400 text-center">
                      <Award size={64} className="mx-auto mb-4" />
                      <p>Certificate image not available</p>
                    </div>
                  )}
                </div>

                {/* Footer with Download Button */}
                <div className="border-t border-gray-200 p-4 sm:p-5 md:p-6 bg-white flex items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base md:text-lg leading-tight pr-2">{selectedCert.name}</h3>
                  </div>
                  <motion.button
                    onClick={() => handleDownload(selectedCert)}
                    className="flex items-center gap-2 bg-black text-white px-4 py-2.5 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full font-medium hover:bg-gray-800 transition-colors flex-shrink-0"
                    whileTap={{ scale: 0.96 }}
                    aria-label={selectedCert.pdf ? 'Download PDF' : selectedCert.certificate ? 'Download Certificate' : 'View on Credly'}
                  >
                    <Download size={18} className="sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">
                      {selectedCert.pdf ? 'Download PDF' : selectedCert.certificate ? 'Download Certificate' : 'View on Credly'}
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
