"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for fluid agency feel
  const springConfig = { damping: 25, stiffness: 350, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices to ensure native mobile accessibility
    const checkTouch = () => {
      if (
        typeof window !== "undefined" &&
        (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window)
      ) {
        setIsTouchDevice(true);
      }
    };
    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverElements = () => {
      const interactiveTargets = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .interactive-hover'
      );

      interactiveTargets.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovered(true));
        el.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    handleHoverElements();

    const observer = new MutationObserver(handleHoverElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Magnetic Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-champagne-400/50 pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 52 : isClicked ? 24 : 32,
          height: isHovered ? 52 : isClicked ? 24 : 32,
          backgroundColor: isHovered
            ? "rgba(212, 175, 55, 0.12)"
            : isClicked
            ? "rgba(212, 175, 55, 0.25)"
            : "rgba(212, 175, 55, 0)",
          borderColor: isHovered
            ? "rgba(212, 175, 55, 0.9)"
            : "rgba(212, 175, 55, 0.45)",
          scale: isClicked ? 0.85 : 1,
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      />

      {/* Center Precise Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-champagne-400 pointer-events-none shadow-[0_0_10px_rgba(212,175,55,0.9)]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0.4 : isClicked ? 1.6 : 1,
          opacity: isHovered ? 0.3 : 1,
        }}
        transition={{ duration: 0.12 }}
      />
    </div>
  );
}
