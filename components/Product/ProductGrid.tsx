"use client";

import { Category, Product } from "@/types/product";
import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  categories,
}: {
  products: Product[];
  categories: Category[];
}) {
  const [category, setCategory] = useState<string>("all");
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "asc" || value === "desc") {
      setSort(value);
    }
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    result.sort((a, b) =>
      sort === "asc" ? a.price - b.price : b.price - a.price,
    );

    return result;
  }, [products, category, sort]);

  return (
    <>
      <div className="flex gap-4 mb-4">
        <select
          className="border-2 cursor-pointer rounded"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>

        <select
          className="border-2 cursor-pointer rounded"
          onChange={handleSortChange}
        >
          <option value="asc">Price Asc</option>
          <option value="desc">Price Desc</option>
        </select>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
