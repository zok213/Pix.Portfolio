'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
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
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '4s' }}
          className="absolute bottom-32 left-20 w-24 h-24 bg-indigo-200 rounded-full opacity-20 blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800 rounded-full px-6 py-2 mb-8"
          >
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Unleashing Infinite Creativity
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
          >
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Pixerve
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Empowering creativity and technology from branding, media, and social 
            to creative and innovative tech projects in the post-universe.
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto"
          >
            We combine cutting-edge technology with creative excellence to deliver 
            solutions that push the boundaries of what's possible.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('services')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Stats or Features */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white/20 dark:border-slate-700/20"
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                50+
              </div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">
                Projects Completed
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white/20 dark:border-slate-700/20"
            >
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                25+
              </div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">
                Happy Clients
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white/20 dark:border-slate-700/20"
            >
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                24/7
              </div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">
                Support Available
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-slate-400 dark:bg-slate-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}