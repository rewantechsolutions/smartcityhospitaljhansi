import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/site/motion-primitives";
import { FAQS } from "@/lib/site-data";
import { SectionHeading } from "./Common";

export function FaqSection() {
  return (
    <section id="faq" className="section-pad bg-surface">
      <div className="container-x">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers to what patients ask us most"
          desc="Appointments, Ayushman Bharat, emergencies and ICU care — explained simply."
        />

        <Reveal className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="card-premium border px-5">
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
