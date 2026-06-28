import { motion } from "framer-motion";
import interior from "@/assets/gallery-interior.jpg";
import exterior from "@/assets/gallery-exterior.jpg";
import viewing from "@/assets/gallery-viewing.jpg";

const images = [
  { src: interior, alt: "Modern Lagos luxury living room interior" },
  { src: exterior, alt: "Contemporary white Lagos property exterior in daylight" },
  { src: viewing, alt: "Real estate agent showing a property to clients" },
];

export default function Gallery() {
  return (
    <section className="border-t border-border/40 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-gold">Gallery</p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl">
            Properties Our AI <span className="bg-gradient-gold bg-clip-text text-transparent">Helps Sell.</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-2xl border border-border/60 shadow-gold-soft transition-all hover:border-gold/60 ${
                i === 0 ? "sm:col-span-2 md:col-span-1 md:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  i === 0 ? "aspect-square md:aspect-[3/4]" : "aspect-[4/3]"
                }`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-80" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}