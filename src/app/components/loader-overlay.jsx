"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";

const LottieC = dynamic(() => import("lottie-react"), {
  ssr: false,
});

import loaderAnimation from "../../../loader-animation.json";
const LoaderOverlay = () => {
  useEffect(() => {
    gsap.to(".overlay", { opacity: 0, duration: 0.25, delay: 5, zIndex: 0 });
  }, []);

  return (
    <div className="overlay fixed left-0 right-0 bottom-0 top-0 z-30 bg-black h-screen w-screen flex items-center justify-center">
      <LottieC animationData={loaderAnimation} loop={false} />
    </div>
  );
};

export default LoaderOverlay;
