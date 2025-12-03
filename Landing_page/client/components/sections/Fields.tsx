import { colors, typography } from '../../styles/design-tokens';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Fields() {
  return (
    <section
      id="fields"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-32"
      style={{
        backgroundImage: "url('/images/fields-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Forced Black Top - Ensures perfect seam with Communities */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none" />

      {/* Top Gradient Orb - Seamless transition from Communities (Split Gradient) */}
      <div
        className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[1400px] h-[1000px] opacity-60 blur-[130px] z-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(151, 71, 255, 0.6) 0%, rgba(88, 28, 135, 0.2) 70%)',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-widest mb-20 md:mb-28 lg:mb-32"
          style={{ fontFamily: typography.fontFamily.ptSans }}
        >
          Our FIELDS
        </motion.h2>

        <div className="space-y-32 lg:space-y-40">
          {/* Field 1: PiX.Stdio */}
          <FieldSection
            title="PIX.STDIO"
            items={[
              {
                label: "IT/AI OUTSOURCING",
                description: "Graphic & Brand Identity Design, Animation, Communication Channel Management (Discord, Facebook, Titkok, X, Luma,...), UX/UI Design."
              },
              {
                label: "GAME",
                description: "Immersive game design and development, creating engaging experiences across various platforms."
              },
              {
                label: "EVENT",
                description: "Comprehensive event management and production, ensuring memorable and impactful experiences."
              },
            ]}
            delay={0.2}
            color="purple"
          />

          {/* Field 2: PiX.TEQ */}
          <FieldSection
            title="PIX.TEQ"
            items={[
              {
                label: "ENTERPRISE SOFTWARE & AI SOLUTIONS",
                description: "Custom Web & Mobile App Development, AI-powered Chatbots & Virtual Assistants, Data Analytics & AI/ML Programming, Cloud Infrastructure & DevOps."
              },
              {
                label: "GAME",
                description: "Advanced game mechanics and backend systems for scalable and robust gaming solutions."
              },
              {
                label: "EVENT",
                description: "Technical support and digital integration for events, enhancing engagement through technology."
              },
              {
                label: "BLOCKCHAIN",
                description: "Secure and transparent blockchain solutions for decentralized applications and smart contracts."
              },
              {
                label: "IOT",
                description: "Internet of Things solutions connecting devices and data for smarter operations."
              },
            ]}
            delay={0.4}
            color="blue"
          />
        </div>
      </div >
    </section >
  );
}

function FieldSection({ title, items, delay, color = 'purple' }: { title: string, items: { label: string, description: string }[], delay: number, color?: 'purple' | 'blue' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotation
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(interval);
  }, [isPaused, items.length]);

  const nextItem = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prevItem = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Get visible items for the fixed slots (1 Large, 2 Small)
  const getVisibleItems = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(items[(activeIndex + i) % items.length]);
    }
    return visible;
  };

  const visibleItems = getVisibleItems();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-12 items-start gap-8 lg:gap-0">

        {/* Title (Left) */}
        <div className="lg:col-span-3 w-full text-center lg:text-left lg:h-[350px] lg:flex lg:items-center">
          <h3
            className="text-white text-4xl md:text-5xl font-bold uppercase tracking-[0.1em]"
            style={{ fontFamily: typography.fontFamily.ptSans }}
          >
            {title}
          </h3>
        </div>

        {/* Previous Button (Left of Bubbles) */}
        <div className="lg:col-span-2 flex justify-center lg:justify-end pr-0 lg:pr-8 lg:h-[350px] lg:items-center">
          <button
            onClick={prevItem}
            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm uppercase tracking-widest group"
            style={{ fontFamily: typography.fontFamily.inter }}
          >
            <div className={`w-3 h-3 rounded-full bg-white transition-transform group-hover:scale-125`} />
            Previous
          </button>
        </div>

        {/* Bubbles Container (Center) */}
        <div className="lg:col-span-5 flex flex-col items-center relative">
          <div className="flex items-center justify-center gap-8 md:gap-12 h-[350px] w-full">
            <AnimatePresence mode="popLayout">
              {visibleItems.map((item, idx) => {
                const isLarge = idx === 0;
                const isMedium = idx === 1;

                return (
                  <motion.div
                    key={`${activeIndex}-${idx}`}
                    layout
                    initial={{ opacity: 0, scale: 0.8, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -50 }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                    className="flex flex-col items-center gap-4 relative"
                  >
                    {/* Label (Above Bubble) */}
                    <motion.div
                      className={`text-center font-bold uppercase tracking-widest whitespace-nowrap absolute -top-10
                        ${isLarge ? 'text-white text-sm md:text-base' : 'text-white/40 text-xs md:text-sm'}`}
                      style={{ fontFamily: typography.fontFamily.ptSans }}
                    >
                      {item.label}
                    </motion.div>

                    {/* Bubble */}
                    <div
                      className={`rounded-full backdrop-blur-sm transition-all duration-500 flex items-center justify-center relative overflow-hidden
                        ${isLarge
                          ? `w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 border-[1px] ${color === 'purple' ? 'border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.4)]' : 'border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.4)]'}`
                          : isMedium
                            ? 'w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 border-[1px] border-white/20 opacity-70'
                            : 'w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 border-[1px] border-white/10 opacity-40'
                        }
                      `}
                      style={{
                        background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
                      }}
                    >
                      {/* Inner Reflection/Glow */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

                      {/* Bottom colored glow for active */}
                      {isLarge && (
                        <div className={`absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t ${color === 'purple' ? 'from-purple-900/50' : 'from-blue-900/50'} to-transparent opacity-60`} />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Description (Below Bubbles) */}
          <div className="h-20 mt-4 w-full max-w-xl text-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-white/80 text-sm md:text-base font-normal leading-relaxed"
                style={{ fontFamily: typography.fontFamily.inter }}
              >
                {items[activeIndex].description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Next Button (Right of Bubbles) */}
        <div className="lg:col-span-2 flex justify-center lg:justify-start pl-0 lg:pl-8 lg:h-[350px] lg:items-center">
          <button
            onClick={nextItem}
            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm uppercase tracking-widest group"
            style={{ fontFamily: typography.fontFamily.inter }}
          >
            Next
            <div className={`w-3 h-3 rounded-full bg-white transition-transform group-hover:scale-125`} />
          </button>
        </div>

      </div>
    </motion.div>
  );
}
