import { colors, typography } from '../../styles/design-tokens';
import { motion } from 'framer-motion';

export default function Communities() {
  return (
    <section
      id="community"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black py-20 md:py-32"
    >
      {/* Starry Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
        {/* Stars - constrained to prevent overflow */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            initial={{ opacity: Math.random() * 0.5 + 0.1, scale: Math.random() * 0.5 + 0.5 }}
            animate={{ opacity: [0.1, 0.5, 0.1], scale: [0.5, 1, 0.5] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs - Background */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Cosmic Stream - Central Bridge (Soft connection) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-30 blur-[120px]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(29, 115, 243, 0.3) 0%, rgba(151, 71, 255, 0.1) 70%)',
          }}
        />

        {/* Nebula Atmosphere - Enriches the void to match Fields */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150vw] h-[80vh] opacity-40 blur-[100px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 100%, rgba(151, 71, 255, 0.2) 0%, rgba(0, 0, 0, 0) 70%)',
          }}
        />

        {/* Main transition gradient - extends upward into Products section */}
        <div
          className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] opacity-50 blur-[150px]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(29, 115, 243, 0.6) 0%, rgba(17, 66, 141, 0) 70%)',
          }}
        />
        <div
          className="absolute left-0 top-1/3 -translate-x-1/3 w-[1057px] h-[1004px] opacity-40 blur-[100px]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(151, 71, 255, 0.4) 0%, rgba(151, 71, 255, 0) 70%)',
          }}
        />
        <div
          className="absolute right-0 top-[20%] translate-x-1/3 w-[1057px] h-[1004px] opacity-40 blur-[100px]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(151, 71, 255, 0.4) 0%, rgba(151, 71, 255, 0) 70%)',
          }}
        />
        {/* Bottom Gradient - Intensified for Fields connection */}
        <div
          className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[1400px] h-[1000px] opacity-60 blur-[130px]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(151, 71, 255, 0.6) 0%, rgba(88, 28, 135, 0.2) 70%)',
          }}
        />
        {/* Bottom Gradient - Fills the void at the bottom */}
        <div
          className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] opacity-40 blur-[120px]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(151, 71, 255, 0.5) 0%, rgba(29, 115, 243, 0.2) 70%)',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center justify-center gap-16 md:gap-24 lg:gap-28">

          {/* PiX.Lab Card - Top Left Aligned */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full flex justify-start"
          >
            <div className="w-full max-w-[516px] relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/30 to-stone-400/30 rounded-[37px] border border-white/10 backdrop-blur-md" />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 to-stone-400/10 rounded-[37px] backdrop-blur-md" />
              <div className="relative h-32 md:h-36 rounded-[37px] border-2 border-blue-600 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_0_30px_rgba(29,115,243,0.3)]">
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span
                  className="text-white text-3xl md:text-4xl font-bold uppercase tracking-[4px] relative z-10"
                  style={{ fontFamily: typography.fontFamily.ptSans }}
                >
                  PIX.LAB
                </span>
              </div>
            </div>
          </motion.div>

          {/* Title - Center with Telegram Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full flex flex-col md:flex-row items-center justify-center gap-8 text-center"
          >
            <h2
              className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-widest text-white leading-tight"
              style={{ fontFamily: typography.fontFamily.ptSans }}
            >
              OUR COMMUNITIES
            </h2>

            {/* Telegram Icon */}
            <div
              className="size-16 md:size-20 lg:size-24 flex-shrink-0 cursor-pointer relative group"
              onClick={() => window.open('https://t.me/pixlab', '_blank')}
            >
              <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl animate-pulse group-hover:bg-blue-500/50 transition-colors duration-300" />
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 84 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              >
                <path d="M82.0418 1.6167C81.5867 1.22369 81.0329 0.962315 80.4403 0.86073C79.8476 0.759146 79.2384 0.821202 78.6784 1.04021L4.26414 30.1619C3.20952 30.5719 2.31666 31.3135 1.71999 32.275C1.12331 33.2364 0.855109 34.3657 0.955762 35.4927C1.05641 36.6198 1.52047 37.6837 2.27807 38.5242C3.03567 39.3647 4.04581 39.9363 5.1564 40.153L24.4374 43.9387V65.4376C24.4336 66.6086 24.7816 67.7538 25.4363 68.7247C26.091 69.6956 27.0222 70.4475 28.1093 70.8829C29.1947 71.3262 30.3883 71.4325 31.5349 71.1883C32.6816 70.944 33.7282 70.3604 34.5388 69.5133L43.8359 59.871L58.5859 72.7813C59.65 73.7252 61.0225 74.2476 62.445 74.2501C63.0684 74.2496 63.6878 74.1517 64.2809 73.96C65.2501 73.6525 66.1218 73.0964 66.8092 72.3471C67.4966 71.5979 67.9757 70.6816 68.1988 69.6896L83.103 4.85162C83.2363 4.26687 83.208 3.65687 83.021 3.08699C82.8341 2.51712 82.4956 2.00886 82.0418 1.6167ZM59.592 14.8354L26.6956 38.3942L8.48312 34.8215L59.592 14.8354ZM30.3124 65.4376V48.0035L39.415 55.9862L30.3124 65.4376ZM62.4524 68.3751L32.0933 41.754L75.7886 10.4365L62.4524 68.3751Z" fill="url(#paint0_linear_title)" />
                <defs>
                  <linearGradient id="paint0_linear_title" x1="42.0604" y1="0.813232" x2="42.0604" y2="74.2501" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1D73F3" />
                    <stop offset="1" stopColor="#9747FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          {/* Bottom Row - Button Left, Card Right */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 lg:gap-24 w-full">

            {/* Visit Here Button - Left Aligned */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full md:w-auto"
            >
              <button
                className="w-72 h-16 relative rounded-[34px] overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(151,71,255,0.5)]"
                onClick={() => window.open('https://pix.lab', '_blank')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-500" />
                <span
                  className="relative z-10 text-white text-2xl font-normal"
                  style={{ fontFamily: typography.fontFamily.inter }}
                >
                  Visit here
                </span>
              </button>
            </motion.div>

            {/* DA NANG LOCALIST Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full max-w-[800px] relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/30 to-stone-400/30 rounded-[37px] border border-white/10 backdrop-blur-md" />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 to-stone-400/10 rounded-[37px] backdrop-blur-md" />
              <div className="relative h-32 md:h-36 rounded-[37px] border-2 border-blue-600 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_0_30px_rgba(29,115,243,0.3)]">
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span
                  className="text-white text-2xl md:text-4xl font-bold uppercase tracking-[4px] text-center px-4 relative z-10"
                  style={{ fontFamily: typography.fontFamily.ptSans }}
                >
                  DA NANG LOCALIST
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
