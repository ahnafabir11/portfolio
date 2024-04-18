import ContactForm from "@/app/contact/contact-form";
import { WavyBackground } from "@/components/ui/wavy-background";
import ContactGlobe from "./contact-globe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Ahnaf Abir for collaboration opportunities. Reach out via contact form or social media. Let's start a conversation!",
};

export default function Contact() {
  return (
    <main className="mx-auto py-8 h-screen container">
      <WavyBackground
        speed="slow"
        containerClassName="h-full w-full"
        className="flex lg:flex-row flex-col-reverse justify-between items-center gap-4 w-full h-full lg:h-auto"
      >
        <div className="flex-1 h-full">
          <ContactGlobe />
        </div>

        <div className="flex-1">
          <ContactForm className="bg-black bg-opacity-75 mx-auto w-full max-w-md" />
        </div>
      </WavyBackground>
    </main>
  );
}
