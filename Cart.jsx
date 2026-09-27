import { Link } from 'react-router-dom';
import { FiTrash2, FiShoppingBag } from 'react-icons/fi';
import QuantitySelector from '../components/QuantitySelector.jsx';
import { useCart } from '../context/CartContext.jsx';

function Cart() {
  const { items, removeFromCart, increaseQuantity, decreaseQuantity, subtotal, shipping, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center px-6 py-24 text-center">
        <FiShoppingBag className="h-12 w-12 text-bronze" />
        <h1 className="mt-6 font-display text-2xl font-semibold text-maintext dark:text-cream">
          Your cart is empty
        </h1>
        <p className="mt-3 text-sm text-muted dark:text-cream/60">
          Looks like you haven&apos;t added anything yet. Explore the collection to find something you&apos;ll love.
        </p>
        <Link to="/products" className="btn-primary mt-8">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-10 font-display text-3xl font-semibold text-maintext dark:text-cream">Your Cart</h1>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {items.map((item) => (
            <div
              key={item.key}
              className="flex gap-4 border-b border-black/10 pb-6 dark:border-white/10"
            >
              <div className="h-28 w-24 flex-shrink-0 overflow-hidden rounded-sm bg-black/5 dark:bg-white/5">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-maintext dark:text-cream">{item.name}</h3>
                    <p className="mt-1 text-xs text-muted dark:text-cream/50">
                      {item.size && `Size: ${item.size}`}
                      {item.color && (
                        <span className="ml-2 inline-flex items-center gap-1">
                          Color:
                          <span
                            className="inline-block h-3 w-3 rounded-full border border-black/10"
                            style={{ backgroundColor: item.color }}
                          />
                        </span>
                      )}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.key)}
                    aria-label="Remove item"
                    className="text-muted transition hover:text-red-500 dark:text-cream/50"
                  >
                    <FiTrash2 />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <QuantitySelector
                    quantity={item.quantity}
                    onIncrease={() => increaseQuantity(item.key)}
                    onDecrease={() => decreaseQuantity(item.key)}
                  />
                  <span className="text-sm font-semibold text-maintext dark:text-cream">
                    {item.price * item.quantity} EGP
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-fit rounded-sm border border-black/10 p-6 dark:border-white/10">
          <h2 className="font-display text-lg font-semibold text-maintext dark:text-cream">Order Summary</h2>
          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between text-muted dark:text-cream/60">
              <span>Subtotal</span>
              <span>{subtotal} EGP</span>
            </div>
            <div className="flex justify-between text-muted dark:text-cream/60">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `${shipping} EGP`}</span>
            </div>
            <div className="flex justify-between border-t border-black/10 pt-3 text-base font-semibold text-maintext dark:border-white/10 dark:text-cream">
              <span>Total</span>
              <span>{total} EGP</span>
            </div>
          </div>
          <button type="button" className="btn-primary mt-6 w-full">
            Checkout
          </button>
          <Link to="/products" className="mt-3 block text-center text-xs text-muted hover:text-bronze dark:text-cream/50">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
