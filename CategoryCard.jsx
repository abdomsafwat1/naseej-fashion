import { Link } from 'react-router-dom';

function CategoryCard({ name, image }) {
  return (
    <Link
      to={`/products?category=${encodeURIComponent(name)}`}
      className="group relative block aspect-[3/4] overflow-hidden rounded-sm"
    >
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 ease-soft group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
        <span className="font-display text-lg font-semibold text-white">{name}</span>
        <span className="text-xs font-medium uppercase tracking-wide text-white/80 transition group-hover:text-bronze">
          Explore →
        </span>
      </div>
    </Link>
  );
}

export default CategoryCard;
