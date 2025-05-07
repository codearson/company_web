import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { MobileMenuItem } from "./navbar/MobileMenuItem";
import { SocialLinks } from "./navbar/SocialLinks";
import { DesktopMenuItem } from "./navbar/DesktopMenuItem";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Services", href: "services" },
    { label: "About", href: "about" },
    { label: "Contact", href: "contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById("hero");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById("hero");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gaming-dark/95 backdrop-blur-sm py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <button
            onClick={handleLogoClick}
            className="hover:scale-105 transition-all duration-300"
          >
            <img 
              src="/uploads/codearsonlogo.png" 
              alt="Codearson Logo" 
              className="h-16 md:h-20 w-auto py-2"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <DesktopMenuItem
                key={item.label}
                label={item.label}
                onClick={() => handleNavigation(item.href)}
              />
            ))}
            <SocialLinks />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden absolute top-full left-0 w-full bg-gaming-dark/95 backdrop-blur-sm py-4"
            >
              <div className="flex flex-col space-y-4 px-4">
                {navItems.map((item) => (
                  <MobileMenuItem
                    key={item.label}
                    label={item.label}
                    onClick={() => handleNavigation(item.href)}
                  />
                ))}
                <motion.div
                  className="flex space-x-4 pt-2"
                  variants={{
                    closed: { opacity: 0, y: -10 },
                    open: { opacity: 1, y: 0 },
                  }}
                >
                  <SocialLinks />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;