import { PhoneOff, Clock, Timer } from "lucide-react";
import { motion } from "framer-motion";

const pains = [
  { icon: PhoneOff, text: "Missed calls during a viewing = a lost commission." },
  { icon: Clock, text: "Most agents never follow up on enquiries older than a few weeks — yet many of those buyers are ready to move now." },
  { icon: Timer, text: "Slow replies lose deals faster than weak listings do." },
];

export default function Problem() {
  return (
    <section className="border-t border-border/40 bg-secondary/30 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="mx-auto max-w-2xl text-center font-display text-3xl font-black uppercase leading-tight text-foreground sm:text-4xl md:text-5xl">
          Every missed reply is a <span className="text-gold">commission</span> walking out the door.
        </h2>
        <div className="mx-auto mt-12 grid max-w-3xl gap-4">
          {pains.map(({ icon: Icon, text }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5 transition-all hover:border-gold/60 hover:shadow-gold"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/40 bg-gold/10">
                <Icon className="h-5 w-5 text-gold" strokeWidth={2} />
              </div>
              <p className="pt-2 text-base leading-relaxed text-foreground">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}