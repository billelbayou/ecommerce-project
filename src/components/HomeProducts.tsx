import { useState, useEffect } from "react";
import { Product } from "../types/Product";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import useStore from "../store";

export default function HomeProducts() {
  const { selectedCategory } = useStore();

  const url = `https://dummyjson.com/products/category/${selectedCategory}?limit=10`;
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Network Error, Status : ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [url]);

  if (isLoading) {
    const productsArray = Array.from({ length: 10 }, (_, i) => i + 1);
    return (
      <div className="flex flex-wrap gap-y-4 justify-between">
        {productsArray.map((product) => (
          <ProductCardSkeleton key={product} />
        ))}
      </div>
    );
  }
  return (
    <div className="flex flex-wrap gap-y-4 justify-between">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
