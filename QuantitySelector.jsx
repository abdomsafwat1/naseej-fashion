import { FiMinus, FiPlus } from 'react-icons/fi';

function QuantitySelector({ quantity, onIncrease, onDecrease, min = 1 }) {
  return (
    <div className="inline-flex items-center border border-black/10 dark:border-white/15">
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        className="flex h-10 w-10 items-center justify-center text-maintext transition hover:bg-black/5 disabled:opacity-30 dark:text-cream dark:hover:bg-white/10"
      >
        <FiMinus />
      </button>
      <span className="w-10 text-center text-sm font-medium">{quantity}</span>
      <button
        type="button"
        onClick={onIncrease}
        aria-label="Increase quantity"
        className="flex h-10 w-10 items-center justify-center text-maintext transition hover:bg-black/5 dark:text-cream dark:hover:bg-white/10"
      >
        <FiPlus />
      </button>
    </div>
  );
}

export default QuantitySelector;
