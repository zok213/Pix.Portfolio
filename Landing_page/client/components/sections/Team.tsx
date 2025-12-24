import { colors, typography } from '../../styles/design-tokens';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

// Types for Team Members
interface TeamMember {
  id: string;
  name: string; // Display name (e.g., "Name")
  handle?: string; // For founders (e.g., "@FINN")
  role: string;
  image?: string; // Optional for list members if we don't have images yet
  quote?: string;
  type?: 'technical' | 'creative' | 'founder';
}

const founders: TeamMember[] = [
  {
    id: 'finn',
    name: 'FINN',
    handle: '@FINN',
    role: 'Co-founder, PiX.labs Lead',
    image: '/images/team/TEAM LEAD/@finn .png',
    quote: "Pix.teq for technology products, the technology engine of PiXerse, dedicated to building practical, community-centered products. It focuses on developing tools that are accessible, intuitive, and purpose-driven solving everyday problems with meaningful digital experiences."
  },
  {
    id: 'giangesley',
    name: 'GIANGESLEY',
    handle: '@GIANGESLEY',
    role: 'Founder, Head of PiX.teq',
    image: '/images/team/TEAM LEAD/@giangesley.png',
    quote: "A multidisciplinary company that blends creativity and technology to deliver impactful solutions. We aim to build connections between ideas and brand stories while crafting tools that empower communities."
  },
  {
    id: 'v',
    name: 'V',
    handle: '@V',
    role: 'Head of PiX.stdio',
    image: '/images/team/Pix.stdio/@V.png',
    quote: "\"Building communities is not just about connection, it’s about creating impact that lasts.\" My passion lies in blending creativity and technology to deliver meaningful experiences for both communities and businesses."
  },
];

// PiX.TEQ Members
const pixTeqMembers: TeamMember[] = [
  { id: 'blue', name: 'BLUE', role: 'Blockchain Lead', image: '/images/team/Pix.teq/@Blue.png', quote: "Success in business isn’t just about profits; it’s about perseverance, patience, and passion. It’s waking up early to chase dreams others can’t see, working late to solve problems no one else knows about, and betting on yourself when the odds feel impossible." },
  { id: 'hary', name: 'HARY', role: 'Game Lead', image: '/images/team/Pix.teq/@hary.png', quote: "\"I play to feel. I build to be felt\" I’m not here just to make games. I’m here to craft emotions, spark imagination, and leave something that lingers after the screen goes dark. For me, every mechanic is a message, every level a story, and every player a collaborator. If a game doesn’t leave a mark, it wasn’t worth building." },
  { id: 'zok', name: 'ZOK', role: 'AI Lead, PiX.labs member', image: '/images/team/Pix.teq/@zok.png', quote: "“I spend half my time building the future of intelligence, and the other half trying to center a `<div>`” For me, that's not just a joke—it's a core belief. The most brilliant AI is useless if it isn't delivered through a robust, user-friendly application. Our focus is on the complete journey: from architecting the model and engineering the data pipelines to deploying the full application. We don't just build algorithms; we ship intelligent experiences." },
  { id: 'temaz', name: 'TEMAZ', role: 'PiX.teq member', image: '/images/team/Pix.teq/@temaz.png', quote: "An AI engineer passionate about AI and Blockchain, with experience in building MCP-RAG chatbots and contributing to several projects within the Solana ecosystem. I combine strong technical expertise with real-world project experience, while actively contributing to tech communities through talks, training sessions, and collaborative innovation." },
  { id: 'nxc', name: 'NXC', role: 'PiX.teq member', image: '/images/team/Pix.teq/@nxc.png', quote: "AI enthusiast specializing in AI applications, research, backend development, and blockchain solutions. Experienced in building scalable systems, designing RAG pipelines, integrating LLMs, and deploying AI models across both software and hardware environments." },
  { id: 'hollyn', name: 'HOLLYN DERISSE', role: 'PiX.teq member', image: '/images/team/Pix.teq/@hollyn.png', quote: "if you can see it in your mind, you can hold it in your hand" },
  { id: 'hanne', name: 'HANNE', role: 'PiX.labs member', image: '/images/team/Pix.teq/@hanne.png', quote: "“Advancing artificial intelligence through science, not speculation.” I don’t chase trends, I chase understanding. My work in AI is grounded in research, experimentation, and the belief that true progress comes from curiosity backed by rigor. To me, intelligence isn’t something we imitate; it’s something we study, refine, and build responsibly. Every model, every experiment, every paper is a step toward clarity. I’m here to turn scientific insight into meaningful intelligence, to push AI forward with purpose, not noise." },
];

// PiX.STDIO Members
const pixStdioMembers: TeamMember[] = [
  { id: 'tkp', name: 'TKP', role: 'Design Lead', image: '/images/team/Pix.stdio/@TKP.png', quote: "\"Creativity is the bridge between imagination and impact.\" I thrive on transforming ideas into engaging visuals that not only capture attention but also inspire action." },
  { id: 'zan', name: 'ZAN', role: 'Content Lead', image: '/images/team/Pix.stdio/@zan.png', quote: "\"I help ideas take shape and find their voice. My role is to bring clarity and direction so others can move forward with confidence. What I create is built to inspire progress that truly lasts.\"" },
  { id: 'mill', name: 'MILL', role: 'PiX.stdio member', image: '/images/team/Pix.stdio/@Mill.png', quote: "“Turning overload into overachieve.” As a multitasker, I bridge content, events, and media to build powerful brand presence. Blending creative vision with practical execution, this role creates meaningful connections and inspires audiences." },
  { id: 'jay', name: 'JAY', role: 'PiX.stdio member', image: '/images/team/Pix.stdio/@jay.png', quote: "I approach marketing with patience. I try to keep things simple, so they may last. The work is meant to speak, not me." },
  { id: 'orentb', name: 'ORENTB', role: 'PiX.stdio member', image: '/images/team/Pix.stdio/@orentB.png', quote: "“I dream in galaxies, I draw in fantasies” My art embraces fantasy and mystery, while my design focuses on minimalism. This allows me to create works that are both imaginative and functional. I believe in the power of colors to evoke emotion, yet I balance them with clarity and structure to deliver impactful visuals." },
  { id: 'eirian', name: 'EIRIAN', role: 'PiX.stdio member', image: '/images/team/Pix.stdio/@eirian.png', quote: "I turn ideas and customer insights into engaging content and clear strategies. With a structured yet creative approach, I help teams communicate effectively and bring projects to life with impact and clarity." },
  { id: 'nhiivuii', name: 'NHIIVUII', role: 'PiX.stdio member', image: '/images/team/Pix.stdio/@nhiivuii.png', quote: "I’m a graphic designer passionate about turning ideas into impactful visuals. Through my work, I aim to create designs that not only capture attention but also build meaningful connections between brands and their audiences." },
];

export default function Team() {
  // Smooth scroll handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="relative w-full bg-black overflow-hidden py-20 md:py-32 lg:py-40">
      {/* Decorative Gradient Ellipses Background - STRONGER GLOWS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Purple Ellipse - Center */}
        <div
          className="absolute w-[1057px] h-[1004px] bg-gradient-radial from-purple-600/50 to-purple-900/0 rounded-full blur-[120px]"
          style={{ left: '50%', top: '236px', transform: 'translateX(-50%)' }}
        />
        {/* Top Left Blue Ellipse */}
        <div
          className="absolute size-[849px] opacity-70 bg-gradient-radial from-blue-600/70 to-blue-900/0 rounded-full blur-[120px]"
          style={{ left: '-200px', top: '230px' }}
        />
        {/* Top Right Blue Ellipse */}
        <div
          className="absolute size-[849px] opacity-70 bg-gradient-radial from-blue-600/70 to-blue-900/0 rounded-full blur-[120px]"
          style={{ right: '-200px', top: '45px' }}
        />
        {/* Center Blue Ellipse */}
        <div
          className="absolute w-[800px] h-[800px] bg-gradient-radial from-blue-600/50 to-blue-900/0 rounded-full blur-[120px]"
          style={{ left: '50%', top: '60%', transform: 'translate(-50%, -50%)' }}
        />
        {/* Bottom Left Purple Ellipse */}
        <div
          className="absolute w-[1057px] h-[1004px] bg-gradient-radial from-purple-600/50 to-purple-900/0 rounded-full blur-[120px]"
          style={{ left: '-450px', bottom: '100px' }}
        />
        {/* Bottom Right Purple Ellipse */}
        <div
          className="absolute w-[1057px] h-[1004px] bg-gradient-radial from-purple-600/50 to-purple-900/0 rounded-full blur-[120px]"
          style={{ right: '-450px', bottom: '100px' }}
        />
      </div>

      {/* Navigation Sidebar - Teams (Floating) */}
      <div className="absolute right-0 top-32 z-20 hidden 2xl:block">
        <div
          className="relative rounded-l-[30px] border border-white/20 backdrop-blur-xl"
          style={{
            width: '400px',
            padding: '30px 40px',
            background: 'rgba(0, 0, 0, 0.4)',
          }}
        >
          <div className="flex justify-between items-start">
            <h4
              className="text-white text-2xl font-medium"
              style={{ fontFamily: typography.fontFamily.inter }}
            >
              Teams
            </h4>
            <nav className="space-y-2">
              {[
                { label: 'Team Lead', href: '#founder' },
                { label: 'PiX.Teq', href: '#pixteq' },
                { label: 'PiX.Stdio', href: '#pixstdio' },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group text-sm uppercase tracking-wider cursor-pointer"
                  style={{ fontFamily: typography.fontFamily.inter }}
                >
                  <span className="text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">▶</span>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Section Header - LEFT ALIGNED */}
        <div className="flex flex-col items-start justify-start mb-12 md:mb-20">
          {/* Title */}
          <div className="relative text-left">
            <h2
              className="text-6xl md:text-8xl lg:text-[128px] font-bold uppercase leading-none"
              style={{
                fontFamily: typography.fontFamily.ptSans,
                letterSpacing: '0.1em',
              }}
            >
              <span className="bg-gradient-to-b from-blue-500 to-purple-600 bg-clip-text text-transparent">OUR</span>
              <span className="text-white"> TEAM</span>
            </h2>
          </div>

          {/* View Portfolio Button */}
          <div className="mt-8">
            <button
              className="group relative inline-flex items-center gap-3 px-8 py-3 md:px-12 md:py-4 rounded-full border border-white/30 text-white text-xl md:text-2xl transition-all duration-300 hover:bg-white/10 hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              style={{ fontFamily: typography.fontFamily.inter }}
            >
              View Portfolio
              <div className="relative size-6 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-black stroke-current stroke-2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Founders Section */}
        <div id="founder" className="mb-40 md:mb-60">
          <div className="text-center mb-0"> {/* Reduced gap to 0 */}
            <h3
              className="text-4xl md:text-5xl font-bold uppercase text-white tracking-[0.2em]"
              style={{ fontFamily: typography.fontFamily.ptSans }}
            >
              TEAM LEAD
            </h3>
          </div>

          {/* Responsive Grid for Founders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
            {founders.map((member, idx) => {
              // Mobile Order: Giangesley (1) -> Finn (0) -> V (2)
              let orderClass = 'order-3 md:order-none'; // Default (V)
              if (idx === 0) orderClass = 'order-2 md:order-none'; // Finn
              if (idx === 1) orderClass = 'order-1 md:order-none'; // Giangesley

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col items-center ${idx === 1 ? 'md:mt-24' : ''} ${orderClass}`}
                >
                  {/* Image Container - Larger & Closer to Text */}
                  <div className="relative w-full max-w-none aspect-[3/4] mb-[-20px] group flex items-end justify-center">

                    {/* Glow behind image (optional, kept for extra depth) */}
                    <div className="absolute inset-0 bg-purple-500/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative z-10 w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Handle */}
                  <h4
                    className="relative z-20 text-3xl md:text-4xl font-bold uppercase text-white text-center mb-6 tracking-[4.8px]"
                    style={{ fontFamily: typography.fontFamily.ptSans }}
                  >
                    {member.handle}
                  </h4>

                  {/* Role Badge - Figma Style: Gradient + Border + Rounded-3xl */}
                  <div
                    className="w-full max-w-[380px] rounded-3xl p-4 mb-6 shadow-lg border border-white/20"
                    style={{
                      background: 'linear-gradient(90deg, rgba(168, 85, 247, 0.5) 0%, rgba(37, 99, 235, 0.5) 100%)' // purple-500/50 to blue-600/50
                    }}
                  >
                    <p
                      className="text-white text-2xl font-normal text-center leading-snug"
                      style={{ fontFamily: typography.fontFamily.inter }}
                    >
                      {member.role}
                    </p>
                  </div>

                  {/* Quote */}
                  <div className="relative max-w-[380px]">
                    <span
                      className="absolute -top-4 -left-2 text-6xl text-white/40 font-serif leading-none"
                      style={{ fontFamily: typography.fontFamily.ptSerifCaption }}
                    >
                      “
                    </span>
                    <p
                      className="text-white/70 text-sm text-justify relative z-10 pl-6 leading-relaxed"
                      style={{ fontFamily: typography.fontFamily.inter }}
                    >
                      {member.quote}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* PiX.TEQ Section - Interactive */}
        <InteractiveTeamSection
          id="pixteq"
          title="PIX.TEQ"
          members={pixTeqMembers}
          align="left"
          gradientColor="blue"
        />

        {/* PiX.STDIO Section - Interactive */}
        <InteractiveTeamSection
          id="pixstdio"
          title="PIX.STDIO"
          members={pixStdioMembers}
          align="right"
          gradientColor="purple"
        />

      </div >
    </section >
  );
}

// Interactive Team Section Component (Master-Detail)
function InteractiveTeamSection({
  id,
  title,
  members,
  align = 'left',
  gradientColor = 'blue'
}: {
  id: string;
  title: string;
  members: TeamMember[];
  align?: 'left' | 'right';
  gradientColor?: 'blue' | 'purple';
}) {
  const [activeMemberId, setActiveMemberId] = useState(members[0].id);
  const activeMember = members.find(m => m.id === activeMemberId) || members[0];

  const autoRotateRef = useRef<NodeJS.Timeout | null>(null);
  const mobileListRef = useRef<HTMLDivElement>(null);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isInteractingRef = useRef(false);

  // Constants for Carousel
  const ITEM_WIDTH = 260;
  const GAP = 16;
  const CARD_TOTAL_WIDTH = ITEM_WIDTH + GAP;
  const SET_SIZE = members.length;
  const SINGLE_SET_WIDTH = SET_SIZE * CARD_TOTAL_WIDTH;

  // Triple the list for infinite loop: [Set 0 (Buffer)] [Set 1 (Main)] [Set 2 (Buffer)]
  const extendedMembers = [...members, ...members, ...members];

  // Initialize Scroll to Middle Set
  useEffect(() => {
    if (mobileListRef.current) {
      // Start at the beginning of the middle set (Set 1)
      // Index = SET_SIZE
      const initialScroll = SET_SIZE * CARD_TOTAL_WIDTH;
      mobileListRef.current.scrollLeft = initialScroll;
    }
  }, [members, SET_SIZE, CARD_TOTAL_WIDTH]);

  // Start/Resume Auto Rotation
  const startAutoRotation = () => {
    if (autoRotateRef.current) clearInterval(autoRotateRef.current);

    autoRotateRef.current = setInterval(() => {
      if (mobileListRef.current && !isInteractingRef.current) {
        const currentScroll = mobileListRef.current.scrollLeft;
        const targetScroll = currentScroll + CARD_TOTAL_WIDTH;

        mobileListRef.current.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
      }
    }, 4000); // 4s regular interval
  };

  // Auto-rotation lifecycle
  useEffect(() => {
    startAutoRotation();
    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
      if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    };
  }, [members]);

  // Handle User Interaction (Click/Scroll)
  const handleInteraction = () => {
    isInteractingRef.current = true;

    // Clear existing resume timer
    if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);

    // Stop rotation immediately
    if (autoRotateRef.current) clearInterval(autoRotateRef.current);

    // Set timer to resume after 15 seconds
    interactionTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
      startAutoRotation();
    }, 15000);
  };

  // Handle Scroll to update Active Member & Infinite Loop Logic
  const handleMobileScroll = () => {
    if (mobileListRef.current) {
      const scrollLeft = mobileListRef.current.scrollLeft;

      // 1. Infinite Loop Logic (Jump)
      // If we are in Set 0 (Too far left), jump to Set 1
      if (scrollLeft < SINGLE_SET_WIDTH / 2) {
        // Jump forward by one set
        mobileListRef.current.scrollLeft += SINGLE_SET_WIDTH;
      }
      // If we are in Set 2 (Too far right), jump to Set 1
      else if (scrollLeft >= SINGLE_SET_WIDTH * 2.5) {
        // Jump backward by one set
        mobileListRef.current.scrollLeft -= SINGLE_SET_WIDTH;
      }

      // 2. Determine Active Member based on center position
      // Account for padding (half screen) if needed, but relative scroll is easier
      // Logic: Index in the extended list
      const centerIndex = Math.round(mobileListRef.current.scrollLeft / CARD_TOTAL_WIDTH);
      // Map to original member index (modulo)
      const memberIndex = centerIndex % SET_SIZE;

      if (members[memberIndex] && members[memberIndex].id !== activeMemberId) {
        setActiveMemberId(members[memberIndex].id);
      }
    }
  };

  // Manual Select (Click on card)
  const handleManualSelect = (id: string) => {
    handleInteraction();
    setActiveMemberId(id);

    // Also scroll to that member (in the middle set to keep it safe)
    // Find relative index in the main set
    const index = members.findIndex(m => m.id === id);
    if (index !== -1 && mobileListRef.current) {
      // Target Set 1
      const targetIndex = SET_SIZE + index;
      mobileListRef.current.scrollTo({
        left: targetIndex * CARD_TOTAL_WIDTH,
        behavior: 'smooth'
      });
    }
  };

  // Colors for gradients
  const activeGradient = 'from-blue-600 to-purple-500'; // Matches Figma "Rectangle 1231"

  return (
    <div id={id} className="mb-32 md:mb-48 relative">
      {/* Title - Centered */}
      <div className="flex justify-center mb-0 relative">
        {/* Title Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full -z-10" />
        <h3
          className="text-4xl md:text-5xl font-bold uppercase text-white tracking-[0.2em]"
          style={{ fontFamily: typography.fontFamily.ptSans }}
        >
          {title}
        </h3>
      </div>

      {/* Desktop Layout: Text Left | Image Center | List Right */}
      <div className="hidden lg:grid grid-cols-12 gap-8 items-center h-[600px]">

        {/* Left: Text Content */}
        <div className="col-span-4 flex flex-col items-start z-20 relative h-full justify-center">
          {/* Text Glow */}

          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] ${gradientColor === 'blue' ? 'bg-blue-500/20' : 'bg-purple-500/20'} blur-[100px] rounded-full -z-10`} />

          <h4 className="text-5xl font-bold uppercase text-white mb-4" style={{ fontFamily: typography.fontFamily.ptSans, letterSpacing: '4.8px' }}>
            {activeMember.name}
          </h4>
          <div className="w-48 h-px bg-white mb-6" /> {/* Line 54 */}
          <p className="text-xl text-white font-normal mb-8" style={{ fontFamily: typography.fontFamily.inter }}>
            {activeMember.role}
          </p>

          {/* Quote Box */}
          <div className="relative pl-6 border-l-4 border-white/20">
            <span className="absolute -top-10 -left-12 text-8xl text-purple-500/50 font-serif">“</span>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeMember.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-xl text-white font-normal text-justify leading-relaxed"
                style={{ fontFamily: typography.fontFamily.inter }}
              >
                {activeMember.quote}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Center: Image (Absolute Positioned to overlap if needed, or Grid) */}
        <div className="col-span-4 relative h-full flex items-center justify-center z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMember.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative w-full h-full flex items-end justify-center"
            >
              {/* Glow */}
              <div className={`absolute bottom-0 w-[400px] h-[400px] ${gradientColor === 'blue' ? 'bg-blue-500/20' : 'bg-purple-500/20'} blur-[100px] rounded-full`} />
              <img
                src={activeMember.image}
                alt={activeMember.name}
                className="relative z-10 h-full max-w-[90%] object-contain object-bottom drop-shadow-2xl"
                style={{ transform: 'none' }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Interactive List */}
        <div className="col-span-4 flex flex-col gap-4 items-end z-20 pl-12 h-full justify-center overflow-y-auto pr-2 custom-scrollbar">


          {/* Rotating List Logic */}
          {(() => {
            // Find index of active member
            const activeIndex = members.findIndex(m => m.id === activeMemberId);
            const totalMembers = members.length;

            // Calculate indices for 5 visible items: [active-2, active-1, active, active+1, active+2]
            // Use modulo to handle wrapping
            const visibleIndices = [-2, -1, 0, 1, 2].map(offset => {
              let index = (activeIndex + offset) % totalMembers;
              if (index < 0) index += totalMembers;
              return { index, offset }; // offset tells us position relative to center
            });

            return visibleIndices.map(({ index, offset }) => {
              const member = members[index];
              const isCenter = offset === 0;
              const isNeighbor = Math.abs(offset) === 1;

              // Styling based on position
              let opacity = 'opacity-100';
              let scale = 'scale-100';
              let backgroundClass = '';

              if (isCenter) {
                opacity = 'opacity-100';
                scale = 'scale-100';
                backgroundClass = `bg-gradient-to-b ${activeGradient} border border-white/20`;
              } else if (isNeighbor) {
                opacity = 'opacity-60 hover:opacity-80';
                scale = 'scale-95';
                backgroundClass = 'bg-gradient-to-b from-gray-900/10 to-stone-400/10 border-2 border-blue-600/50 backdrop-blur-md';
              } else {
                opacity = 'opacity-30 hover:opacity-50';
                scale = 'scale-90';
                backgroundClass = 'bg-gradient-to-b from-gray-900/5 to-stone-400/5 border border-blue-600/30 backdrop-blur-sm';
              }

              return (
                <motion.div
                  layout
                  key={member.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, type: 'spring', stiffness: 300, damping: 30 }}
                  className={`relative w-full flex items-center justify-end gap-6 ${opacity} ${scale}`}
                >
                  {isCenter && (
                    <motion.div
                      layoutId="active-arrow"
                      className="text-white/50 text-2xl animate-pulse absolute -left-8"
                    >
                      ▶
                    </motion.div>
                  )}
                  <button
                    onClick={() => handleManualSelect(member.id)}
                    className={`
                              group relative w-full max-w-[384px] h-24 p-0 rounded-3xl transition-all duration-500 flex items-center gap-4 overflow-hidden
                              ${backgroundClass}
                          `}
                  >
                    {/* Avatar/Icon Placeholder */}
                    <div className={`w-28 h-24 rounded-tl-3xl rounded-bl-3xl overflow-hidden flex-shrink-0 relative`}>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    <div className="flex flex-col items-start pl-4">
                      <span className="text-white font-medium text-2xl mb-1" style={{ fontFamily: typography.fontFamily.inter }}>
                        {member.name}
                      </span>
                      <span className="text-white text-base font-medium" style={{ fontFamily: typography.fontFamily.inter }}>
                        {member.role}
                      </span>
                    </div>
                  </button>
                </motion.div>
              );
            });
          })()}
        </div>

      </div>

      {/* Mobile Layout (Stacked) */}
      <div className="lg:hidden flex flex-col gap-8">
        {/* Image */}
        <div className="flex justify-center relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full -z-10" />
          <motion.img
            key={activeMember.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src={activeMember.image}
            alt={activeMember.name}
            className="w-full max-w-[300px] h-[300px] object-contain drop-shadow-2xl"
          />
        </div>

        {/* Text */}
        <div className="text-center px-4">
          <motion.div
            key={`text-${activeMember.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-4xl font-bold uppercase text-white mb-2" style={{ fontFamily: typography.fontFamily.ptSans }}>
              {activeMember.name}
            </h4>
            <div className="w-24 h-px bg-white mx-auto mb-4" />
            <p className="text-lg text-white font-normal mb-4">{activeMember.role}</p>
            <p className="text-white/70 italic text-lg relative">
              <span className="text-3xl text-purple-500 absolute -top-4 left-0 opacity-50">“</span>
              {activeMember.quote}
            </p>
          </motion.div>
        </div>

        {/* List - Horizontal Scroll for Mobile */}
        <div
          ref={mobileListRef}
          onScroll={(e) => {
            handleInteraction();
            handleMobileScroll();
          }}
          className="flex flex-row gap-4 px-0 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 mask-fade-right"
          style={{ paddingLeft: 'calc(50% - 130px)', paddingRight: 'calc(50% - 130px)' }}
        >
          {extendedMembers.map((member, idx) => {
            // Need unique key for duplicates
            const uniqueKey = `${member.id}-${idx}`;
            const isActive = member.id === activeMemberId;
            return (
              <button
                key={uniqueKey}
                onClick={() => handleManualSelect(member.id)}
                className={`
                            w-[260px] flex-shrink-0 h-20 rounded-3xl flex items-center gap-4 text-left overflow-hidden snap-center transition-all duration-300
                            ${isActive ? `bg-gradient-to-b ${activeGradient} scale-100 ring-2 ring-white/50` : 'bg-white/5 border border-white/10 scale-95 opacity-70'}
                        `}
              >
                <div className={`w-20 h-full rounded-tl-3xl rounded-bl-3xl flex-shrink-0 overflow-hidden relative ${isActive ? 'bg-white' : 'bg-zinc-800'}`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="pr-4">
                  <div className="text-white font-medium text-lg leading-tight mb-1">{member.name}</div>
                  <div className="text-white/60 text-xs truncate max-w-[140px]">{member.role}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
