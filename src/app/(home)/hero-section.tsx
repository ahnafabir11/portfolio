"use client";
import { Spotlight } from "@/components/ui/Spotlight";
import { Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex justify-normal items-center h-screen overflow-hidden">
      <Spotlight
        fill="#a5b4fc"
        className="top-40 sm:top-10 lg:top-40 xl:top-0 left-28 lg:left-60"
      />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [20, -5, 0] }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className="mx-auto px-4 max-w-2xl lg:max-w-4xl font-bold text-2xl text-center md:text-4xl lg:text-5xl leading-relaxed lg:leading-snug"
      >
        Make Your Idea Come Alive With <Highlight>Ahnaf Abir</Highlight>
        &apos;s Expertise.
      </motion.h1>
    </section>
  );
}
