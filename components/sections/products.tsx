'use client'

import { motion } from 'framer-motion'
import { productsData } from '@/lib/data'
import { Bot, Gamepad2, ArrowRight } from 'lucide-react'

const productIcons = {
  'PiXity.AI': Bot,
  'Mini Game': Gamepad2
}

export function ProductsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="products" className="py-20 bg-white">
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
            Our Products
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Innovative solutions designed to empower communities and enhance digital experiences
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {productsData.map((product, index) => {
            const IconComponent = productIcons[product.name as keyof typeof productIcons] || Bot
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg mr-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
                    <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      {product.status === 'active' ? 'Live' : 'Coming Soon'}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                {product.features && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center mt-16"
        >
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Try Our Services
          </button>
        </motion.div>
      </div>
    </section>
  )
}