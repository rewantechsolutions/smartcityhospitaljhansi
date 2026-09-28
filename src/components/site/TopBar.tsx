import { Clock, Facebook, Instagram, LogIn, Mail, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { HOSPITAL } from "@/lib/site-data";

const socials = [
  { Icon: MessageCircle, label: "WhatsApp", href: `https://wa.me/${HOSPITAL.whatsapp}` },
  { Icon: Facebook, label: "Facebook", href: HOSPITAL.facebook },
  { Icon: Instagram, label: "Instagram", href: HOSPITAL.instagram },
];

const announcements = [
  "24×7 Emergency Services",
  "ICU & Critical Care",
  "CT Scan · X-Ray · Ultrasound · Mammography",
  "OPD Monday–Saturday · 9:00 AM–7:00 PM",
];

export function TopBar() {
  return (
    <div className="gradient-brand text-navy-foreground">
      <div className="container-x flex flex-col gap-1.5 py-2 text-xs sm:text-[13px] lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1">
          <a
            href={`tel:${HOSPITAL.ambulance}`}
            className="hidden items-center gap-1.5 hover:text-white sm:inline-flex"
          >
            Ambulance {HOSPITAL.ambulance}
          </a>
          <a
            href={`mailto:${HOSPITAL.email}`}
            className="hidden items-center gap-1.5 hover:text-white md:inline-flex"
          >
            <Mail className="h-3.5 w-3.5 shrink-0" /> {HOSPITAL.email}
          </a>
          <span className="hidden items-center gap-1.5 opacity-90 xl:inline-flex">
            <Clock className="h-3.5 w-3.5 shrink-0" /> {HOSPITAL.hours}
          </span>
        </div>
        <div className="ml-auto flex shrink-0 items-center gap-3">
          <div className="flex items-center gap-1">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="grid h-7 w-7 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/25"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
          <Link
            to="/patient-login"
            className="inline-flex min-h-8 items-center gap-1.5 rounded-full border border-white/40 bg-white/15 px-3 py-1.5 text-[13px] font-semibold tracking-[0.3px] text-white transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-px hover:border-white hover:bg-white hover:text-[#0e8a73] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-4"
          >
            <LogIn aria-hidden="true" className="h-3.5 w-3.5" />
            Patient Login
          </Link>
        </div>
      </div>
      <div className="overflow-hidden border-t border-white/15 bg-black/10 py-1.5">
        <div className="marquee-track text-[11px] font-medium uppercase tracking-wider sm:text-xs">
          {[...announcements, ...announcements].map((a, i) => (
            <span key={i} className="inline-flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
              {a}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
