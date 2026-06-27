import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  "A full AI system — not a single chatbot stitched onto your DMs.",
  "Built specifically for Nigerian real estate businesses.",
  "Trained on how enquiries, viewings, and commissions actually flow here.",
];

export default function WhyAutomify() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial-gold opacity-40" />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45 }}
          className="font-display text-xs font-bold uppercase tracking-[0.25em] text-gold"
        >
          Why Automify
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-3 font-display text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl"
        >
          Built for Nigerian agents. Not borrowed from somewhere else.
        </motion.h2>
        <ul className="mx-auto mt-10 grid max-w-xl gap-3 text-left">
          {points.map((p, i) => (
            <motion.li
              key={p}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4 transition-all hover:border-gold/60 hover:shadow-gold"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={2.25} />
              <span className="text-base text-foreground">{p}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}