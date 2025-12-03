import { colors, typography } from '../../styles/design-tokens';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Robert Thompkins',
      testimonial: 'Traveling in Da Nang felt effortless with the PiX chatbox. It instantly guided me to local restaurants and entertainment spots with fair prices. No tourist traps, just authentic experiences. It\'s like having a local friend in your pocket.'
    },
    {
      name: 'William Thorne',
      testimonial: 'You show such a great understanding of our offer. You actively listen to what each organisation is trying to achieve and tie everything together so well. Well done!'
    },
    {
      name: 'John David',
      testimonial: 'PiX chatbox made exploring Da Nang so easy! It pointed me to amazing local restaurants with great prices and hidden spots tourists usually miss. It felt like I had a personal guide 24/7.'
    },
    {
      name: 'Carla Thomas',
      testimonial: 'Thank you for always being on hand to offer help. Always answering questions and being flexible with your time! I especially appreciate you coming up with new ways of working and trying to make my role easier for me as my role adapts and changes.'
    },
    {
      name: 'Julieta Melina',
      testimonial: 'The team\'s collaboration was truly impressive. They brought fresh creative ideas and made the right changes to elevate our brand image. The results were beyond my expectations, and I couldn\'t be more satisfied. Thanks again PiXerse!'
    }
  ];

  return (
    <section
      className="relative w-full min-h-screen bg-black overflow-hidden py-20 md:py-32"
    >
      {/* Complex Background Layering */}
      <div className="absolute inset-0 pointer-events-none bg-[#111110]" />
      <img
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-20 mix-blend-overlay"
        src="/images/hero-background.png"
        alt="Background"
      />

      {/* Blue Ellipse Background */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[50vw] h-[50vw] pointer-events-none opacity-60 blur-[100px]"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(29, 115, 243, 0.6) 0%, rgba(17, 66, 141, 0) 70%)',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Main Title with Quotation Mark */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-32 relative"
        >
          {/* Quotation Mark */}
          <div
            className="hidden lg:block absolute text-[200px] leading-none font-serif text-white/20 select-none"
            style={{
              left: '10%',
              top: '-80px',
              transform: 'rotate(180deg)',
            }}
          >
            „
          </div>

          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-widest relative z-10"
            style={{ fontFamily: typography.fontFamily.ptSans }}
          >
            <span className="text-white">WHAT OUR </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">CLIENTS</span>
            <span className="text-white"> SAY</span>
          </h2>
        </motion.div>

        {/* Testimonials Layout - Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Column 1 */}
          <div className="space-y-12">
            <TestimonialItem
              name="Robert Thompkins"
              text="Traveling in Da Nang felt effortless with the PiX chatbox. It instantly guided me to local restaurants and entertainment spots with fair prices. No tourist traps, just authentic experiences. It's like having a local friend in your pocket."
              delay={0}
            />
          </div>

          {/* Column 2 */}
          <div className="space-y-12">
            <TestimonialItem
              name="William Thorne"
              text="You show such a great understanding of our offer. You actively listen to what each organisation is trying to achieve and tie everything together so well. Well done!"
              delay={0.2}
            />
            <TestimonialItem
              name="Carla Thomas"
              text="Thank you for always being on hand to offer help. Always answering questions and being flexible with your time! I especially appreciate you coming up with new ways of working and trying to make my role easier for me as my role adapts and changes."
              delay={0.3}
            />
          </div>

          {/* Column 3 */}
          <div className="space-y-12">
            <TestimonialItem
              name="Julieta Melina"
              text="The team's collaboration was truly impressive. They brought fresh creative ideas and made the right changes to elevate our brand image. The results were beyond my expectations, and I couldn't be more satisfied. Thanks again PiXerse!"
              delay={0.4}
            />
            <TestimonialItem
              name="John David"
              text="PiX chatbox made exploring Da Nang so easy! It pointed me to amazing local restaurants with great prices and hidden spots tourists usually miss. It felt like I had a personal guide 24/7."
              delay={0.5}
            />
          </div>

        </div>

        {/* Leave a Review Button */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-start mt-20"
        >
          <button
            className="group w-full md:w-auto px-8 py-4 bg-white/10 rounded-full border-2 border-white text-white text-xl md:text-2xl font-normal flex items-center justify-center gap-4 transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
            style={{ fontFamily: typography.fontFamily.balooPaaji2 }}
          >
            <div className="w-8 h-8 rounded-full bg-white group-hover:bg-black flex items-center justify-center transition-colors duration-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black group-hover:text-white transition-colors duration-300" />
              </svg>
            </div>
            <span>Leave a Review</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}

function TestimonialItem({ name, text, delay }: { name: string, text: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="w-full h-px bg-white/20 mb-6 group-hover:bg-blue-500/50 transition-colors duration-300" />

      <h3
        className="text-white text-xl md:text-2xl font-normal mb-4 group-hover:text-blue-400 transition-colors duration-300"
        style={{ fontFamily: typography.fontFamily.inter }}
      >
        {name}
      </h3>

      <p
        className="text-stone-400 text-base md:text-lg font-normal leading-relaxed group-hover:text-stone-300 transition-colors duration-300"
        style={{ fontFamily: typography.fontFamily.inter }}
      >
        {text}
      </p>
    </motion.div>
  );
}
