import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Ambulance, ArrowRight, BadgeCheck, Brain, HeartPulse, ShieldPlus, Video } from "lucide-react";
import heroImg from "@/assets/hospital/main-day.png";
import { HOSPITAL } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-soft">
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-24 h-[26rem] w-[26rem] rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-14 lg:py-20">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-2 text-xs font-semibold text-navy dark:text-cyan"
          >
            <BadgeCheck className="h-4 w-4 text-primary" /> Advance-Speciality · Ayushman Bharat Empanelled
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-5 text-balance text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl"
          >
            Advanced <span className="text-gradient">Multi-Speciality Healthcare</span> in Jhansi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Azael Health, serving patients since 2012, is now coming to Jhansi with Azael Health Smart City Hospital.

            Bringing a legacy of 15 years, we now offer advanced multi-speciality healthcare services in Jhansi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/contact"
              hash="appointment"
              className="inline-flex items-center gap-2 rounded-full gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-[1.04]"
            >
              Book Appointment <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${HOSPITAL.emergency}`}
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:scale-[1.04] hover:bg-red-700"
            >
              <Ambulance className="h-4 w-4" /> Emergency Care
            </a>
            <a
              href={`https://wa.me/${HOSPITAL.whatsapp}?text=${encodeURIComponent("I would like to enquire about a consultation.")}`}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:border-cyan hover:text-cyan"
            >
              <Video className="h-4 w-4" /> Consultation Enquiry
            </a>
          </motion.div>


        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-lift">
            <img
              src={heroImg}
              alt="Smart City Hospital, Jhansi building"
              width={1600}
              height={1000}
              className="h-[340px] w-full object-cover object-center sm:h-[410px] lg:h-[500px] xl:h-[540px]"
            />
          </div>

          <div className="float-slow absolute -left-3 top-8 hidden items-center gap-3 rounded-2xl glass px-4 py-3 shadow-soft sm:flex">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
              <Brain className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">Critical Care</p>
              <p className="text-xs text-muted-foreground">24×7 clinical support</p>
            </div>
          </div>

          <div
            className="float-slow absolute -bottom-5 right-2 hidden items-center gap-3 rounded-2xl glass px-4 py-3 shadow-soft sm:flex"
            style={{ animationDelay: "1.2s" }}
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan/20 text-cyan">
              <HeartPulse className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">Patient Care</p>
              <p className="text-xs text-muted-foreground">Compassionate clinical support</p>
            </div>
          </div>

          <div
            className="float-slow absolute right-4 top-4 hidden items-center gap-2 rounded-full glass px-3.5 py-2 text-xs font-semibold shadow-soft md:flex"
            style={{ animationDelay: "0.6s" }}
          >
            <ShieldPlus className="h-4 w-4 text-primary" /> 24×7 Emergency Open
          </div>
        </motion.div>
      </div>
    </section>
  );
}
