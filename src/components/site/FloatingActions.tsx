import { AnimatePresence, motion } from "motion/react";
import { ArrowUp, MessageCircle, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";
import { HOSPITAL } from "@/lib/site-data";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {show && (
          <motion.button
            key="top"
            type="button"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-soft transition-colors hover:border-cyan hover:text-cyan"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={`https://wa.me/${HOSPITAL.whatsapp}?text=${encodeURIComponent("Hello Smart City Hospital, I would like to book an appointment.")}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat on WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-[oklch(0.72_0.17_150)] text-white shadow-lift transition-transform hover:scale-110"
      >
        <MessageCircle className="h-5 w-5" />
      </a>

      <a
        href={`tel:${HOSPITAL.emergency}`}
        aria-label="Call emergency helpline"
        className="relative grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
        <PhoneCall className="relative h-5 w-5" />
      </a>
    </div>
  );
}
