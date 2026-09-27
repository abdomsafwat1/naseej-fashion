import { Link } from 'react-router-dom';
import dressBlack from '../assets/dress-black.jpg';

function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream dark:bg-primary">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="animate-slide-up">
          <p className="section-label">New Season Edit</p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-maintext dark:text-cream sm:text-5xl lg:text-6xl">
            Define Your Style.
          </h1>
          <p className="mt-5 max-w-md text-base text-muted dark:text-cream/70">
            Discover timeless pieces designed for modern everyday living.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/products" className="btn-primary">
              Shop Collection
            </Link>
            <Link to="/products?filter=new" className="btn-outline">
              Explore New Arrivals
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm animate-fade-in">
          <img
            src={dressBlack}
            alt="NASEEJ new season fashion editorial"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
