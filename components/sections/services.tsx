'use client'

import { motion } from 'framer-motion'
import { servicesData } from '@/lib/data'
import { Brain, Shield, Code, Palette, Video, Camera } from 'lucide-react'

const serviceIcons = {
  'Software Outsourcing': Code,
  'AI Solutions & Advisor': Brain,
  'Security Audit & Advisor': Shield,
  'Video Editing': Video,
  'UX/UI Design': Palette,
  'Photography & Videography': Camera
}

export function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We provide comprehensive solutions across technology and creative domains
          </motion.p>
        </motion.div>

        {/* IT Services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-600 mb-4">
              {servicesData.itServices.title}
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              {servicesData.itServices.brief}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.itServices.services.map((service, index) => {
              const IconComponent = serviceIcons[service.title as keyof typeof serviceIcons] || Code
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600 mr-3" />
                    <h4 className="text-xl font-semibold">{service.title}</h4>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Media Services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-purple-600 mb-4">
              {servicesData.mediaServices.title}
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              {servicesData.mediaServices.brief}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.mediaServices.services.map((service, index) => {
              const IconComponent = serviceIcons[service.title as keyof typeof serviceIcons] || Palette
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-purple-600 mr-3" />
                    <h4 className="text-xl font-semibold">{service.title}</h4>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Products</h2>
        <p className="text-center text-gray-600">Products content coming soon...</p>
      </div>
    </section>
  )
}

export function CommunitySection() {
  return (
    <section id="community" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Community</h2>
        <p className="text-center text-gray-600">Community content coming soon...</p>
      </div>
    </section>
  )
}

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>
        <p className="text-center text-gray-600">Team content coming soon...</p>
      </div>
    </section>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">What People Say</h2>
        <p className="text-center text-gray-600">Testimonials content coming soon...</p>
      </div>
    </section>
  )
}

export function FAQSection() {
  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600">FAQs content coming soon...</p>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
        <p className="text-center text-gray-600">Contact form coming soon...</p>
      </div>
    </section>
  )
}