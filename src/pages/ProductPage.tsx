import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useCartStore } from "../store";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function ProductPage() {
  const { id } = useParams();
  const url = `https://dummyjson.com/products/${id}`;

  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Network Issue, Status Code: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
        setError(null);
      } catch (error) {
        setError((error as Error).message);
        setProduct(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [url]);

  const { cart, addProductToCart } = useCartStore();

  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <AiOutlineLoading3Quarters className="animate-spin text-4xl" />
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  // Function to generate star ratings
  const renderStars = (rating: number) => {
    const totalStars = 5;
    const stars = [];
    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <span key={i} style={{ color: i < rating ? "#FFD700" : "#ddd" }}>
          {i < rating ? "★" : "☆"}
        </span>
      );
    }
    return stars;
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        {product.brand ? (
          <p className="flex items-center justify-left px-10 pt-5">
            {product.category} <FaLongArrowAltRight className="mx-2" />{" "}
            {product.brand}
          </p>
        ) : (
          <></>
        )}
        <div className="flex md:flex-row flex-col justify-between p-10">
          <div className="md:w-1/2 w-full pr-5">
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center">
                <img
                  src={product.images[imageIndex]}
                  alt=""
                  className="w-3/5 m-1 border bg-backgound rounded-lg"
                />
              </div>

              <div className="flex">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setImageIndex(index)}
                    className={`${
                      imageIndex === index ? "border-2 border-black" : "border"
                    } w-fit h-fit bg-backgound rounded-lg cursor-pointer m-1`}
                  >
                    <img src={image} alt="" className="w-32" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col md:pl-5">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-primaryBold">{product.brand}</h2>
              <p className="text-[#bbb]">{product.sku}</p>
            </div>
            <h1 className="text-3xl font-primaryBold mb-6">{product.title}</h1>
            <div className="flex items-center mb-6">
              <div className="mr-2 text-2xl">
                {renderStars(Math.round(product.rating))}
              </div>
              <p className="mr-6">({product.rating.toFixed(1)})</p>
              <p className="text-[#bbb]">{product.reviews.length} reviews</p>
            </div>
            <h2 className="text-4xl font-primaryBold mb-6">${product.price}</h2>
            <div className="text-xl mb-5">
              <h3 className="font-primaryBold mb-4">Product Description :</h3>
              <p>{product.description}</p>
            </div>
            <div
              onClick={() => addProductToCart(product)}
              className={`w-full ${
                cart.includes(product) ? "bg-green-500" : "bg-black text-white"
              } flex justify-center items-center mt-auto cursor-pointer`}
            >
              <p className="text-3xl font-bold uppercase py-5">
                {cart.includes(product) ? "Added to cart" : "Add to cart"}
              </p>
            </div>
          </div>
        </div>
        <div className="px-10">
          <h2 className="text-4xl font-primaryBold mb-5">Reviews : </h2>
          {product.reviews.map((review) => (
            <div className="mb-4">
              <h3>
                {review.reviewerName} | {review.reviewerEmail}
              </h3>
              <p className="text-2xl">{review.comment}</p>
              <p className="text-[#aaa]">
                {new Date(review.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          ))}
        </div>
      </main>
      <footer className="px-4">
        <Footer />
      </footer>
    </>
  );
}
