import WhatsAppButton from "./WhatsAppButton";
import { motion } from "framer-motion";
import bgImage from "@/assets/gallery-interior.jpg";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border/40 py-24">
      <img
        src={bgImage}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero-overlay-top" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial-gold opacity-80" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-3xl px-5 text-center"
      >
        <h2 className="font-display text-4xl font-black uppercase leading-[0.95] drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] sm:text-5xl md:text-6xl">
          Stop losing clients to <span className="bg-gradient-gold bg-clip-text text-transparent">slow replies.</span>
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-5 max-w-md text-lg text-white/85 drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
        >
          Message us now. Get your AI Employees working before the next enquiry hits.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex justify-center"
        >
          <WhatsAppButton glow>Message Us Now</WhatsAppButton>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-sm text-white/80 drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
        >
          One-Time Setup — from <span className="font-semibold text-gold">₦175,000</span> for the full 5-Employee AI system.<br /> Plus an ongoing <span className="font-semibold text-gold">AI Management Fee</span>, scoped to your business.
        </motion.p>
      </motion.div>
    </section>
  );
}
