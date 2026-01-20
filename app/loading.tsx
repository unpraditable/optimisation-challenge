export default function LoadingHome() {
  return (
    <div className="p-6">
      <div className="h-8 w-64 bg-gray-200 rounded mb-6 animate-pulse" />

      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="border rounded p-3 space-y-3 animate-pulse">
            <div className="w-full h-40 bg-gray-200 rounded" />
            <div className="h-4 w-3/4 bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-1/2 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
