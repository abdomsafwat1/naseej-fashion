import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import CategoryCard from '../components/CategoryCard.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import Newsletter from '../components/Newsletter.jsx';
import { categories, categoryImages, products } from '../data/products.js';

function Home() {
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <div>
      <Hero />

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="section-label justify-center">Shop by Category</p>
          <h2 className="font-display text-3xl font-semibold text-maintext dark:text-cream">
            Find Your Fit
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => (
            <CategoryCard key={cat} name={cat} image={categoryImages[cat]} />
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="section-label">Just In</p>
            <h2 className="font-display text-3xl font-semibold text-maintext dark:text-cream">New Arrivals</h2>
          </div>
          <Link to="/products?filter=new" className="text-sm font-medium text-bronze hover:underline">
            View all
          </Link>
        </div>
        <ProductGrid products={newArrivals} />
      </section>

      {/* Promotional Banner */}
      <section className="relative mx-6 my-4 overflow-hidden rounded-sm bg-primary sm:mx-auto sm:max-w-7xl dark:bg-black">
        <div className="flex min-h-[16rem] flex-col items-start justify-center gap-3 px-8 py-14 sm:min-h-[20rem] sm:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Limited Time</p>
          <h3 className="font-display text-3xl font-semibold text-white sm:text-4xl">Up to 20% Off</h3>
          <p className="max-w-sm text-sm text-white/70">On select pieces across the collection, while stocks last.</p>
          <Link to="/products" className="btn-primary !bg-white !text-primary hover:!bg-bronze hover:!text-white">
            Shop the Sale
          </Link>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="section-label">Customer Favorites</p>
            <h2 className="font-display text-3xl font-semibold text-maintext dark:text-cream">Best Sellers</h2>
          </div>
          <Link to="/products" className="text-sm font-medium text-bronze hover:underline">
            View all
          </Link>
        </div>
        <ProductGrid products={bestSellers} />
      </section>

      <Newsletter />
    </div>
  );
}

export default Home;
