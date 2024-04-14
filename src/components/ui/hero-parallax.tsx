"use client";
import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import React from "react";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 10 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 0.8]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="relative flex flex-col py-40 h-[300vh] antialiased [transform-style:preserve-3d] overflow-hidden self-auto [perspective:1000px]"
    >
      <Header />
      <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
        <motion.div className="flex flex-row-reverse space-x-20 space-x-reverse mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              key={product.title}
              translate={translateX}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-20 mb-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              key={product.title}
              translate={translateXReverse}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-20 space-x-reverse">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              key={product.title}
              translate={translateX}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="relative top-0 left-0 z-10 mx-auto px-4 py-20 md:py-40 w-full max-w-7xl">
      <h1 className="font-bold text-4xl md:text-7xl">
        Web Dev <br /> Case Studies
      </h1>

      <p className="mt-8 max-w-2xl text-sm md:text-xl">
        Welcome to my portfolio showcase! Below, you&apos;ll find a curated
        selection of projects that showcase my skills and expertise as a web
        developer. Each project represents a unique challenge and an opportunity
        for creative problem-solving. Take your time exploring and feel free to
        reach out with any questions or feedback.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      key={product.title}
      style={{ x: translate }}
      className="relative flex-shrink-0 w-[30rem] h-96 group/product"
    >
      <Image
        width="600"
        height="600"
        alt={product.title}
        src={product.thumbnail}
        className="absolute inset-0 w-full h-full object-center object-cover"
      />
    </motion.div>
  );
};
