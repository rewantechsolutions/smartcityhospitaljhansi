import { useState, type FormEvent } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, LogIn, Smartphone } from "lucide-react";
import hospitalLogo from "@/assets/smartcity-logo.png";

export const Route = createFileRoute("/patient-login")({
  head: () => ({
    meta: [
      { title: "Patient Login | Smart City Hospital Jhansi" },
      {
        name: "description",
        content: "Enter your mobile number to begin patient verification at Smart City Hospital.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: PatientLoginPage,
});

function PatientLoginPage() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("Mobile OTP delivery is not connected yet.");
  }

  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden bg-[linear-gradient(135deg,#f3faf8_0%,#f7f9fc_52%,#edf7f5_100%)] px-4 py-10 sm:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-[-10rem] h-[25rem] w-[25rem] rounded-full bg-[#b7e9dc]/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -right-28 h-[30rem] w-[30rem] rounded-full bg-[#cce9f3]/45 blur-3xl"
      />

      <section className="relative w-full max-w-[450px] rounded-[20px] border border-[#e2e8f0] bg-white px-6 py-8 shadow-[0_10px_30px_rgba(15,23,42,0.08)] sm:px-10 sm:py-10">
        <Link
          to="/"
          aria-label="Back to Smart City Hospital home"
          className="absolute left-5 top-5 grid h-9 w-9 place-items-center rounded-full text-[#64748b] transition-colors hover:bg-[#f1f5f9] hover:text-[#0f766e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0d9488] sm:left-6 sm:top-6"
        >
          <ArrowLeft aria-hidden="true" className="h-[18px] w-[18px]" />
        </Link>

        <div className="flex flex-col items-center text-center">
          <img
            src={hospitalLogo}
            alt="Smart City Hospital"
            className="mb-7 h-auto max-h-[70px] w-auto max-w-[210px] object-contain"
          />
          <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#e8f6f2] text-[#0f766e]">
            <Smartphone aria-hidden="true" className="h-6 w-6" />
          </div>
          <h1 className="text-[25px] font-semibold leading-tight text-[#1e293b] sm:text-[28px]">
            Mobile Verification
          </h1>
          <p className="mt-2 max-w-[310px] text-[14px] leading-6 text-[#64748b]">
            We will send you a One Time Password on this mobile number
          </p>
        </div>

        <form className="mt-8" onSubmit={handleSubmit}>
          <label
            htmlFor="mobile-number"
            className="mb-2 block text-[13px] font-semibold text-[#334155]"
          >
            Mobile number
          </label>
          <div className="flex h-[52px] items-center rounded-[10px] border-[1.5px] border-[#cbd5e1] bg-white px-4 transition-[border-color,box-shadow] duration-200 focus-within:border-[#0d9488] focus-within:shadow-[0_0_0_3px_rgba(13,148,136,0.15)]">
            <span aria-hidden="true" className="pr-3 text-[15px] font-medium text-[#475569]">
              +91
            </span>
            <span aria-hidden="true" className="h-6 w-px bg-[#e2e8f0]" />
            <input
              id="mobile-number"
              name="mobile-number"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              maxLength={10}
              pattern="[0-9]{10}"
              placeholder="Enter your mobile number"
              aria-describedby="mobile-hint"
              required
              className="h-full min-w-0 flex-1 bg-transparent pl-3 text-[14px] text-[#1e293b] outline-none placeholder:text-[#94a3b8]"
            />
          </div>
          <p id="mobile-hint" className="mt-2 text-xs text-[#94a3b8]">
            Enter your 10-digit mobile number
          </p>

          <button
            type="submit"
            className="mt-6 inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[#0b6154] px-5 text-[15px] font-semibold text-white shadow-[0_5px_14px_rgba(11,97,84,0.18)] transition-all duration-250 ease-in-out hover:-translate-y-px hover:bg-[#084d43] hover:shadow-[0_8px_18px_rgba(11,97,84,0.22)] active:translate-y-0 active:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d9488]"
          >
            <LogIn aria-hidden="true" className="h-4 w-4" />
            Get OTP
          </button>

          {notice && (
            <p
              role="status"
              className="mt-4 rounded-lg bg-[#fff7ed] px-3 py-2.5 text-center text-[13px] text-[#9a3412]"
            >
              {notice}
            </p>
          )}
        </form>

        <p className="mt-7 text-center text-xs text-[#94a3b8]">
          Need assistance? Call{" "}
          <a href="tel:+917080150801" className="font-semibold text-[#0f766e] hover:underline">
            +91 70801 50801
          </a>
        </p>
      </section>
    </div>
  );
}
