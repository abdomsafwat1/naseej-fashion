const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

function FilterBar({
  categories,
  category,
  onCategoryChange,
  maxPrice,
  priceLimit,
  onPriceChange,
  sortBy,
  onSortChange,
}) {
  return (
    <div className="flex flex-col gap-6 border-b border-black/10 pb-6 dark:border-white/10 md:flex-row md:items-start md:justify-between md:gap-8">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange('All')}
          className={`rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-wide transition ${
            category === 'All'
              ? 'border-primary bg-primary text-white dark:border-cream dark:bg-cream dark:text-primary'
              : 'border-black/15 text-maintext hover:border-bronze hover:text-bronze dark:border-white/20 dark:text-cream'
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-wide transition ${
              category === cat
                ? 'border-primary bg-primary text-white dark:border-cream dark:bg-cream dark:text-primary'
                : 'border-black/15 text-maintext hover:border-bronze hover:text-bronze dark:border-white/20 dark:text-cream'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <label className="flex items-center gap-3 text-xs text-muted dark:text-cream/60">
          Max price: <span className="font-medium text-maintext dark:text-cream">{priceLimit} EGP</span>
          <input
            type="range"
            min="0"
            max={maxPrice}
            step="10"
            value={priceLimit}
            onChange={(e) => onPriceChange(Number(e.target.value))}
            className="w-32 accent-bronze"
          />
        </label>

        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="input-field !w-auto py-2.5 text-xs"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
