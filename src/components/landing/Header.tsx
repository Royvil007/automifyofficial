import logoAsset from "@/assets/automify-logo.png.asset.json";
import WhatsAppButton from "./WhatsAppButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2">
          <img src={logoAsset.url} alt="Automify" className="h-9 w-auto" />
          <span className="font-display text-base font-extrabold tracking-widest text-foreground">AUTOMIFY</span>
        </a>
        <WhatsAppButton size="sm">WhatsApp</WhatsAppButton>
      </div>
    </header>
  );
}