'use client'

import { motion } from 'framer-motion'
import { testimonialsData } from '@/lib/data'
import { Quote, Star } from 'lucide-react'

export function TestimonialsSection() {
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
    <section id="testimonials" className="py-20 bg-slate-50">
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
            What People Say
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Hear from our clients and community members about their experiences with PiXerse
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-blue-600 opacity-20 absolute top-4 right-4" />
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional testimonials can be shown with a "Load More" button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center mt-12"
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            View More Reviews
          </button>
        </motion.div>
      </div>
    </section>
  )
}