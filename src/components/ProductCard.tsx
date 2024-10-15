import { CiHeart } from "react-icons/ci";
import { Product } from "../types/Product";
import { useWishlistStore } from "../store";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { wishlist, toggleWishlist } = useWishlistStore();

  return (
    <div className="sm:w-60 w-44 h-80 m-1 border rounded-md flex flex-col">
      <div className="relative bg-backgound h-52 flex justify-center items-center">
        <Link
          to={`/product/${product.id}`}
          className="flex justify-center items-center h-full w-full"
        >
          <img
            src={product.images?.[1] || product.images?.[0]}
            alt={product.title || "Product image"}
            className="h-40"
          />
        </Link>
        <div
          className="p-2 rounded-full bg-white absolute right-3 top-3 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
        >
          {wishlist.includes(product) ? (
            <FaHeart size={20} color="red" />
          ) : (
            <CiHeart size={20} />
          )}
        </div>
      </div>

      <div className="p-1 flex-1 flex flex-col justify-between">
        <p>${product.price}</p>
        <Link to={`/product/${product.id}`} className="text-lg">
          <h3>{product.title}</h3>
        </Link>
        <p className="text-black/70">{product.brand}</p>
      </div>
    </div>
  );
}
