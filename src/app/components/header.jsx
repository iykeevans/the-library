import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

const HamburgerMenu = () => {
  return (
    <svg
      width="55"
      height="31"
      viewBox="0 0 55 31"
      fill="none"
      class="w-[40px] md:w-[55px]"
    >
      <path
        d="M1 23L43 23"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M1 30L25 30"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M4.26 3.92L3.06 15H1.96L3.58 0.459999L9.18 11.22L14.78 0.459999L16.4 15H15.3L14.1 3.92L9.18 13.38L4.26 3.92ZM19.6272 15V13.96H26.5672V15H19.6272ZM19.6272 2.04V0.999999H26.5672V2.04H19.6272ZM19.6272 7.84V6.8H26.1672V7.84H19.6272ZM19.0472 0.999999H20.1472V15H19.0472V0.999999ZM40.3708 0.999999H41.4708V15.54L30.8308 3.32V15H29.7308V0.459999L40.3708 12.72V0.999999ZM44.7284 0.999999H45.8284V10.48C45.8284 11.6 46.1218 12.4933 46.7084 13.16C47.2951 13.8267 48.1284 14.16 49.2084 14.16C50.2884 14.16 51.1218 13.8267 51.7084 13.16C52.2951 12.4933 52.5884 11.6 52.5884 10.48V0.999999H53.6884V10.48C53.6884 11.1733 53.5884 11.8133 53.3884 12.4C53.1884 12.9733 52.8951 13.4667 52.5084 13.88C52.1218 14.2933 51.6484 14.62 51.0884 14.86C50.5418 15.0867 49.9151 15.2 49.2084 15.2C48.5018 15.2 47.8684 15.0867 47.3084 14.86C46.7618 14.62 46.2951 14.2933 45.9084 13.88C45.5218 13.4667 45.2284 12.9733 45.0284 12.4C44.8284 11.8133 44.7284 11.1733 44.7284 10.48V0.999999Z"
        fill="white"
      />
    </svg>
  );
};

const ActiveArrow = ({ className }) => {
  return (
    <svg
      width="43"
      height="44"
      viewBox="0 0 43 44"
      fill="none"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.522 7.71805L0.634299 39.4269L4.5527 43.3453L35.5116 12.2339L37.0209 38.6273L42.8217 38.9325L40.7291 2.33884L40.6436 2.25327L34.9283 2.03365L4.15379 0.417195L4.48762 6.24669L32.522 7.71805Z"
        fill="url(#paint0_linear_9_160)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_9_160"
          x1="17.3839"
          y1="25.8426"
          x2="25.7257"
          y2="17.5008"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FCE552" />
          <stop offset="1" stop-color="#E5A505" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <svg
      width="33"
      height="30"
      viewBox="0 0 33 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.8914 6.03886L26.5951 4.74817L16.8914 14.4106L7.18757 4.74817L5.89136 6.03886L15.5951 15.7013L5.89136 25.3638L7.18757 26.6545L16.8914 16.992L26.5951 26.6545L27.8914 25.3638L18.1876 15.7013L27.8914 6.03886Z"
        fill="white"
      />
    </svg>
  );
};

const MobileNav = ({ setShowMobileNav }) => {
  const navItems = [
    "HOME",
    "ABOUT US",
    "STUDY NIGHTS",
    "GALLERY",
    "BLOG",
    "CONTACT",
  ];

  useEffect(() => {
    // gsap.fromTo(
    //   ".mobile-nav-link",
    //   { y: 300, opacity: 0 },
    //   {
    //     y: 0,
    //     duration: 1.5,
    //     opacity: 1,
    //     stagger: { amount: 1 },
    //     ease: "power4.inOut",
    //   }
    // );

    gsap.fromTo(
      ".contact",
      { y: 200, opacity: 0 },
      {
        // delay: 1.5,
        y: 0,
        duration: 1.5,
        opacity: 1,
        stagger: { amount: 0.5 },
        ease: "power4.inOut",
      }
    );
  }, []);

  const currentPage = "HOME";

  return (
    <div
      className={`bg-black fixed left-0 top-0 right-0 bottom-0 h-screen w-full`}
    >
      <div class="w-[90%] mx-auto">
        <div class="md:mb-20 h-[80px] md:h-[100px] flex items-center">
          <button onClick={() => setShowMobileNav(false)}>
            <CloseIcon />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-y-8 md:justify-between">
          {/* <div class="md:text-[60px] text-white font-light flex flex-col gap-y-3">
            {navItems.map((item, i) => (
              <div key={`nav-${i}`} className="flex items-center md:gap-x-5">
                <a
                  href="#"
                  className={`mobile-nav-link peer ${
                    item === currentPage ? "gradient-text" : ""
                  }`}
                >
                  {item}
                </a>

                <ActiveArrow className="opacity-0 -translate-y-2 peer-hover:opacity-100 peer-hover:translate-y-0 transition-all duration-300 h-3 md:h-10" />
              </div>
            ))}
          </div> */}

          <div class={`${jost.className} text-white text-sm md:text-base`}>
            <div className="gradient-text text-4xl mb-16 tracking-widest contact">
              CONNECT WITH US
            </div>

            <div className="md:mb-10 mb-5 contact">
              <div className="mb-3 gradient-text">FIND US</div>
              <div className="mb-1">
                82 Adetokunbo Ademola Street, Eti-Osa 101241, Victoria Island,
                Lagos
              </div>
              <div className="mb-1">0700 542 7279</div>
              <div>0700 542 7279</div>
            </div>

            <div className="md:mb-10 mb-5 contact">
              <div className="mb-3 gradient-text">EMAIL</div>
              <div>info@thelibrarylagos.com</div>
            </div>

            <div className="md:mb-10 mb-5 contact">
              <div className="mb-3 gradient-text">OPENING HOURS</div>
              <div>Tuesday - Thursday 4pm - 11pm</div>
              <div>Friday - Saturday 12pm till late</div>
            </div>

            <div className="md:mb-10 mb-5 contact">
              <div className="mb-3 gradient-text text-sm md:text-base">
                SOCIAL MEDIA
              </div>

              <div className="flex items-center gap-x-5">
                {/* <svg
                  width="36"
                  height="38"
                  viewBox="0 0 36 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="18" cy="19" rx="18" ry="18.5" fill="white" />
                  <path
                    d="M18.9996 16.6954V15.4329C18.9996 14.8918 19.0923 14.5311 19.9266 14.5311H21.1316V12.3669H19.185C16.8677 12.3669 16.0334 13.449 16.0334 15.2526V16.6052H14.5503V18.7695H16.0334V25.2624H18.9996V18.8597H20.9462L21.2243 16.6954H18.9996Z"
                    fill="#040707"
                  />
                </svg>

                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="19" cy="19" rx="19" ry="18.5" fill="white" />
                  <path
                    d="M18.9387 13.2491C20.7925 13.2491 21.0706 13.2491 21.7195 13.2491C22.3683 13.2491 22.7391 13.4294 23.0172 13.5196C23.388 13.6098 23.5734 13.7901 23.8515 14.0607C24.1295 14.3312 24.2222 14.5116 24.4076 14.8723C24.5003 15.1428 24.593 15.5035 24.6857 16.1348C24.6857 16.8562 24.6857 17.0366 24.6857 18.8401C24.6857 20.6437 24.6857 20.9142 24.6857 21.5455C24.6857 22.1767 24.5003 22.5374 24.4076 22.808C24.3149 23.1687 24.1295 23.349 23.8515 23.6196C23.5734 23.8901 23.388 23.9803 23.0172 24.1606C22.7391 24.2508 22.3683 24.341 21.7195 24.4312C20.9779 24.4312 20.7925 24.4312 18.9387 24.4312C17.0848 24.4312 16.8067 24.4312 16.1578 24.4312C15.509 24.4312 15.1382 24.2508 14.8601 24.1606C14.4893 24.0705 14.3039 23.8901 14.0259 23.6196C13.7478 23.349 13.6551 23.1687 13.4697 22.808C13.377 22.5374 13.2843 22.1767 13.1916 21.5455C13.1916 20.824 13.1916 20.6437 13.1916 18.8401C13.1916 17.0366 13.1916 16.766 13.1916 16.1348C13.1916 15.5035 13.377 15.1428 13.4697 14.8723C13.5624 14.5116 13.7478 14.3312 14.0259 14.0607C14.3039 13.7901 14.4893 13.7 14.8601 13.5196C15.1382 13.4294 15.509 13.3392 16.1578 13.2491C16.8067 13.2491 17.0848 13.2491 18.9387 13.2491ZM18.9387 11.9866C17.0848 11.9866 16.8067 11.9866 16.0651 11.9866C15.3236 11.9866 14.7674 12.1669 14.3966 12.3473C13.9332 12.5276 13.5624 12.7982 13.1916 13.1589C12.8208 13.5196 12.5427 13.8803 12.3574 14.3312C12.172 14.7821 12.0793 15.233 11.9866 15.9544C11.9866 16.6758 11.9866 16.9464 11.9866 18.7499C11.9866 20.5535 11.9866 20.824 11.9866 21.5455C11.9866 22.2669 12.172 22.808 12.3574 23.1687C12.5427 23.6196 12.8208 23.9803 13.1916 24.341C13.5624 24.7017 13.9332 24.9723 14.3966 25.1526C14.8601 25.333 15.3236 25.4231 16.0651 25.5133C16.8067 25.5133 17.0848 25.5133 18.9387 25.5133C20.7925 25.5133 21.0706 25.5133 21.8122 25.5133C22.5537 25.5133 23.1099 25.333 23.4807 25.1526C23.9442 24.9723 24.3149 24.7017 24.6857 24.341C25.0565 23.9803 25.3346 23.6196 25.52 23.1687C25.7053 22.7178 25.798 22.2669 25.8907 21.5455C25.8907 20.824 25.8907 20.5535 25.8907 18.7499C25.8907 16.9464 25.8907 16.6758 25.8907 15.9544C25.8907 15.233 25.7053 14.6919 25.52 14.3312C25.3346 13.8803 25.0565 13.5196 24.6857 13.1589C24.3149 12.7982 23.9442 12.5276 23.4807 12.3473C23.0172 12.1669 22.5537 12.0768 21.8122 11.9866C21.0706 11.9866 20.7925 11.9866 18.9387 11.9866Z"
                    fill="#040707"
                  />
                  <path
                    d="M18.9371 15.3238C16.9905 15.3238 15.322 16.8568 15.322 18.8407C15.322 20.7345 16.8978 22.3577 18.9371 22.3577C20.8837 22.3577 22.5522 20.8247 22.5522 18.8407C22.5522 16.8568 20.8837 15.3238 18.9371 15.3238ZM18.9371 21.0952C17.6394 21.0952 16.6197 20.1032 16.6197 18.8407C16.6197 17.5783 17.6394 16.5863 18.9371 16.5863C20.2348 16.5863 21.2545 17.5783 21.2545 18.8407C21.2545 20.0131 20.2348 21.0952 18.9371 21.0952Z"
                    fill="#040707"
                  />
                  <path
                    d="M23.4788 15.1429C23.4788 15.5938 23.108 15.9545 22.6446 15.9545C22.1811 15.9545 21.8103 15.5938 21.8103 15.1429C21.8103 14.692 22.1811 14.3313 22.6446 14.3313C23.108 14.3313 23.4788 14.692 23.4788 15.1429Z"
                    fill="#040707"
                  />
                </svg>

                <svg
                  width="36"
                  height="38"
                  viewBox="0 0 36 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="18" cy="19" rx="18" ry="18.5" fill="white" />
                  <path
                    d="M18.9996 16.6954V15.4329C18.9996 14.8918 19.0923 14.5311 19.9266 14.5311H21.1316V12.3669H19.185C16.8677 12.3669 16.0334 13.449 16.0334 15.2526V16.6052H14.5503V18.7695H16.0334V25.2624H18.9996V18.8597H20.9462L21.2243 16.6954H18.9996Z"
                    fill="#040707"
                  />
                </svg> */}

                <button>TWITTER</button>

                <svg
                  width="9"
                  height="20"
                  viewBox="0 0 9 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.548293 10L4.5 1.21843L8.45171 10L4.5 18.7816L0.548293 10Z"
                    stroke="#CEAF7A"
                  />
                </svg>

                <button>FACEBOOK</button>

                <svg
                  width="9"
                  height="20"
                  viewBox="0 0 9 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.548293 10L4.5 1.21843L8.45171 10L4.5 18.7816L0.548293 10Z"
                    stroke="#CEAF7A"
                  />
                </svg>

                <button>INSTAGRAM</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const mobileNavRef = useRef();

  const handleShowNav = () => {
    setShowMobileNav(true);
    // gsap.fromTo(mobileNavRef, { x: -500, opacity: 0 }, { x: 0, opacity: 1 });
  };

  return (
    <header class="header h-[80px] md:h-[100px] fixed w-full z-20 top-0 left-0 right-0 md:backdrop-blur-md">
      {/* <div className="h-full w-full absolute border border-green-700 blur-md -z-10"></div> */}
      <nav class="relative flex justify-between h-full items-center w-[90%] mx-auto">
        <div>
          <div className="z-20 hidden md:block">
            <button onClick={handleShowNav}>
              <HamburgerMenu />
            </button>
          </div>

          <div ref={mobileNavRef}>
            {showMobileNav && (
              <MobileNav
                showMobileNav={showMobileNav}
                setShowMobileNav={setShowMobileNav}
              />
            )}
          </div>
        </div>

        <div class="relative md:absolute md:left-1/2 md:-translate-x-1/2 w-[131px] h-[20px] mx-auto md:mx-0">
          <Image src="/images/mobile-logo.png" alt="logo" fill />
        </div>

        <div class="hidden md:block">
          <button class="border border-white text-white h-[50px] w-[186px] flex items-center justify-center py-2 mx-auto font-medium text-sm">
            EXPLORE MORE
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
