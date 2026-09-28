import { createFileRoute } from "@tanstack/react-router";
import { AboutSection, ExtrasSection, FacilitiesSection, JourneySection, StatsSection } from "@/components/sections/Home";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Smart City Hospital | Our Story, Mission & Vision" },
      { name: "description", content: "Learn how Smart City Hospital serves Jhansi with advanced multi-speciality healthcare, patient-focused services and advanced infrastructure." },
      { property: "og:title", content: "About Smart City Hospital | Our Story, Mission & Vision" },
      { property: "og:description", content: "Advanced healthcare in Jhansi focused on compassion, accessibility, safety and quality." },
    ],
    links: [{ rel: "canonical", href: "https://smartcityhospital.org/about" }],
  }),
  component: () => (
    <>
      <h1 className="sr-only">About Smart City Hospital</h1>
      <AboutSection />
      <StatsSection />
      <JourneySection />
      <FacilitiesSection />
      <ExtrasSection />
    </>
  ),
});
