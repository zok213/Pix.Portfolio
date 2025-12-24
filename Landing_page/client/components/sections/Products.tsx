import { colors, typography } from '../../styles/design-tokens';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section
      id="products"
      className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-start bg-black py-20 md:py-32"
    >


      {/* Starry Background - Continuous from Communities */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
        {/* Stars */}
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

      {/* Purple Gradient Orbs - Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute rounded-full blur-[120px] opacity-60"
          style={{
            right: '-5%',
            top: '0%',
            width: '50vw',
            height: '50vw',
            background: 'radial-gradient(circle at 50% 50%, rgba(151, 71, 255, 0.4) 0%, rgba(151, 71, 255, 0) 100%)',
          }}
        />
        <div
          className="absolute rounded-full blur-[120px] opacity-60"
          style={{
            left: '0%',
            top: '12%',
            width: '40vw',
            height: '40vw',
            background: 'radial-gradient(circle at 50% 50%, rgba(151, 71, 255, 0.4) 0%, rgba(151, 71, 255, 0) 100%)',
          }}
        />
        {/* Blue Gradient Orb - Bottom Transition (Matches Communities Top) */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] opacity-50 blur-[150px]"
          style={{
            top: 'calc(100% - 300px)', // Starts 300px above the bottom to match Communities -top-[300px]
            background: 'radial-gradient(circle at 50% 50%, rgba(29, 115, 243, 0.6) 0%, rgba(17, 66, 141, 0) 70%)',
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-[5] w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center">

        {/* Title Section (Centered Top) */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-32 text-center"
        >
          <h2 className="flex flex-col items-center">
            <span
              className="text-6xl md:text-8xl lg:text-[100px] xl:text-[128px] font-bold uppercase leading-none mb-2 drop-shadow-[0_0_20px_rgba(29,115,243,0.5)]"
              style={{
                fontFamily: typography.fontFamily.ptSans,
                background: 'linear-gradient(180deg, rgba(29, 115, 243, 1) 0%, rgba(151, 71, 255, 1) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '0.1em',
              }}
            >
              OUR
            </span>
            <span
              className="text-5xl md:text-7xl lg:text-[80px] xl:text-[96px] font-bold uppercase leading-none text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              style={{
                fontFamily: typography.fontFamily.ptSans,
                letterSpacing: '0.1em',
              }}
            >
              PRODUCTS
            </span>
          </h2>
        </motion.div>

        {/* Products Stack */}
        <div className="w-full flex flex-col items-center gap-24 lg:gap-32">

          {/* Product 1: PIXITY */}
          <div className="w-full flex flex-col items-center">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative mb-8 md:mb-12 max-w-[565px] cursor-default"
            >
              <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 opacity-70 blur-[1px]" />
              <div className="relative h-16 md:h-20 px-12 rounded-full bg-black flex items-center justify-center overflow-hidden">
                <span
                  className="text-white text-2xl md:text-4xl font-bold uppercase tracking-widest relative z-10 drop-shadow-md"
                  style={{ fontFamily: typography.fontFamily.ptSans }}
                >
                  PIXITY
                </span>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full max-w-[1000px] aspect-video rounded-[30px] overflow-hidden shadow-[0_0_50px_rgba(29,115,243,0.3)] border border-white/10 mb-8"
            >
              <img
                src="/images/product-our-product2.png"
                alt="PIXITY - AI Assistant Product"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-white/90 text-xl md:text-2xl font-normal text-center leading-relaxed max-w-[800px]"
              style={{ fontFamily: typography.fontFamily.inter }}
            >
              A smart AI assistant (real-time chatbox) that uses deep local knowledge to authentically connect brands with digital-native audiences.
            </motion.p>
          </div>

          {/* Product 2: Crafterse */}
          <div className="w-full flex flex-col items-center">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative mb-8 md:mb-12 max-w-[565px] cursor-default"
            >
              <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-purple-600 via-pink-400 to-purple-600 opacity-70 blur-[1px]" />
              <div className="relative h-16 md:h-20 px-12 rounded-full bg-black flex items-center justify-center overflow-hidden">
                <span
                  className="text-white text-2xl md:text-4xl font-bold uppercase tracking-widest relative z-10 drop-shadow-md"
                  style={{ fontFamily: typography.fontFamily.ptSans }}
                >
                  Crafterse
                </span>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full max-w-[1000px] aspect-video rounded-[30px] overflow-hidden shadow-[0_0_50px_rgba(151,71,255,0.3)] border border-white/10 mb-8"
            >
              <img
                src="/images/product-launcher.png"
                alt="Crafterse - 2D Action-RPG Game"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-white/90 text-xl md:text-2xl font-normal text-center leading-relaxed max-w-[800px]"
              style={{ fontFamily: typography.fontFamily.inter }}
            >
              A 2D Action-RPG Roguelite where imagination itself becomes your greatest weapon.
            </motion.p>
          </div>

        </div>
      </div>

      {/* Bottom Gradient Transition - Reduced opacity to allow Communities gradient to show */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-[1] h-64" />
    </section>
  );
}
