import ImageCarousel from "@/components/Common/ImageCarousel";
import { getProduct } from "@/services/products";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div className="p-6 grid md:grid-cols-2 gap-8">
      <ImageCarousel images={product.images} />

      <div>
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p>{product.description}</p>
        <p className="text-2xl font-bold mt-2">${product.price}</p>

        <span
          className={`inline-block mt-2 py-1 ${
            product.stock > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </span>
      </div>
    </div>
  );
}
