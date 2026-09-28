import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Toaster } from "@/components/ui/sonner";
import { TopBar } from "@/components/site/TopBar";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Loader } from "@/components/site/Loader";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Smart City Hospital | Multi-Speciality Healthcare" },
      {
        name: "description",
        content:
          "Smart City Hospital, Jhansi provides advanced multi-speciality healthcare with 24×7 emergency support, critical care, diagnostics and patient-focused services.",
      },
      { name: "author", content: "Smart City Hospital" },
      { property: "og:title", content: "Smart City Hospital | Multi-Speciality Healthcare" },
      {
        property: "og:description",
        content: "Advanced multi-speciality hospital in Jhansi with emergency, critical care, diagnostics and Ayushman Bharat support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://smartcityhospital.org/" },
      { property: "og:site_name", content: "Smart City Hospital" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: "https://smartcityhospital.org/smart-city-hospital-building.webp" },
      { property: "og:image:alt", content: "Smart City Hospital, Jhansi" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Smart City Hospital | Multi-Speciality Healthcare" },
      { name: "twitter:description", content: "Multi-speciality healthcare in Jhansi with 24×7 emergency, critical care and diagnostics." },
      { name: "twitter:image", content: "https://smartcityhospital.org/smart-city-hospital-building.webp" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#ffffff" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hospital",
              name: "Smart City Hospital",
              url: "https://smartcityhospital.org/",
              image: "https://smartcityhospital.org/smart-city-hospital-building.webp",
              email: "info@smartcityhospital.org",
              telephone: ["+91 70801 50801", "+91 70801 50802", "05102440003", "05102440004"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Near R.T.O. Office, in front of New Tehsil, Shivaji Nagar",
                addressLocality: "Jhansi",
                addressRegion: "Uttar Pradesh",
                postalCode: "284001",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.instagram.com/smartcityhospital.jhansi?stkn=MW13dXRmemVqZnR6aQ==",
                "https://www.facebook.com/profile.php?id=61570947070815",
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isPatientLogin = pathname === "/patient-login";

  return (
    <QueryClientProvider client={queryClient}>
      {!isPatientLogin && <Loader />}
      {!isPatientLogin && <TopBar />}
      {!isPatientLogin && <Navbar />}
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          className={isPatientLogin ? "min-h-screen" : undefined}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </motion.main>
      </AnimatePresence>
      {!isPatientLogin && <Footer />}
      {!isPatientLogin && <FloatingActions />}
      <Toaster />
    </QueryClientProvider>
  );
}
