export default function LoadingProduct() {
  return (
    <div className="p-6 grid grid-cols-2 gap-8 animate-pulse">
      <div className="w-full h-[400px] bg-gray-200 rounded" />

      <div className="space-y-4">
        <div className="h-8 w-3/4 bg-gray-200 rounded" />
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-6 w-1/3 bg-gray-200 rounded" />
        <div className="h-8 w-1/4 bg-gray-200 rounded" />
      </div>
    </div>
  );
}
