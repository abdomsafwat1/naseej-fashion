import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar.jsx';
import FilterBar from '../components/FilterBar.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import Loading from '../components/Loading.jsx';
import { categories, products } from '../data/products.js';

const MAX_PRICE = Math.max(...products.map((p) => p.price));

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [category, setCategory] = useState(searchParams.get('category') || 'All');
  const [priceLimit, setPriceLimit] = useState(MAX_PRICE);
  const [sortBy, setSortBy] = useState('featured');
  const onlyNew = searchParams.get('filter') === 'new';

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const next = {};
    if (search) next.search = search;
    if (category !== 'All') next.category = category;
    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, category]);

  const filtered = useMemo(() => {
    let list = [...products];

    if (onlyNew) list = list.filter((p) => p.isNew);

    if (category !== 'All') list = list.filter((p) => p.category === category);

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    list = list.filter((p) => p.price <= priceLimit);

    switch (sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        list.sort((a, b) => Number(b.isNew) - Number(a.isNew));
        break;
      default:
        break;
    }

    return list;
  }, [category, search, priceLimit, sortBy, onlyNew]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 text-center">
        <p className="section-label justify-center">The Full Collection</p>
        <h1 className="font-display text-3xl font-semibold text-maintext dark:text-cream sm:text-4xl">
          {onlyNew ? 'New Arrivals' : 'Shop All'}
        </h1>
      </div>

      <div className="mb-8 max-w-md">
        <SearchBar value={search} onChange={setSearch} />
      </div>

      <div className="mb-10">
        <FilterBar
          categories={categories}
          category={category}
          onCategoryChange={setCategory}
          maxPrice={MAX_PRICE}
          priceLimit={priceLimit}
          onPriceChange={setPriceLimit}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
      </div>

      {loading ? (
        <Loading />
      ) : (
        <>
          <p className="mb-6 text-xs text-muted dark:text-cream/50">{filtered.length} products</p>
          <ProductGrid
            products={filtered}
            emptyMessage="Try adjusting your search or filters."
          />
        </>
      )}
    </div>
  );
}

export default Products;
