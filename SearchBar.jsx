import { FiSearch, FiX } from 'react-icons/fi';

function SearchBar({ value, onChange, placeholder = 'Search products...' }) {
  return (
    <div className="relative w-full">
      <FiSearch className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted dark:text-cream/50" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="input-field pl-11 pr-10"
        aria-label="Search products"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted transition hover:text-bronze dark:text-cream/50"
        >
          <FiX className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
