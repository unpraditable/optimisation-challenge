import ProductGrid from "@/components/Product/ProductGrid";
import { getProducts, getCategories } from "@/services/products";

const LIMIT = 12;

export default async function Home() {
  const [productsRes, categories] = await Promise.all([
    getProducts({ limit: LIMIT, skip: 0 }),
    getCategories(),
  ]);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Products</h1>

      <ProductGrid
        initialProducts={productsRes.products}
        categories={categories}
      />
    </main>
  );
}
