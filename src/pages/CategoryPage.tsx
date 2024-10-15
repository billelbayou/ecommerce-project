import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types/Product";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function CategoryPage() {
  const { name } = useParams(); // Get the category name from the URL
  const url = `https://dummyjson.com/products/category/${name}`;
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error(`Network error: ${resp.status}`);
        }
        const data = await resp.json();
        setProducts(data.products); // Assuming 'data.products' contains the array of products
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error.message); // Capture and set the error message
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [url]); // Dependency array with 'url' to refetch when category changes

  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <AiOutlineLoading3Quarters className="animate-spin text-4xl" />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <header>
        <Header />
      </header>
      <div className="">
        <h1 className="text-3xl font-primaryBold p-8">
          Category: <span className="uppercase">{name}</span>
        </h1>
        <div className="flex flex-wrap justify-evenly">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
