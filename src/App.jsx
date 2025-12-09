import React from 'react'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import ProjectCard from './components/ProjectCard'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Certifications from './components/Certifications'
import Experience from './components/Experience'
import { projectsData } from './data'
import { motion } from 'framer-motion'
import profileImg from './assets/profile.jpg'
import { MapPin, Mail as MailIcon, Linkedin, Github } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 sm:px-8 py-12">
        {/* HERO */}
        <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-20">
          <div>
            <h1 className="text-4xl sm:text-5xl font-light leading-tight">
              Hi, I’m <span className="font-semibold">SRIRAM VARMA BHUPATHIRAJU</span> — Cloud & Software Engineer.
            </h1>
            <p className="mt-6 text-lg text-gray-800 max-w-xl">
              Enthusiastic B.Tech Computer Science student specializing in Cloud Computing and Software Engineering with strong skills in Java, Spring Boot, and AWS. Experienced in building cloud-native applications, automation pipelines, and full-stack web platforms. Familiar with testing methodologies, DevOps practices, and modern product engineering tools. Adept at solving complex problems and driven by a passion for learning, innovation, and building impactful software solutions.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#projects" className="inline-block bg-black text-white px-6 py-3 rounded-full font-medium">View Projects</a>
              <a href="/resume.pdf" className="inline-block border border-gray-200 px-6 py-3 rounded-full">Download Resume</a>
            </div>
          </div>
          <motion.aside
            className="card"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
          >
            <div className="flex items-center gap-4">
              <img src={profileImg} alt="profile" className="w-20 h-20 rounded-full object-cover border border-gray-200" />
              <div>
                <div className="font-semibold">SRIRAM VARMA BHUPATHIRAJU</div>
                <div className="text-sm text-gray-600">Cloud & Software Engineer</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-500" />
                <span>Vijayawada, India</span>
              </div>
              <a className="block mt-2 text-sm text-gray-800 flex items-center gap-2" href="mailto:bhupathirajusriramvarma@gmail.com">
                <MailIcon size={16} className="text-gray-500" />
                bhupathirajusriramvarma@gmail.com
              </a>
              <div className="mt-3 flex flex-col gap-2">
                <a href="https://www.linkedin.com/in/sriram-varma/" target="_blank" rel="noreferrer" className="text-gray-600 flex items-center gap-2 hover:text-gray-900">
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a href="https://github.com/sriramvarma0" target="_blank" rel="noreferrer" className="text-gray-600 flex items-center gap-2 hover:text-gray-900">
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>
          </motion.aside>
        </motion.section>

        {/* Projects */}
        <motion.section id="projects" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Selected Projects</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((p, idx) => (
              <ProjectCard key={p.id} index={idx} project={p} />
            ))}
          </div>
        </motion.section>

        {/* About, Skills, Experience & Certifications */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">About Me</h3>
            <div className="card">
              <p className="text-gray-800">A driven student and engineer focused on cloud-native systems, automation, and beautiful frontend experiences. I enjoy building scalable systems, working across the stack, and shipping polished user experiences that feel premium and thoughtful.</p>
            </div>

            <div className="mt-6" id="certifications">
              <Certifications />
            </div>

            <div className="mt-6" id="experience">
              <Experience />
            </div>
          </div>
          <aside>
            <Skills />
          </aside>
        </section>

        {/* Contact */}
        <motion.section id="contact" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">Contact</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />
            <div className="card">
              <h4 className="font-semibold">Direct Contact</h4>
              <p className="mt-2 text-sm text-gray-700">Email: <a href="mailto:bhupathirajusriramvarma@gmail.com" className="text-gray-800">bhupathirajusriramvarma@gmail.com</a></p>
              <p className="mt-2 text-sm text-gray-700">Phone: +91 7013482535</p>
              <p className="mt-4 text-sm text-gray-600">Open to internships, graduate roles, and freelance projects.</p>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}
