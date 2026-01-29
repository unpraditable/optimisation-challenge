"use client";

import { Category } from "@/types/product";

export default function ProductFilters({
  categories,
  category,
  sortOrder,
  onChange,
}: {
  categories: Category[];
  category: string;
  sortOrder: "asc" | "desc";
  onChange: (category: string, sort: "asc" | "desc") => void;
}) {
  return (
    <div className="flex gap-4 mb-6">
      <select
        className="border p-2 rounded"
        value={category}
        onChange={(e) => onChange(e.target.value, sortOrder)}
      >
        <option value="all">All</option>
        {categories.map((c) => (
          <option key={c.slug} value={c.slug}>
            {c.name}
          </option>
        ))}
      </select>

      <select
        className="border p-2 rounded"
        value={sortOrder}
        onChange={(e) =>
          onChange(category, e.target.value === "asc" ? "asc" : "desc")
        }
      >
        <option value="asc">Price Asc</option>
        <option value="desc">Price Desc</option>
      </select>
    </div>
  );
}
