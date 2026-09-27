import { Link } from 'react-router-dom';
import { FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';
import Logo from './Logo.jsx';
import { categories } from '../data/products.js';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-cream pt-16 text-maintext dark:border-white/10 dark:bg-primary dark:text-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 pb-12 sm:grid-cols-2 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <Logo className="h-9" />
          <p className="mt-4 max-w-xs text-sm text-muted dark:text-cream/60">
            Contemporary fashion woven from quality, comfort and considered design.
          </p>
          <div className="mt-5 flex items-center gap-4 text-muted dark:text-cream/60">
            <a href="#" aria-label="Instagram" className="transition hover:text-bronze"><FiInstagram /></a>
            <a href="#" aria-label="Twitter" className="transition hover:text-bronze"><FiTwitter /></a>
            <a href="#" aria-label="Facebook" className="transition hover:text-bronze"><FiFacebook /></a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide">Shop</h4>
          <ul className="space-y-2.5 text-sm text-muted dark:text-cream/60">
            {categories.slice(0, 5).map((cat) => (
              <li key={cat}>
                <Link to={`/products?category=${encodeURIComponent(cat)}`} className="transition hover:text-bronze">
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide">Company</h4>
          <ul className="space-y-2.5 text-sm text-muted dark:text-cream/60">
            <li><Link to="/about" className="transition hover:text-bronze">About Us</Link></li>
            <li><Link to="/contact" className="transition hover:text-bronze">Contact</Link></li>
            <li><Link to="/products" className="transition hover:text-bronze">All Products</Link></li>
            <li><Link to="/cart" className="transition hover:text-bronze">Cart</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide">Contact</h4>
          <ul className="space-y-2.5 text-sm text-muted dark:text-cream/60">
            <li>hello@naseej.com</li>
            <li>+20 100 000 0000</li>
            <li>Cairo, Egypt</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/10 py-6 dark:border-white/10">
        <p className="text-center text-xs text-muted dark:text-cream/50">
          © {year} NASEEJ. All rights reserved. Designed as a front-end portfolio project.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
