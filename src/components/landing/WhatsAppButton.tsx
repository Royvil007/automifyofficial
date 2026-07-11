import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export const WHATSAPP_URL =
  "https://wa.me/2347014216565?text=Hi%2C%20I%27m%20interested%20in%20getting%20an%20AI%20assistant%20for%20my%20real%20estate%20business";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M16.002 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.59 4.46 1.72 6.4L3.2 28.8l6.55-1.71a12.77 12.77 0 0 0 6.25 1.63h.01c7.06 0 12.8-5.73 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05A12.71 12.71 0 0 0 16.002 3.2zm0 23.36h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.89 1.02 1.04-3.79-.25-.4a10.59 10.59 0 0 1-1.62-5.66c0-5.87 4.78-10.64 10.65-10.64 2.84 0 5.51 1.11 7.52 3.12a10.57 10.57 0 0 1 3.12 7.53c0 5.87-4.78 10.64-10.65 10.64zm5.84-7.97c-.32-.16-1.89-.93-2.19-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.6-1.9-1.78-2.22-.18-.32-.02-.5.14-.66.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63s1.13 3.06 1.29 3.27c.16.21 2.22 3.39 5.39 4.75.75.32 1.34.51 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.89-.77 2.16-1.52.27-.74.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37z" />
    </svg>
  );
}

interface Props {
  children?: React.ReactNode;
  size?: "lg" | "md" | "sm";
  className?: string;
  glow?: boolean;
}

export default function WhatsAppButton({ children = "Message Us on WhatsApp", size = "lg", className, glow = false }: Props) {
  const sizes = {
    lg: "px-7 py-4 text-base",
    md: "px-5 py-3 text-sm",
    sm: "px-4 py-2 text-xs",
  };
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("track", "Contact");
        }
      }}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp font-display font-extrabold uppercase tracking-wide text-whatsapp-foreground shadow-[0_8px_28px_-8px_hsl(142_70%_49%/0.6)] transition-all hover:bg-[hsl(142_72%_44%)] hover:shadow-[0_14px_40px_-10px_hsl(142_70%_49%/0.75)]",
        glow && "animate-[pulse_3s_ease-in-out_infinite]",
        sizes[size],
        className,
      )}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {children}
    </motion.a>
  );
}