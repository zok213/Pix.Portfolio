import { colors, typography } from '../../styles/design-tokens';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image - Full Screen */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-background.png"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Purple Gradient Orb - Background Effect */}
      <div
        className="absolute z-10 pointer-events-none rounded-full blur-[120px]"
        style={{
          left: '20%',
          top: '5%',
          width: '60%',
          height: '80%',
          background: 'radial-gradient(circle at 50% 50%, rgba(151, 71, 255, 0.25) 0%, rgba(151, 71, 255, 0) 70%)',
        }}
      />
      <div
        className="absolute z-10 pointer-events-none rounded-full blur-[100px]"
        style={{
          right: '10%',
          bottom: '10%',
          width: '40%',
          height: '60%',
          background: 'radial-gradient(circle at 50% 50%, rgba(29, 115, 243, 0.2) 0%, rgba(29, 115, 243, 0) 70%)',
        }}
      />

      {/* Decorative Fish Icon (Top Right) - Moved here and hidden on small mobile */}
      <motion.div
        initial={{ opacity: 0, rotate: -10, x: 50 }}
        animate={{ opacity: 1, rotate: 0, x: 0, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 1.2, delay: 0.6 },
          rotate: { duration: 1.2, delay: 0.6 },
          x: { duration: 1.2, delay: 0.6 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-24 right-6 md:top-20 md:right-10 w-24 md:w-40 lg:w-56 opacity-80 md:opacity-90 mix-blend-screen pointer-events-none z-30"
      >
        <img
          src="/images/fish-icon.png"
          alt="Decorative Fish"
          className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(151,71,255,0.4)]"
        />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center h-full min-h-[800px] pt-28 md:pt-0">

        {/* Mobile Layout: Stacked vertical flow */}
        <div className="relative w-full flex flex-col lg:grid lg:grid-cols-12 lg:grid-rows-[auto_1fr_auto] items-center justify-center gap-8 md:gap-8 lg:gap-4 h-full">

          {/* Top Left Text - On mobile, appears after logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full order-2 lg:order-none lg:col-span-3 lg:col-start-2 lg:row-start-1 lg:self-end lg:mb-12 z-30"
          >
            <p
              className="text-white text-xl md:text-2xl lg:text-3xl font-light leading-tight text-center lg:text-left drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
              style={{ fontFamily: typography.fontFamily.inter }}
            >
              Unleashing <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">infinite creativity</span> in the <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">pixel universe</span>
            </p>
          </motion.div>

          {/* Bottom Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full order-3 lg:order-none lg:col-span-3 lg:col-start-2 lg:row-start-3 lg:self-start lg:mt-12 z-30"
          >
            <p
              className="text-white/80 text-xl md:text-2xl lg:text-3xl font-light leading-tight text-center lg:text-right"
              style={{ fontFamily: typography.fontFamily.inter }}
            >
              Whatever you need, we make it happen.
            </p>
          </motion.div>

          {/* Center Logo - First on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full max-w-[300px] md:max-w-[450px] lg:max-w-full order-1 lg:order-none lg:col-span-4 lg:col-start-5 lg:row-start-1 lg:row-end-4 lg:self-center relative z-20 flex justify-center mb-4 lg:mb-0"
          >
            <div className="absolute inset-0 bg-purple-500/30 blur-[120px] rounded-full pointer-events-none animate-pulse" />
            <img
              src="/images/logo-trang-ngang-fish.png"
              alt="PiXerse Logo"
              className="w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(151,71,255,0.6)]"
            />
          </motion.div>

          {/* Top Right Text - Cards section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full order-4 lg:order-none lg:col-span-4 lg:col-start-8 lg:row-start-1 lg:self-end lg:mb-12 z-30 mt-4 lg:mt-0"
          >
            <div className="border border-white/10 bg-white/5 backdrop-blur-md rounded-[24px] p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:bg-white/10 transition-colors duration-300">
              <p
                className="text-white/90 text-base md:text-lg lg:text-xl font-normal leading-tight text-center lg:text-left"
                style={{ fontFamily: typography.fontFamily.inter }}
              >
                PiXerse is your <span className="text-blue-300 font-medium">all-in-one hub</span> for creativity and technology.
              </p>
            </div>
          </motion.div>

          {/* Bottom Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full order-5 lg:order-none lg:col-span-4 lg:col-start-8 lg:row-start-3 lg:self-start lg:mt-12 z-30"
          >
            <div className="bg-gradient-to-r from-[#7F30C7] to-[#1D73F3] rounded-[24px] p-6 shadow-[0_0_20px_rgba(127,48,199,0.4)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-[24px]" />
              <p
                className="text-white text-base md:text-lg lg:text-xl font-medium leading-tight text-center lg:text-left relative z-10"
                style={{ fontFamily: typography.fontFamily.inter }}
              >
                From branding, media, and social management to marketing, business, and innovative tech projects.
              </p>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Bottom Gradient Fade for Smooth Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />

    </section>
  );
}
