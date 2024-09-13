"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useMediaQuery } from "usehooks-ts";
import { Instrument_Serif } from "next/font/google";

import Header from "./components/header";
import Footer from "./components/footer";
import LoaderOverlay from "./components/loader-overlay";
import BarOverlay from "./components/bar-overlay";

const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const section1BlurDataUrl =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAOGAnUDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBv/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDkQFYFRQABQABUUAABUUAAABVUAAAAAAAAAAAAAAAEAAAQQABFQBFQBFQBFQAAEAAAQQAAAAAABQAAABQAAAFRQAAAFAAAAGgEQVFEABQABUUAABUUAAAAVQFAAAAAAAAAAAAAAEAAAQQABFQBFQBFQBFQAAEAAAQQAAAAAABQAAABQAAAFRQAAAFAAAAGgEQVFAAAAAVFAAAVFAAAAFUBQAAAAAAAAAAAABAAAARAAAQAEVAEVAEVAAAQAABBAAAAAAAFAAAAFAAAAVFAAAAUAAAAaARBUAUAAAAAFAAABQAAAUBVAAAAAAAAAAAAEVAAAEVEAAEAARUARUARUAABAEAAEAFABAAAAABQABQAAAFQBQAAAAFAAGgEQABRFAAAABQAAAURQAFUVFAAAAAAAAAAAAAQAAAEVEAAEAARUARUARUAABAEAEAAAAAAAAAAUAAURQAAAAUAAAABQABoBEAAAAUAAAFEUAABUAUAUVBRQAAAAAAAAAAQAAABBAAAQAAEAARUARUAABAEBFQAAUAEABQAQAUAAFRQAAAAURQAAAAAAaAEAAAAFQBQAFRQAAAAURRQBQVAFEVAAUAABAAAAAAEQAAEVAAAQAEABAAAQUAQEVAABAAUAAAAAEAFAAFAAAAVAFAAAAABoAQAAAAABRFAVAFAAAAVFFAFABAAUAAAAAAAAAAEBAAAQAEVAAAQAEAFEVEAABFQAAAAAAAAAAQAUAAURQAAAAURQAAAAaEUQAAAAAAVFAAAVFAAAAFUAAAAAABQAAAAAABEAAAEAAAQAAQAAVAAEVEAAEAAAAAAAAAAAAAVAABUAUAAAAABUAUQBoAQVAFEUAAAAFAAABRFAAFAAUQBQAAAAFAAAQAAQAAEAAAEAFEVAEVAAAEBAABAAAAAAAAAAAAABABQAAVFAAAAAAAABoAQAAABRFAAAVAFAAAFUAAAAAAAAAAAABQAQAAAQAAURUAABAAEAAAEAQEVAAAAAAAAAAAAAAAAFQAAABRFAAAAAABoRRAAAABUAUAAABUAUAUVAFAAAAAAAAAAAAAABAAAAQUAARUAABAAEVEAABAAAAAAAAAAAAAAAAAEAFAAAABUAUQBRAGgBAAFEAUABUAUAAABUUUAAABRAFEAUAAAAAAEAAAAFEAAAEAARUAABAEAAEAAAAAAAAAAAAAAAAAAAEAFAAAAAAAAGgBAAAABUUAABUAUAAAVRFAAAAAAAAAVAAAAAAAUQAAAEAAEAAABAAEBFQAAAAAAAAAAAAAAAAAAAAAAQAUAAAAAAaAEAAAAAAURQAAFQFUAAAAAFEAURQAAAAAABAAAUAARUAAAQAAAEAABBAAAAAAAAEAAAAAFEUAAAAAAAAAAQAAAAABoQEURQAFAAAABUBVAAVAFEUAAAAAAAAFQAAAABQABAAAAQAAAEVAAEBFQAAAAAABAAAAAAAAABRFAAAAAAAAAAAAEAAUAAAABRRAFAAAAVAFAAAAABRAFAAAAAAAFBAAAAABAAAABAAEAEAAAAAAARUAAAAAAAAAAAABRFAAAAAAAAAAAABQBAAAAABQABRFAAAABRAFEUAAAAAAAAAAUAABAVAAAABAAEAABAAAAAABAAAAAAAAAAAAAAAAAUQBQAAAAAAAAAUQEUQBQAAAAAFQUUQBQAAAAAUQBRAFEBVEAUQBUAAAAAAEAAAAQEAAAAAAAEAAAAAAAAAAAAAAAAAAAAVAFEUAAAAAAAAQAAABRAFEUAAABQAAVAFEAUAAAAAUAAAAAABAVAAAAAQEAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAVAFEAUAAAQAAAAAAABRBRRFAAAAAVAVRAFEAUQBUAAAAAABABAVAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAQAAAAAAVAFAVQAAAAAAAAAAEQUQBUAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUAUQBRAFAAAAAAAAAAAAAAAAAAAAAAAAEAVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVAFEAUQBRAFEAUQBRAFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUEFAQUBBQEFAQUBBQEFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBBQEUAAAAAAAAAAAAAAAAAAAAAEUBBUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAQUBBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAABAAUAABQRQAAAAAAAAARQEFAQAAAAAAAAABFAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAEAAABQAAFVABFAFAAAAAAAAABAAAABBUAAAAAAAAARUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAABAAAAAAABQBQABQAQAFAAAAAAAAAAAEAAAAEFQAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQBAAABQAAAABQAAAAAAAAAABQAAUABBQEAAAQAAAAQAAAAAAABFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAVAAAAAAAABQAAAAAAABQABQAQAAAAAFAAQVEAAAABFQAAAAAABFAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAVABAAAAUFAAAAAAAAFAAAAAAAAAAAAAAFEUQQAAABFAQAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQBAAABQBQAAAAAAAAFAAAAAAAAAAAUAAAEABRFRAAAABAAAAAAAAEVAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAQAUAAUAAAAAAABUUAAAAAAAAAAAAAAUAAAEEVEUAAABBUAAAAAAARUAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAFQAAVFAAAAAAAAAUAAAAAAAAAAAAAAAABQAQARUAAAARUAAAAAAARUAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAFQABQAAAAAAAAAUAAAAAAAAAAAAAAAAAUAEABUAQAAEVAAAAAAAEVAAAAAAAAAAAAAAAAAAAAAAAFRQAAAAAAAFQABQEABQAAAAABQAAAAAAAAAAAAAAAAAAAABUAQAAEAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAf/Z";

  const section2BlurDataUrl =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAlACUDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAQFAwEC/8QAHRAAAgIDAQEBAAAAAAAAAAAAAAIBIQMEETESIv/EABgBAQADAQAAAAAAAAAAAAAAAAMAAQIE/8QAHBEBAQACAgMAAAAAAAAAAAAAAAECIQMREjFB/9oADAMBAAIRAxEAPwD2nowq0YY/RzGtAWmsZOtCOwvpUdaENhfQu9mw0lOv6A2dbAWF7O4nsfxPHCFhz36P489elWOe6UHeOE/YeLOvsV6IbGxEdsOTbeLjvHQEG2ZmaAeYl8a867z9c6UEeeABBcvsZHnhO2HmX4AGfq+Jh0AAsr//2Q==";

  const librarySectionRef = useRef(null);
  const restaurantSectionRef = useRef(null);
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const librarySection = librarySectionRef.current;
    const restaurantSection = restaurantSectionRef.current;

    const handleLibrarySectionMouseEnter = () => {
      if (matches) {
        gsap.to(librarySection, { width: "80%", duration: 0.5 });
        gsap.to(restaurantSection, { width: "20%", duration: 0.5 });
      } else {
        gsap.to(librarySection, { height: "80%", duration: 0.5 });
        gsap.to(restaurantSection, { height: "20%", duration: 0.5 });
      }

      gsap.to(".restaurant_section_text-content", {
        opacity: 0,
        duration: 0.5,
      });

      gsap.fromTo(
        ".library_section-btn",
        { opacity: 0, y: 100, display: "block" },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        }
      );
    };

    const handleLibrarySectionMouseLeave = () => {
      if (matches) {
        gsap.to(librarySection, { duration: 0.5, width: "50%" });
        gsap.to(restaurantSection, { width: "50%", duration: 0.5 });
      } else {
        gsap.to(librarySection, { duration: 0.5, height: "50%" });
        gsap.to(restaurantSection, { height: "50%", duration: 0.5 });
      }

      gsap.to(".restaurant_section_text-content", {
        opacity: 1,
        duration: 0.5,
      });

      gsap.fromTo(
        ".library_section-btn",
        { opacity: 1 },
        {
          opacity: 0,
          display: "none",
          duration: 0.5,
        }
      );
    };

    const handleRestaurantSectionMouseEnter = () => {
      if (matches) {
        gsap.to(restaurantSection, { width: "80%", duration: 0.5 });
        gsap.to(librarySection, { width: "20%", duration: 0.5 });
      } else {
        gsap.to(restaurantSection, { height: "80%", duration: 0.5 });
        gsap.to(librarySection, { height: "20%", duration: 0.5 });
      }

      gsap.to(".library_section_text-content", {
        opacity: 0,
        duration: 0.5,
      });

      gsap.fromTo(
        ".restaurant_section_btn",
        { opacity: 0, y: 100, display: "block" },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        }
      );
    };

    const handleRestaurantSectionMouseLeave = () => {
      if (matches) {
        gsap.to(restaurantSection, { duration: 0.5, width: "50%" });
        gsap.to(librarySection, { width: "50%", duration: 0.5 });
      } else {
        gsap.to(restaurantSection, { duration: 0.5, height: "50%" });
        gsap.to(librarySection, { height: "50%", duration: 0.5 });
      }

      gsap.to(".library_section_text-content", {
        opacity: 1,
        duration: 0.5,
      });

      gsap.fromTo(
        ".restaurant_section_btn",
        { opacity: 1 },
        {
          opacity: 0,
          display: "none",
          duration: 0.5,
        }
      );
    };

    librarySection.addEventListener(
      "mouseenter",
      handleLibrarySectionMouseEnter
    );
    librarySection.addEventListener(
      "mouseleave",
      handleLibrarySectionMouseLeave
    );
    restaurantSection.addEventListener(
      "mouseenter",
      handleRestaurantSectionMouseEnter
    );
    restaurantSection.addEventListener(
      "mouseleave",
      handleRestaurantSectionMouseLeave
    );

    gsap.fromTo(
      ".h1-chars",
      { opacity: 0, y: 200 },
      {
        delay: 6,
        opacity: 1,
        duration: 1.5,
        y: 0,
        stagger: { amount: 0.5 },
        ease: "power4.inOut",
      }
    );

    return () => {
      librarySection.removeEventListener(
        "mouseenter",
        handleLibrarySectionMouseEnter
      );
      librarySection.removeEventListener(
        "mouseleave",
        handleLibrarySectionMouseLeave
      );
      librarySection.removeEventListener(
        "mouseenter",
        handleRestaurantSectionMouseEnter
      );
      librarySection.removeEventListener(
        "mouseleave",
        handleRestaurantSectionMouseLeave
      );
    };
  }, []);

  const SplitText = ({ text, className = "" }) => {
    return (
      <div className="flex">
        {text.split("").map((char, i) => {
          if (char === " ") return <span key="i">&nbsp;</span>;
          return (
            <span key={i} className={`${className} relative`}>
              {char}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <LoaderOverlay />

      <BarOverlay />

      <Header />

      <main>
        <div class="w-full h-screen flex flex-col md:flex-row">
          <div
            ref={librarySectionRef}
            class="md:w-6/12 h-[50%] md:h-screen flex items-center justify-center bg-gray-200 relative"
          >
            <Image
              src={section1BlurDataUrl}
              alt="section1Blur"
              className="w-full h-full"
              fill
            />

            <Image
              src="/images/image-1.jpg"
              alt="left-section-image"
              fill
              className="object-cover w-full h-full"
            />

            <div class="library_section_text-content text-white text-center z-10">
              <div class="md:text-2xl">Where Music Sets You Free!</div>

              <h1 class="text-4xl flex justify-center md:text-[80px] font-light md:mt-5">
                <SplitText
                  text="THE LIBRARY"
                  className={`h1-chars ${instrumentSerif.className}`}
                />
              </h1>

              <button class="library_section-btn hidden border border-white md:h-[50px] w-[186px] items-center justify-center py-2 mx-auto font-medium md:mt-14 mt-4 text-sm md:text-base">
                EXPLORE MORE
              </button>
            </div>
          </div>

          <div
            ref={restaurantSectionRef}
            class="section-2 w-full md:w-6/12 h-[50%] md:h-screen ml-auto flex items-center justify-center relative overflow-x-hidden bg-gray-300"
          >
            <Image
              src={section2BlurDataUrl}
              alt="section2Blur"
              className="w-full h-full"
              fill
            />

            <Image
              src="/images/image-2.png"
              alt="right-section-image"
              fill
              className="object-cover w-full h-full"
            />

            <div class="restaurant_section_text-content text-white text-center z-10">
              <div class="md:text-2xl text-center">
                Savor the Moment, Taste the Experience
              </div>

              <h1 class="text-4xl flex justify-center md:text-[80px] font-light md:mt-5">
                <SplitText
                  text="RESTAURANT"
                  className={`h1-chars ${instrumentSerif.className}`}
                />
              </h1>

              <button class="restaurant_section_btn hidden border border-white md:h-[50px] w-[186px] items-center justify-center py-2 mx-auto font-medium md:mt-14 mt-4 text-sm md:text-base">
                EXPLORE MORE
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
