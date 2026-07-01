import heroVisual from "@/assets/hero-property.jpg";
import WhatsAppButton from "./WhatsAppButton";
import { TrendingUp, Clock, Wallet } from "lucide-react";

const PILLARS = [
  {
    icon: TrendingUp,
    title: "More Money",
    body: "Every enquiry answered, every quiet client reopened, no commission lost to a missed reply.",
  },
  {
    icon: Clock,
    title: "Save Time",
    body: "No more manually replying on WhatsApp or chasing old contacts yourself.",
  },
  {
    icon: Wallet,
    title: "Save Money",
    body: "One AI system instead of separately hiring a receptionist, a follow-up assistant, and a marketing person.",
  },
];

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="relative min-h-[100svh] w-full overflow-hidden">
        {/* Full-bleed background image */}
        <img
          src={heroVisual}
          alt="Modern Lagos real estate property at golden hour"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Dark gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        {/* Ambient floating gold glow behind accent */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial-gold opacity-80 blur-3xl animate-float-slow"
        />

        {/* Content overlay */}
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-3xl flex-col items-center justify-center px-5 pb-28 pt-28 text-center">
          <p className="mb-5 inline-block rounded-full border border-gold/50 bg-background/30 px-4 py-1 font-display text-[11px] font-bold uppercase tracking-[0.25em] text-gold backdrop-blur-sm animate-fade-up">
            AI Employees. Real Results.
          </p>
          <h1
            className="font-display text-[40px] font-black leading-[1.02] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] sm:text-5xl md:text-6xl animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            SCALE YOUR REAL ESTATE BUSINESS{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">WITH AI.</span>
          </h1>
          <p
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            AI Employees that answer every enquiry, follow up on clients who've gone quiet, and book inspections — so no commission slips through a missed reply.
          </p>
          <div
            className="mt-8 flex justify-center animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <WhatsAppButton glow />
          </div>
        </div>
      </div>

      {/* Core pillars */}
      <div className="border-y border-gold/20 bg-background/80 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-3 sm:gap-8">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/40 bg-gold/10">
                <Icon className="h-5 w-5 text-gold" strokeWidth={2} />
              </div>
              <h3 className="font-display text-base font-extrabold uppercase tracking-wide text-foreground">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}