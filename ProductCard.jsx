import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import Rating from './Rating.jsx';
import { useWishlist } from '../context/WishlistContext.jsx';
import { useCart } from '../context/CartContext.jsx';

function ProductCard({ product }) {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, { size: product.sizes[0], color: product.colors[0], quantity: 1 });
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    toggleWishlist(product.id);
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="group block animate-fade-in"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-black/5 dark:bg-white/5">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-soft group-hover:scale-105"
        />

        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="rounded-sm bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white dark:bg-cream dark:text-primary">
              New
            </span>
          )}
          {product.discount > 0 && (
            <span className="rounded-sm bg-bronze px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
              -{product.discount}%
            </span>
          )}
        </div>

        <button
          onClick={handleWishlist}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-primary shadow-sm transition hover:scale-105 dark:bg-black/60 dark:text-cream"
        >
          <FiHeart className="h-4 w-4" fill={wishlisted ? '#8B7355' : 'none'} stroke={wishlisted ? '#8B7355' : 'currentColor'} />
        </button>

        <button
          onClick={handleAddToCart}
          className="absolute inset-x-3 bottom-3 translate-y-2 rounded-sm bg-primary/95 py-2.5 text-xs font-medium uppercase tracking-wide text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-cream dark:text-primary"
        >
          Add to Cart
        </button>
      </div>

      <div className="mt-3">
        <p className="text-[11px] uppercase tracking-wide text-muted dark:text-cream/50">{product.category}</p>
        <h3 className="mt-1 truncate text-sm font-medium text-maintext dark:text-cream">{product.name}</h3>
        <div className="mt-1.5">
          <Rating value={product.rating} reviews={product.reviews} />
        </div>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="text-sm font-semibold text-maintext dark:text-cream">{product.price} EGP</span>
          {product.oldPrice && (
            <span className="text-xs text-muted line-through dark:text-cream/40">{product.oldPrice} EGP</span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
