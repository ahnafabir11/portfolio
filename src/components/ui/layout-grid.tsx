"use client";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

type Card = {
  id: number;
  image: string;
  className?: string;
  content?: JSX.Element | React.ReactNode | string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="gap-4 grid grid-cols-1 md:grid-cols-3 mx-auto w-full h-full">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "cursor-pointer")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "aspect-4/3 w-full md:w-4/5 flex flex-col justify-center items-center flex-wrap rounded-lg cursor-pointer absolute inset-0 m-auto z-50"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <BlurImage card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        animate={{ opacity: selected?.id ? 0.6 : 0 }}
        className={cn(
          "top-0 left-0 z-10 absolute opacity-1 w-full h-full bg-background",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
      />
    </div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      fill
      alt="thumbnail"
      src={card.image}
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-cover object-center absolute inset-0 h-full w-full transition duration-200",
        loaded ? "blur-none" : "blur-md"
      )}
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="relative z-[60] flex flex-col justify-end bg-transparent shadow-2xl rounded-lg w-full h-full">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative z-[70] px-8 pb-4"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
