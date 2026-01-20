export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  thumbnail: string;
  category: string;
  stock: number;
}

export interface Category {
  name: string;
  slug: string;
}
