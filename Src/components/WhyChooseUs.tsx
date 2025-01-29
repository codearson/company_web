import { motion } from "framer-motion";
import { Award, ShieldCheck, ThumbsUp, Rocket } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Excellence Guaranteed",
    description: "6+ years of delivering exceptional software solutions with proven success stories.",
    gradient: "from-[#FF6B6B] to-[#4ECDC4]",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description: "Enterprise-grade security measures and reliable development practices.",
    gradient: "from-[#A8E6CF] to-[#3BB4C1]",
  },
  {
    icon: ThumbsUp,
    title: "Client Satisfaction",
    description: "98% client satisfaction rate with long-term partnership approach.",
    gradient: "from-[#FFD93D] to-[#FF6B6B]",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Rapid development cycles with consistent on-time delivery.",
    gradient: "from-[#6C63FF] to-[#3BB4C1]",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gaming-dark via-gaming-dark/95 to-gaming-dark">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJzLTItMi00LTJsLTIgMnYtNGwyLTJ')]" />
      <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark via-transparent to-gaming-dark" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="relative inline-block">
              <span className="absolute inset-0 blur-lg bg-gaming-primary/50 animate-pulse" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-br from-[#FF6B6B] via-[#4ECDC4] to-[#FFD93D] animate-pulse">
                Why Choose Us
              </span>
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Experience excellence in software development with our proven track record and innovative solutions.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gaming-primary/10 to-gaming-accent/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-gaming-dark/50 backdrop-blur-sm border border-gaming-primary/20 rounded-xl p-6 h-full hover:border-gaming-primary/40 transition-all duration-300">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 transform group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gaming-light mb-4 text-center group-hover:text-gaming-accent transition-colors tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors font-medium leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;