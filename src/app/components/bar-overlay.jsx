import React, { useEffect } from "react";
import gsap from "gsap";

const BarOverlay = () => {
  useEffect(() => {
    gsap.to(".bar", {
      delay: 5,
      height: 0,
      duration: 1.5,
      stagger: { amount: 0.5 },
      ease: "power4.inOut",
    });

    gsap.to(".bar-overlay", {
      delay: 6,
      height: 0,
      display: "none",
    });
  }, []);

  return (
    <div className="bar-overlay flex fixed z-20 left-0 top-0 right-0 bottom-0">
      <div className="bar w-[20vw] bg-black"></div>
      <div className="bar w-[20vw] bg-black"></div>
      <div className="bar w-[20vw] bg-black"></div>
      <div className="bar w-[20vw] bg-black"></div>
      <div className="bar w-[20vw] bg-black"></div>
    </div>
  );
};

export default BarOverlay;
