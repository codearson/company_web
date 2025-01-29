import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Message sent successfully!");
    form.reset();
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
              className="relative max-w-md mx-auto mt-8"
            >
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500/10 rounded-tl-[80px] rounded-br-[20px]" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-500/10 rounded-br-[80px] rounded-tl-[20px]" />
              
              <div className="relative bg-gradient-to-b from-gaming-dark/95 to-gaming-dark/80 backdrop-blur-lg p-8 rounded-tl-[40px] rounded-br-[40px] rounded-tr-xl rounded-bl-xl border border-purple-500/30 shadow-xl shadow-purple-500/10">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-purple-300 font-medium">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              {...field} 
                              className="bg-gaming-dark/50 border-purple-500/30 focus:border-purple-400 transition-colors placeholder:text-purple-300/50 text-purple-100"
                            />
                          </FormControl>
                          <FormMessage className="text-pink-400" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-purple-300 font-medium">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="your@email.com" 
                              {...field} 
                              className="bg-gaming-dark/50 border-purple-500/30 focus:border-purple-400 transition-colors placeholder:text-purple-300/50 text-purple-100"
                            />
                          </FormControl>
                          <FormMessage className="text-pink-400" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-purple-300 font-medium">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Write your message here..." 
                              {...field} 
                              className="bg-gaming-dark/50 border-purple-500/30 focus:border-purple-400 transition-colors placeholder:text-purple-300/50 text-purple-100 min-h-[120px] resize-none"
                            />
                          </FormControl>
                          <FormMessage className="text-pink-400" />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 rounded-tl-2xl rounded-br-2xl"
                    >
                      Send Message
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-400 rounded-full filter blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-pink-400 rounded-full filter blur-3xl animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalkSection;