import { colors, typography } from '../../styles/design-tokens';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-black py-20 md:py-32"
    >
      {/* Purple Gradient Orbs - Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Left purple orb - extends downward into Products */}
        <div
          className="absolute rounded-full blur-[100px] opacity-60"
          style={{
            left: '-10%',
            top: '10%',
            bottom: '-50%',
            width: '50vw',
            height: '100vh',
            background: 'radial-gradient(circle at 50% 30%, rgba(151, 71, 255, 0.4) 0%, rgba(151, 71, 255, 0) 70%)',
          }}
        />
        {/* Right purple orb - extends downward into Products */}
        <div
          className="absolute rounded-full blur-[100px] opacity-60"
          style={{
            right: '-10%',
            top: '20%',
            bottom: '-50%',
            width: '50vw',
            height: '100vh',
            background: 'radial-gradient(circle at 50% 30%, rgba(151, 71, 255, 0.4) 0%, rgba(151, 71, 255, 0) 70%)',
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-32"
        >
          <h2 className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
            <span
              className="text-6xl md:text-8xl lg:text-[128px] font-bold uppercase leading-none"
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
              className="text-5xl md:text-7xl lg:text-[96px] font-bold uppercase leading-none text-white"
              style={{
                fontFamily: typography.fontFamily.ptSans,
                letterSpacing: '0.1em',
              }}
            >
              SERVICES
            </span>
          </h2>
        </motion.div>

        {/* Service Cards - Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left Card - Information Technology */}
          <ServiceCard
            title="Information Technology"
            description="PiX.teq is a technology partner that builds innovative products and provides expert outsourcing services. Beside that, we also develop our own AI, Blockchain, and Game products while offering Security audits for clients. Fueling all our work is a dedicated R&D lab, where we pioneer advanced AI solutions for the field of Robotics."
            delay={0.2}
          />

          {/* Right Card - Business & Communication */}
          <ServiceCard
            title="Business & Communication"
            description="Elevate your brand with comprehensive creative and marketing solutions. From developing a strong brand identity and producing high-quality visual content (including video and animation) to executing multi-channel advertising campaigns, we help you stand out, engage effectively with your target audience, and build lasting customer trust."
            delay={0.4}
          />

        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description, delay }: { title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="relative group"
    >
      {/* Card Title Button - Floating above */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20 w-full max-w-[90%] md:max-w-[480px]">
        <div
          className="relative h-16 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(29,115,243,0.4)] transition-transform duration-300 group-hover:scale-105"
          style={{
            background: 'linear-gradient(90deg, rgba(29, 115, 243, 1) 0%, rgba(151, 71, 255, 1) 100%)',
          }}
        >
          <span
            className="text-white text-lg md:text-2xl font-bold uppercase tracking-widest text-center px-4"
            style={{ fontFamily: typography.fontFamily.ptSans }}
          >
            {title}
          </span>
        </div>
      </div>

      {/* Card Background */}
      <div
        className="relative rounded-[37px] border border-white/10 backdrop-blur-xl p-8 md:p-12 pt-16 md:pt-20 h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:border-blue-500/50 group-hover:shadow-[0_10px_50px_-10px_rgba(29,115,243,0.3)] group-hover:bg-white/[0.02]"
        style={{
          background: 'linear-gradient(180deg, rgba(28, 34, 38, 0.6) 0%, rgba(145, 144, 142, 0.1) 100%)',
        }}
      >
        <div className="absolute inset-0 rounded-[37px] bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <p
          className="relative z-10 text-white/80 text-lg md:text-xl lg:text-2xl font-light text-justify leading-relaxed group-hover:text-white transition-colors duration-300"
          style={{ fontFamily: typography.fontFamily.inter }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}
