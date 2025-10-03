import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-black py-16 md:py-20">
      <div className="absolute inset-0 opacity-40">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/c3b70dc5ea2b05cec617c10e935b242a17652854?width=3840"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative container mx-auto px-4 md:px-8 lg:px-16">
        <div className="mb-12">
          <img
            src="/pixerve.jpg"
            alt="Logo"
            className="mx-auto h-16 md:h-20 lg:h-32 w-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div>
            <h3 className="text-[#767676] font-plus-jakarta text-sm md:text-base font-semibold mb-6 uppercase tracking-tight">
              Navigation
            </h3>
            <div className="space-y-3">
              <Link
                to="/"
                className="block text-white font-plus-jakarta text-xl md:text-2xl font-bold hover:opacity-80 transition-opacity"
              >
                Home
              </Link>
              <Link
                to="/"
                className="block text-white font-plus-jakarta text-xl md:text-2xl font-bold hover:opacity-80 transition-opacity"
              >
                About us
              </Link>
              <Link
                to="/service"
                className="block text-white font-plus-jakarta text-xl md:text-2xl font-bold hover:opacity-80 transition-opacity"
              >
                Services
              </Link>
              <Link
                to="/product"
                className="block text-white font-plus-jakarta text-xl md:text-2xl font-bold hover:opacity-80 transition-opacity"
              >
                Projects
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-plus-jakarta text-xl md:text-2xl font-bold mb-6">
              About us
            </h3>
            <div className="space-y-3">
              <Link
                to="/"
                className="block text-white font-plus-jakarta text-base hover:opacity-80 transition-opacity"
              >
                Services
              </Link>
              <Link
                to="/"
                className="block text-white font-plus-jakarta text-base hover:opacity-80 transition-opacity"
              >
                Products
              </Link>
              <Link
                to="/"
                className="block text-white font-plus-jakarta text-base hover:opacity-80 transition-opacity"
              >
                Blogs
              </Link>
              <Link
                to="/"
                className="block text-white font-plus-jakarta text-base hover:opacity-80 transition-opacity"
              >
                Our Team
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-plus-jakarta text-xl md:text-2xl font-bold mb-6">
              Community
            </h3>
            <div className="space-y-3">
              <Link
                to="/"
                className="block text-white font-plus-jakarta text-base hover:opacity-80 transition-opacity"
              >
                Founder
              </Link>
              <Link
                to="/"
                className="block text-white font-plus-jakarta text-base hover:opacity-80 transition-opacity"
              >
                PiX.Teq
              </Link>
              <Link
                to="/"
                className="block text-white font-plus-jakarta text-base hover:opacity-80 transition-opacity"
              >
                Pix.Stdio
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-plus-jakarta text-xl md:text-2xl font-bold mb-6">
              Socials
            </h3>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-white font-plus-jakarta text-base hover:opacity-80 transition-opacity"
              >
                X
              </a>
              <a
                href="#"
                className="block text-white font-plus-jakarta text-base hover:opacity-80 transition-opacity"
              >
                LinkeIn
              </a>
              <a
                href="#"
                className="block text-white font-plus-jakarta text-base hover:opacity-80 transition-opacity"
              >
                Telegram
              </a>
              <a
                href="#"
                className="block text-white font-plus-jakarta text-base hover:opacity-80 transition-opacity"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div className="w-full md:w-auto">
            <div className="space-y-4 max-w-md">
              <div className="border-b border-[#B0B0B0] pb-2">
                <input
                  type="text"
                  placeholder="Your name*"
                  className="bg-transparent text-[#91908E] font-baloo text-base w-full outline-none"
                />
              </div>
              <div className="border-b border-[#B0B0B0] pb-2">
                <input
                  type="email"
                  placeholder="Your Email*"
                  className="bg-transparent text-[#91908E] font-baloo text-base w-full outline-none"
                />
              </div>
              <button className="border border-white rounded-full px-8 py-2 text-white font-baloo hover:bg-white hover:text-black transition-colors">
                Send us
              </button>
            </div>
          </div>

          <div className="flex flex-col items-end gap-4">
            <h4 className="text-white font-baloo text-2xl md:text-4xl font-semibold tracking-tight">
              FOLLOW US
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-md flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg width="24" height="24" viewBox="0 0 56 56" fill="none">
                  <path
                    d="M50.4004 0C53.4929 0.000211554 55.9998 2.50712 56 5.59961V50.4004C55.9998 53.4929 53.4929 55.9998 50.4004 56H36.4004V34.918H43.5762L44.7275 27.0117H36.4004V23.6338C36.4004 20.6032 37.2551 19.1055 40.1494 19.1055H44.7998V11.5449C43.982 11.4369 42.2552 11.2002 38.9902 11.2002C32.1714 11.2002 28 14.729 28 22.7666V27.0117H19.5996V34.918H28V56H5.59961C2.50712 55.9998 0.000211556 53.4929 0 50.4004V5.59961C0.000211038 2.50712 2.50712 0.000211041 5.59961 0H50.4004Z"
                    fill="black"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-md flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20.4 0H3.6C1.61177 0 0 1.61177 0 3.6V20.4C0 22.3882 1.61177 24 3.6 24H20.4C22.3882 24 24 22.3882 24 20.4V3.6C24 1.61177 22.3882 0 20.4 0Z"
                    fill="black"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-md flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg width="32" height="16" viewBox="0 0 83 41" fill="none">
                  <path
                    d="M44.3473 18.4473L56.9446 3.98047H53.9594L43.0213 16.5422L34.2849 3.98047H24.208L37.4188 22.9758L24.208 38.1471H27.1932L38.7441 24.8809L47.9709 38.1471H58.0478L44.3459 18.4473H44.3473ZM40.2581 23.1432L38.9198 21.2517L28.2688 6.20062H32.8545L41.4499 18.3469L42.7882 20.2383L53.9607 36.0274H49.375L40.2581 23.1432Z"
                    fill="#1A1A1A"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
