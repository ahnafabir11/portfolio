import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { FollowerPointerCard } from "./ui/following-pointer";

interface ProjectCardProps {
  link: string;
  image: string;
  title: string;
  description: string;
}

export default function ProjectCard({
  link,
  title,
  image,
  description,
}: ProjectCardProps) {
  return (
    <FollowerPointerCard
      title={<TitleComponent title="You" avatar="/images/avatar.png" />}
    >
      <Link
        href={link}
        className="block relative hover:shadow-xl border rounded-2xl w-fit h-full no-underline transition duration-200 cursor-none overflow-hidden group"
      >
        <div className="relative rounded-tl-lg rounded-tr-lg aspect-w-16 w-full xl:aspect-w-16 aspect-h-10 xl:aspect-h-10 overflow-hidden">
          <Image
            src={image}
            width={320}
            height={200}
            alt="thumbnail"
            className="group-hover:scale-95 group-hover:rounded-2xl transform transition duration-200 object-cover"
          />
        </div>

        <div className="space-y-4 p-4">
          <h2 className="font-bold text-lg">{title}</h2>
          <h2 className="text-xs">{description}</h2>

          <Badge variant="secondary" className="flex items-center gap-1 w-fit">
            Learn More <ExternalLinkIcon className="w-3 h-3" />
          </Badge>
        </div>
      </Link>
    </FollowerPointerCard>
  );
}

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex items-center space-x-2">
    <Image
      width="20"
      height="20"
      src={avatar}
      alt="thumbnail"
      className="border-2 border-white rounded-full"
    />
    <p>{title}</p>
  </div>
);
