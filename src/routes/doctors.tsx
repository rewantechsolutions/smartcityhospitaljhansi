import { createFileRoute } from "@tanstack/react-router";
import { DoctorsSection } from "@/components/sections/Doctors";
import { AppointmentSection } from "@/components/sections/Contact";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctors | Medical Team — Smart City Hospital" },
      { name: "description", content: "Meet Smart City Hospital’s specialist doctors across medicine, surgery, critical care, women’s health, urology, nephrology and more." },
      { property: "og:title", content: "Doctors at Smart City Hospital" },
      { property: "og:description", content: "Smart City Hospital doctor profiles, specialties, qualifications and appointment information." },
    ],
    links: [{ rel: "canonical", href: "https://smartcityhospital.org/doctors" }],
  }),
  component: () => (
    <>
      <h1 className="sr-only">Doctors at Smart City Hospital</h1>
      <DoctorsSection grid />
      <AppointmentSection />
    </>
  ),
});
