"use client";
import React from "react";
import { useState, useEffect } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
import { toTopScroll } from "@/utils/toTopScroll";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toogleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    }
    if (window.scrollY < 300) {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toogleVisibility);
    return () => {
      window.removeEventListener("scroll", toogleVisibility);
    };
  }, []);
  return (
    <div className="container mx-auto pointer-events-none flex justify-end fixed bottom-8 z-[300]">
      <button
        className={`pointer-events-auto w-[40px] h-[40px] z-[999] ${
          isVisible ? "opacity-100" : "opacity-0"
        } hover:scale-105 transition-all`}
        onClick={toTopScroll}
      >
        <FaCircleArrowUp size={40} color="#688595" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
