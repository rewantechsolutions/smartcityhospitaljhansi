import { createFileRoute } from "@tanstack/react-router";
import { GallerySection } from "@/components/sections/Gallery";
import { TestimonialsSection } from "@/components/sections/Home";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Hospital, ICU & Operation Theatre — Smart City Hospital" },
      { name: "description", content: "Existing hospital gallery layout retained for Smart City Hospital images and approved media." },
      { property: "og:title", content: "Smart City Hospital Gallery" },
      { property: "og:description", content: "See our campus, critical-care units and operation theatres." },
    ],
    links: [{ rel: "canonical", href: "https://smartcityhospital.org/gallery" }],
  }),
  component: () => (
    <>
      <h1 className="sr-only">Smart City Hospital gallery</h1>
      <GallerySection />
      <TestimonialsSection />
    </>
  ),
});
