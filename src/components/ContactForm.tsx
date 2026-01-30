"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const hasError = status === "error";

  const onChange = (field: keyof FormState, value: string) => {
    setStatus("idle");
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setForm(initialState);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-white/70">
          Name
          <input
            type="text"
            value={form.name}
            onChange={(event) => onChange("name", event.target.value)}
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
            placeholder="Your name"
            required
            aria-invalid={hasError && !form.name}
          />
        </label>
        <label className="text-sm text-white/70">
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) => onChange("email", event.target.value)}
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
            placeholder="you@email.com"
            required
            aria-invalid={hasError && !form.email}
          />
        </label>
      </div>
      <label className="mt-4 block text-sm text-white/70">
        Message
        <textarea
          value={form.message}
          onChange={(event) => onChange("message", event.target.value)}
          className="mt-2 h-32 w-full resize-none rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
          placeholder="Share a few details about your project or role."
          required
          aria-invalid={hasError && !form.message}
        />
      </label>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
        >
          Send message
        </button>
        <p
          className="text-xs text-white/50"
          role="status"
          aria-live="polite"
        >
          {status === "error"
            ? "Please complete all fields before sending."
            : null}
          {status === "success"
            ? "Thanks — I will respond within 24 hours."
            : null}
        </p>
      </div>
    </form>
  );
}
