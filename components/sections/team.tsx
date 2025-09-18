'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { teamData } from '@/lib/data'
import { Linkedin, ExternalLink } from 'lucide-react'

type TeamCategory = 'founders' | 'pixTeq' | 'pixStudio'

export function TeamSection() {
  const [activeCategory, setActiveCategory] = useState<TeamCategory>('founders')
  const [selectedMember, setSelectedMember] = useState<any>(null)

  const categories = {
    founders: { label: 'Founders', data: teamData.founders, color: 'from-blue-600 to-purple-600' },
    pixTeq: { label: 'Pix.Teq', data: teamData.pixTeq, color: 'from-green-600 to-blue-600' },
    pixStudio: { label: 'Pix.Studio', data: teamData.pixStudio, color: 'from-purple-600 to-pink-600' }
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="team" className="py-20 bg-white">
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
            Our Team
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Meet the passionate individuals who make PiXerse a reality
          </motion.p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex justify-center mb-12"
        >
          <div className="flex bg-gray-100 rounded-2xl p-2">
            {Object.entries(categories).map(([key, category]) => (
              <motion.button
                key={key}
                variants={itemVariants}
                onClick={() => setActiveCategory(key as TeamCategory)}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Team Members Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {categories[activeCategory].data.map((member, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedMember(member)}
                whileHover={{ y: -5 }}
              >
                <div className={`h-24 bg-gradient-to-r ${categories[activeCategory].color}`} />
                
                <div className="p-6 -mt-12">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg mx-auto">
                    <span className="text-2xl font-bold text-gray-800">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-bold text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                    {(member as any).specialties && (
                      <p className="text-xs text-gray-500 mb-3">{(member as any).specialties}</p>
                    )}
                    
                    <div className="flex justify-center space-x-2">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Member Details Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-6">
                    <span className="text-3xl font-bold text-white">
                      {selectedMember.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{selectedMember.name}</h3>
                    <p className="text-lg text-gray-600">{selectedMember.role}</p>
                    {(selectedMember as any).specialties && (
                      <p className="text-sm text-gray-500">{(selectedMember as any).specialties}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">About</h4>
                  <p className="text-gray-700 leading-relaxed italic">
                    "{selectedMember.quote}"
                  </p>
                </div>
                
                <div className="flex justify-between items-center">
                  {selectedMember.linkedin && (
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn Profile
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
                  
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}