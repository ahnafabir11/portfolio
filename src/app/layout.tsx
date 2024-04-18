import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-liart-eight-42.vercel.app"),
  title: {
    default: "Ahnaf Abir's Portfolio",
    template: "%s | Ahnaf Abir's Portfolio",
  },
  description:
    "Explore Ahnaf Abirs's portfolio. Frontend developer with 2 years' experience. Let's connect and bring your ideas to life!",
  creator: "Md Ahnaf Abir",
  applicationName: "Ahnaf Abir's Portfolio",
  keywords: [
    "Ahnaf Abir",
    "Md Ahnaf Abir",
    "Web developer Ahnaf Abir",
    "Software engineer Ahnaf Abir",
    "Ahnaf Abir portfolio website",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
