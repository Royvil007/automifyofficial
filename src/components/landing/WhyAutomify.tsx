import { CheckCircle2 } from "lucide-react";

const points = [
  "A full AI system — not a single chatbot stitched onto your DMs.",
  "Built specifically for Nigerian real estate businesses.",
  "Trained on how enquiries, viewings, and commissions actually flow here.",
];

export default function WhyAutomify() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-gold">Why Automify</p>
        <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl">
          Built for Nigerian agents. Not borrowed from somewhere else.
        </h2>
        <ul className="mx-auto mt-10 grid max-w-xl gap-3 text-left">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={2.25} />
              <span className="text-base text-foreground">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}