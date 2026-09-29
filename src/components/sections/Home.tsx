import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Ambulance,
  ArrowRight,
  CheckCircle2,
  Compass,
  Download,
  Eye,
  MessageCircle,
  PhoneCall,
  Play,
  Quote,
  Star,
  Target,
  Video,
} from "lucide-react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import building from "@/assets/hospital/main-night.webp";
import facilityIcu from "@/assets/smart-city-client/smart-city-hospital-03.webp";
import facilityEmergency from "@/assets/smart-city-client/smart-city-hospital-12.webp";
import facilityOt from "@/assets/smart-city-client/smart-city-hospital-01.webp";
import facilityLab from "@/assets/smart-city-client/smart-city-hospital-13.webp";
import facilityPharmacy from "@/assets/opening-ceremony/pharmacy-visit.jpeg";
import facilityInpatient from "@/assets/smart-city-client/smart-city-hospital-18.webp";
import inaugurationVideo from "@/assets/opening-ceremony/inauguration-video.mp4";
import inaugurationPlaque from "@/assets/opening-ceremony/inauguration-plaque.jpeg";
import ribbonCutting from "@/assets/opening-ceremony/ribbon-cutting.jpeg";
import diagnosticVisit from "@/assets/opening-ceremony/diagnostic-visit.jpeg";
import pharmacyVisit from "@/assets/opening-ceremony/pharmacy-visit.jpeg";
import smartCityProjectRibbon from "@/assets/opening-ceremony/smart-city-project-ribbon.jpeg";
import smartCityProjectBuilding from "@/assets/opening-ceremony/smart-city-project-building.jpeg";
import diagnosticVisitTwo from "@/assets/opening-ceremony/diagnostic-visit-2.jpeg";
import plaqueCeremony from "@/assets/opening-ceremony/plaque-ceremony.jpeg";
import { Icon } from "@/components/site/Icon";
import { Counter, Reveal, TiltCard } from "@/components/site/motion-primitives";
import { BLOG, FACILITIES, HOSPITAL, JOURNEY, STATS, TESTIMONIALS, WHY_US } from "@/lib/site-data";
import { SectionHeading } from "./Common";

export function StatsSection() {
  return (
    <section className="relative overflow-hidden gradient-brand py-12 text-navy-foreground">
      <div className="container-x grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center">
            <p className="text-3xl font-extrabold sm:text-4xl">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-1.5 text-xs opacity-85 sm:text-sm">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function WhyUsSection() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Smart City Hospital"
          title="Six reasons families across the region choose us"
          desc="Super-specialty depth, honest pricing and a team that stays awake so your family can rest."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05}>
              <TiltCard className="h-full">
                <article className="card-premium h-full p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-soft">
                    <Icon name={w.icon} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="section-pad bg-surface">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-lift">
            <img
              src={building}
              alt="Smart City Hospital campus building"
              width={1400}
              height={1000}
              loading="lazy"
              className="h-[320px] w-full object-cover object-center sm:h-[390px] lg:h-[500px]"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title="Advanced multi-speciality care within reach"
            desc="Smart City Hospital, Jhansi, established in 2025, provides advanced multi-speciality healthcare with a focus on accessible, compassionate and quality care."
          />

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <Reveal delay={0.03} className="card-premium p-5">
              <h3 className="font-semibold">Mr. Ashish Bhattacharya</h3>
              <p className="mt-1.5 text-sm font-medium text-primary">Administrator</p>
            </Reveal>
            <Reveal delay={0.04} className="card-premium p-5">
              <h3 className="font-semibold">Dr. Shubhdeep M. W. Richi</h3>
              <p className="mt-1 text-sm text-muted-foreground">MBBS, MD, FCCS, CCIDS</p>
              <p className="mt-1 text-sm font-medium text-primary">Administrator · Anaesthesiology & Critical Care</p>
            </Reveal>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Reveal delay={0.05} className="card-premium p-5">
              <Target className="h-7 w-7 text-primary" />
              <h3 className="mt-3 font-semibold">Our Mission</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                To deliver affordable, accessible and high-quality healthcare through advanced technology, skilled professionals and patient-centered treatment.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="card-premium p-5">
              <Eye className="h-7 w-7 text-primary" />
              <h3 className="mt-3 font-semibold">Our Vision</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                To become a trusted healthcare destination by combining advanced medical treatment with compassionate care and service excellence.
              </p>
            </Reveal>
          </div>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {["Patient-first ethics", "Transparent billing", "Evidence-based protocols", "Compassion in every shift"].map((v) => (
              <li key={v} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan" /> {v}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Know More <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:border-cyan hover:text-cyan"
            >
              <Compass className="h-4 w-4" /> Virtual Tour
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function OpeningCeremonySection() {
  const moments = [
    { src: inaugurationPlaque, alt: "Smart City Hospital inauguration plaque unveiling ceremony in Jhansi" },
    { src: ribbonCutting, alt: "Smart City Hospital opening ribbon-cutting ceremony" },
    { src: diagnosticVisit, alt: "Visit to the diagnostic facilities during the Smart City Hospital inauguration" },
    { src: pharmacyVisit, alt: "Smart City Hospital pharmacy during the opening ceremony" },
    { src: smartCityProjectRibbon, alt: "Jhansi Smart City Project inauguration ceremony" },
    { src: smartCityProjectBuilding, alt: "Smart City Hospital building during the Jhansi Smart City Project opening" },
    { src: diagnosticVisitTwo, alt: "Hospital diagnostic centre visit during the inauguration" },
    { src: plaqueCeremony, alt: "Smart City Hospital inauguration ceremony at the commemorative plaque" },
  ];

  return (
    <section className="section-pad overflow-hidden bg-surface">
      <div className="container-x">
        <div className="grid items-end gap-7 lg:grid-cols-[1.05fr_.95fr]">
          <Reveal>
            <div>
              <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                A Landmark Beginning · 11 March 2025
              </span>
              <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Inauguration of Smart City Hospital, Jhansi
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Smart City Hospital and its pathology centre were inaugurated on 11 March 2025 by Uttar Pradesh Chief Minister Yogi Adityanath. These photographs preserve moments from the opening ceremony and the visit to the hospital facilities.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[1.75rem] border border-border bg-card p-5 shadow-soft sm:p-6">
              <p className="text-sm font-semibold text-primary">Jhansi Smart City Project</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A 200-bed hospital developed under the Smart City initiative through a public-private partnership, with critical-care and diagnostic facilities for the region.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-border bg-card shadow-lift">
            <div className="grid lg:grid-cols-[1.35fr_.65fr]">
              <div className="relative bg-navy">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="aspect-video h-full w-full bg-black object-contain"
                  aria-label="Smart City Hospital inauguration ceremony video"
                >
                  <source src={inaugurationVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Opening Ceremony Video</span>
                <h3 className="mt-3 text-2xl font-bold">A memorable beginning for Smart City Hospital</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Watch moments from the hospital inauguration and the visit to its facilities in Jhansi.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid auto-rows-[190px] grid-cols-2 gap-3 sm:auto-rows-[230px] sm:gap-4 lg:grid-cols-4 lg:auto-rows-[220px]">
          {moments.map((item, i) => (
            <Reveal
              key={item.src}
              delay={i * 0.04}
              className={i === 0 ? "col-span-2 row-span-2" : i === 1 ? "col-span-2 lg:col-span-1 lg:row-span-2" : ""}
            >
              <figure className="group relative h-full overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-soft">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent opacity-70" />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


export function JourneySection() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Patient Journey"
          title="From first call to full recovery"
          desc="A guided five-step pathway with a care coordinator assigned to every admitted patient."
        />
        <div className="relative mt-12">
          <div className="absolute left-6 top-0 h-full w-px bg-border lg:left-0 lg:top-12 lg:h-px lg:w-full" aria-hidden="true" />
          <ol className="grid gap-8 lg:grid-cols-5">
            {JOURNEY.map((j, i) => (
              <Reveal key={j.step} delay={i * 0.08} className="min-w-0">
                <li className="relative min-w-0 pl-16 lg:pl-0 lg:text-center">
                  <span className="absolute left-0 top-0 grid h-12 w-12 place-items-center rounded-full gradient-primary text-primary-foreground shadow-lift lg:static lg:mx-auto lg:flex">
                    <Icon name={j.icon} className="h-5 w-5 shrink-0" />
                  </span>
                  <p className="mt-0 text-xs font-bold uppercase tracking-wider text-cyan lg:mt-5">Step {i + 1}</p>
                  <h3 className="mt-1 text-lg font-semibold">{j.step}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{j.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function FacilitiesSection() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-x">
        <SectionHeading
          eyebrow="Facilities"
          title="Infrastructure built for critical moments"
          desc="Hospital facilities work together to support coordinated, patient-centered care."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((f, i) => {
            const images = [facilityIcu, facilityEmergency, facilityOt, facilityLab, facilityPharmacy, facilityInpatient];
            return (
              <Reveal key={f.name} delay={i * 0.05}>
                <article className="card-premium h-full overflow-hidden">
                  <img src={images[i]} alt={`${f.name} at Smart City Hospital`} loading="lazy" width={800} height={520} className="h-44 w-full object-cover" />
                  <div className="p-6">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy/10 text-navy dark:bg-cyan/15 dark:text-cyan">
                      <Icon name={f.icon} />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold">{f.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-x">
        <SectionHeading
          eyebrow="Patient Stories"
          title="Trusted by thousands of families"
          desc="This existing section is retained; verified patient stories should be supplied or approved by the client before publication."
        />
        <Reveal className="mt-10">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }}
            className="!pb-12"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.name} className="!h-auto py-2">
                <article className="card-premium flex h-full flex-col p-6">
                  <Quote className="h-8 w-8 text-cyan/60" />
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
                  <div className="mt-4 flex items-center gap-1" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < t.rating ? "fill-current text-[oklch(0.8_0.16_85)]" : "text-border"}`}
                      />
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.city}</p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs">
                      <Play className="h-3.5 w-3.5 text-primary" /> Video story
                    </span>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}

export function BlogSection() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Health Blog"
          title="Practical guidance from our specialists"
          desc="This existing section is retained for client-approved health awareness and patient education content."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {BLOG.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.06}>
              <article className="card-premium group flex h-full flex-col overflow-hidden">
                <div className="h-32 gradient-brand" aria-hidden="true" />
                <div className="flex flex-1 flex-col p-5">
                  <span className="w-fit rounded-full bg-cyan/12 px-3 py-1 text-xs font-semibold text-cyan">{b.cat}</span>
                  <h3 className="mt-3 flex-1 text-base font-semibold leading-snug transition-colors group-hover:text-primary">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-xs text-muted-foreground">
                    {b.date} · {b.read}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EmergencyBanner() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] gradient-brand px-6 py-12 text-navy-foreground shadow-lift sm:px-12">
            <motion.div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
              aria-hidden="true"
            />
            <div className="relative grid items-center gap-6 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider">
                  <Ambulance className="h-4 w-4" /> Emergency & Trauma
                </span>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">24×7 Emergency Care Available</h2>
                <p className="mt-3 max-w-xl text-sm opacity-90 sm:text-base">
                  Ambulance dispatch in minutes, trauma team on standby and CT, OT and ICU ready around the clock.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${HOSPITAL.emergency}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-navy transition-transform hover:scale-[1.04]"
                >
                  <PhoneCall className="h-4 w-4" /> Call {HOSPITAL.emergency}
                </a>
                <a
                  href={`https://wa.me/${HOSPITAL.whatsapp}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-white/50 px-5 py-3 text-sm font-bold transition-colors hover:bg-white/15"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ExtrasSection() {
  const items = [
    { title: "Online Consultation", desc: "Consult a specialist over secure video from home.", Icon: Video },
    { title: "Download Reports", desc: "Access lab and imaging reports with your registration ID.", Icon: Download },
    { title: "Virtual Hospital Tour", desc: "Explore the hospital environment and existing clinical facilities.", Icon: Compass },
    { title: "Careers at Smart City", desc: "Career information and current openings should be confirmed directly with the hospital.", Icon: Star },
  ];

  return (
    <section className="section-pad bg-surface">
      <div className="container-x">
        <SectionHeading eyebrow="Patient Resources" title="Everything else you might need" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <article className="card-premium h-full p-6">
                <it.Icon className="h-7 w-7 text-primary" />
                <h3 className="mt-3 text-base font-semibold">{it.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
