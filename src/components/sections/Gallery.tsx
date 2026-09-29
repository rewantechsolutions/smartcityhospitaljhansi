import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useState } from "react";
import img01 from "@/assets/smart-city-client/smart-city-hospital-01.webp";
import img02 from "@/assets/smart-city-client/smart-city-hospital-02.webp";
import img03 from "@/assets/smart-city-client/smart-city-hospital-03.webp";
import img04 from "@/assets/smart-city-client/smart-city-hospital-04.webp";
import img05 from "@/assets/smart-city-client/smart-city-hospital-05.webp";
import img06 from "@/assets/smart-city-client/smart-city-hospital-06.webp";
import img07 from "@/assets/smart-city-client/smart-city-hospital-07.webp";
import img08 from "@/assets/smart-city-client/smart-city-hospital-08.webp";
import img09 from "@/assets/smart-city-client/smart-city-hospital-09.webp";
import img10 from "@/assets/smart-city-client/smart-city-hospital-10.webp";
import img11 from "@/assets/smart-city-client/smart-city-hospital-11.webp";
import img12 from "@/assets/smart-city-client/smart-city-hospital-12.webp";
import img13 from "@/assets/smart-city-client/smart-city-hospital-13.webp";
import img14 from "@/assets/smart-city-client/smart-city-hospital-14.webp";
import img15 from "@/assets/smart-city-client/smart-city-hospital-15.webp";
import img16 from "@/assets/smart-city-client/smart-city-hospital-16.webp";
import img17 from "@/assets/smart-city-client/smart-city-hospital-17.webp";
import img18 from "@/assets/smart-city-client/smart-city-hospital-18.webp";
import img19 from "@/assets/smart-city-client/smart-city-hospital-19.webp";
import { Reveal } from "@/components/site/motion-primitives";
import { SectionHeading } from "./Common";

const ITEMS = [
  { src: img03, cat: "Critical Care", alt: "Advanced ICU patient-care area at Smart City Hospital", span: "sm:row-span-2" },
  { src: img04, cat: "Critical Care", alt: "Monitored ICU beds at Smart City Hospital", span: "" },
  { src: img05, cat: "Critical Care", alt: "Smart City Hospital critical-care ward", span: "" },
  { src: img06, cat: "Critical Care", alt: "Clinical team working inside the ICU", span: "" },
  { src: img07, cat: "Critical Care", alt: "Doctors and nursing staff in the ICU", span: "" },
  { src: img08, cat: "Doctors & Team", alt: "Clinical discussion at the ICU nursing station", span: "" },
  { src: img09, cat: "Doctors & Team", alt: "Smart City Hospital doctors and nursing team", span: "sm:row-span-2" },
  { src: img10, cat: "Doctors & Team", alt: "Doctors at the Smart City Hospital care desk", span: "" },
  { src: img19, cat: "Consultation", alt: "Doctor consultation room at Smart City Hospital", span: "" },
  { src: img01, cat: "Patient Areas", alt: "Patient treatment area at Smart City Hospital", span: "" },
  { src: img02, cat: "Patient Areas", alt: "Entrance to the Smart City Hospital ICU block", span: "" },
  { src: img11, cat: "Patient Areas", alt: "Specialised patient-care room at Smart City Hospital", span: "" },
  { src: img12, cat: "Patient Areas", alt: "Inpatient ward with monitored beds", span: "" },
  { src: img17, cat: "Consultation", alt: "Clinical work and consultation room", span: "" },
  { src: img18, cat: "Patient Areas", alt: "Patient treatment beds and privacy curtains", span: "" },
  { src: img13, cat: "Diagnostics", alt: "Smart City Hospital clinical laboratory", span: "sm:row-span-2" },
  { src: img14, cat: "Diagnostics", alt: "Ultrasound imaging equipment at Smart City Hospital", span: "" },
  { src: img15, cat: "Diagnostics", alt: "Ultrasound examination and imaging facility", span: "" },
  { src: img16, cat: "Diagnostics", alt: "Digital X-ray facility at Smart City Hospital", span: "" },
];

const CATS = ["All", "Critical Care", "Doctors & Team", "Diagnostics", "Patient Areas", "Consultation"];

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
          desc="Real photographs of our critical-care areas, diagnostic facilities, clinical team and patient-care spaces."
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
