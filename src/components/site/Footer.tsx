import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import logo from "@/assets/smartcity-logo.png";
import { DEPARTMENTS, HOSPITAL, NAV_LINKS } from "@/lib/site-data";

const socials = [
  { Icon: Facebook, label: "Facebook", href: HOSPITAL.facebook },
  { Icon: Instagram, label: "Instagram", href: HOSPITAL.instagram },
  { Icon: MessageCircle, label: "WhatsApp", href: `https://wa.me/${HOSPITAL.whatsapp}` },
];

export function Footer() {
  return (
    <footer className="mt-8 border-t border-border bg-surface">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo} alt="Smart City Hospital logo" width={200} height={128} loading="lazy" className="h-14 w-auto" />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            An advanced multi-speciality hospital in Jhansi focused on accessible, compassionate and quality healthcare with 24×7 emergency and critical-care support.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card transition-colors hover:border-cyan hover:text-cyan"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold">Departments</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {DEPARTMENTS.slice(0, 7).map((d) => (
              <li key={d.name}>
                <Link to="/departments" className="transition-colors hover:text-primary">
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold">Emergency Contacts</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`tel:${HOSPITAL.emergency}`} className="hover:text-primary">
                Emergency: {HOSPITAL.emergency}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`tel:${HOSPITAL.ambulance}`} className="hover:text-primary">
                Ambulance: {HOSPITAL.ambulance}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                <a href={`tel:${HOSPITAL.landline1}`} className="hover:text-primary">{HOSPITAL.landline1}</a>
                {" · "}
                <a href={`tel:${HOSPITAL.landline2}`} className="hover:text-primary">{HOSPITAL.landline2}</a>
              </span>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`mailto:${HOSPITAL.email}`} className="break-all hover:text-primary">
                {HOSPITAL.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{HOSPITAL.address}</span>
            </li>
          </ul>

        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Smart City Hospital, Jhansi. All rights reserved.</p>
          <p>Privacy Policy · Terms of Service · Patient Charter</p>
        </div>
      </div>
    </footer>
  );
}
