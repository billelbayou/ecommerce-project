import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { useWishlistStore } from "../store";

export default function Wishlist() {
  const { wishlist } = useWishlistStore();
  return (
    <>
      <header>
        <Header />
        <main>
          <h1 className="text-3xl font-primaryBold p-8">Your Wishlist :</h1>
          <div className="flex flex-wrap gap-y-4 justify-evenly">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </header>
    </>
  );
}
