import { motion } from "framer-motion";

interface MobileMenuItemProps {
  label: string;
  onClick: () => void;
}

const itemVariants = {
  closed: { opacity: 0, y: -10 },
  open: { opacity: 1, y: 0 },
};

export const MobileMenuItem = ({ label, onClick }: MobileMenuItemProps) => (
  <motion.button
    onClick={onClick}
    className="text-white font-medium tracking-wide text-base hover:text-gaming-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-gaming-primary after:transition-all after:duration-300 hover:after:w-full text-left"
    variants={itemVariants}
    whileHover={{ x: 10 }}
  >
    {label}
  </motion.button>
);