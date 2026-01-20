import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} prefetch>
      <div className="border rounded p-3 hover:shadow-md">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={200}
          className="object-cover mx-auto"
          priority={false}
        />
        <h3 className="font-bold">{product.title}</h3>
        <p className="text-sm line-clamp-2">{product.description}</p>
        <p className="font-semibold">${product.price}</p>
      </div>
    </Link>
  );
}
