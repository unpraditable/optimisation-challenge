import { Product } from "@/types/product";

const BASE_URL = "https://dummyjson.com";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`, {
    next: { revalidate: 300 }, // save this response in a cache and reuse it for 300 seconds (5 minutes)
  });
  const json = await res.json();
  return json.products;
}
