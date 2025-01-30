import { Mail } from "lucide-react";

export const SocialLinks = () => (
  <div className="flex items-center space-x-4">
    <a
      href="mailto:lathusanthurairajah@codearson.com"
      className="text-white hover:text-gaming-primary transition-colors"
      aria-label="Email us"
    >
      <Mail size={24} />
    </a>
    <a
      href="https://wa.me/+447440641608"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-gaming-primary transition-colors"
      aria-label="Contact us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-whatsapp"
      >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
      </svg>
    </a>
  </div>
);
