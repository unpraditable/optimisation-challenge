export default function LoadingProduct() {
  return (
    <div className="p-6 grid grid-cols-2 gap-8">
      <div className="w-full h-[400px] rounded shimmer" />

      <div className="space-y-4">
        <div className="h-8 w-3/4 rounded shimmer" />
        <div className="h-4 w-full rounded shimmer" />
        <div className="h-4 w-full rounded shimmer" />
        <div className="h-6 w-1/3 rounded shimmer" />
        <div className="h-8 w-1/4 rounded shimmer" />
      </div>
    </div>
  );
}
