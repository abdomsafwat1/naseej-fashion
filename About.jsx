import jacketNavy from '../assets/jacket-navy-hooded.jpg';

const VALUES = [
  {
    title: 'Quality First',
    text: 'Every fabric and finish is chosen to last — considered construction over fast fashion.',
  },
  {
    title: 'Timeless Design',
    text: 'We design for longevity, not trends, so every piece stays relevant season after season.',
  },
  {
    title: 'Everyday Comfort',
    text: 'Style should never come at the expense of comfort. We fit for real, everyday movement.',
  },
];

function About() {
  return (
    <div>
      <section className="relative">
        <img
          src={jacketNavy}
          alt="NASEEJ collection"
          className="h-64 w-full object-cover sm:h-96"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">Our Story</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="section-label justify-center">About Naseej</p>
        <h2 className="font-display text-2xl font-semibold text-maintext dark:text-cream sm:text-3xl">
          Woven from craft, comfort and quality
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted dark:text-cream/70">
          Naseej — meaning &ldquo;fabric&rdquo; or &ldquo;weave&rdquo; in Arabic — was founded on a simple idea:
          modern fashion should feel as good as it looks. We&apos;re a contemporary fashion brand
          focused on combining considered style, everyday comfort, and lasting quality in every
          piece we make.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted dark:text-cream/70">
          From essential layers to statement outerwear, each collection is designed in small,
          intentional batches — favoring craftsmanship over volume, and longevity over trend cycles.
        </p>
      </section>

      <section className="bg-primary py-20 text-cream dark:bg-black">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="section-label !text-bronze justify-center">Our Mission</p>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            To make thoughtfully designed fashion accessible without compromise.
          </h2>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="section-label justify-center">What We Stand For</p>
          <h2 className="font-display text-3xl font-semibold text-maintext dark:text-cream">Our Values</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {VALUES.map((value) => (
            <div key={value.title} className="border border-black/10 p-8 text-center dark:border-white/10">
              <h3 className="font-display text-lg font-semibold text-maintext dark:text-cream">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted dark:text-cream/60">{value.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
