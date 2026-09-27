import { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="border-t border-black/10 bg-primary py-20 text-cream dark:border-white/10 dark:bg-black">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="section-label !text-bronze">Stay in the loop</p>
        <h2 className="font-display text-3xl font-semibold">Join the Naseej list</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-cream/70">
          New arrivals, seasonal edits and considered style notes — delivered occasionally, never overwhelming.
        </p>

        {submitted ? (
          <p className="mt-8 text-sm font-medium text-bronze animate-fade-in">
            You&apos;re subscribed — welcome to Naseej.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-sm border border-white/20 bg-white/5 px-4 py-3 text-sm text-cream placeholder:text-cream/40 outline-none focus:border-bronze"
            />
            <button type="submit" className="btn-primary whitespace-nowrap !bg-bronze hover:!bg-cream hover:!text-primary">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Newsletter;
