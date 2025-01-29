import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Layers, Smartphone, Brain, Cloud } from "lucide-react";

const services = [
  {
    title: "Full Stack Development",
    description: "End-to-end development solutions combining frontend and backend technologies to create robust, scalable applications.",
    icon: Layers,
    gradient: "from-[#FF6B6B] to-[#4ECDC4]",
  },
  {
    title: "Mobile Application",
    description: "Native and cross-platform mobile app development delivering seamless experiences across iOS and Android devices.",
    icon: Smartphone,
    gradient: "from-[#A8E6CF] to-[#3BB4C1]",
  },
  {
    title: "Machine Learning",
    description: "Advanced AI solutions and machine learning algorithms to transform data into intelligent insights and automation.",
    icon: Brain,
    gradient: "from-[#FFD93D] to-[#FF6B6B]",
  },
  {
    title: "Cloud Enablement",
    description: "Comprehensive cloud solutions for scalable, secure, and efficient deployment of your applications.",
    icon: Cloud,
    gradient: "from-[#6C63FF] to-[#3BB4C1]",
  },
];

const ServiceSection = () => {
  return (
    <section className="bg-gaming-dark py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gaming-primary/5 to-gaming-dark" />
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gaming-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gaming-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 relative tracking-tight">
            <span className="relative inline-block">
              <span className="absolute inset-0 blur-lg bg-gaming-primary/50 animate-pulse" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-gaming-primary via-gaming-accent to-gaming-light">
                What We Do
              </span>
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Empowering businesses with cutting-edge technology solutions and innovative development services.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="h-full bg-gaming-dark/50 backdrop-blur-sm border border-gaming-primary/20 hover:border-gaming-primary/40 transition-all duration-300">
                <CardHeader>
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 transform group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-gaming-light text-2xl font-black tracking-tight text-center group-hover:text-gaming-accent transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-center group-hover:text-gray-300 transition-colors font-medium leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;