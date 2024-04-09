import { Badge } from "@/components/ui/badge";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import Link from "next/link";
import { GlobeIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { LayoutGrid } from "@/components/ui/layout-grid";

export default function Project() {
  return (
    <main>
      <section className="md:pb-[60rem] w-full overflow-hidden">
        <MacbookScroll
          title="UNSOCIAL"
          showGradient={false}
          src="/projects/unsocial/1.jpg"
        />
      </section>

      <section className="flex flex-wrap justify-center items-center gap-1 mx-auto mb-10 pt-4 container">
        <Badge variant="secondary">
          <Link
            href="https://github.com/ahnafabir11/unsocial-next-fe"
            target="_blank"
            className="flex items-center gap-1"
          >
            FrontEnd <GitHubLogoIcon className="w-3 h-3" />
          </Link>
        </Badge>
        <Badge variant="secondary">
          <Link
            href="https://github.com/ahnafabir11/unsocial-express-be"
            target="_blank"
            className="flex items-center gap-1"
          >
            BackEnd <GitHubLogoIcon className="w-3 h-3" />
          </Link>
        </Badge>
        <Badge variant="secondary">
          <Link
            href="https://github.com/ahnafabir11/unsocial-next-fe"
            target="_blank"
            className="flex items-center gap-1"
          >
            Live <GlobeIcon className="w-3 h-3" />
          </Link>
        </Badge>
      </section>

      <TracingBeam className="px-6 pb-40 overflow-hidden">
        <div className="relative space-y-10 mx-auto pt-4 max-w-2xl antialiased">
          {dummyContent.map((item, index) => (
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

        <div className="relative py-20 h-screenz">
          <LayoutGrid cards={cards} />
        </div>
      </section>
    </main>
  );
}

const dummyContent = [
  {
    badge: "Introduction",
    image: "/projects/unsocial/1.jpg",
    title: "Welcome to Unsocial",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
          reprehenderit deserunt amet laborum consequat adipisicing officia qui
          irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
          Amet culpa officia aliquip deserunt veniam deserunt officia
          adipisicing aliquip proident officia sunt.
        </p>
      </>
    ),
  },
  {
    badge: "Tech Stack",
    image: "/projects/unsocial/2.jpg",
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
  },
  {
    badge: "Features",
    image: "/projects/unsocial/3.jpg",
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
  },
];

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="my-4 max-w-lg font-normal text-base text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};
const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="my-4 max-w-lg font-normal text-base text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="my-4 max-w-lg font-normal text-base text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="my-4 max-w-lg font-normal text-base text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="my-4 max-w-lg font-normal text-base text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="my-4 max-w-lg font-normal text-base text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonSeven = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="my-4 max-w-lg font-normal text-base text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/projects/unsocial/5.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/projects/unsocial/6.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/projects/unsocial/7.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/projects/unsocial/1.jpg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "col-span-1",
    thumbnail: "/projects/unsocial/4.jpg",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "col-span-1",
    thumbnail: "/projects/unsocial/3.jpg",
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "md:col-span-2",
    thumbnail: "/projects/unsocial/2.jpg",
  },
];
