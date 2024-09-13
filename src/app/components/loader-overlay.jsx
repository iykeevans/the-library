"use client";

import Lottie from "lottie-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import loaderAnimation from "../../../loader-animation.json";
const LoaderOverlay = () => {
  const overlayRef = useRef();

  useEffect(() => {
    const overlay = overlayRef.current;

    gsap.to(overlay, { opacity: 0, duration: 0.25, delay: 5, zIndex: 0 });
  }, []);

  return (
    <div
      className="fixed left-0 right-0 bottom-0 top-0 z-30 bg-black h-screen w-screen flex items-center justify-center"
      ref={overlayRef}
    >
      <Lottie animationData={loaderAnimation} loop={true} />
    </div>
  );
};

export default LoaderOverlay;
