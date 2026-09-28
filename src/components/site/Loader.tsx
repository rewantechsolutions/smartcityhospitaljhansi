import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import logo from "@/assets/smartcity-logo.png";

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center gradient-soft"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-6 px-6 text-center">
            <motion.img
              src={logo}
              alt=""
              width={260}
              height={166}
              className="w-[200px] max-w-[70vw] sm:w-[260px]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="h-1 w-40 overflow-hidden rounded-full bg-border">
              <motion.div
                className="h-full gradient-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Compassion · Quality · Excellence</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
