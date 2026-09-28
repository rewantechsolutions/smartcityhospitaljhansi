import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Icon } from "@/components/site/Icon";
import { Reveal, TiltCard } from "@/components/site/motion-primitives";
import { DEPARTMENTS } from "@/lib/site-data";
import { SectionHeading } from "./Common";

export function DepartmentsSection({ searchable = true }: { searchable?: boolean }) {
  const [q, setQ] = useState("");
  const list = useMemo(
    () => DEPARTMENTS.filter((d) => d.name.toLowerCase().includes(q.trim().toLowerCase())),
    [q],
  );

  return (
    <section id="departments" className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Centres of Excellence"
          title="Departments built around super-specialty care"
          desc="Nine focused departments, one connected team — so diagnosis, surgery and recovery never lose momentum."
        />

        {searchable && (
          <Reveal className="mx-auto mt-8 max-w-md">
            <label htmlFor="dept-search" className="sr-only">
              Search departments
            </label>
            <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 shadow-soft focus-within:border-cyan">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
              <input
                id="dept-search"
                value={q}
                maxLength={40}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search a department…"
                className="min-w-0 flex-1 bg-transparent text-sm outline-none"
              />
            </div>
          </Reveal>
        )}

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.05}>
              <TiltCard className="h-full">
                <article className="card-premium group h-full p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan/12 text-cyan transition-colors group-hover:bg-primary/12 group-hover:text-primary">
                    <Icon name={d.icon} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{d.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                </article>
              </TiltCard>
            </Reveal>
          ))}
          {list.length === 0 && (
            <p className="col-span-full text-center text-sm text-muted-foreground">No department matches that search.</p>
          )}
        </div>
      </div>
    </section>
  );
}
