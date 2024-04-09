"use client";

import { cn } from "@/utils/cn";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import React, { useEffect, useState } from "react";

export const FollowerPointerCard = ({
  title,
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
  title?: string | React.ReactNode;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState<boolean>(false); // Add this line

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      x.set(e.clientX - rect.left + scrollX);
      y.set(e.clientY - rect.top + scrollY);
    }
  };
  const handleMouseLeave = () => {
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };
  return (
    <div
      ref={ref}
      style={{ cursor: "none" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={cn("relative", className)}
    >
      <AnimatePresence>
        {isInside && <FollowPointer x={x} y={y} title={title} />}
      </AnimatePresence>
      {children}
    </div>
  );
};

export const FollowPointer = ({
  x,
  y,
  title,
}: {
  x: any;
  y: any;
  title?: string | React.ReactNode;
}) => {
  const colors = [
    "var(--sky-500)",
    "var(--neutral-500)",
    "var(--teal-500)",
    "var(--green-500)",
    "var(--blue-500)",
    "var(--red-500)",
    "var(--yellow-500)",
  ];

  return (
    <motion.div
      exit={{ scale: 0, opacity: 0 }}
      initial={{ scale: 1, opacity: 1 }}
      animate={{ scale: 1, opacity: 1 }}
      className="z-50 absolute rounded-full w-4 h-4"
      style={{ top: y, left: x, pointerEvents: "none" }}
    >
      <svg
        width="1em"
        height="1em"
        strokeWidth="1"
        fill="currentColor"
        viewBox="0 0 16 16"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-sky-500 transform -translate-x-[12px] -translate-y-[10px] -rotate-[70deg] stroke-sky-600"
      >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
      </svg>
      <motion.div
        exit={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0.5, opacity: 0 }}
        className="bg-neutral-200 px-2 py-2 rounded-full min-w-max text-white text-xs whitespace-nowrap"
        style={{
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        }}
      >
        {title || "You"}
      </motion.div>
    </motion.div>
  );
};
