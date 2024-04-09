"use client";
import { Spotlight } from "@/components/ui/Spotlight";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion, useInView, useAnimate } from "framer-motion";
import {
  BackpackIcon,
  FileTextIcon,
  ChatBubbleIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MY_GITHUB_PROFILE_URL, MY_LINKEDIN_PROFILE_URL } from "@/constants";

const words =
  "Hello there! I'm a frontend developer with nearly 2 years of professional experience. Throughout my career, I've successfully delivered production-grade projects, showcasing my expertise in frontend development. While my primary focus lies in frontend technologies, I'm also adept at backend development and have demonstrated my skills through personal projects available on GitHub. Let's connect and bring your ideas to life!";

export default function Home() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (!isInView) return;

    animate(
      scope.current,
      { opacity: 1, y: [20, -5, 0] },
      { delay: 0.2, duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }
    );
  }, [scope.current, isInView]);

  return (
    <main>
      <HeroHighlight className="w-full h-auto" containerClassName="h-auto">
        <section className="relative flex justify-normal items-center h-screen overflow-hidden">
          <Spotlight
            fill="#a5b4fc"
            className="top-40 md:top-0 lg:top-40 xl:top-0 left-0 lg:left-60"
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

        <section className="lg:py-40 pb-20">
          <motion.div
            ref={scope}
            initial={{ opacity: 0, y: 20 }}
            className="gap-20 grid grid-cols-1 md:grid-cols-2 mx-auto container"
          >
            <div className="space-y-6 md:pt-10 lg:pt-20">
              <h3 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-7xl">
                Md Ahnaf Abir
              </h3>

              <TextGenerateEffect
                words={words}
                textClassName="font-light text-sm sm:text-base lg:font-normal xl:text-lg"
              />

              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-1">
                <Button variant="outline" size="icon" asChild>
                  <Link href={MY_GITHUB_PROFILE_URL} target="_blank">
                    <GitHubLogoIcon className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href={MY_LINKEDIN_PROFILE_URL} target="_blank">
                    <LinkedInLogoIcon className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2">
                <HoverBorderGradient
                  as="button"
                  containerClassName="rounded-full"
                  className="flex items-center space-x-2 px-2 lg:px-4 py-1 lg:py-2 text-xs lg:text-base"
                >
                  <BackpackIcon />
                  <Link href="/projects">View Projects</Link>
                </HoverBorderGradient>

                <HoverBorderGradient
                  as="button"
                  containerClassName="rounded-full"
                  className="flex items-center space-x-2 px-2 lg:px-4 py-1 lg:py-2 text-xs lg:text-base"
                >
                  <ChatBubbleIcon />
                  <Link href="/contact">Contact Me</Link>
                </HoverBorderGradient>

                <HoverBorderGradient
                  as="button"
                  containerClassName="rounded-full"
                  className="flex items-center space-x-2 px-2 lg:px-4 py-1 lg:py-2 text-xs lg:text-base"
                >
                  <FileTextIcon />
                  <Link href="/files/Md_Ahnaf_Abir's_Resume.pdf" download>
                    Download Resume
                  </Link>
                </HoverBorderGradient>
              </div>
            </div>

            <div className="relative">
              <DirectionAwareHover
                imageUrl="/images/ahnaf-abir.jpg"
                className="mx-auto w-full max-w-96"
              >
                {null}
              </DirectionAwareHover>
            </div>
          </motion.div>
        </section>
      </HeroHighlight>
    </main>
  );
}
