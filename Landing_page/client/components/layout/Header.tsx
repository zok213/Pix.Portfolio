import { useState } from 'react';
import { colors, gradients, typography } from '../../styles/design-tokens';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Fixed Header - Fully Transparent */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
        <nav className="max-w-[1920px] mx-auto flex items-center justify-between px-6 md:px-12 lg:px-[140px] py-4 md:py-5">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/logo-trang-ngang-fish.png"
              alt="PiXerse Logo"
              className="h-8 md:h-10 lg:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div
            className="hidden lg:flex items-center gap-8 xl:gap-12"
            style={{
              fontFamily: typography.fontFamily.khula,
              fontSize: typography.fontSize.base,
              fontWeight: typography.fontWeight.bold,
              letterSpacing: typography.letterSpacing.wide,
            }}
          >
            <a
              href="#about"
              className="uppercase transition-colors duration-200"
              style={{ color: colors.white }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.gradientBlue}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.white}
            >
              About Us
            </a>
            <a
              href="#services"
              className="uppercase transition-colors duration-200"
              style={{ color: colors.white }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.gradientBlue}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.white}
            >
              Service
            </a>
            <a
              href="#products"
              className="uppercase transition-colors duration-200"
              style={{ color: colors.white }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.gradientBlue}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.white}
            >
              Product
            </a>
            <a
              href="#community"
              className="uppercase transition-colors duration-200"
              style={{ color: colors.white }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.gradientBlue}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.white}
            >
              Community
            </a>
            <a
              href="#blog"
              className="uppercase transition-colors duration-200"
              style={{ color: colors.white }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.gradientBlue}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.white}
            >
              Blog
            </a>
          </div>

          {/* Contact Us Button */}
          <button
            className="hidden lg:block px-8 py-3 bg-[#D4D4D8] hover:bg-white text-black font-bold rounded-full uppercase transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: typography.fontFamily.khula,
              fontSize: typography.fontSize.base,
              letterSpacing: typography.letterSpacing.wide,
            }}
          >
            Contact us
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            style={{ color: colors.white }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-lg pt-24">
          <div
            className="flex flex-col items-center gap-8 p-8"
            style={{
              fontFamily: typography.fontFamily.khula,
              fontSize: typography.fontSize.lg,
              fontWeight: typography.fontWeight.semibold,
              letterSpacing: typography.letterSpacing.wide,
            }}
          >
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="uppercase transition-colors hover:scale-105"
              style={{ color: colors.white }}
            >
              About Us
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="uppercase transition-colors hover:scale-105"
              style={{ color: colors.white }}
            >
              Service
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="uppercase transition-colors hover:scale-105"
              style={{ color: colors.white }}
            >
              Product
            </a>
            <a
              href="#community"
              onClick={() => setMobileMenuOpen(false)}
              className="uppercase transition-colors hover:scale-105"
              style={{ color: colors.white }}
            >
              Community
            </a>
            <a
              href="#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="uppercase transition-colors hover:scale-105"
              style={{ color: colors.white }}
            >
              Blog
            </a>

            <button
              className="mt-6 px-10 py-3 rounded-full uppercase"
              style={{
                background: gradients.buttonGradient,
                color: colors.white,
                fontFamily: typography.fontFamily.khula,
                fontSize: typography.fontSize.base,
                fontWeight: typography.fontWeight.bold,
                letterSpacing: typography.letterSpacing.wide,
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </>
  );
}
