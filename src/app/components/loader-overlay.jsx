"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useMediaQuery } from "usehooks-ts";

const LottieC = dynamic(() => import("lottie-react"), {
  ssr: false,
});

import loaderAnimation from "../../../loader-animation.json";

const LoaderOverlay = () => {
  useEffect(() => {
    gsap.to(".overlay", { opacity: 0, duration: 0.25, delay: 5, zIndex: 0 });
  }, []);

  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <div className="overlay fixed left-0 right-0 bottom-0 top-0 z-30 bg-black h-screen w-screen flex items-center justify-center">
      <img src="/images/library-1.gif" className="md:hidden" alt="" />

      <div className="hidden md:flex items-center justify-center">
        <LottieC
          animationData={JSON.parse(JSON.stringify(loaderAnimation))}
          loop={false}
        />
      </div>
    </div>
  );
};

export default LoaderOverlay;
