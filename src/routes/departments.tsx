import { createFileRoute } from "@tanstack/react-router";
import { DepartmentsSection } from "@/components/sections/Departments";
import { EmergencyBanner } from "@/components/sections/Home";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "Departments | Multi-Speciality Care — Smart City Hospital" },
      { name: "description", content: "Multi-speciality departments supporting a broad range of patient care needs at Smart City Hospital, Jhansi." },
      { property: "og:title", content: "Departments at Smart City Hospital" },
      { property: "og:description", content: "Explore the existing multi-speciality departments at Smart City Hospital, Jhansi." },
    ],
    links: [{ rel: "canonical", href: "https://smartcityhospital.org/departments" }],
  }),
  component: () => (
    <>
      <h1 className="sr-only">Departments at Smart City Hospital</h1>
      <DepartmentsSection />
      <EmergencyBanner />
    </>
  ),
});
