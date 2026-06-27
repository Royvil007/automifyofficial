import { motion } from "framer-motion";
import heroVisual from "@/assets/hero-property.jpg";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial-gold opacity-70" />
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-12 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-5 inline-block rounded-full border border-gold/40 px-4 py-1 font-display text-[11px] font-bold uppercase tracking-[0.25em] text-gold">
            AI Employees. Real Results.
          </p>
          <h1 className="font-display text-[40px] font-black leading-[1.02] text-foreground sm:text-5xl md:text-6xl">
            SCALE YOUR REAL ESTATE BUSINESS{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">WITH AI.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            AI Employees that answer every enquiry, follow up on cold leads, and book viewings — so no commission slips through a missed reply.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton glow />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto mt-12 max-w-xl"
        >
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-radial-gold opacity-60 blur-2xl" />
          <div className="overflow-hidden rounded-2xl border border-gold/30 shadow-gold">
            <img
              src={heroVisual}
              alt="Modern Lagos real estate property at golden hour"
              width={1024}
              height={1024}
              className="h-auto w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}