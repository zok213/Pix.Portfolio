import { colors, typography } from '../../styles/design-tokens';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: 'Why choose PiX.Teq team?',
      answer: 'PiX.Teq brings together top-tier technical talent with a deep understanding of modern frameworks and scalable architecture. We don\'t just write code; we build robust, future-proof solutions tailored to your specific business needs.'
    },
    {
      question: 'Why choose PiX.Stdio team?',
      answer: 'PiX.Stdio combines artistic vision with strategic thinking. Our designs are not only visually stunning but also crafted to enhance user experience and drive engagement, ensuring your brand stands out in a crowded market.'
    },
    {
      question: 'What can Software Outsourcing at PiXerse do?',
      answer: 'We offer end-to-end software development services, from initial consultation and requirement gathering to development, testing, deployment, and ongoing maintenance. Whether you need a mobile app, a web platform, or an AI solution, we have the expertise to deliver.'
    },
  ];

  return (
    <section
      className="relative w-full min-h-screen bg-black overflow-hidden py-20 md:py-32 flex items-center"
    >
      {/* Background Image - Floor Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />
        <img
          src="/images/Check-in CLB 1.png"
          alt="Background Grid"
          className="w-full h-full object-cover object-bottom opacity-50"
        />
      </div>

      {/* Purple Ellipse Background */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[50vw] h-[50vw] pointer-events-none opacity-60 blur-[100px]"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(151, 71, 255, 0.4) 0%, rgba(151, 71, 255, 0) 70%)',
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left column - Heading + button */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 lg:sticky lg:top-32"
          >
            <div>
              <h2
                className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-widest leading-tight"
                style={{ fontFamily: typography.fontFamily.ptSans }}
              >
                FREQUENTLY ASKED
              </h2>
              <h2
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-widest leading-tight"
                style={{
                  fontFamily: typography.fontFamily.ptSans,
                  background: 'linear-gradient(90deg, #9747FF 0%, #1D73F3 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                QUESTION
              </h2>
            </div>

            <button
              className="group w-full md:w-auto max-w-[300px] px-8 py-4 bg-white rounded-full text-black text-lg font-medium flex items-center justify-between transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              style={{ fontFamily: typography.fontFamily.balooPaaji2 }}
            >
              <span>Contact Support</span>
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </motion.div>

          {/* Right column - FAQ list */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} delay={idx * 0.2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, delay }: { question: string, answer: string, delay: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="border-b border-white/10"
    >
      <button
        className="w-full py-6 flex items-center justify-between text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`text-xl md:text-2xl font-medium transition-colors duration-300 ${isOpen ? 'text-blue-400' : 'text-white group-hover:text-blue-300'}`}
          style={{ fontFamily: typography.fontFamily.balooPaaji2 }}
        >
          {question}
        </span>
        <div
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-white text-black rotate-180 border-white' : 'border-white/20 text-white group-hover:border-blue-400 group-hover:text-blue-400'}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p
            className="text-stone-400 text-lg leading-relaxed"
            style={{ fontFamily: typography.fontFamily.balooPaaji2 }}
          >
            {answer}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
