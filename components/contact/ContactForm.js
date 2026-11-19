"use client";

import { useState } from "react";
import Link from "next/link";

// Client-side validated enquiry form.
// NOTE: wire `submitTo` to a real endpoint (Formspree / Web3Forms / your own
// Node endpoint) before launch. Until then it validates and shows success
// without sending. No data is stored in localStorage.
const submitTo = ""; // e.g. "https://formspree.io/f/xxxxxxx"

const services = [
  "New website",
  "Redesign",
  "Web application",
  "UI/UX design",
  "SEO-ready build",
  "Support",
];

const budgets = [
  "Not sure yet",
  "Under ₹25,000",
  "₹25,000 – ₹75,000",
  "₹75,000 – ₹2,00,000",
  "Over ₹2,00,000",
];

export default function ContactForm() {
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function validate(form) {
    const e = {};
    if (!form.name.value.trim()) e.name = "Please enter your name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.value))
      e.email = "Please enter a valid email address.";
    if (!form.message.value.trim())
      e.message = "Please tell me a little about the project.";
    return e;
  }

  async function onSubmit(ev) {
    ev.preventDefault();
    const form = ev.currentTarget;
    if (form.company.value) return; // honeypot filled → silently drop

    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length) return;

    if (submitTo) {
      try {
        await fetch(submitTo, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form),
        });
      } catch {
        /* surface a real error UI once an endpoint is wired */
      }
    }
    setSent(true);
    form.reset();
  }

  if (sent) {
    return (
      <p className="ok" role="status">
        Thanks — your project details are on their way. I&apos;ll reply within
        24 hours.
      </p>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      {/* Honeypot — hidden from people, catches bots */}
      <input
        type="text"
        name="company"
        className="hp"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="row">
        <label htmlFor="name">
          Your name <span className="req">*</span>
        </label>
        <input id="name" name="name" type="text" autoComplete="name" required />
        {errors.name && <span className="err">{errors.name}</span>}
      </div>

      <div className="row">
        <label htmlFor="email">
          Email <span className="req">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        {errors.email && <span className="err">{errors.email}</span>}
      </div>

      <div className="row">
        <label htmlFor="phone">Phone or WhatsApp (optional)</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>

      <div className="row">
        <label htmlFor="service">What do you need?</label>
        <select id="service" name="service" defaultValue="">
          <option value="" disabled>
            Choose one…
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="row">
        <label htmlFor="budget">Rough budget range (optional)</label>
        <select id="budget" name="budget" defaultValue="">
          <option value="">Prefer not to say</option>
          {budgets.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="row">
        <label htmlFor="message">
          Tell me about the project <span className="req">*</span>
        </label>
        <textarea id="message" name="message" required />
        {errors.message && <span className="err">{errors.message}</span>}
      </div>

      <button type="submit" className="btn solid" style={{ justifySelf: "start" }}>
        Send my project details
      </button>

      <p className="note">
        I use your details only to reply to your enquiry. See the{" "}
        <Link href="/privacy" style={{ color: "var(--gtext)" }}>
          privacy policy
        </Link>
        .
      </p>
    </form>
  );
}
