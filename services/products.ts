import { Category, Product } from "@/types/product";

const BASE_URL = "https://dummyjson.com";

export async function getProducts({
  limit,
  skip,
  category,
  sortBy,
  order,
}: {
  limit: number;
  skip: number;
  category?: string;
  sortBy?: string;
  order?: "asc" | "desc";
}) {
  const params = new URLSearchParams();

  params.set("limit", String(limit));
  params.set("skip", String(skip));

  if (sortBy) params.set("sortBy", sortBy);
  if (order) params.set("order", order);

  let url = `${BASE_URL}/products`;

  if (category && category !== "all") {
    url = `${BASE_URL}/products/category/${category}`;
  }

  const res = await fetch(`${url}?${params.toString()}`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    next: { revalidate: 300 },
  });
  return res.json();
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${BASE_URL}/products/categories`, {
    next: { revalidate: 300 },
  });
  return res.json();
}
