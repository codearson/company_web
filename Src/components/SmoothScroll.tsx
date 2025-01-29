import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "../hooks/use-mobile";

const SECTION_HEIGHT = 1500;

interface ParallaxImgProps {
  className: string;
  alt: string;
  src: string;
  start: number;
  end: number;
}

const SmoothScroll = () => {
  return (
    <div className="bg-gaming-dark">
      <div style={{ position: 'relative' }}>
        <Hero />
        <Schedule />
      </div>
    </div>
  );
};

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <div
      style={{ height: isMobile ? 'auto' : `calc(${SECTION_HEIGHT}px + 60vh)` }}
      className="relative w-full"
    >
      {!isMobile && (
        <>
          <CenterImage />
          <ParallaxImages />
          <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-gaming-dark/0 to-gaming-dark" />
        </>
      )}
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 300],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 300],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[150px] space-y-12">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Code Development"
        start={-150}
        end={150}
        className="w-1/3 object-cover rounded-lg shadow-lg"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Team Collaboration"
        start={150}
        end={-200}
        className="mx-auto w-2/3 object-cover rounded-lg shadow-lg"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=2650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Innovation Process"
        start={-150}
        end={150}
        className="ml-auto w-1/3 object-cover rounded-lg shadow-lg"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Technology Solutions"
        start={0}
        end={-400}
        className="ml-24 w-5/12 object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }: ParallaxImgProps) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.75, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.75, 1], [1, 1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={`${className} h-[300px]`}
      ref={ref}
      style={{ transform, opacity }}
      loading="eager"
    />
  );
};

const Schedule = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24 text-white">
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-gaming-accent"
      >
        Development Process
      </motion.h1>
      <ScheduleItem
        title="We specialize in modern web development using cutting-edge technologies and best practices for scalable solutions."
      />
      <ScheduleItem
        title="Our collaborative approach ensures clear communication and efficient project management throughout development."
      />
      <ScheduleItem
        title="We deliver maintainable, well-documented code with ongoing support and regular updates to keep your software current."
      />
    </section>
  );
};

const ScheduleItem = ({ title }: { title: string }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 text-xl font-bold text-gray-300"
    >
      <p>{title}</p>
    </motion.div>
  );
};

export default SmoothScroll;