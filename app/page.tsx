import ProductGrid from "@/components/Product/ProductGrid";
import { getProducts, getCategories } from "@/services/products";

export default async function Home() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <ProductGrid products={products} categories={categories} />
    </main>
  );
}
