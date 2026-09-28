import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/site/Icon";
import { Reveal } from "@/components/site/motion-primitives";
import { SERVICES } from "@/lib/site-data";
import { SectionHeading } from "./Common";

export function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-surface">
      <div className="container-x">
        <SectionHeading
          eyebrow="Clinical Services"
          title="Diagnostics, critical care and surgery under one roof"
          desc="Existing hospital support services are presented here using verified Smart City Hospital information."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.04}>
              <article className="card-premium group relative h-full overflow-hidden p-6">
                <div
                  className="absolute inset-0 -translate-y-full gradient-brand opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-[0.06]"
                  aria-hidden="true"
                />
                <div className="relative flex items-start justify-between gap-3">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Icon name={s.icon} />
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <h3 className="relative mt-4 text-lg font-semibold">{s.name}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ScopeOfServicesSection() {
  const groups = [
    { title: "Imaging", items: ["CT Scan", "X-Ray", "Ultrasound", "Mammography", "2D Echo", "ECG", "TMT"] },
    { title: "Lab Services", items: ["Cytopathology", "Haematology", "Serology", "Microbiology", "Histopathology", "Biochemistry"] },
    { title: "24-Hour Services", items: ["Trauma & Emergency Care", "Labour Room", "Operation Theatre", "Ambulance", "Pharmacy", "Laboratory", "Radiology"] },
  ];
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHeading eyebrow="Scope of Services" title="Diagnostic and 24-hour hospital services" desc="Services available at Smart City Hospital, based on the hospital’s current service information." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <article className="card-premium h-full p-6">
                <h3 className="text-lg font-semibold">{g.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {g.items.map((item) => <li key={item} className="border-b border-border/60 pb-2 last:border-0">{item}</li>)}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
