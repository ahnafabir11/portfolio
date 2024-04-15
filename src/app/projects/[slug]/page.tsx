"use client";

export const dynamic = "force-static";

import { Badge } from "@/components/ui/badge";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { projectDetails, projectScreenshots, projects } from "@/data/projects";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { toast } from "sonner";

export default function Project({ params }: { params: { slug: string } }) {
  const project = projects.find(({ slug }) => params.slug === slug);

  if (!project) notFound();

  const { slug, title, thumbnail } = project;
  const { links, content } = projectDetails.find((i) => slug === i.slug)!;
  const { screenshots } = projectScreenshots.find((i) => slug === i.slug)!;

  return (
    <main>
      <section className="md:pb-[60rem] w-full overflow-hidden">
        <MacbookScroll title={title} showGradient={false} src={thumbnail} />
      </section>

      <section className="flex flex-wrap justify-center items-center gap-1 mx-auto mb-10 pt-4 container">
        {links.live ? (
          <Link target="_blank" href={links.live}>
            <Badge variant="secondary" className="flex items-center gap-1">
              Live <GlobeIcon className="w-3 h-3" />
            </Badge>
          </Link>
        ) : (
          <Badge
            variant="secondary"
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => toast.warning("Project has not published yet.")}
          >
            Live <GlobeIcon className="w-3 h-3" />
          </Badge>
        )}

        {links.frontend ? (
          <Link target="_blank" href={links.frontend}>
            <Badge variant="secondary" className="flex items-center gap-1">
              FrontEnd <GitHubLogoIcon className="w-3 h-3" />
            </Badge>
          </Link>
        ) : (
          <Badge
            variant="secondary"
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => toast.warning("This is a private repository.")}
          >
            FrontEnd <GitHubLogoIcon className="w-3 h-3" />
          </Badge>
        )}

        {links.backend ? (
          <Link target="_blank" href={links.backend}>
            <Badge variant="secondary" className="flex items-center gap-1">
              BackEnd <GitHubLogoIcon className="w-3 h-3" />
            </Badge>
          </Link>
        ) : (
          <Badge
            variant="secondary"
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => toast.warning("This is a private repository.")}
          >
            BackEnd <GitHubLogoIcon className="w-3 h-3" />
          </Badge>
        )}
      </section>

      <TracingBeam className="px-6 pb-40 overflow-hidden">
        <div className="relative space-y-10 mx-auto pt-4 max-w-2xl antialiased">
          {content.map((item, index) => (
            <div key={`content-${index}`} className="space-y-4">
              <h2 className="bg-black dark:bg-gray-800 px-4 py-1 rounded-full w-fit text-sm text-white">
                {item.badge}
              </h2>
              <p className="text-xl dark:text-white">{item.title}</p>
              <div className="max-w-full text-sm dark:prose-invert prose prose-sm">
                {item?.image && (
                  <Image
                    width="1000"
                    height="1000"
                    src={item.image}
                    alt="blog thumbnail"
                    className="mb-10 rounded-lg object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>

      <section className="mx-auto container">
        <h1 className="scroll-m-20 mt-20 font-extrabold text-4xl text-center lg:text-5xl tracking-tight">
          Screenshorts
        </h1>

        <div className="relative py-20 h-screen">
          <LayoutGrid cards={screenshots} />
        </div>
      </section>
    </main>
  );
}
