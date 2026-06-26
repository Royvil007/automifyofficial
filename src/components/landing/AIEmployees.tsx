import { Headset, MessageSquare, RefreshCw, Star, Megaphone } from "lucide-react";
import { motion } from "framer-motion";

const employees = [
  { icon: Headset, role: "AI Front Desk Officer", line: "Never misses a call, even mid-viewing." },
  { icon: MessageSquare, role: "AI Enquiry Officer", line: "Replies to every property enquiry instantly." },
  { icon: RefreshCw, role: "AI Customer Renewal Officer", line: "Reopens old enquiries who are ready to buy now." },
  { icon: Star, role: "AI Customer Satisfaction Officer", line: "Gets reviews & referrals after every closed deal." },
  { icon: Megaphone, role: "AI Marketing Officer", line: "Runs your ads and follows up on every click." },
];

export default function AIEmployees() {
  return (
    <section className="border-t border-border/40 bg-secondary/30 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-gold">Your team</p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl">
            Meet your 5 <span className="text-gold">AI Employees.</span>
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
          {employees.map(({ icon: Icon, role, line }, i) => (
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-gold/60"
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