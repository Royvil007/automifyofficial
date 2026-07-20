import { Headset, Megaphone, CalendarCheck, Home, Wallet, Users } from "lucide-react";
import { motion } from "framer-motion";
import bgImage from "@/assets/gallery-viewing.jpg";

const employees = [
  { icon: Megaphone, role: "AI Property Marketing Officer", line: "Runs your ads and feeds every enquiry straight to Reception." },
  { icon: Headset, role: "AI Receptionist", line: "Answers every call and message instantly — even mid-inspection." },
  { icon: CalendarCheck, role: "AI Inspection Officer", line: "Books the inspection the moment a client's ready, no back-and-forth." },
  { icon: Home, role: "AI Property Match Officer", line: "Remembers what a client wanted — and matches them the moment it's listed." },
  { icon: Wallet, role: "AI Installment Officer", line: "Tracks every payment plan and flags a missed installment before it becomes a default." },
  { icon: Users, role: "AI Referral Officer", line: "Turns every closed deal into your next client." },
];

export default function AIEmployees() {
  return (
    <section className="relative overflow-hidden border-t border-border/40 bg-secondary/30 py-20">
      <img
        src={bgImage}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero-overlay-top" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="text-center">
          <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-gold drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">Your team</p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] sm:text-4xl md:text-5xl">
            Meet your <span className="text-gold">6</span> AI Employees.
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {employees.map(({ icon: Icon, role, line }, i) => (
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-gold/60 hover:shadow-gold"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gold/5 blur-2xl transition-opacity group-hover:bg-gold/10" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 bg-gold/10">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={2} />
                </div>
                <h3 className="font-display text-lg font-extrabold text-foreground">{role}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{line}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
