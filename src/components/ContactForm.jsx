import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

// EmailJS Configuration
// Get these from https://www.emailjs.com/
// 1. Create an account at emailjs.com
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your Public Key from Account > General
const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY' // Replace with your EmailJS Public Key
}

export default function ContactForm(){
  const [form, setForm] = useState({name:'', email:'', subject:'', message:''})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!form.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!form.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!form.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({...form, [name]: value})
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({...errors, [name]: ''})
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    // Check if EmailJS is configured
    if (EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' || 
        EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
        EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      alert('EmailJS is not configured. Please update EMAILJS_CONFIG in ContactForm.jsx with your credentials.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: 'bhupathirajusriramvarma@gmail.com' // Your email address
        }
      )

      if (result.status === 200) {
        setSubmitStatus('success')
        // Reset form after success
        setForm({name:'', email:'', subject:'', message:''})
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <div className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className={`w-full border rounded-lg px-3 py-2.5 transition-colors ${
              errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-gray-400 focus:ring-gray-200'
            } focus:outline-none focus:ring-2`}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle size={12} />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full border rounded-lg px-3 py-2.5 transition-colors ${
              errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-gray-400 focus:ring-gray-200'
            } focus:outline-none focus:ring-2`}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle size={12} />
              {errors.email}
            </p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            className={`w-full border rounded-lg px-3 py-2.5 transition-colors ${
              errors.subject ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-gray-400 focus:ring-gray-200'
            } focus:outline-none focus:ring-2`}
            placeholder="What's this about?"
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle size={12} />
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className={`w-full border rounded-lg px-3 py-2.5 resize-none transition-colors ${
              errors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-gray-400 focus:ring-gray-200'
            } focus:outline-none focus:ring-2`}
            placeholder="Your message here..."
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle size={12} />
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : submitStatus === 'success' ? (
              <>
                <CheckCircle size={18} />
                <span>Message Sent!</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Send Message</span>
              </>
            )}
          </motion.button>

          {submitStatus === 'success' && (
            <p className="mt-2 text-sm text-green-600 text-center flex items-center justify-center gap-1">
              <CheckCircle size={14} />
              Message sent successfully! I'll get back to you soon.
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="mt-2 text-sm text-red-600 text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </form>
  )
}
