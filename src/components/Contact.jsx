
import React, { useState } from 'react';

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  problem: '',
};

const inputClasses =
  'w-full min-w-0 rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-zinc-950/50 dark:text-white dark:focus:border-blue-400 sm:text-base';

const labelClasses =
  'text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 sm:text-sm';

export function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState({
    type: null,
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (status.message) {
      setStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submitting) return;

    const name = formData.name.trim();
    const email = formData.email.trim();
    const problem = formData.problem.trim();

    if (!name || !email || !formData.service || !problem) {
      setStatus({
        type: 'error',
        message: 'Please complete all required fields marked with *.',
      });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    // No backend or email service is connected yet.
    setStatus({
      type: 'error',
      message:
        'The contact form is not connected to a submission service yet. Please connect an email service or backend before accepting inquiries.',
    });
  };

  return (
    <section
      id="contact"
      className="relative isolate w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 transition-colors duration-300 dark:from-zinc-950 dark:via-slate-950 dark:to-blue-950/30 sm:py-20 lg:py-24"
    >
      {/* Background glow effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-16 -z-10 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl dark:bg-blue-500/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-80 w-80 rounded-full bg-violet-400/15 blur-3xl dark:bg-violet-500/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl dark:bg-cyan-500/5"
      />

      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 lg:mb-14">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-zinc-600 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-emerald-500"
            />
            Let's Connect
          </span>

          <h2 className="mb-4 break-words font-title text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl lg:text-5xl">
            Start Your{' '}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
              Project
            </span>
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
            Have an idea for a website or workflow automation? Share your
            requirements, and let's explore the right solution.
          </p>
        </header>

        {/* Glassmorphism form card */}
        <div className="relative overflow-hidden rounded-2xl border border-black/[0.08] bg-white/65 p-5 shadow-xl shadow-blue-950/5 backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.055] dark:shadow-black/20 sm:rounded-3xl sm:p-8 md:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
          />

          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="relative flex flex-col gap-6"
          >
            {status.message && (
              <div
                role="alert"
                aria-live="polite"
                className={`rounded-xl border p-4 text-sm leading-6 ${
                  status.type === 'success'
                    ? 'border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300'
                    : 'border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-700 dark:bg-rose-950/40 dark:text-rose-300'
                }`}
              >
                {status.message}
              </div>
            )}

            {/* Name and email */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex min-w-0 flex-col gap-2">
                <label htmlFor="contact-name" className={labelClasses}>
                  Your Name <span className="text-rose-500">*</span>
                </label>

                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  className={inputClasses}
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={100}
                  required
                />
              </div>

              <div className="flex min-w-0 flex-col gap-2">
                <label htmlFor="contact-email" className={labelClasses}>
                  Email Address <span className="text-rose-500">*</span>
                </label>

                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  autoComplete="email"
                  className={inputClasses}
                  placeholder="e.g. sarah@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={254}
                  required
                />
              </div>
            </div>

            {/* Phone and company */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex min-w-0 flex-col gap-2">
                <label htmlFor="contact-phone" className={labelClasses}>
                  Phone Number
                </label>

                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  autoComplete="tel"
                  className={inputClasses}
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={30}
                />
              </div>

              <div className="flex min-w-0 flex-col gap-2">
                <label htmlFor="contact-company" className={labelClasses}>
                  Company Name
                </label>

                <input
                  type="text"
                  id="contact-company"
                  name="company"
                  autoComplete="organization"
                  className={inputClasses}
                  placeholder="e.g. Acme Studio"
                  value={formData.company}
                  onChange={handleChange}
                  maxLength={150}
                />
              </div>
            </div>

            {/* Project type */}
            <div className="flex min-w-0 flex-col gap-2">
              <label htmlFor="contact-service" className={labelClasses}>
                Project Type <span className="text-rose-500">*</span>
              </label>

              <select
                id="contact-service"
                name="service"
                className={`${inputClasses} cursor-pointer`}
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a project category...
                </option>
                <option value="business-website">Business Website</option>
                <option value="website-redesign">Website Redesign</option>
                <option value="ai-chatbot">AI Chatbot Integration</option>
                <option value="workflow-automation">
                  Workflow Automation
                </option>
                <option value="ai-agent">Custom AI Agent</option>
                <option value="other">Other / Custom Request</option>
              </select>
            </div>

            {/* Project details */}
            <div className="flex min-w-0 flex-col gap-2">
              <label htmlFor="contact-problem" className={labelClasses}>
                What problem are you trying to solve?{' '}
                <span className="text-rose-500">*</span>
              </label>

              <textarea
                id="contact-problem"
                name="problem"
                rows={5}
                className={`${inputClasses} resize-y`}
                placeholder="Describe your project, requirements, challenges, or goals..."
                value={formData.problem}
                onChange={handleChange}
                maxLength={5000}
                required
              />

              <p className="text-right text-xs text-zinc-500 dark:text-zinc-400">
                {formData.problem.length}/5000 characters
              </p>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              id="contact-submit-btn"
              disabled={submitting}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 px-6 py-4 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-zinc-900 dark:hover:bg-blue-100 dark:focus-visible:ring-offset-zinc-950 sm:text-base"
            >
              <span>{submitting ? 'Sending...' : 'Send Project Inquiry'}</span>

              <svg
                aria-hidden="true"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </button>

            <p className="text-center text-xs leading-6 text-zinc-500 dark:text-zinc-400">
              Your project details should only be submitted through a
              properly configured and secure contact service.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
