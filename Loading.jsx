function Loading({ label = 'Loading products...' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-bronze border-t-transparent" />
      <p className="text-sm text-muted dark:text-cream/60">{label}</p>
    </div>
  );
}

export default Loading;
