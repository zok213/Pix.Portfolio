import { colors, typography } from '../../styles/design-tokens';
import { motion } from 'framer-motion';

export default function Blog() {
  const posts = [
    {
      title: 'TITLE TITLE TITLE TITLE TITLE TITLE TITLE',
      date: 'mm/dd/yyyy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac leo neque.',
      image: '/images/blog-image-1.png',
    },
    {
      title: 'TITLE TITLE TITLE TITLE TITLE TITLE TITLE',
      date: 'mm/dd/yyyy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac leo neque.',
      image: '/images/blog-image-1.png',
    },
    {
      title: 'TITLE TITLE TITLE TITLE TITLE TITLE TITLE',
      date: 'mm/dd/yyyy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac leo neque.',
      image: '/images/blog-image-1.png',
    },
  ];

  return (
    <section
      id="blog"
      className="relative w-full min-h-screen bg-black overflow-hidden py-20 md:py-32"
    >
      {/* Purple Ellipse Background */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[1198px] h-[1138px] pointer-events-none opacity-60 blur-[100px]"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(151, 71, 255, 0.4) 0%, rgba(151, 71, 255, 0) 70%)',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Top Section - Title and View More Button */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 gap-8 border-b border-white/10 pb-8"
        >
          <h2 className="flex flex-col">
            <span
              className="text-6xl md:text-8xl lg:text-[100px] font-bold uppercase leading-none mb-2"
              style={{
                fontFamily: typography.fontFamily.ptSans,
                background: 'linear-gradient(180deg, rgba(29, 115, 243, 1) 0%, rgba(151, 71, 255, 1) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              OUR
            </span>
            <span
              className="text-5xl md:text-7xl lg:text-[80px] font-bold uppercase leading-none text-white"
              style={{ fontFamily: typography.fontFamily.ptSans }}
            >
              BLOGS
            </span>
          </h2>

          <button
            className="flex items-center gap-3 text-stone-400 hover:text-white transition-colors duration-300 group mb-4"
            style={{ fontFamily: typography.fontFamily.balooPaaji2 }}
          >
            <span className="text-lg md:text-xl">View more</span>
            <div className="w-8 h-8 rounded-full border border-stone-400 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative group h-full perspective-1000"
            >
              <div className="relative w-full h-full min-h-[600px] rounded-[37px] overflow-hidden border-2 border-blue-600/50 transition-all duration-500 group-hover:border-blue-400 group-hover:shadow-[0_0_40px_rgba(29,115,243,0.3)] group-hover:-translate-y-2 flex flex-col bg-black/40 backdrop-blur-sm">
                {/* Backgrounds */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 to-stone-400/10 backdrop-blur-md opacity-50" />

                {/* Image Container */}
                <div className="relative p-6 pb-0">
                  <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-8 flex flex-col flex-grow">
                  <h3
                    className="text-white text-2xl font-bold leading-tight mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors duration-300"
                    style={{ fontFamily: typography.fontFamily.balooPaaji2 }}
                  >
                    {post.title}
                  </h3>

                  <p
                    className="text-neutral-500 text-xl font-normal mb-4"
                    style={{ fontFamily: typography.fontFamily.balooPaaji2 }}
                  >
                    {post.date}
                  </p>

                  <p
                    className="text-white/90 text-lg font-normal leading-relaxed mb-8 line-clamp-3 flex-grow"
                    style={{ fontFamily: typography.fontFamily.balooPaaji2 }}
                  >
                    {post.description}
                  </p>

                  <button
                    className="w-44 h-10 rounded-full border-2 border-white text-white text-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black mt-auto shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                    style={{ fontFamily: typography.fontFamily.balooPaaji2 }}
                  >
                    View more
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-4">
          <div className="w-4 h-4 rounded-full bg-zinc-400" />
          <div className="w-4 h-4 rounded-full border border-white" />
          <div className="w-4 h-4 rounded-full border border-white" />
        </div>
      </div>
    </section>
  );
}
