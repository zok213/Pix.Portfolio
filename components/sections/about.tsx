'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart, Users } from 'lucide-react'

const aboutItems = [
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To unleash infinite creativity in the post-universe, providing cutting-edge solutions for businesses and individuals.',
  },
  {
    icon: Target,
    title: 'Our Mission',
    description: 'Empowering creativity and technology from branding, media, and social to creative and innovative tech projects.',
  },
  {
    icon: Heart,
    title: 'Core Values',
    description: 'Innovation, creativity, excellence, and customer satisfaction drive everything we do.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building strong relationships and fostering collaboration within our community.',
  },
]

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            About <span className="text-blue-600">Pixerve</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
          >
            We are a creative technology company dedicated to transforming ideas into reality
            through innovative solutions and exceptional design.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {aboutItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-blue-100 dark:border-slate-600 hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}