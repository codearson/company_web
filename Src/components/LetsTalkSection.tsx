import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const LetsTalkSection = () => {
  const [result, setResult] = useState("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setResult("Sending...");
    const formData = new FormData();
    formData.append("access_key", "d1d07edd-5dad-4511-a5fa-7d50945e6cc0");
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      toast.success("Message sent successfully!");
      setResult("Form Submitted Successfully");
      form.reset();
      setTimeout(() => {
        setResult("");
      }, 5000);
    } else {
      console.error("Error", data);
      setResult(data.message);
    }
  }

  return (
    <section className="relative py-12 bg-gaming-dark overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          <div className="w-full space-y-6 text-center">
            <h2 className="text-[40px] md:text-[60px] font-black bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-gradient bg-300% tracking-tight">
              Let&apos;s Talk
            </h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative max-w-md mx-auto mt-8">
              <div className="relative bg-gradient-to-b from-gaming-dark/95 to-gaming-dark/80 backdrop-blur-lg p-8 rounded-tl-[40px] rounded-br-[40px] rounded-tr-xl rounded-bl-xl border border-purple-500/30 shadow-xl shadow-purple-500/10">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-purple-300 font-medium">Name</FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-gaming-dark/50 border-purple-500/30" placeholder="Your name" autoComplete="name" />
                        </FormControl>
                        <FormMessage className="text-pink-400" />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-purple-300 font-medium">Email</FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-gaming-dark/50 border-purple-500/30" placeholder="your@email.com" autoComplete="email" />
                        </FormControl>
                        <FormMessage className="text-pink-400" />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-purple-300 font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea {...field} className="bg-gaming-dark/50 border-purple-500/30 min-h-[120px]" placeholder="Write your message here..." autoComplete="off" />
                        </FormControl>
                        <FormMessage className="text-pink-400" />
                      </FormItem>
                    )} />
                    <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
                      Send Message
                    </Button>
                  </form>
                </Form>
                {result && <div className="text-center text-purple-300 mt-4">{result}</div>}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalkSection;
