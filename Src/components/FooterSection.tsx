import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";

const FooterSection = () => {
  const isMobile = useIsMobile();

  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gaming-dark text-white py-8"
    >
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {/* Quick Links Section */}
          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gaming-primary">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p onClick={() => handleNavigation("about")} className="hover:text-gaming-primary transition-colors cursor-pointer">About Us</p>
                <p onClick={() => handleNavigation("services")} className="hover:text-gaming-primary transition-colors cursor-pointer">Services</p>
                <p onClick={() => handleNavigation("contact")} className="hover:text-gaming-primary transition-colors cursor-pointer">Contact</p>
              </div>
              <div className="space-y-2">
                {/* <p className="hover:text-gaming-primary transition-colors cursor-pointer">Blog</p>
                <p className="hover:text-gaming-primary transition-colors cursor-pointer">Careers</p>
                <p className="hover:text-gaming-primary transition-colors cursor-pointer">Help</p> */}
              </div>
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-4">
            <h3 className="text-xl font-bold text-gaming-primary">Connect</h3>
            <div className="flex justify-center space-x-6">
              <Facebook className="w-5 h-5 hover:text-gaming-primary transition-colors cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-gaming-primary transition-colors cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-gaming-primary transition-colors cursor-pointer" />
              <Linkedin className="w-5 h-5 hover:text-gaming-primary transition-colors cursor-pointer" />
              <Mail className="w-5 h-5 hover:text-gaming-primary transition-colors cursor-pointer" />
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center pt-4 border-t border-gaming-secondary"
          >
            <p className="text-sm text-gaming-secondary">
              © 2025 Codearson. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default FooterSection;