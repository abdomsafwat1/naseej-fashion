import ProductCard from './ProductCard.jsx';

function ProductGrid({ products, emptyMessage = 'No products found.' }) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 py-24 text-center">
        <p className="font-display text-xl text-maintext dark:text-cream">No products found</p>
        <p className="text-sm text-muted dark:text-cream/60">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
