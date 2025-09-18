'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqData } from '@/lib/data'
import { ChevronDown, ChevronUp } from 'lucide-react'

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>('About the Agency')
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
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

  return (
    <section id="faqs" className="py-20 bg-white">
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
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Find answers to common questions about our services, processes, and support
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Category Tabs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-wrap justify-center mb-8 gap-2"
          >
            {Object.keys(faqData).map((category) => (
              <motion.button
                key={category}
                variants={itemVariants}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-4"
          >
            {faqData[activeCategory as keyof typeof faqData]?.map((faq, index) => {
              const itemKey = `${activeCategory}-${index}`
              const isOpen = openItems[itemKey]

              return (
                <motion.div
                  key={itemKey}
                  variants={itemVariants}
                  className="bg-gray-50 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(itemKey)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for?
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  )
}