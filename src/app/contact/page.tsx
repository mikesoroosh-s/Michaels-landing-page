"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("https://formsubmit.co/ajax/mikesoroosh@gmail.com", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });

    setSubmitted(true);
    form.reset();
  }

  return (
    <section className="min-h-screen px-6 pt-32 pb-24">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-mono tracking-[0.3em] text-zinc-500 uppercase mb-4">
          Contact
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          START A PROJECT
        </h1>
        <div className="w-12 h-[2px] bg-[#FF8C00]/40 mb-6" />
        <p className="text-lg text-zinc-400 mb-12">
          Have a vision? Let&apos;s make it happen. Fill out the form below and
          I&apos;ll get back to you.
        </p>

        {submitted ? (
          <div className="p-10 rounded-2xl border border-[#FF8C00]/30 bg-[#FF8C00]/5 text-center">
            <p className="text-2xl font-bold text-[#FF8C00] mb-2">
              Message Sent
            </p>
            <p className="text-zinc-400">
              Thanks for reaching out. I&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot for spam */}
            <input type="text" name="_honey" className="hidden" />
            {/* Disable captcha page */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New inquiry from michaelsorooshian.com"
            />

            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF8C00]/50 transition-colors"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF8C00]/50 transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF8C00]/50 transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF8C00]/50 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#FF8C00] text-black font-semibold text-sm tracking-wide hover:bg-[#e67e00] transition-colors"
            >
              SEND MESSAGE
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
