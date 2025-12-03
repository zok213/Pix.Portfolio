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

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center h-full min-h-[800px]">

        <div className="relative w-full flex flex-col lg:grid lg:grid-cols-12 lg:grid-rows-[auto_1fr_auto] items-center justify-center gap-8 lg:gap-4 h-full">

          {/* Top Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:col-span-3 lg:col-start-2 lg:row-start-1 lg:self-end lg:mb-12 z-30"
          >
            <p
              className="text-white text-2xl md:text-3xl font-normal leading-tight text-center lg:text-left drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              style={{ fontFamily: typography.fontFamily.inter }}
            >
              Unleashing infinite creativity in the pixel universe
            </p>
          </motion.div>

          {/* Bottom Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:col-span-3 lg:col-start-2 lg:row-start-3 lg:self-start lg:mt-12 z-30"
          >
            <p
              className="text-white text-2xl md:text-3xl font-normal leading-tight text-center lg:text-right drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              style={{ fontFamily: typography.fontFamily.inter }}
            >
              Whatever you need, we make it happen.
            </p>
          </motion.div>

          {/* Center Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full max-w-[600px] lg:max-w-full lg:col-span-4 lg:col-start-5 lg:row-start-1 lg:row-end-4 lg:self-center relative z-20 flex justify-center"
          >
            <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none" />
            <img
              src="/images/logo-trang-ngang-fish.png"
              alt="PiXerse Logo"
              className="w-full h-auto object-contain drop-shadow-[0_0_60px_rgba(151,71,255,0.5)]"
            />
          </motion.div>

          {/* Top Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:col-span-4 lg:col-start-8 lg:row-start-1 lg:self-end lg:mb-12 z-30"
          >
            <div className="border border-purple-500/30 bg-white/5 backdrop-blur-sm rounded-[20px] p-6">
              <p
                className="text-white text-lg md:text-xl font-normal leading-tight text-left"
                style={{ fontFamily: typography.fontFamily.inter }}
              >
                PiXerse is your all-in-one hub for creativity and technology.
              </p>
            </div>
          </motion.div>

          {/* Bottom Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full lg:col-span-4 lg:col-start-8 lg:row-start-3 lg:self-start lg:mt-12 z-30"
          >
            <div className="bg-gradient-to-r from-[#7F30C7] to-[#1D73F3] rounded-[20px] p-6 shadow-lg">
              <p
                className="text-white text-lg md:text-xl font-normal leading-tight text-left"
                style={{ fontFamily: typography.fontFamily.inter }}
              >
                From branding, media, and social management to marketing, business, and innovative tech projects.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Decorative Fish Icon (Top Right) */}
        <motion.div
          initial={{ opacity: 0, rotate: -10, x: 50 }}
          animate={{ opacity: 1, rotate: 0, x: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="absolute top-10 right-0 md:top-20 md:-right-10 w-32 md:w-48 lg:w-64 opacity-90 mix-blend-screen pointer-events-none"
        >
          <img
            src="/images/fish-icon.png"
            alt="Decorative Fish"
            className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(151,71,255,0.4)]"
          />
        </motion.div>

      </div>

      {/* Bottom Gradient Fade for Smooth Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />

    </section>
  );
}
