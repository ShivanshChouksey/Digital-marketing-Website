"use client";

import { useState } from "react";

const initialState = {
  name: "",
  brand: "",
  handle: "",
};

export function InstagramAuditForm() {
  const [values, setValues] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("brand", values.brand);
      formData.append("instagram_handle", values.handle);
      formData.append("_subject", "New Zeebrag Instagram Growth Audit Request");
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
    <div className="rounded-[2rem] border border-white/60 bg-white/95 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.1)] backdrop-blur-xl sm:p-8">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-primary)]">
          Free Instagram Growth Audit
        </p>
        <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950">
          Get a sharp, no-fluff review of your brand presence
        </h3>
        <p className="mt-3 text-base leading-7 text-slate-600">
          We will review content quality, profile positioning, brand trust signals,
          and quick opportunities to improve attention and conversion.
        </p>
      </div>

      {submitted ? (
        <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-6">
          <p className="text-lg font-semibold text-slate-950">
            Audit request received.
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            We will review your Instagram presence and reach out with the next
            steps shortly.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-5 inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-[var(--color-secondary)] hover:text-[var(--color-primary)]"
          >
            Submit another handle
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-5">
          <label className="grid gap-2 text-sm font-medium text-slate-950">
            <span>Name</span>
            <input
              required
              type="text"
              value={values.name}
              onChange={(event) => setValues({ ...values, name: event.target.value })}
              className="rounded-2xl border border-slate-200 bg-[#f8fafc] px-4 py-3.5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[var(--color-secondary)] focus:bg-white"
              placeholder="Your name"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-950">
            <span>Brand</span>
            <input
              required
              type="text"
              value={values.brand}
              onChange={(event) => setValues({ ...values, brand: event.target.value })}
              className="rounded-2xl border border-slate-200 bg-[#f8fafc] px-4 py-3.5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[var(--color-secondary)] focus:bg-white"
              placeholder="Brand or company name"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-950">
            <span>Instagram Handle</span>
            <input
              required
              type="text"
              value={values.handle}
              onChange={(event) => setValues({ ...values, handle: event.target.value })}
              className="rounded-2xl border border-slate-200 bg-[#f8fafc] px-4 py-3.5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[var(--color-secondary)] focus:bg-white"
              placeholder="@yourbrand"
            />
          </label>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Request Instagram Audit"}
          </button>
        </form>
      )}
    </div>
  );
}
