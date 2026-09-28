import { createFileRoute } from "@tanstack/react-router";
import { ScopeOfServicesSection, ServicesSection } from "@/components/sections/Services";
import { FacilitiesSection } from "@/components/sections/Home";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Hospital Support Services — Smart City Hospital" },
      { name: "description", content: "Hospital support services including emergency care, critical care, diagnostics, laboratory, pharmacy and surgical facilities." },
      { property: "og:title", content: "Clinical Services at Smart City Hospital" },
      { property: "og:description", content: "Diagnostics, critical care and surgery available round the clock." },
    ],
    links: [{ rel: "canonical", href: "https://smartcityhospital.org/services" }],
  }),
  component: () => (
    <>
      <h1 className="sr-only">Clinical services at Smart City Hospital</h1>
      <ServicesSection />
      <ScopeOfServicesSection />
      <FacilitiesSection />
    </>
  ),
});
