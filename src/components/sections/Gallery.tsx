import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useState } from "react";
import icuBlock from "@/assets/smart-city-client/smart-city-hospital-02.webp";
import laboratory from "@/assets/smart-city-client/smart-city-hospital-13.webp";
import ultrasound from "@/assets/smart-city-client/smart-city-hospital-15.webp";
import xray from "@/assets/smart-city-client/smart-city-hospital-16.webp";
import ward from "@/assets/smart-city-client/smart-city-hospital-18.webp";
import consultation from "@/assets/smart-city-client/smart-city-hospital-19.webp";
import { Reveal } from "@/components/site/motion-primitives";
import { SectionHeading } from "./Common";

const ITEMS = [
  { src: icuBlock, cat: "Hospital Facilities", alt: "Smart City Hospital ICU block", span: "sm:row-span-2" },
  { src: laboratory, cat: "Diagnostics", alt: "Smart City Hospital diagnostic laboratory", span: "" },
  { src: ultrasound, cat: "Diagnostics", alt: "Ultrasound equipment at Smart City Hospital", span: "" },
  { src: xray, cat: "Equipment", alt: "X-ray facility at Smart City Hospital", span: "sm:row-span-2" },
  { src: consultation, cat: "Doctors", alt: "Clinical consultation at Smart City Hospital", span: "" },
  { src: ward, cat: "Hospital Facilities", alt: "Patient care ward at Smart City Hospital", span: "" },
];

const CATS = ["All", "Hospital Facilities", "Doctors", "Equipment", "Diagnostics"];

export function GallerySection() {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState<null | (typeof ITEMS)[number]>(null);
  const list = cat === "All" ? ITEMS : ITEMS.filter((i) => i.cat === cat);

  return (
    <section id="gallery" className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Gallery"
          title="Inside Smart City Hospital"
          desc="Our campus, critical-care units and theatres — designed for safety, hygiene and calm."
        />

        <Reveal className="mt-8 flex flex-wrap justify-center gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                cat === c ? "border-transparent gradient-primary text-primary-foreground" : "border-border bg-card hover:border-cyan hover:text-cyan"
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <div className="mt-8 grid auto-rows-[190px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((item, i) => (
            <Reveal key={`${item.alt}-${i}`} delay={i * 0.05} className={`h-full ${item.span}`}>
              <button
                type="button"
                onClick={() => setLightbox(item)}
                className="group h-full w-full overflow-hidden rounded-2xl border border-border shadow-soft"
                aria-label={`Open image: ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.alt}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close image"
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[85vh] w-auto max-w-full rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
