export default function Index() {
  return (
    <div className="bg-black text-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#090808]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/199f6f8776733186837695ada7d0e8d1faec26a9?width=4264"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="absolute top-24 right-8 md:right-16 lg:right-32 z-10">
          <div className="relative">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/b709948596e9fed81083effbb3039ffa6319ee07?width=400"
              alt=""
              className="w-32 md:w-40 lg:w-48 h-auto"
            />
            <div className="absolute top-4 right-16 md:right-20 w-4 h-4 bg-white rounded-full" />
          </div>
        </div>

        <div className="relative z-10 text-center px-4 pt-20">
          <h1 className="font-pt-sans text-5xl md:text-7xl lg:text-8xl xl:text-[128px] font-bold uppercase tracking-[0.1em] mb-8 md:mb-12">
            Our Product
          </h1>
          <div className="space-y-2">
            <p className="font-pt-sans text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-[0.1em]">
              PIXITY
            </p>
            <p className="font-pt-sans text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-[0.1em]">
              Crafterse
            </p>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="absolute inset-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/8df2cbd106ec87db9f1428e88734e961d52d69b1?width=3840"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <h2 className="font-pt-sans text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[0.1em] text-center mb-12">
            PIXITY
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h3 className="font-pt-sans text-3xl md:text-4xl font-bold uppercase tracking-[0.15em] mb-8">
                ABOUT THIS
              </h3>
              <p className="font-inter text-lg md:text-2xl text-[#91908E] leading-relaxed text-justify">
                A smart, friendly AI assistant that serves as a gateway for
                brands to connect with digital-native audiences. With deep local
                knowledge and an "always-on, always-learning" capability, PiXity
                provides highly personalized and valuable interactions. The
                platform integrates key features such as real-time chatbot
                interaction, content curated by local creators, and in-depth
                analytics tools to enhance marketing campaigns.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/835cb96e2717e43530640afad25ba57cd1f74778?width=2144"
                alt="PIXITY Product"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="mt-20 bg-gradient-to-b from-[rgba(28,34,38,0.4)] to-[rgba(72,72,72,0.4)] rounded-[40px] md:rounded-[57px] p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              <div className="space-y-4">
                <h4 className="font-pt-sans text-lg md:text-2xl font-bold uppercase tracking-[0.1em] border-b border-white pb-4">
                  Impression
                </h4>
                <div className="flex items-end justify-between">
                  <p className="font-pt-sans text-4xl md:text-6xl font-bold uppercase tracking-[0.1em]">
                    1.4K
                  </p>
                  <div className="flex items-center gap-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 31 31"
                      fill="none"
                      className="rotate-180"
                    >
                      <path
                        d="M6.52484 13.426L14.6825 5.00407C14.7667 4.91707 14.8672 4.84751 14.9783 4.79937C15.0894 4.75124 15.2089 4.72547 15.3299 4.72354C15.4509 4.72161 15.5712 4.74356 15.6837 4.78813C15.7963 4.8327 15.899 4.89902 15.9859 4.9833L24.4078 13.141C24.5833 13.3111 24.6842 13.5439 24.6881 13.7884C24.692 14.0328 24.5986 14.2687 24.4285 14.4443C24.2584 14.6199 24.0256 14.7208 23.7812 14.7247C23.5367 14.7285 23.3008 14.6352 23.1252 14.4651L16.3011 7.85395L16.5886 25.8946C16.5925 26.1389 16.4992 26.3747 16.3292 26.5502C16.1592 26.7257 15.9265 26.8265 15.6822 26.8304C15.4379 26.8343 15.202 26.741 15.0266 26.571C14.8511 26.401 14.7503 26.1682 14.7464 25.924L14.4589 7.88331L7.84895 14.7085C7.67887 14.8841 7.446 14.9849 7.20158 14.9888C6.95715 14.9927 6.72119 14.8994 6.54561 14.7293C6.37002 14.5592 6.26919 14.3263 6.26529 14.0819C6.2614 13.8375 6.35476 13.6015 6.52484 13.426Z"
                        fill="#91908E"
                      />
                    </svg>
                    <span className="font-pt-sans text-2xl md:text-3xl text-[#91908E] uppercase tracking-[0.1em]">
                      26%
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-pt-sans text-lg md:text-2xl font-bold uppercase tracking-[0.1em] border-b border-white pb-4">
                  Engagement rate
                </h4>
                <div className="flex items-end justify-between">
                  <p className="font-pt-sans text-4xl md:text-6xl font-bold uppercase tracking-[0.1em]">
                    19.3%
                  </p>
                  <div className="flex items-center gap-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 31 31"
                      fill="none"
                      className="rotate-180"
                    >
                      <path
                        d="M6.52484 13.426L14.6825 5.00407C14.7667 4.91707 14.8672 4.84751 14.9783 4.79937C15.0894 4.75124 15.2089 4.72547 15.3299 4.72354C15.4509 4.72161 15.5712 4.74356 15.6837 4.78813C15.7963 4.8327 15.899 4.89902 15.9859 4.9833L24.4078 13.141C24.5833 13.3111 24.6842 13.5439 24.6881 13.7884C24.692 14.0328 24.5986 14.2687 24.4285 14.4443C24.2584 14.6199 24.0256 14.7208 23.7812 14.7247C23.5367 14.7285 23.3008 14.6352 23.1252 14.4651L16.3011 7.85395L16.5886 25.8946C16.5925 26.1389 16.4992 26.3747 16.3292 26.5502C16.1592 26.7257 15.9265 26.8265 15.6822 26.8304C15.4379 26.8343 15.202 26.741 15.0266 26.571C14.8511 26.401 14.7503 26.1682 14.7464 25.924L14.4589 7.88331L7.84895 14.7085C7.67887 14.8841 7.446 14.9849 7.20158 14.9888C6.95715 14.9927 6.72119 14.8994 6.54561 14.7293C6.37002 14.5592 6.26919 14.3263 6.26529 14.0819C6.2614 13.8375 6.35476 13.6015 6.52484 13.426Z"
                        fill="#91908E"
                      />
                    </svg>
                    <span className="font-pt-sans text-2xl md:text-3xl text-[#91908E] uppercase tracking-[0.1em]">
                      8.3%
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-pt-sans text-lg md:text-2xl font-bold uppercase tracking-[0.1em] border-b border-white pb-4">
                  Engagements
                </h4>
                <div className="flex items-end justify-between">
                  <p className="font-pt-sans text-4xl md:text-6xl font-bold uppercase tracking-[0.1em]">
                    287
                  </p>
                  <div className="flex items-center gap-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 31 31"
                      fill="none"
                      className="rotate-180"
                    >
                      <path
                        d="M6.52484 13.426L14.6825 5.00407C14.7667 4.91707 14.8672 4.84751 14.9783 4.79937C15.0894 4.75124 15.2089 4.72547 15.3299 4.72354C15.4509 4.72161 15.5712 4.74356 15.6837 4.78813C15.7963 4.8327 15.899 4.89902 15.9859 4.9833L24.4078 13.141C24.5833 13.3111 24.6842 13.5439 24.6881 13.7884C24.692 14.0328 24.5986 14.2687 24.4285 14.4443C24.2584 14.6199 24.0256 14.7208 23.7812 14.7247C23.5367 14.7285 23.3008 14.6352 23.1252 14.4651L16.3011 7.85395L16.5886 25.8946C16.5925 26.1389 16.4992 26.3747 16.3292 26.5502C16.1592 26.7257 15.9265 26.8265 15.6822 26.8304C15.4379 26.8343 15.202 26.741 15.0266 26.571C14.8511 26.401 14.7503 26.1682 14.7464 25.924L14.4589 7.88331L7.84895 14.7085C7.67887 14.8841 7.446 14.9849 7.20158 14.9888C6.95715 14.9927 6.72119 14.8994 6.54561 14.7293C6.37002 14.5592 6.26919 14.3263 6.26529 14.0819C6.2614 13.8375 6.35476 13.6015 6.52484 13.426Z"
                        fill="#91908E"
                      />
                    </svg>
                    <span className="font-pt-sans text-2xl md:text-3xl text-[#91908E] uppercase tracking-[0.1em]">
                      37%
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-pt-sans text-lg md:text-2xl font-bold uppercase tracking-[0.1em] border-b border-white pb-4">
                  Profile visits
                </h4>
                <div className="flex items-end justify-between">
                  <p className="font-pt-sans text-4xl md:text-6xl font-bold uppercase tracking-[0.1em]">
                    23
                  </p>
                  <div className="flex items-center gap-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 31 31"
                      fill="none"
                      className="rotate-180"
                    >
                      <path
                        d="M6.52484 13.426L14.6825 5.00407C14.7667 4.91707 14.8672 4.84751 14.9783 4.79937C15.0894 4.75124 15.2089 4.72547 15.3299 4.72354C15.4509 4.72161 15.5712 4.74356 15.6837 4.78813C15.7963 4.8327 15.899 4.89902 15.9859 4.9833L24.4078 13.141C24.5833 13.3111 24.6842 13.5439 24.6881 13.7884C24.692 14.0328 24.5986 14.2687 24.4285 14.4443C24.2584 14.6199 24.0256 14.7208 23.7812 14.7247C23.5367 14.7285 23.3008 14.6352 23.1252 14.4651L16.3011 7.85395L16.5886 25.8946C16.5925 26.1389 16.4992 26.3747 16.3292 26.5502C16.1592 26.7257 15.9265 26.8265 15.6822 26.8304C15.4379 26.8343 15.202 26.741 15.0266 26.571C14.8511 26.401 14.7503 26.1682 14.7464 25.924L14.4589 7.88331L7.84895 14.7085C7.67887 14.8841 7.446 14.9849 7.20158 14.9888C6.95715 14.9927 6.72119 14.8994 6.54561 14.7293C6.37002 14.5592 6.26919 14.3263 6.26529 14.0819C6.2614 13.8375 6.35476 13.6015 6.52484 13.426Z"
                        fill="#91908E"
                      />
                    </svg>
                    <span className="font-pt-sans text-2xl md:text-3xl text-[#91908E] uppercase tracking-[0.1em]">
                      9.5%
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-pt-sans text-lg md:text-2xl font-bold uppercase tracking-[0.1em] border-b border-white pb-4">
                  Likes
                </h4>
                <div className="flex items-end justify-between">
                  <p className="font-pt-sans text-4xl md:text-6xl font-bold uppercase tracking-[0.1em]">
                    87
                  </p>
                  <div className="flex items-center gap-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 31 31"
                      fill="none"
                      className="rotate-180"
                    >
                      <path
                        d="M6.52484 13.426L14.6825 5.00407C14.7667 4.91707 14.8672 4.84751 14.9783 4.79937C15.0894 4.75124 15.2089 4.72547 15.3299 4.72354C15.4509 4.72161 15.5712 4.74356 15.6837 4.78813C15.7963 4.8327 15.899 4.89902 15.9859 4.9833L24.4078 13.141C24.5833 13.3111 24.6842 13.5439 24.6881 13.7884C24.692 14.0328 24.5986 14.2687 24.4285 14.4443C24.2584 14.6199 24.0256 14.7208 23.7812 14.7247C23.5367 14.7285 23.3008 14.6352 23.1252 14.4651L16.3011 7.85395L16.5886 25.8946C16.5925 26.1389 16.4992 26.3747 16.3292 26.5502C16.1592 26.7257 15.9265 26.8265 15.6822 26.8304C15.4379 26.8343 15.202 26.741 15.0266 26.571C14.8511 26.401 14.7503 26.1682 14.7464 25.924L14.4589 7.88331L7.84895 14.7085C7.67887 14.8841 7.446 14.9849 7.20158 14.9888C6.95715 14.9927 6.72119 14.8994 6.54561 14.7293C6.37002 14.5592 6.26919 14.3263 6.26529 14.0819C6.2614 13.8375 6.35476 13.6015 6.52484 13.426Z"
                        fill="#91908E"
                      />
                    </svg>
                    <span className="font-pt-sans text-2xl md:text-3xl text-[#91908E] uppercase tracking-[0.1em]">
                      83%
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-pt-sans text-lg md:text-2xl font-bold uppercase tracking-[0.1em] border-b border-white pb-4">
                  Reposts
                </h4>
                <div className="flex items-end justify-between">
                  <p className="font-pt-sans text-4xl md:text-6xl font-bold uppercase tracking-[0.1em]">
                    40
                  </p>
                  <div className="flex items-center gap-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 31 31"
                      fill="none"
                      className="rotate-180"
                    >
                      <path
                        d="M6.52484 13.426L14.6825 5.00407C14.7667 4.91707 14.8672 4.84751 14.9783 4.79937C15.0894 4.75124 15.2089 4.72547 15.3299 4.72354C15.4509 4.72161 15.5712 4.74356 15.6837 4.78813C15.7963 4.8327 15.899 4.89902 15.9859 4.9833L24.4078 13.141C24.5833 13.3111 24.6842 13.5439 24.6881 13.7884C24.692 14.0328 24.5986 14.2687 24.4285 14.4443C24.2584 14.6199 24.0256 14.7208 23.7812 14.7247C23.5367 14.7285 23.3008 14.6352 23.1252 14.4651L16.3011 7.85395L16.5886 25.8946C16.5925 26.1389 16.4992 26.3747 16.3292 26.5502C16.1592 26.7257 15.9265 26.8265 15.6822 26.8304C15.4379 26.8343 15.202 26.741 15.0266 26.571C14.8511 26.401 14.7503 26.1682 14.7464 25.924L14.4589 7.88331L7.84895 14.7085C7.67887 14.8841 7.446 14.9849 7.20158 14.9888C6.95715 14.9927 6.72119 14.8994 6.54561 14.7293C6.37002 14.5592 6.26919 14.3263 6.26529 14.0819C6.2614 13.8375 6.35476 13.6015 6.52484 13.426Z"
                        fill="#91908E"
                      />
                    </svg>
                    <span className="font-pt-sans text-2xl md:text-3xl text-[#91908E] uppercase tracking-[0.1em]">
                      17%
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-pt-sans text-lg md:text-2xl font-bold uppercase tracking-[0.1em] border-b border-white pb-4">
                  Bookmarks
                </h4>
                <div className="flex items-end justify-between">
                  <p className="font-pt-sans text-4xl md:text-6xl font-bold uppercase tracking-[0.1em]">
                    4
                  </p>
                  <div className="flex items-center gap-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 31 31"
                      fill="none"
                      className="rotate-180"
                    >
                      <path
                        d="M6.52484 13.426L14.6825 5.00407C14.7667 4.91707 14.8672 4.84751 14.9783 4.79937C15.0894 4.75124 15.2089 4.72547 15.3299 4.72354C15.4509 4.72161 15.5712 4.74356 15.6837 4.78813C15.7963 4.8327 15.899 4.89902 15.9859 4.9833L24.4078 13.141C24.5833 13.3111 24.6842 13.5439 24.6881 13.7884C24.692 14.0328 24.5986 14.2687 24.4285 14.4443C24.2584 14.6199 24.0256 14.7208 23.7812 14.7247C23.5367 14.7285 23.3008 14.6352 23.1252 14.4651L16.3011 7.85395L16.5886 25.8946C16.5925 26.1389 16.4992 26.3747 16.3292 26.5502C16.1592 26.7257 15.9265 26.8265 15.6822 26.8304C15.4379 26.8343 15.202 26.741 15.0266 26.571C14.8511 26.401 14.7503 26.1682 14.7464 25.924L14.4589 7.88331L7.84895 14.7085C7.67887 14.8841 7.446 14.9849 7.20158 14.9888C6.95715 14.9927 6.72119 14.8994 6.54561 14.7293C6.37002 14.5592 6.26919 14.3263 6.26529 14.0819C6.2614 13.8375 6.35476 13.6015 6.52484 13.426Z"
                        fill="#91908E"
                      />
                    </svg>
                    <span className="font-pt-sans text-2xl md:text-3xl text-[#91908E] uppercase tracking-[0.1em]">
                      10K%
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-pt-sans text-lg md:text-2xl font-bold uppercase tracking-[0.1em] border-b border-white pb-4">
                  Shares
                </h4>
                <p className="font-pt-sans text-4xl md:text-6xl font-bold uppercase tracking-[0.1em]">
                  0
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <h2 className="font-pt-sans text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[0.1em] text-center mb-12">
            Crafterse – Craft your own universe
          </h2>

          <div className="max-w-7xl mx-auto space-y-8">
            <p className="font-inter text-2xl md:text-3xl text-white leading-relaxed text-justify">
              Crafterse is a 2D Action-RPG Roguelite where imagination itself
              becomes your greatest weapon. At the heart of the game lies the AI
              Prompt-to-Weapon system: with just a few words, players can forge
              completely unique weapons – each with its own visuals, stats,
              effects, and lore.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="bg-[#CDCDCD] aspect-video rounded-lg" />

              <div className="relative flex items-center">
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    className="w-8 h-8"
                  >
                    <path
                      d="M5.81244 7.75C5.81244 7.49307 5.91451 7.24667 6.09618 7.06499C6.27786 6.88331 6.52426 6.78125 6.78119 6.78125H8.71869V4.84375C8.71869 4.58682 8.82076 4.34042 9.00243 4.15874C9.18411 3.97706 9.43051 3.875 9.68744 3.875C9.94437 3.875 10.1908 3.97706 10.3725 4.15874C10.5541 4.34042 10.6562 4.58682 10.6562 4.84375V6.78125H12.5937C12.8506 6.78125 13.097 6.88331 13.2787 7.06499C13.4604 7.24667 13.5624 7.49307 13.5624 7.75C13.5624 8.00693 13.4604 8.25333 13.2787 8.43501C13.097 8.61669 12.8506 8.71875 12.5937 8.71875H10.6562V10.6562C10.6562 10.9132 10.5541 11.1596 10.3725 11.3413C10.1908 11.5229 9.94437 11.625 9.68744 11.625C9.43051 11.625 9.18411 11.5229 9.00243 11.3413C8.82076 11.1596 8.71869 10.9132 8.71869 10.6562V8.71875H6.78119C6.52426 8.71875 6.27786 8.61669 6.09618 8.43501C5.91451 8.25333 5.81244 8.00693 5.81244 7.75ZM22.2812 23.25H21.3124V22.2812C21.3124 22.0243 21.2104 21.7779 21.0287 21.5962C20.847 21.4146 20.6006 21.3125 20.3437 21.3125C20.0868 21.3125 19.8404 21.4146 19.6587 21.5962C19.477 21.7779 19.3749 22.0243 19.3749 22.2812V23.25H18.4062C18.1493 23.25 17.9029 23.3521 17.7212 23.5337C17.5395 23.7154 17.4374 23.9618 17.4374 24.2188C17.4374 24.4757 17.5395 24.7221 17.7212 24.9038C17.9029 25.0854 18.1493 25.1875 18.4062 25.1875H19.3749V26.1562C19.3749 26.4132 19.477 26.6596 19.6587 26.8413C19.8404 27.0229 20.0868 27.125 20.3437 27.125C20.6006 27.125 20.847 27.0229 21.0287 26.8413C21.2104 26.6596 21.3124 26.4132 21.3124 26.1562V25.1875H22.2812C22.5381 25.1875 22.7845 25.0854 22.9662 24.9038C23.1479 24.7221 23.2499 24.4757 23.2499 24.2188C23.2499 23.9618 23.1479 23.7154 22.9662 23.5337C22.7845 23.3521 22.5381 23.25 22.2812 23.25ZM29.0624 17.4375H27.1249V15.5C27.1249 15.2431 27.0229 14.9967 26.8412 14.815C26.6595 14.6333 26.4131 14.5312 26.1562 14.5312C25.8993 14.5312 25.6529 14.6333 25.4712 14.815C25.2895 14.9967 25.1874 15.2431 25.1874 15.5V17.4375H23.2499C22.993 17.4375 22.7466 17.5396 22.5649 17.7212C22.3833 17.9029 22.2812 18.1493 22.2812 18.4062C22.2812 18.6632 22.3833 18.9096 22.5649 19.0913C22.7466 19.2729 22.993 19.375 23.2499 19.375H25.1874V21.3125C25.1874 21.5694 25.2895 21.8158 25.4712 21.9975C25.6529 22.1792 25.8993 22.2812 26.1562 22.2812C26.4131 22.2812 26.6595 22.1792 26.8412 21.9975C27.0229 21.8158 27.1249 21.5694 27.1249 21.3125V19.375H29.0624C29.3194 19.375 29.5658 19.2729 29.7475 19.0913C29.9291 18.9096 30.0312 18.6632 30.0312 18.4062C30.0312 18.1493 29.9291 17.9029 29.7475 17.7212C29.5658 17.5396 29.3194 17.4375 29.0624 17.4375ZM26.557 9.6875L9.68744 26.5571C9.32413 26.9201 8.83151 27.1241 8.31787 27.1241C7.80423 27.1241 7.31162 26.9201 6.9483 26.5571L4.44166 24.0529C4.2617 23.8729 4.11895 23.6593 4.02155 23.4242C3.92415 23.1891 3.87402 22.9371 3.87402 22.6827C3.87402 22.4282 3.92415 22.1762 4.02155 21.9411C4.11895 21.706 4.2617 21.4924 4.44166 21.3125L21.3124 4.44293C21.4924 4.26297 21.706 4.12021 21.9411 4.02282C22.1762 3.92542 22.4281 3.87529 22.6826 3.87529C22.9371 3.87529 23.1891 3.92542 23.4242 4.02282C23.6593 4.12021 23.8729 4.26297 24.0528 4.44293L26.557 6.94715C26.737 7.12707 26.8797 7.34068 26.9771 7.57577C27.0745 7.81087 27.1247 8.06285 27.1247 8.31732C27.1247 8.5718 27.0745 8.82378 26.9771 9.05888C26.8797 9.29397 26.737 9.50758 26.557 9.6875ZM19.9417 13.5625L17.4374 11.0571L5.81244 22.6821L8.31666 25.1875L19.9417 13.5625ZM25.1874 8.31793L22.682 5.8125L18.807 9.6875L21.3124 12.1929L25.1874 8.31793Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="font-inter text-lg md:text-2xl text-white leading-relaxed text-justify pr-12">
                  The story unfolds in a world consumed by the creeping darkness
                  of the Void. Players take on the role of a young Guardian,
                  wielding the mysterious Crystalline Frame, the last artifact
                  capable of guiding them to the elemental gems stolen by the
                  fearsome Daemon Lords. Each dungeon run is not only a fight for
                  survival, but also a chance to unleash and test the weapons born
                  from your creativity. Crafterse blends challenging PvE dungeon
                  crawling with fair and competitive PvP arenas. PvE runs
                  emphasize roguelite unpredictability – enemies, traps, and loot
                  change every time – while PvP ensures that victory depends
                  solely on skill. Beyond gameplay, Crafterse introduces a true
                  UGC Economy, enabling players to trade, share, and even profit
                  from the weapons they create. This transforms Crafterse into
                  more than just a game: it is a platform where personal
                  creativity holds real value.
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="border border-white rounded-full px-10 py-3 inline-block">
                <p className="font-inter text-2xl text-white">Coming soon</p>
              </div>
            </div>

            <div className="border-t border-white pt-8">
              <p className="font-inter text-2xl md:text-3xl text-white leading-relaxed text-justify">
                With the motto "Craft your own universe", Crafterse promises a
                unique blend of dark-fantasy atmosphere and boundless freedom of
                creation. It is a world where every player can leave their mark,
                forge their legend, and shape their own universe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
