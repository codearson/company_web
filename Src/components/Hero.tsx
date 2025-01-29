import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Globe, Cpu } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const x3 = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const cardsOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.5;
        heroRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[100vh] bg-white overflow-hidden">
      {/* Dynamic background with gradient overlay */}
      <div
        ref={heroRef}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=3882&auto=format&fit=crop')] 
        bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 
        before:bg-gradient-to-br before:from-[#8B5CF6]/30 before:via-[#D946EF]/20 before:to-[#1EAEDB]/30"
      />

      <div className="absolute inset-0 opacity-40">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#0FA0CE] rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div ref={containerRef} className="relative container mx-auto px-4 pt-20 md:pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            style={{ x: x1, opacity }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 animate-fade-in"
          >
            <span className="font-black text-white drop-shadow-lg">Transform Your</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] via-[#D946EF] to-[#8B5CF6] font-black hover:scale-105 transition-transform duration-300">
              Digital Vision
            </span>{" "}
            <span className="font-black text-white drop-shadow-lg">Into Reality</span>
          </motion.div>

          <motion.div
            style={{ x: x2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 mb-12"
          >
            <h2 className="text-xl md:text-2xl font-black text-[#0FA0CE] animate-fade-in tracking-wider drop-shadow-lg">
              Innovate • Create • Transform
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ opacity: cardsOpacity }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            {/* Web Development Card */}
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
              <div className="flex flex-col items-center">
                <div className="p-4 rounded-full bg-[#0FA0CE]/10 group-hover:bg-[#0FA0CE]/20 transition-colors duration-300">
                  <Code className="w-8 h-8 text-[#0FA0CE]" />
                </div>
                <h3 className="text-xl font-bold text-white mt-4 tracking-wide drop-shadow-lg">Web Development</h3>
              </div>
            </div>

            {/* Digital Solutions Card */}
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
              <div className="flex flex-col items-center">
                <div className="p-4 rounded-full bg-[#0FA0CE]/10 group-hover:bg-[#0FA0CE]/20 transition-colors duration-300">
                  <Globe className="w-8 h-8 text-[#0FA0CE]" />
                </div>
                <h3 className="text-xl font-bold text-white mt-4 tracking-wide drop-shadow-lg">Digital Solutions</h3>
              </div>
            </div>

            {/* Tech Innovation Card */}
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
              <div className="flex flex-col items-center">
                <div className="p-4 rounded-full bg-[#0FA0CE]/10 group-hover:bg-[#0FA0CE]/20 transition-colors duration-300">
                  <Cpu className="w-8 h-8 text-[#0FA0CE]" />
                </div>
                <h3 className="text-xl font-bold text-white mt-4 tracking-wide drop-shadow-lg">Tech Innovation</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gaming-dark to-transparent" />
    </div>
  );
};

export default Hero;