import { Inbox, Bot, CalendarCheck, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: Inbox, label: "New Client" },
  { icon: Bot, label: "AI Follow-Up" },
  { icon: CalendarCheck, label: "Inspection Booked" },
  { icon: Trophy, label: "Deal Closed" },
];

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-gold">How it works</p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl">
            From enquiry to closed deal — on autopilot.
          </h2>
        </div>

        <div className="relative mx-auto mt-12 max-w-md md:max-w-4xl">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent md:left-0 md:right-0 md:top-10 md:bottom-auto md:h-px md:w-full md:bg-gradient-to-r" />
          <div className="grid gap-6 md:grid-cols-4 md:gap-4">
            {steps.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative flex items-center gap-4 md:flex-col md:text-center"
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-background shadow-gold md:h-20 md:w-20">
                  <Icon className="h-5 w-5 text-gold md:h-8 md:w-8" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-display text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                    Step {i + 1}
                  </p>
                  <p className="font-display text-lg font-extrabold text-foreground md:text-xl">{label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}