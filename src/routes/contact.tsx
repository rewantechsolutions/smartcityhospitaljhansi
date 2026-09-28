import { createFileRoute } from "@tanstack/react-router";
import { AppointmentSection, ContactSection } from "@/components/sections/Contact";
import { EmergencyBanner } from "@/components/sections/Home";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Appointments | Smart City Hospital Jhansi" },
      { name: "description", content: "Book an appointment, call our 24×7 emergency helpline or visit Smart City Hospital near the R.T.O Office, Shivaji Nagar, Jhansi. Map, phone and email details inside." },
      { property: "og:title", content: "Contact Smart City Hospital" },
      { property: "og:description", content: "Appointments, emergency helpline, ambulance and hospital address." },
    ],
    links: [{ rel: "canonical", href: "https://smartcityhospital.org/contact" }],
  }),
  component: () => (
    <>
      <h1 className="sr-only">Contact Smart City Hospital and book an appointment</h1>
      <AppointmentSection />
      <EmergencyBanner />
      <ContactSection />
    </>
  ),
});
