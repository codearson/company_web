interface DesktopMenuItemProps {
  label: string;
  onClick: () => void;
}

export const DesktopMenuItem = ({ label, onClick }: DesktopMenuItemProps) => (
  <button
    onClick={onClick}
    className="text-white font-medium tracking-wide text-base hover:text-gaming-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-gaming-primary after:transition-all after:duration-300 hover:after:w-full"
  >
    {label}
  </button>
);