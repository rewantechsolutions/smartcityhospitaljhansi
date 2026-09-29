import { Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowUpRight,
  Baby,
  CalendarPlus,
  ChevronDown,
  HeartPulse,
  Menu,
  PhoneCall,
  ScanLine,
  ShieldCheck,
  Stethoscope,
  X,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Fragment, useEffect, useRef, useState } from "react";
import logo from "@/assets/smartcity-logo.png";
import { HOSPITAL, NAV_LINKS } from "@/lib/site-data";

type MenuKey = "about" | "departments" | "services";
type MobileMenuKey = Exclude<MenuKey, "about">;
type PageTarget = "/departments" | "/services";

type MenuLinkData = {
  label: string;
  description: string;
  to: PageTarget;
};

type MenuGroupData = {
  title: string;
  icon: LucideIcon;
  links: MenuLinkData[];
};

const DEPARTMENT_GROUPS: MenuGroupData[] = [
  {
    title: "Medicine & Surgery",
    icon: Stethoscope,
    links: [
      {
        label: "General Medicine",
        description: "Assessment and ongoing care for adult health conditions.",
        to: "/departments",
      },
      {
        label: "General & Laparoscopic Surgery",
        description: "Surgical care with minimally invasive options.",
        to: "/departments",
      },
      {
        label: "Orthopaedics",
        description: "Bone, joint and joint-replacement care.",
        to: "/departments",
      },
    ],
  },
  {
    title: "Critical & Cardiac Care",
    icon: HeartPulse,
    links: [
      {
        label: "Critical Care",
        description: "Close monitoring and support for seriously ill patients.",
        to: "/departments",
      },
      {
        label: "Anaesthesiology",
        description: "Perioperative anaesthesia and critical-care expertise.",
        to: "/departments",
      },
      {
        label: "Interventional Cardiology",
        description: "Specialist assessment and cardiac interventions.",
        to: "/departments",
      },
    ],
  },
  {
    title: "Maternal & Child Health",
    icon: Baby,
    links: [
      {
        label: "Obstetrics & Gynaecology",
        description: "Care for women through every stage of life.",
        to: "/departments",
      },
      {
        label: "Paediatrics & Neonatology",
        description: "Medical care for children, infants and newborns.",
        to: "/departments",
      },
    ],
  },
  {
    title: "Surgical Superspecialties",
    icon: Activity,
    links: [
      {
        label: "HPB & Gastroenterology",
        description: "Medical and surgical care for digestive conditions.",
        to: "/departments",
      },
      {
        label: "Urology",
        description: "Specialist care for urinary and related conditions.",
        to: "/departments",
      },
      {
        label: "Neurosurgery & Neurology",
        description: "Care for neurological and neurosurgical needs.",
        to: "/departments",
      },
      {
        label: "Nephrology",
        description: "Assessment and treatment for kidney conditions.",
        to: "/departments",
      },
    ],
  },
];

const SERVICE_GROUPS: MenuGroupData[] = [
  {
    title: "Diagnostics & Imaging",
    icon: ScanLine,
    links: [
      {
        label: "CT Scan",
        description: "Cross-sectional imaging to support timely diagnosis.",
        to: "/services",
      },
      {
        label: "Digital X-Ray",
        description: "Digital radiography for clear diagnostic imaging.",
        to: "/services",
      },
      {
        label: "4D Ultrasound",
        description: "Advanced ultrasound imaging for maternal and clinical assessment.",
        to: "/services",
      },
      {
        label: "Mammography",
        description: "Dedicated breast imaging and screening support.",
        to: "/services",
      },
    ],
  },
  {
    title: "Hospital Services",
    icon: ShieldCheck,
    links: [
      {
        label: "24×7 Emergency",
        description: "Round-the-clock response for urgent medical needs.",
        to: "/services",
      },
      {
        label: "ICU & Critical Care",
        description: "Advanced monitoring for patients needing close support.",
        to: "/services",
      },
      {
        label: "Operation Theatre",
        description: "Equipped facilities supporting safe surgical care.",
        to: "/services",
      },
      {
        label: "Laboratory & Pharmacy",
        description: "On-site diagnostic and medicine support.",
        to: "/services",
      },
    ],
  },
];

function MenuLink({ item, onNavigate }: { item: MenuLinkData; onNavigate: () => void }) {
  return (
    <Link
      to={item.to}
      onClick={onNavigate}
      className="group flex gap-3 rounded-xl p-2.5 transition-colors hover:bg-emerald-50 focus-visible:bg-emerald-50 dark:hover:bg-emerald-950/30 dark:focus-visible:bg-emerald-950/30"
    >
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-700 transition-colors group-hover:bg-white dark:bg-emerald-950/60 dark:text-emerald-300 dark:group-hover:bg-slate-900">
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-foreground">{item.label}</span>
        <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
          {item.description}
        </span>
      </span>
    </Link>
  );
}

function MenuGroups({
  groups,
  onNavigate,
  compact = false,
}: {
  groups: MenuGroupData[];
  onNavigate: () => void;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "space-y-5" : "grid gap-x-4 gap-y-5 sm:grid-cols-2"}>
      {groups.map((group) => {
        const Icon = group.icon;
        return (
          <section key={group.title}>
            <h3 className="flex items-center gap-2 px-2.5 text-xs font-bold uppercase text-muted-foreground">
              <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
              {group.title}
            </h3>
            <div className="mt-2 space-y-0.5">
              {group.links.map((item) => (
                <MenuLink key={item.label} item={item} onNavigate={onNavigate} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

const ABOUT_MENU_LINKS = [
  { label: "Our Story & Vision", description: "Accessible & compassionate multi-speciality care", to: "/about" },
  { label: "Leadership & Administration", description: "Meet our medical directors & admin team", to: "/about" },
  { label: "Patient Journey", description: "A 5-step pathway from first call to recovery", to: "/about" },
  { label: "Infrastructure & Facilities", description: "ICU, modular OTs & diagnostic units", to: "/about" },
] as const;

const DEPARTMENT_MENU_LINKS = [
  "General Medicine",
  "General & Laparoscopic Surgery",
  "Surgical & Medical Gastroenterology",
  "Obstetrics & Gynaecology",
  "Paediatrics & Neonatology",
  "Orthopaedics & Joint Replacement",
  "Anaesthesiology & Critical Care",
];

const SERVICE_MENU_GROUPS = [
  {
    title: "Core Clinical",
    to: "/services",
    links: [
      "24×7 Emergency & Trauma",
      "Intensive Care Unit (ICU)",
      "Operation Theatres",
      "Inpatient & Outpatient Care",
    ],
  },
  {
    title: "Diagnostics & Patient Resources",
    to: "/services",
    links: [
      "Advanced Diagnostics: CT Scan, Ultrasound, X-Ray, Mammography",
      "Clinical Pathology Lab",
      "In-House 24×7 Pharmacy",
      "Ayushman Bharat TPA Desk",
    ],
  },
] as const;

function MegaMenuContent({ menu, onNavigate }: { menu: MenuKey; onNavigate: () => void }) {
  if (menu === "about") {
    return (
      <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_13rem]">
        <div>
          <p className="mb-2 text-xs font-bold uppercase text-emerald-700">About the hospital</p>
          <div className="space-y-1">
            {ABOUT_MENU_LINKS.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={onNavigate}
                className="group flex items-start justify-between gap-3 rounded-xl p-2.5 transition-colors hover:bg-emerald-50 focus-visible:bg-emerald-50"
              >
                <span>
                  <span className="block text-sm font-semibold text-foreground">{item.label}</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </span>
                </span>
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
        <aside className="flex flex-col rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 p-4 text-white">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /> Established in 2025
          </span>
          <p className="mt-4 text-sm font-semibold">Here for your health, around the clock.</p>
          <a
            href={`tel:${HOSPITAL.emergency.replace(/\s/g, "")}`}
            onClick={onNavigate}
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white/95 hover:text-white"
          >
            <PhoneCall className="h-4 w-4" aria-hidden="true" /> {HOSPITAL.emergency}
          </a>
          <Link
            to="/gallery"
            onClick={onNavigate}
            className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-white hover:underline"
          >
            Virtual Hospital Tour <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </aside>
      </div>
    );
  }

  if (menu === "departments") {
    return (
      <>
        <p className="mb-3 text-xs font-bold uppercase text-emerald-700">Find a specialist</p>
        <div className="grid gap-1 sm:grid-cols-2">
          {DEPARTMENT_MENU_LINKS.map((label) => (
            <Link
              key={label}
              to="/departments"
              onClick={onNavigate}
              className="group flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-emerald-50 hover:text-emerald-800 focus-visible:bg-emerald-50"
            >
              {label}
              <ArrowUpRight className="h-4 w-4 shrink-0 text-emerald-700 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="mt-4 border-t border-emerald-100 pt-3">
          <Link
            to="/departments"
            onClick={onNavigate}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-800 hover:underline"
          >
            View All 15+ Specialities <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {SERVICE_MENU_GROUPS.map((group) => (
        <section key={group.title}>
          <h3 className="mb-2 px-2 text-xs font-bold uppercase text-emerald-700">{group.title}</h3>
          <div className="space-y-1">
            {group.links.map((label) => (
              <Link
                key={label}
                to={label.startsWith("Ayushman") ? "/ayushman-bharat" : group.to}
                onClick={onNavigate}
                className="flex items-start gap-2 rounded-lg px-2 py-2 text-sm font-medium leading-snug text-foreground transition-colors hover:bg-emerald-50 hover:text-emerald-800 focus-visible:bg-emerald-50"
              >
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" aria-hidden="true" />
                {label}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<MobileMenuKey | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearHoverTimer = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = null;
  };

  const activateMenu = (menu: MenuKey) => {
    clearHoverTimer();
    setActiveMenu(menu);
  };

  const closeMenuSoon = () => {
    clearHoverTimer();
    hoverTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const closeMenus = () => {
    clearHoverTimer();
    setActiveMenu(null);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        clearHoverTimer();
        setActiveMenu(null);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        clearHoverTimer();
        setActiveMenu(null);
        setOpen(false);
        setMobileExpanded(null);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      clearHoverTimer();
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const navigateFromMenu = () => {
    closeMenus();
    setOpen(false);
    setMobileExpanded(null);
  };

  const renderDesktopLink = (link: (typeof NAV_LINKS)[number]) => {
    const menu =
      link.label === "About"
        ? "about"
        : link.label === "Departments"
          ? "departments"
          : link.label === "Services"
            ? "services"
            : null;
    if (menu) {
      return (
        <button
          type="button"
          aria-haspopup="true"
          aria-expanded={activeMenu === menu}
          aria-controls={`${menu}-mega-menu`}
          onPointerEnter={() => activateMenu(menu)}
          onFocus={() => activateMenu(menu)}
          onClick={() => activateMenu(menu)}
          className="link-underline inline-flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
        >
          {link.label}
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform ${activeMenu === menu ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      );
    }

    return (
      <Link
        to={link.to}
        activeOptions={{ exact: link.to === "/" }}
        onPointerEnter={closeMenus}
        onFocus={closeMenus}
        className="link-underline text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
        activeProps={{ className: "text-primary font-semibold" }}
      >
        {link.label}
      </Link>
    );
  };

  const renderMobileLink = (link: (typeof NAV_LINKS)[number]) => {
    const menu =
      link.label === "Departments" ? "departments" : link.label === "Services" ? "services" : null;
    if (menu) {
      const expanded = mobileExpanded === menu;
      return (
        <>
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={`mobile-${menu}-menu`}
            onClick={() => setMobileExpanded((current) => (current === menu ? null : menu))}
            className="flex w-full items-center justify-between rounded-lg px-2 py-3 text-left text-sm font-medium hover:bg-muted"
          >
            {link.label}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                id={`mobile-${menu}-menu`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden pl-2"
              >
                <MenuGroups
                  groups={menu === "departments" ? DEPARTMENT_GROUPS : SERVICE_GROUPS}
                  onNavigate={navigateFromMenu}
                  compact
                />
                <Link
                  to={menu === "departments" ? "/departments" : "/services"}
                  onClick={navigateFromMenu}
                  className="mb-3 ml-2 mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                >
                  View all {link.label.toLowerCase()}{" "}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      );
    }

    return (
      <Link
        to={link.to}
        activeOptions={{ exact: link.to === "/" }}
        onClick={navigateFromMenu}
        className="block rounded-lg px-2 py-3 text-sm font-medium hover:bg-muted"
        activeProps={{ className: "text-primary font-semibold" }}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header className={`sticky top-0 z-50 transition-shadow ${scrolled ? "shadow-soft" : ""}`}>
      <nav
        ref={navRef}
        className="glass relative"
        aria-label="Main navigation"
        onPointerEnter={clearHoverTimer}
        onPointerLeave={closeMenuSoon}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) closeMenuSoon();
        }}
      >
        <div className="container-x grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-2.5">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-2"
            aria-label="Smart City Hospital home"
          >
            <img
              src={logo}
              alt="Smart City Hospital logo"
              width={180}
              height={115}
              className="h-10 w-auto sm:h-12"
            />
          </Link>

          <div className="flex shrink-0 items-center gap-2">
            <ul className="hidden items-center gap-5 lg:flex">
              {NAV_LINKS.map((link) => (
                <Fragment key={link.to}>
                  <li>{renderDesktopLink(link)}</li>
                </Fragment>
              ))}
            </ul>

            <Link
              to="/contact"
              hash="appointment"
              className="hidden items-center gap-2 rounded-full gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.04] sm:inline-flex"
            >
              <CalendarPlus className="h-4 w-4" /> Book Appointment
            </Link>

            <button
              type="button"
              onClick={() => {
                setOpen((current) => !current);
                setMobileExpanded(null);
              }}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {activeMenu && (
            <motion.div
              id={`${activeMenu}-mega-menu`}
              layout="size"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute left-1/2 top-full z-50 hidden w-[52vw] max-w-[720px] -translate-x-1/2 pt-4 lg:block"
            >
              <div className="before:absolute before:-top-4 before:left-0 before:h-4 before:w-full before:content-[''] relative rounded-2xl border border-slate-100 bg-white/95 p-6 shadow-xl shadow-slate-900/10 backdrop-blur-md">
                <motion.div
                  key={activeMenu}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <MegaMenuContent menu={activeMenu} onNavigate={navigateFromMenu} />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-border bg-card/95 lg:hidden"
            >
              <ul className="container-x flex min-h-0 flex-col py-2 pb-8">
                {NAV_LINKS.map((link) => (
                  <Fragment key={link.to}>
                    <li>{renderMobileLink(link)}</li>
                    {link.label === "Ayushman Bharat" && (
                      <li>
                      </li>
                    )}
                  </Fragment>
                ))}
                <li className="mt-2 flex flex-col gap-3 border-t border-border py-4">
                  <Link
                    to="/contact"
                    hash="appointment"
                    onClick={navigateFromMenu}
                    className="flex items-center justify-center gap-2 rounded-full gradient-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
                  >
                    <CalendarPlus className="h-4 w-4" /> Book Appointment
                  </Link>
                  <a
                    href={`tel:${HOSPITAL.emergency.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-2 text-sm font-semibold text-rose-700"
                  >
                    <PhoneCall className="h-4 w-4" aria-hidden="true" /> Emergency:{" "}
                    {HOSPITAL.emergency}
                  </a>
                  <span className="text-center text-xs text-muted-foreground">
                    {HOSPITAL.hours}
                  </span>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
