export default function LoadingHome() {
  return (
    <div className="p-6">
      <div className="h-8 w-64 rounded mb-6 shimmer" />

      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="border rounded p-3 space-y-3">
            <div className="w-full h-40 rounded shimmer" />
            <div className="h-4 w-3/4 rounded shimmer" />
            <div className="h-4 w-full rounded shimmer" />
            <div className="h-4 w-1/2 rounded shimmer" />
          </div>
        ))}
      </div>
    </div>
  );
}
