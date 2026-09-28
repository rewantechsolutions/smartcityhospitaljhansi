import { createFileRoute } from "@tanstack/react-router";
import { FaqSection } from "@/components/sections/Faq";
import { AppointmentSection } from "@/components/sections/Contact";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Appointments, Ayushman & Emergency — Smart City Hospital" },
      { name: "description", content: "Answers about appointments, Ayushman Bharat, emergency services, critical care and hospital contact information." },
      { property: "og:title", content: "Frequently Asked Questions — Smart City Hospital" },
      { property: "og:description", content: "Appointments, Ayushman Bharat, emergency care and ICU questions answered." },
    ],
    links: [{ rel: "canonical", href: "https://smartcityhospital.org/faq" }],
  }),
  component: () => (
    <>
      <h1 className="sr-only">Frequently asked questions</h1>
      <FaqSection />
      <AppointmentSection />
    </>
  ),
});
