import { Link } from "@tanstack/react-router";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CalendarPlus, GraduationCap, Search, Stethoscope } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/site/motion-primitives";
import { DOCTORS } from "@/lib/site-data";
import { SectionHeading } from "./Common";

function DoctorCard({ d }: { d: (typeof DOCTORS)[number] }) {
  return (
    <article className="card-premium flex h-full flex-col p-6 text-center">
      <div className="mx-auto grid h-24 w-24 place-items-center rounded-full gradient-brand text-2xl font-bold text-navy-foreground shadow-soft">
        {d.initials}
      </div>
      <h3 className="mt-4 text-lg font-semibold">{d.name}</h3>
      <p className="text-sm font-medium text-primary">{d.spec}</p>
      <p className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <GraduationCap className="h-4 w-4 shrink-0" /> {d.qual}
      </p>
      <p className="mt-1.5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <Stethoscope className="h-4 w-4 shrink-0" /> {d.role ?? "Consultant"}
      </p>
      <a
        href={`/contact?doctor=${encodeURIComponent(d.name)}#appointment`}
        className="mt-5 inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
      >
        <CalendarPlus className="h-4 w-4" /> Book Appointment
      </a>
    </article>
  );
}

export function DoctorsSection({ grid = false }: { grid?: boolean }) {
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    return DOCTORS.filter((d) => d.name.toLowerCase().includes(term) || d.spec.toLowerCase().includes(term));
  }, [q]);

  return (
    <section id="doctors" className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Specialists"
          title="Meet our specialist doctors"
          desc="Explore Smart City Hospital’s specialist doctors and book an appointment with your preferred consultant."
        />

        {grid ? (
          <>
            <Reveal className="mx-auto mt-8 max-w-md">
              <label htmlFor="doc-search" className="sr-only">
                Search doctors
              </label>
              <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 shadow-soft focus-within:border-cyan">
                <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
                <input
                  id="doc-search"
                  value={q}
                  maxLength={40}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search by name or specialisation…"
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none"
                />
              </div>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((d, i) => (
                <Reveal key={d.name} delay={i * 0.05}>
                  <DoctorCard d={d} />
                </Reveal>
              ))}
              {list.length === 0 && (
                <p className="col-span-full text-center text-sm text-muted-foreground">No doctor matches that search.</p>
              )}
            </div>
          </>
        ) : (
          <Reveal className="mt-10">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              loop
              autoplay={{ delay: 3200, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
              className="!pb-12"
            >
              {DOCTORS.map((d) => (
                <SwiperSlide key={d.name} className="!h-auto py-2">
                  <DoctorCard d={d} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Reveal>
        )}
      </div>
    </section>
  );
}
