import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between py-4 md:py-6">
          <Link to="/" className="flex-shrink-0">
            <img
              src="/pixerve.jpg"
              alt="Logo"
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            <Link
              to="/"
              className="text-white font-khula text-sm md:text-[15px] uppercase tracking-[1.5px] hover:opacity-80 transition-opacity"
            >
              about us
            </Link>
            <Link
              to="/service"
              className="text-white font-khula text-sm md:text-[15px] uppercase tracking-[1.5px] hover:opacity-80 transition-opacity"
            >
              Service
            </Link>
            <Link
              to="/product"
              className="text-white font-khula text-sm md:text-[15px] uppercase tracking-[1.5px] hover:opacity-80 transition-opacity"
            >
              Product
            </Link>
            <Link
              to="/community"
              className="text-white font-khula text-sm md:text-[15px] uppercase tracking-[1.5px] hover:opacity-80 transition-opacity"
            >
              ComMunity
            </Link>
            <Link
              to="/blog"
              className="text-white font-khula text-sm md:text-[15px] uppercase tracking-[1.5px] hover:opacity-80 transition-opacity"
            >
              blog
            </Link>
          </div>

          <button className="hidden md:block bg-[#D9D9D9] text-black px-6 py-3 rounded-full font-bold text-sm md:text-[15px] uppercase tracking-[1.5px] hover:bg-white transition-colors">
            Contact us
          </button>

          <button className="lg:hidden text-white p-2">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
