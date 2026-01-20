import ProductGrid from "@/components/Product/ProductGrid";
import { getProducts } from "@/services/products";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <ProductGrid products={products} />
    </main>
  );
}
