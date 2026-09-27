import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';

const initialForm = { name: '', email: '', subject: '', message: '' };

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Please enter a valid email.';
    if (!form.subject.trim()) nextErrors.subject = 'Please enter a subject.';
    if (!form.message.trim() || form.message.trim().length < 10)
      nextErrors.message = 'Message should be at least 10 characters.';
    return nextErrors;
  };

  const handleChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 text-center">
        <p className="section-label justify-center">Get in Touch</p>
        <h1 className="font-display text-3xl font-semibold text-maintext dark:text-cream sm:text-4xl">
          We&apos;d Love to Hear From You
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted dark:text-cream/60">
              Name
            </label>
            <input id="name" type="text" value={form.name} onChange={handleChange('name')} className="input-field" />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted dark:text-cream/60">
              Email
            </label>
            <input id="email" type="email" value={form.email} onChange={handleChange('email')} className="input-field" />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="subject" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted dark:text-cream/60">
              Subject
            </label>
            <input id="subject" type="text" value={form.subject} onChange={handleChange('subject')} className="input-field" />
            {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted dark:text-cream/60">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={handleChange('message')}
              className="input-field resize-none"
            />
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
          </div>

          <button type="submit" className="btn-primary w-full sm:w-auto">
            Send Message
          </button>

          {submitted && (
            <p className="text-sm font-medium text-bronze animate-fade-in">
              Thank you — your message has been sent. We&apos;ll get back to you soon.
            </p>
          )}
        </form>

        <div className="space-y-8">
          <div className="flex h-56 flex-col items-center justify-center gap-3 rounded-sm border border-black/10 bg-black/[0.03] text-center dark:border-white/10 dark:bg-white/5">
            <FiMapPin className="h-8 w-8 text-bronze" />
            <p className="text-sm text-muted dark:text-cream/60">12 Design District, Cairo, Egypt</p>
          </div>

          <div className="space-y-4 text-sm text-maintext dark:text-cream">
            <div className="flex items-center gap-3">
              <FiMail className="text-bronze" /> hello@naseej.com
            </div>
            <div className="flex items-center gap-3">
              <FiPhone className="text-bronze" /> +20 100 000 0000
            </div>
            <div className="flex items-center gap-3">
              <FiMapPin className="text-bronze" /> 12 Design District, Cairo, Egypt
            </div>
          </div>

          <div className="flex items-center gap-4 text-muted dark:text-cream/60">
            <a href="#" aria-label="Instagram" className="transition hover:text-bronze"><FiInstagram /></a>
            <a href="#" aria-label="Twitter" className="transition hover:text-bronze"><FiTwitter /></a>
            <a href="#" aria-label="Facebook" className="transition hover:text-bronze"><FiFacebook /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
