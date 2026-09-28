import { useEffect, useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Reveal } from "@/components/site/motion-primitives";
import { DEPARTMENTS, DOCTORS, HOSPITAL } from "@/lib/site-data";
import { SectionHeading } from "./Common";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  mobile: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().trim().email("Enter a valid email address").max(120),
  department: z.string().min(1, "Select a department"),
  doctor: z.string().min(1, "Select a doctor"),
  date: z.string().min(1, "Select a date"),
  time: z.string().min(1, "Select a time"),
  message: z.string().trim().max(500).optional(),
});

type FormState = {
  name: string;
  mobile: string;
  email: string;
  department: string;
  doctor: string;
  date: string;
  time: string;
  message: string;
};

const empty: FormState = { name: "", mobile: "", email: "", department: "", doctor: "", date: "", time: "", message: "" };

const field =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-cyan";

export function AppointmentSection() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  useEffect(() => {
    const selectedDoctor = new URLSearchParams(window.location.search).get("doctor");
    if (selectedDoctor && DOCTORS.some((d) => d.name === selectedDoctor)) {
      setForm((f) => ({ ...f, doctor: selectedDoctor }));
    }
  }, []);

  const set = (k: keyof FormState, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) errs[issue.path[0] as keyof FormState] = issue.message;
      setErrors(errs);
      toast.error("Please correct the highlighted fields.");
      return;
    }
    setErrors({});

    const message = [
      "*SMART CITY HOSPITAL - APPOINTMENT REQUEST*",
      "",
      "*Patient Details*",
      `Name: ${parsed.data.name}`,
      `Mobile: ${parsed.data.mobile}`,
      `Email: ${parsed.data.email}`,
      "",
      "*Appointment Details*",
      `Department: ${parsed.data.department}`,
      `Doctor: ${parsed.data.doctor}`,
      `Preferred Date: ${parsed.data.date}`,
      `Preferred Time: ${parsed.data.time}`,
      ...(parsed.data.message ? ["", "*Additional Message*", parsed.data.message] : []),
      "",
      "Please confirm the appointment availability. Thank you.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${HOSPITAL.whatsapp}?text=${encodeURIComponent(message)}`;
    window.location.assign(whatsappUrl);
  };

  const previewMessage = [
    "*SMART CITY HOSPITAL - APPOINTMENT REQUEST*",
    "",
    "*Patient Details*",
    `Name: ${form.name || "-"}`,
    `Mobile: ${form.mobile || "-"}`,
    `Email: ${form.email || "-"}`,
    "",
    "*Appointment Details*",
    `Department: ${form.department || "-"}`,
    `Doctor: ${form.doctor || "-"}`,
    `Preferred Date: ${form.date || "-"}`,
    `Preferred Time: ${form.time || "-"}`,
    ...(form.message.trim() ? ["", "*Additional Message*", form.message.trim()] : []),
    "",
    "Please confirm the appointment availability. Thank you.",
  ].join("\n");

  const waText = encodeURIComponent(previewMessage);

  return (
    <section id="appointment" className="section-pad scroll-mt-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Book Appointment"
          title="Reserve your consultation in under a minute"
          desc="Choose a department, doctor and time slot — we confirm by call or WhatsApp."
        />

        <Reveal className="mx-auto mt-10 max-w-3xl">
          <form onSubmit={submit} noValidate className="card-premium grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Full Name
              </label>
              <input id="name" className={field} value={form.name} maxLength={80} onChange={(e) => set("name", e.target.value)} />
              {errors.name && <p className="mt-1 text-xs text-primary">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="mobile" className="mb-1.5 block text-sm font-medium">
                Mobile Number
              </label>
              <input
                id="mobile"
                inputMode="numeric"
                maxLength={10}
                className={field}
                value={form.mobile}
                onChange={(e) => set("mobile", e.target.value.replace(/\D/g, ""))}
              />
              {errors.mobile && <p className="mt-1 text-xs text-primary">{errors.mobile}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email
              </label>
              <input id="email" type="email" maxLength={120} className={field} value={form.email} onChange={(e) => set("email", e.target.value)} />
              {errors.email && <p className="mt-1 text-xs text-primary">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="department" className="mb-1.5 block text-sm font-medium">
                Department
              </label>
              <select id="department" className={field} value={form.department} onChange={(e) => set("department", e.target.value)}>
                <option value="">Select department</option>
                {DEPARTMENTS.map((d) => (
                  <option key={d.name} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>
              {errors.department && <p className="mt-1 text-xs text-primary">{errors.department}</p>}
            </div>
            <div>
              <label htmlFor="doctor" className="mb-1.5 block text-sm font-medium">
                Doctor
              </label>
              <select id="doctor" className={field} value={form.doctor} onChange={(e) => set("doctor", e.target.value)}>
                <option value="">Select doctor</option>
                {DOCTORS.map((d) => (
                  <option key={d.name} value={d.name}>
                    {d.name} — {d.spec}
                  </option>
                ))}
              </select>
              {errors.doctor && <p className="mt-1 text-xs text-primary">{errors.doctor}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="mb-1.5 block text-sm font-medium">
                  Date
                </label>
                <input id="date" type="date" className={field} value={form.date} onChange={(e) => set("date", e.target.value)} />
                {errors.date && <p className="mt-1 text-xs text-primary">{errors.date}</p>}
              </div>
              <div>
                <label htmlFor="time" className="mb-1.5 block text-sm font-medium">
                  Time
                </label>
                <input id="time" type="time" className={field} value={form.time} onChange={(e) => set("time", e.target.value)} />
                {errors.time && <p className="mt-1 text-xs text-primary">{errors.time}</p>}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message (optional)
              </label>
              <textarea
                id="message"
                rows={3}
                maxLength={500}
                className={field}
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-3 sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                <Send className="h-4 w-4" /> Request Appointment
              </button>
              <a
                href={`https://wa.me/${HOSPITAL.whatsapp}?text=${waText}`}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:border-cyan hover:text-cyan"
              >
                <MessageCircle className="h-4 w-4" /> Send on WhatsApp
              </a>
            </div>
          </form>
        </Reveal>

      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="section-pad bg-surface">
      <div className="container-x">
        <SectionHeading eyebrow="Contact" title="Reach us any hour of the day" desc="Walk in, call, or find us on the map." />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal className="grid gap-4 sm:grid-cols-2">
            {[
              { Icon: MapPin, title: "Address", value: HOSPITAL.address, href: undefined },
              { Icon: Phone, title: "Phone Numbers", value: `${HOSPITAL.emergency} · ${HOSPITAL.ambulance} · ${HOSPITAL.landline1} · ${HOSPITAL.landline2}`, href: undefined },
              { Icon: Mail, title: "Email", value: HOSPITAL.email, href: `mailto:${HOSPITAL.email}` },
              { Icon: Clock, title: "Timings", value: HOSPITAL.hours, href: undefined },
            ].map((c) => (
              <article key={c.title} className="card-premium p-5">
                <c.Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">{c.title}</h3>
                {c.href ? (
                  <a href={c.href} className="mt-1 block break-words text-sm font-medium hover:text-primary">
                    {c.value}
                  </a>
                ) : (
                  <p className="mt-1 break-words text-sm font-medium">{c.value}</p>
                )}
              </article>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-[320px] overflow-hidden rounded-[2rem] border border-border shadow-soft sm:h-full sm:min-h-[320px]">
              <iframe
                title="Smart City Hospital Jhansi location map"
                src="https://www.google.com/maps?q=Smart%20City%20Hospital%20Jhansi&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
