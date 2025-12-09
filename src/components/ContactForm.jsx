import React, { useState } from 'react'

export default function ContactForm(){
  const [form, setForm] = useState({name:'', email:'', subject:'', message:''})
  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value})
  const handleSubmit = (e) => {
    e.preventDefault()
    // For demo: open mailto
    const body = encodeURIComponent(form.message)
    window.location.href = `mailto:bhupathirajusriramvarma@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <label className="block text-sm">Name</label>
      <input name="name" value={form.name} onChange={handleChange} className="mt-1 mb-3 w-full border border-gray-200 rounded px-3 py-2" />
      <label className="block text-sm">Email</label>
      <input name="email" value={form.email} onChange={handleChange} className="mt-1 mb-3 w-full border border-gray-200 rounded px-3 py-2" />
      <label className="block text-sm">Subject</label>
      <input name="subject" value={form.subject} onChange={handleChange} className="mt-1 mb-3 w-full border border-gray-200 rounded px-3 py-2" />
      <label className="block text-sm">Message</label>
      <textarea name="message" value={form.message} onChange={handleChange} rows="5" className="mt-1 mb-3 w-full border border-gray-200 rounded px-3 py-2" />
      <div className="mt-2">
        <button type="submit" className="bg-black text-white px-5 py-2 rounded-full">Send Message</button>
      </div>
    </form>
  )
}
