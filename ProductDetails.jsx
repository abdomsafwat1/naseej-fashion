import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiHeart, FiCheck } from 'react-icons/fi';
import Rating from '../components/Rating.jsx';
import QuantitySelector from '../components/QuantitySelector.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import { getProductById, getRelatedProducts } from '../data/products.js';
import { useCart } from '../context/CartContext.jsx';
import { useWishlist } from '../context/WishlistContext.jsx';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();

  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setSelectedSize(product?.sizes[0]);
    setSelectedColor(product?.colors[0]);
    setQuantity(1);
    setAdded(false);
  }, [id]);

  if (!product) {
    return (
      <div className="mx-auto max-w-xl px-6 py-24 text-center">
        <h1 className="font-display text-2xl font-semibold text-maintext dark:text-cream">Product not found</h1>
        <p className="mt-3 text-sm text-muted dark:text-cream/60">
          The product you&apos;re looking for doesn&apos;t exist or may have been removed.
        </p>
        <button onClick={() => navigate('/products')} className="btn-primary mt-8">
          Back to Shop
        </button>
      </div>
    );
  }

  const related = getRelatedProducts(product);
  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = () => {
    addToCart(product, { size: selectedSize, color: selectedColor, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <nav className="mb-8 text-xs text-muted dark:text-cream/50">
        <Link to="/" className="hover:text-bronze">Home</Link> /{' '}
        <Link to="/products" className="hover:text-bronze">Shop</Link> /{' '}
        <span className="text-maintext dark:text-cream">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="aspect-[4/5] overflow-hidden rounded-sm bg-black/5 dark:bg-white/5">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-muted dark:text-cream/50">{product.category}</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-maintext dark:text-cream">{product.name}</h1>

          <div className="mt-3">
            <Rating value={product.rating} reviews={product.reviews} />
          </div>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-2xl font-semibold text-maintext dark:text-cream">{product.price} EGP</span>
            {product.oldPrice && (
              <>
                <span className="text-base text-muted line-through dark:text-cream/40">{product.oldPrice} EGP</span>
                <span className="rounded-sm bg-bronze px-2 py-0.5 text-xs font-semibold text-white">
                  -{product.discount}%
                </span>
              </>
            )}
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted dark:text-cream/70">{product.description}</p>

          {/* Sizes */}
          <div className="mt-8">
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-maintext dark:text-cream">Size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`h-10 min-w-[2.5rem] rounded-sm border px-3 text-sm transition ${
                    selectedSize === size
                      ? 'border-primary bg-primary text-white dark:border-cream dark:bg-cream dark:text-primary'
                      : 'border-black/15 text-maintext hover:border-bronze dark:border-white/20 dark:text-cream'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="mt-6">
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-maintext dark:text-cream">Color</p>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  aria-label={`Select color ${color}`}
                  style={{ backgroundColor: color }}
                  className={`h-8 w-8 rounded-full border-2 transition ${
                    selectedColor === color ? 'border-bronze' : 'border-transparent'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quantity + Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuantitySelector
              quantity={quantity}
              onIncrease={() => setQuantity((q) => q + 1)}
              onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
            />
            <button onClick={handleAddToCart} className="btn-primary flex-1 sm:flex-none sm:min-w-[200px]">
              {added ? (
                <>
                  <FiCheck /> Added to Cart
                </>
              ) : (
                'Add to Cart'
              )}
            </button>
            <button
              onClick={() => toggleWishlist(product.id)}
              aria-label="Toggle wishlist"
              className="flex h-12 w-12 items-center justify-center rounded-sm border border-black/15 text-maintext transition hover:border-bronze dark:border-white/20 dark:text-cream"
            >
              <FiHeart fill={wishlisted ? '#8B7355' : 'none'} stroke={wishlisted ? '#8B7355' : 'currentColor'} />
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-8 font-display text-2xl font-semibold text-maintext dark:text-cream">
            You May Also Like
          </h2>
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  );
}

export default ProductDetails;
