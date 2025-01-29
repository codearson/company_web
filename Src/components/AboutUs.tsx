import { motion } from "framer-motion";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-gaming-dark py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-gaming-accent mb-20 relative"
        >
          <span className="relative inline-block">
            <span className="absolute inset-0 blur-lg bg-gaming-primary/50 animate-pulse" />
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-gaming-primary via-gaming-accent to-gaming-light animate-pulse">
              ABOUT US
            </span>
          </span>
        </motion.h2>

        <div className="space-y-12">
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white"
            >
              <div className="text-6xl md:text-8xl font-bold mb-2">6 years</div>
              <div className="text-4xl md:text-6xl font-bold text-gaming-accent">
                of excellence
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white"
            >
              <div className="text-6xl md:text-8xl font-bold mb-2">50+</div>
              <div className="text-4xl md:text-6xl font-bold text-gaming-accent">
                products delivered
              </div>
            </motion.div>
          </div>

          {/* Description Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Codearson specializes in the development of custom software, mobile/web
              applications, and the efficient management of data and full-cycle product
              development. We work closely with clients on projects from analysis to
              release, ensuring that the exact needs of the client are met. Our presence
              extends to both Sri Lanka and the UK, allowing us to provide comprehensive
              services and the ability to scale to meet diverse requirements.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SmoothScrollHero;