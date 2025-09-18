'use client'

import { motion } from 'framer-motion'
import { communityData } from '@/lib/data'
import { Brain, Users, ExternalLink } from 'lucide-react'

const communityIcons = {
  'PiX.Lab': Brain,
  'DaNang Localist': Users
}

export function CommunitySection() {
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
    <section id="community" className="py-20 bg-slate-50">
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
            Our Community
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Building ecosystems of innovation where passion for science and technology converge
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          {communityData.map((community, index) => {
            const IconComponent = communityIcons[community.name as keyof typeof communityIcons] || Users
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg mr-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">{community.title}</h3>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {community.description}
                    </p>
                    
                    <p className="text-gray-600 mb-6">
                      {community.fullDescription}
                    </p>
                    
                    {community.pillars && (
                      <div className="space-y-4 mb-6">
                        <h4 className="font-semibold text-gray-800">Core Pillars:</h4>
                        {community.pillars.map((pillar, idx) => (
                          <div key={idx} className="border-l-4 border-blue-600 pl-4">
                            <h5 className="font-semibold text-gray-800">{pillar.title}</h5>
                            <p className="text-gray-600 text-sm">{pillar.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {community.link && (
                      <a
                        href={community.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                      >
                        Join Community
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-64 flex items-center justify-center">
                    <IconComponent className="w-32 h-32 text-blue-600 opacity-20" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}