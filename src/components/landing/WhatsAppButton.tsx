import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const WHATSAPP_URL = "https://wa.me/2347014216565";

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
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold font-display font-extrabold uppercase tracking-wide text-primary-foreground transition-shadow",
        glow && "shadow-gold animate-[pulse_3s_ease-in-out_infinite]",
        sizes[size],
        className,
      )}
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
      {children}
    </motion.a>
  );
}