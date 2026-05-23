"use client";

import { useState } from "react";

const initialState = {
  name: "",
  phone: "",
  email: "",
};

export function AuditForm() {
  const [values, setValues] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("phone", values.phone);
      formData.append("email", values.email);
      formData.append("_subject", "New Zeebrag Growth Audit Request");
      formData.append("_captcha", "false");
      formData.append("_template", "table");

      const response = await fetch(
        "https://formsubmit.co/ajax/contact.zeebrag@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setValues(initialState);
      setSubmitted(true);
    } catch {
      setError("Something went wrong while submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-[2rem] border border-white/60 bg-white/90 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          Claim your free growth audit
        </h3>
        <p className="mt-3 text-base leading-7 text-slate-600">
          Tell us where growth feels stuck. We will map quick wins, channel gaps,
          and conversion opportunities.
        </p>
      </div>

      {submitted ? (
        <div className="rounded-[1.5rem] border border-emerald-200 bg-[linear-gradient(135deg,rgba(16,185,129,0.08),rgba(4,119,191,0.08))] p-6 text-slate-900">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold uppercase tracking-[0.22em] text-white">
              Sent
            </div>
            <div>
              <p className="text-lg font-semibold">Form submitted successfully</p>
              <p className="text-sm text-slate-600">
                Your free growth audit request has been received.
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Our team will contact you soon on your provided phone number or email.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-5 inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-[var(--color-secondary)] hover:text-[var(--color-primary)]"
          >
            Submit another response
          </button>
        </div>
      ) : (
        <form className="grid gap-6" onSubmit={handleSubmit}>
          <label className="grid gap-2 text-base font-medium text-slate-950">
            <span>Your Name *</span>
            <input
              required
              name="name"
              type="text"
              placeholder="Full name"
              value={values.name}
              onChange={(event) => setValues({ ...values, name: event.target.value })}
              className="rounded-2xl border border-slate-200 bg-[#f8fafc] px-4 py-3.5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[var(--color-secondary)] focus:bg-white"
            />
          </label>

          <label className="grid gap-2 text-base font-medium text-slate-950">
            <span>Phone Number *</span>
            <input
              required
              name="phone"
              type="tel"
              inputMode="numeric"
              placeholder="10-digit mobile number"
              value={values.phone}
              onChange={(event) => setValues({ ...values, phone: event.target.value })}
              className="rounded-2xl border border-slate-200 bg-[#f8fafc] px-4 py-3.5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[var(--color-secondary)] focus:bg-white"
            />
          </label>

          <label className="grid gap-2 text-base font-medium text-slate-950">
            <span>Email (optional)</span>
            <input
              name="email"
              type="email"
              placeholder="your@email.com"
              value={values.email}
              onChange={(event) => setValues({ ...values, email: event.target.value })}
              className="rounded-2xl border border-slate-200 bg-[#f8fafc] px-4 py-3.5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[var(--color-secondary)] focus:bg-white"
            />
          </label>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-hover)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Submit for free audit"}
          </button>
        </form>
      )}
    </div>
  );
}
