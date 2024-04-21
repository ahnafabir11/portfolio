import { FloatingNav } from "@/components/ui/floating-navbar";
import { HomeIcon, BackpackIcon, ChatBubbleIcon } from "@radix-ui/react-icons";

export default function Navigation() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <HomeIcon className="w-4 h-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: (
        <BackpackIcon className="w-4 h-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <ChatBubbleIcon className="w-4 h-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return <FloatingNav navItems={navItems} />;
}
