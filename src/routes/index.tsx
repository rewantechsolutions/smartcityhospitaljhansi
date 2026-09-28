import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import {
  AboutSection,
  BlogSection,
  EmergencyBanner,
  ExtrasSection,
  FacilitiesSection,
  JourneySection,
  OpeningCeremonySection,
  StatsSection,
  TestimonialsSection,
  WhyUsSection,
} from "@/components/sections/Home";
import { DepartmentsSection } from "@/components/sections/Departments";
import { ServicesSection } from "@/components/sections/Services";
import { DoctorsSection } from "@/components/sections/Doctors";
import { AyushmanSection } from "@/components/sections/Ayushman";
import { GallerySection } from "@/components/sections/Gallery";
import { FaqSection } from "@/components/sections/Faq";
import { AppointmentSection, ContactSection } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart City Hospital | Multi-Speciality Healthcare in Jhansi" },
      {
        name: "description",
        content:
          "Advanced multi-speciality hospital in Jhansi with 24×7 emergency support, critical care, diagnostics and patient-focused services.",
      },
      { property: "og:title", content: "Smart City Hospital | Multi-Speciality Healthcare in Jhansi" },
      {
        property: "og:description",
        content: "Multi-speciality healthcare, 24×7 emergency support and advanced hospital services in Jhansi.",
      },
    ],
    links: [{ rel: "canonical", href: "https://smartcityhospital.org/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <h1 className="sr-only">Smart City Hospital — Multi-Speciality Hospital in Jhansi</h1>
      <Hero />
      <StatsSection />
      <WhyUsSection />
      <AboutSection />
      <OpeningCeremonySection />
      <DepartmentsSection searchable={false} />
      <ServicesSection />
      <DoctorsSection />
      <AyushmanSection />
      <JourneySection />
      <FacilitiesSection />
      <GallerySection />
      <TestimonialsSection />
      <BlogSection />
      <FaqSection />
      <AppointmentSection />
      <EmergencyBanner />
      <ContactSection />
      <ExtrasSection />
    </>
  );
}
