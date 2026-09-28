import { useState } from "react";
import { BadgeCheck, CheckCircle2, FileText, IndianRupee, ShieldCheck, XCircle } from "lucide-react";
import { Reveal } from "@/components/site/motion-primitives";
import { SectionHeading } from "./Common";

const benefits = [
  "Cashless cover up to ₹5 lakh per family per year",
  "Covers surgery, ICU stay, medicines and diagnostics",
  "No cap on family size, age or gender",
  "Pre-existing conditions covered from day one",
];

const documents = ["Ayushman / PM-JAY card", "Aadhaar card of the patient", "Ration card or family ID", "Registered mobile number"];

export function AyushmanSection() {
  const [answers, setAnswers] = useState({ card: "", income: "", listed: "" });
  const [result, setResult] = useState<null | boolean>(null);

  const complete = answers.card && answers.income && answers.listed;

  return (
    <section id="ayushman" className="section-pad bg-surface">
      <div className="container-x">
        <SectionHeading
          eyebrow="Ayushman Bharat PM-JAY"
          title="Free, cashless treatment for eligible families"
          desc="Smart City Hospital is listed as an Ayushman Bharat PM-JAY empanelled hospital. Contact the hospital to confirm current eligibility, package coverage and required documents."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal className="grid gap-5 sm:grid-cols-2">
            <div className="card-premium p-6">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <h3 className="mt-3 text-lg font-semibold">Eligibility</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Families listed under SECC deprivation criteria, occupational categories, or holding a valid PM-JAY card issued
                by the state authority.
              </p>
            </div>
            <div className="card-premium p-6">
              <IndianRupee className="h-8 w-8 text-primary" />
              <h3 className="mt-3 text-lg font-semibold">Cashless Treatment</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Zero payment at discharge for covered procedures — our desk raises pre-authorisation with the state agency.
              </p>
            </div>
            <div className="card-premium p-6">
              <BadgeCheck className="h-8 w-8 text-primary" />
              <h3 className="mt-3 text-lg font-semibold">Benefits</h3>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                {benefits.map((b) => (
                  <li key={b} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-premium p-6">
              <FileText className="h-8 w-8 text-primary" />
              <h3 className="mt-3 text-lg font-semibold">Documents Required</h3>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                {documents.map((d) => (
                  <li key={d} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan" /> {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-premium h-full p-6 sm:p-8">
              <h3 className="text-xl font-semibold">Quick Eligibility Checker</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Answer three questions for an indicative result. Final eligibility is confirmed at our help desk.
              </p>

              <div className="mt-6 space-y-5">
                {[
                  { key: "card", label: "Do you have a valid Ayushman / PM-JAY card?" },
                  { key: "income", label: "Is your family covered under SECC / state beneficiary list?" },
                  { key: "listed", label: "Is the required treatment a listed PM-JAY procedure?" },
                ].map((q) => (
                  <fieldset key={q.key}>
                    <legend className="text-sm font-medium">{q.label}</legend>
                    <div className="mt-2 flex gap-2">
                      {["Yes", "No", "Not sure"].map((opt) => {
                        const active = answers[q.key as keyof typeof answers] === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => {
                              setAnswers((a) => ({ ...a, [q.key]: opt }));
                              setResult(null);
                            }}
                            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                              active
                                ? "border-transparent gradient-primary text-primary-foreground"
                                : "border-border bg-card hover:border-cyan hover:text-cyan"
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>
                ))}
              </div>

              <button
                type="button"
                disabled={!complete}
                onClick={() => setResult(answers.card === "Yes" && answers.income !== "No" && answers.listed !== "No")}
                className="mt-6 w-full rounded-full gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Check Eligibility
              </button>

              {result !== null && (
                <div
                  role="status"
                  className={`mt-4 flex items-start gap-3 rounded-2xl border p-4 text-sm ${
                    result ? "border-cyan/40 bg-cyan/10" : "border-primary/40 bg-primary/10"
                  }`}
                >
                  {result ? (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                  ) : (
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  )}
                  <p>
                    {result
                      ? "You are likely eligible for cashless treatment. Visit our Ayushman help desk with your card and Aadhaar."
                      : "You may not qualify under PM-JAY. Our team can help you explore state schemes and affordable packages."}
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
