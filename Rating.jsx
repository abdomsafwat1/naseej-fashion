import { FiStar } from 'react-icons/fi';

function Rating({ value = 0, reviews }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5 text-bronze">
        {stars.map((star) => (
          <FiStar
            key={star}
            className="h-3.5 w-3.5"
            fill={star <= Math.round(value) ? 'currentColor' : 'none'}
          />
        ))}
      </div>
      {reviews !== undefined && (
        <span className="text-xs text-muted dark:text-cream/60">({reviews})</span>
      )}
    </div>
  );
}

export default Rating;
