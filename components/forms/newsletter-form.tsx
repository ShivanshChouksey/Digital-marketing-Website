"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  return subscribed ? (
    <p className="rounded-full bg-white/20 px-4 py-3 text-sm text-white">
      You&apos;re in. We&apos;ll share practical growth insights and conversion ideas.
    </p>
  ) : (
    <form
      className="flex flex-col gap-3 sm:flex-row"
      onSubmit={(event) => {
        event.preventDefault();
        setSubscribed(true);
      }}
    >
      <input
        type="email"
        required
        placeholder="Enter your work email"
        className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 outline-none focus:border-white/50"
      />
      <button
        type="submit"
        className="rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-hover)]"
      >
        Subscribe
      </button>
    </form>
  );
}
