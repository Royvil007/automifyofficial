import { Phone, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import logoAsset from "@/assets/automify-logo.png.asset.json";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center"
      >
        <div className="flex items-center gap-2">
          <img src={logoAsset.url} alt="Automify" className="h-8 w-auto" />
          <span className="font-display text-sm font-extrabold tracking-widest text-foreground">AUTOMIFY</span>
        </div>
        <div className="flex flex-col items-center gap-3 text-sm text-muted-foreground sm:flex-row sm:gap-6">
          <a href="tel:+2347014216565" className="inline-flex items-center gap-2 transition-colors hover:text-gold">
            <Phone className="h-4 w-4" /> +234 (0) 701 421 6565
          </a>
          <span className="inline-flex items-center gap-2">
            <Instagram className="h-4 w-4" /> @automify_official
          </span>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Automify. Lagos, Nigeria.</p>
      </motion.div>
    </footer>
  );
}