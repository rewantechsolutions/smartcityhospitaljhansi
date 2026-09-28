import { createFileRoute } from "@tanstack/react-router";
import { AyushmanSection } from "@/components/sections/Ayushman";
import { EmergencyBanner } from "@/components/sections/Home";

export const Route = createFileRoute("/ayushman-bharat")({
  head: () => ({
    meta: [
      { title: "Ayushman Bharat PM-JAY | Cashless Treatment — Smart City Hospital" },
      { name: "description", content: "Check Ayushman Bharat eligibility, benefits and required documents for cashless treatment up to ₹5 lakh at Smart City Hospital." },
      { property: "og:title", content: "Ayushman Bharat at Smart City Hospital" },
      { property: "og:description", content: "PM-JAY empanelment information, eligibility guidance and hospital contact details." },
    ],
    links: [{ rel: "canonical", href: "https://smartcityhospital.org/ayushman-bharat" }],
  }),
  component: () => (
    <>
      <h1 className="sr-only">Ayushman Bharat cashless treatment at Smart City Hospital</h1>
      <AyushmanSection />
      <EmergencyBanner />
    </>
  ),
});
