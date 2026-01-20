import { Product } from "@/types/product";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="border rounded p-3 hover:shadow-md">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-cover w-[300px] h-[200px] m-auto"
        />
        <h3 className="font-bold">{product.title}</h3>
        <p className="text-sm line-clamp-2">{product.description}</p>
        <p className="font-semibold">${product.price}</p>
      </div>
    </Link>
  );
}
