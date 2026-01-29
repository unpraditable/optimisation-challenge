"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { getProducts } from "@/services/products";
import ProductCard from "./ProductCard";
import { Category, Product } from "@/types/product";
import ProductFilters from "./ProductFilters";

const LIMIT = 12;

export default function ProductGrid({
  initialProducts,
  categories,
}: {
  initialProducts: Product[];
  categories: Category[];
}) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [skip, setSkip] = useState(initialProducts.length);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const isFetchingRef = useRef(false);
  const isResettingRef = useRef(false);
  const requestVersionRef = useRef(0);

  const fetchProducts = useCallback(
    async (reset: boolean) => {
      if (isFetchingRef.current) return;

      isFetchingRef.current = true;
      setLoading(true);

      const requestVersion = ++requestVersionRef.current;
      const currentSkip = reset ? 0 : skip;

      const res = await getProducts({
        limit: LIMIT,
        skip: currentSkip,
        category,
        sortBy: "price",
        order: sortOrder,
      });

      if (requestVersion !== requestVersionRef.current) {
        isFetchingRef.current = false;
        setLoading(false);
        return;
      }

      setProducts((prev) => {
        const merged = reset ? res.products : [...prev, ...res.products];

        const map = new Map<number, Product>();
        for (const p of merged) map.set(p.id, p);
        return Array.from(map.values());
      });

      setSkip(currentSkip + res.products.length);
      setHasMore(res.products.length === LIMIT);

      setLoading(false);
      isFetchingRef.current = false;
    },
    [skip, category, sortOrder],
  );

  useEffect(() => {
    if (!loadMoreRef.current) return;

    const el = loadMoreRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          hasMore &&
          !loading &&
          !isResettingRef.current &&
          products.length > 0
        ) {
          fetchProducts(false);
        }
      },
      { rootMargin: "300px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [fetchProducts, hasMore, loading, products.length]);

  useEffect(() => {
    isResettingRef.current = true;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProducts([]);
    setSkip(0);
    setHasMore(true);
  }, [category, sortOrder]);

  useEffect(() => {
    if (!isResettingRef.current) return;

    isResettingRef.current = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts(true);
  }, [skip, fetchProducts]);

  const applyFilter = (newCategory: string, newSort: "asc" | "desc") => {
    setCategory(newCategory);
    setSortOrder(newSort);
  };

  return (
    <>
      <ProductFilters
        categories={categories}
        category={category}
        sortOrder={sortOrder}
        onChange={applyFilter}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {loading && <p className="text-center py-6">Loading...</p>}

      <div ref={loadMoreRef} className="h-10" />

      {!hasMore && !loading && products.length > 0 && (
        <div className="text-center text-gray-500 py-10">No more products</div>
      )}
    </>
  );
}
