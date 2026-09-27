import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FiSearch, FiHeart, FiShoppingBag, FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import Logo from './Logo.jsx';
import { useCart } from '../context/CartContext.jsx';
import { useWishlist } from '../context/WishlistContext.jsx';
import { useDarkMode } from '../hooks/useDarkMode.js';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { itemCount } = useCart();
  const { wishlist } = useWishlist();
  const { theme, toggleTheme } = useDarkMode();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/products?search=${encodeURIComponent(query.trim())}`);
    setSearchOpen(false);
    setQuery('');
  };

  const linkClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-colors ${
      isActive ? 'text-bronze' : 'text-maintext hover:text-bronze dark:text-cream dark:hover:text-bronze'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 shadow-sm backdrop-blur dark:bg-primary/95'
          : 'bg-cream dark:bg-primary'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo className="h-9" />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((prev) => !prev)}
            className="hidden text-maintext transition hover:text-bronze dark:text-cream md:block"
          >
            <FiSearch className="h-5 w-5" />
          </button>

          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="hidden text-maintext transition hover:text-bronze dark:text-cream md:block"
          >
            {theme === 'dark' ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
          </button>

          <Link to="/products" aria-label="Wishlist" className="relative hidden text-maintext transition hover:text-bronze dark:text-cream md:block">
            <FiHeart className="h-5 w-5" />
            {wishlist.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-bronze text-[10px] text-white">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link to="/cart" aria-label="Cart" className="relative text-maintext transition hover:text-bronze dark:text-cream">
            <FiShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-bronze text-[10px] text-white">
                {itemCount}
              </span>
            )}
          </Link>

          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-maintext dark:text-cream md:hidden"
          >
            {menuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="hidden border-t border-black/5 bg-cream px-6 py-4 dark:border-white/10 dark:bg-primary md:block animate-slide-up">
          <form onSubmit={handleSearchSubmit} className="mx-auto flex max-w-md items-center gap-2">
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="input-field"
            />
            <button type="submit" className="btn-primary !px-4 !py-3">
              <FiSearch />
            </button>
          </form>
        </div>
      )}

      <div
        className={`overflow-hidden border-t border-black/5 bg-cream transition-all duration-300 dark:border-white/10 dark:bg-primary md:hidden ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `border-b border-black/5 py-3 text-sm font-medium dark:border-white/10 ${
                  isActive ? 'text-bronze' : 'text-maintext dark:text-cream'
                }`
              }
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 py-3">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="input-field"
            />
            <button type="submit" className="btn-primary !px-4 !py-3">
              <FiSearch />
            </button>
          </form>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 py-3 text-sm font-medium text-maintext dark:text-cream"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
