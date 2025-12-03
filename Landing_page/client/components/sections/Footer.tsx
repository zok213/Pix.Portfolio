import { colors, typography } from '../../styles/design-tokens';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer
      className="relative w-full bg-black text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/images/footer-mask.png"
          alt="Footer Background"
          className="w-full h-full object-cover object-top opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-6 md:px-12 lg:px-[140px] py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Left: Contact & Form */}
          <div className="lg:col-span-4 space-y-12">
            {/* Contact Info */}
            <div className="space-y-4">
              <ContactItem icon="map" text="237 Huỳnh Ngọc Huệ" />
              <ContactItem icon="phone" text="0778535017 _ Phu Linh Nguyen" />
              <ContactItem icon="phone" text="0941330133 _ Hoang Ngoc Chau Giang" />
            </div>

            {/* Contact Form */}
            <div className="w-full max-w-[300px] bg-white/5 backdrop-blur-sm rounded-[30px] border border-white/10 p-6 space-y-4">
              <div className="space-y-4">
                <div className="border-b border-white/20 pb-2">
                  <input
                    type="text"
                    placeholder="Your name*"
                    className="w-full bg-transparent border-none text-white placeholder-stone-400 focus:ring-0 text-sm focus:outline-none"
                    style={{ fontFamily: typography.fontFamily.balooPaaji2 }}
                  />
                </div>
                <div className="border-b border-white/20 pb-2">
                  <input
                    type="email"
                    placeholder="Your Email*"
                    className="w-full bg-transparent border-none text-white placeholder-stone-400 focus:ring-0 text-sm focus:outline-none"
                    style={{ fontFamily: typography.fontFamily.balooPaaji2 }}
                  />
                </div>
              </div>

              <button
                className="w-full h-[42px] rounded-full border border-white text-white text-sm hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wide"
                style={{ fontFamily: typography.fontFamily.balooPaaji2 }}
              >
                Send us
              </button>
            </div>
          </div>

          {/* Center: Logo */}
          <div className="lg:col-span-4 flex items-center justify-center py-8 lg:py-0">
            <img
              src="/images/footer-logo-ngang-trang.png"
              alt="PiXerse"
              className="h-24 md:h-32 lg:h-40 w-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            />
          </div>

          {/* Right: Navigation */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <NavColumn title="Navigation" links={['Home', 'About us', 'Services', 'Projects']} />
            <NavColumn title="About us" links={['Services', 'Products', 'Community', 'Blog']} />
            <NavColumn title="Community" links={['Founder', 'PiX.Teq', 'Pix.Stdio']} />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 lg:mt-24 space-y-8">
          {/* Divider Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-sm text-stone-400" style={{ fontFamily: typography.fontFamily.balooPaaji2 }}>
              ver: 29/9/2025
            </div>

            <div className="flex items-center gap-6">
              <span className="text-white text-base mr-4" style={{ fontFamily: typography.fontFamily.balooPaaji2 }}>Follow us</span>
              <SocialIcon icon="facebook" />
              <SocialIcon icon="linkedin" />
              <SocialIcon icon="discord" />
              <SocialIcon icon="twitter" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactItem({ icon, text }: { icon: 'map' | 'phone', text: string }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="w-6 h-6 flex items-center justify-center text-white/80 group-hover:text-blue-400 transition-colors duration-300">
        {icon === 'map' ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M3.62001 8.49C5.59001 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
          </svg>
        )}
      </div>
      <p className="text-sm md:text-base font-medium text-white/90 group-hover:text-white transition-colors duration-300" style={{ fontFamily: typography.fontFamily.inter }}>
        {text}
      </p>
    </div>
  );
}

function NavColumn({ title, links }: { title: string, links: string[] }) {
  return (
    <div className="space-y-6">
      <h6 className="text-base font-bold text-neutral-400 uppercase tracking-wider" style={{ fontFamily: typography.fontFamily.ptSans }}>
        {title}
      </h6>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-sm text-white/80 hover:text-blue-400 transition-colors duration-300">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] group">
      {/* Placeholder SVGs - would replace with actual social icons */}
      <div className="w-5 h-5 bg-current rounded-sm group-hover:rotate-12 transition-transform duration-300" />
    </a>
  );
}
