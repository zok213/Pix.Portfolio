'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { companyData } from '@/lib/data'
import { Mail, Phone, MapPin, Send, Linkedin, Facebook, MessageCircle } from 'lucide-react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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

  const socialIcons = {
    linkedin: Linkedin,
    facebook: Facebook,
    telegram: MessageCircle
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
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
            Contact Us
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Ready to bring your ideas to life? Let's discuss how we can help you achieve your goals.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Get In Touch</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="it-services">IT Services</option>
                      <option value="media-services">Media Services</option>
                      <option value="both">Both</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">contact@pixerve.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-gray-600">Da Nang, Vietnam</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-800">Response Time</p>
                    <p className="text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Follow Us</h3>
              
              <div className="flex space-x-4">
                {Object.entries(companyData.socialLinks).map(([platform, url]) => {
                  const IconComponent = socialIcons[platform as keyof typeof socialIcons]
                  if (!IconComponent) return null
                  
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <IconComponent className="w-6 h-6" />
                    </a>
                  )
                })}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4">Free Consultation</h3>
              <p className="mb-4">
                Not sure where to start? Book a free consultation call with our experts to discuss your project needs.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Call
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}