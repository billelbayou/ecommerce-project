import Footer from "../components/Footer";
import Header from "../components/Header";
import { useCartStore } from "../store";

export default function Cart() {
  const { cart, removeProductFromCart } = useCartStore();

  // Calculate total price
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <h1 className="text-3xl font-primaryBold p-8">Your Cart :</h1>
        <div className="p-4 space-y-4">
          {cart.map((product) => (
            <div
              key={product.id}
              className="h-40 border flex justify-between items-center p-4 shadow-lg rounded-md"
            >
              {/* Product Image */}
              <div className="flex items-center h-full space-x-4">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-32 w-32 object-cover bg-background rounded-md"
                />

                {/* Product Info */}
                <div>
                  <h3 className="text-xl font-semibold">{product.title}</h3>
                  {/* Product Rating */}
                  <p className="text-yellow-500">
                    Rating: {product.rating} / 5
                  </p>
                </div>
              </div>

              {/* Price and Remove Button */}
              <div className="text-right space-y-2">
                <p className="text-lg font-semibold">${product.price}</p>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                  onClick={() => removeProductFromCart(product.id.toString())}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total Price */}
          <div className="text-right mt-8 p-4 border-t">
            <h2 className="text-2xl font-bold">
              Total: ${totalPrice.toFixed(2)}
            </h2>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
