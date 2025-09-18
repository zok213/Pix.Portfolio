'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone, MapPin, MessageCircle, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/pixerve', icon: '💼' },
  { name: 'Telegram', href: 'https://t.me/pixerve', icon: '✈️' },
  { name: 'Facebook', href: 'https://facebook.com/pixerve', icon: '📘' },
  { name: 'Twitter', href: 'https://twitter.com/pixerve', icon: '🐦' },
]

const quickLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Contact', href: '#contact' },
]

const faqItems = [
  { question: 'What services do you offer?', href: '#faq-services' },
  { question: 'How much do your services cost?', href: '#faq-pricing' },
  { question: 'What\'s the project timeline?', href: '#faq-timeline' },
  { question: 'Do you provide ongoing support?', href: '#faq-support' },
]

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const sectionId = href.substring(1)
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
        ease: 'easeOut',
      },
    },
  }

  return (
    <footer className="bg-slate-900 text-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="container mx-auto px-4 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 group cursor-pointer"
                onClick={() => window.open('mailto:contact@pixerve.com')}
              >
                <Mail className="h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  contact@pixerve.com
                </span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 group cursor-pointer"
                onClick={() => window.open('tel:+84123456789')}
              >
                <Phone className="h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  +84 123 456 789
                </span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 group"
              >
                <MapPin className="h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  Da Nang, Vietnam
                </span>
              </motion.div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  whileHover={{ x: 5 }}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-300 hover:text-white transition-colors text-left"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.a
                whileHover={{ x: 5 }}
                href="/blog"
                className="block text-gray-300 hover:text-blue-400 transition-colors"
              >
                Our Blog
                <ExternalLink className="inline h-4 w-4 ml-1" />
              </motion.a>
            </nav>
          </motion.div>

          {/* FAQs */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold text-white">FAQs</h3>
            <div className="space-y-3">
              {faqItems.map((faq, index) => (
                <motion.button
                  key={index}
                  whileHover={{ x: 5 }}
                  onClick={() => scrollToSection(faq.href)}
                  className="block text-sm text-gray-300 hover:text-white transition-colors text-left"
                >
                  {faq.question}
                </motion.button>
              ))}
              <motion.button
                whileHover={{ x: 5 }}
                onClick={() => scrollToSection('#faqs')}
                className="block text-blue-400 hover:text-blue-300 transition-colors font-medium text-left"
              >
                View All FAQs →
              </motion.button>
            </div>
          </motion.div>

          {/* Chatbox & Blog Highlight */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Get Help</h3>
            
            {/* Chatbox */}
            <motion.div 
              className="bg-slate-800 rounded-lg p-4 space-y-3"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-gray-300 text-sm">
                Need immediate assistance? Our chatbot is here to help!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Start Chat</span>
              </motion.button>
            </motion.div>

            {/* Blog Highlight */}
            <motion.div 
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-4 space-y-3"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-semibold text-white">Our Blog</h4>
              <p className="text-blue-100 text-sm">
                Stay updated with the latest insights, tutorials, and industry news.
              </p>
              <motion.a
                href="/blog"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg transition-colors hover:bg-blue-50 font-medium text-sm"
              >
                Visit Blog
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-slate-700 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2025 Pixerve. All rights reserved. | Built with ❤️ in Da Nang, Vietnam
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}