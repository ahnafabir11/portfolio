"use client";
import BottomGradient from "@/components/bottom-gradient";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

interface ContactFormProps {
  className?: string;
}

const formSchema = z.object({
  firstname: z
    .string()
    .trim()
    .min(1, "firstname has to be at least 1 character!"),
  lastname: z
    .string()
    .trim()
    .min(1, "lastname has to be at least 1 character!"),
  email: z.string().trim().email("invalid email address!"),
  message: z
    .string()
    .trim()
    .min(10, "message has to be at least 10 character!"),
});

export default function ContactForm({ className }: ContactFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(_: z.infer<typeof formSchema>) {
    const toastId = toast.loading("Loading...");
    try {
      // @TODO - Integrate Email Sending Service API
      await new Promise((_, reject) => setTimeout(reject, 1000));
    } catch (e) {
      toast.dismiss(toastId);
      toast.error("Unable to send email!", {
        description:
          "Please consider sending email manually at this moment at ahnafabir313@gmail.com",
      });
    }
  }

  return (
    <div className={cn("shadow-input p-4 md:p-8 rounded-2xl", className)}>
      <h2 className="font-bold md:text-2xl uppercase">Contact Me</h2>

      <p className="mt-2 text-sm md:text-base">
        I&apos;m here to help! Feel free to reach out to me at
        ahnafabir313@gmail.com.
      </p>

      <Form {...form}>
        <form className="space-y-2 pt-8" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex md:flex-row flex-col md:space-x-2 space-y-2 md:space-y-0">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Tyler" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Tyler" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="projectmayhem@fc.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Input placeholder="your message here..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            className="block relative dark:bg-zinc-800 bg-gradient-to-br from-black dark:from-zinc-900 to-neutral-600 dark:to-zinc-900 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] rounded-md w-full h-10 font-medium group/btn"
          >
            Send Email &rarr;
            <BottomGradient />
          </button>
        </form>
      </Form>
    </div>
  );
}
