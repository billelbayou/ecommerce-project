import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/product/:id",
      element: <ProductPage />,
    },
    {
      path: "/category/:name",
      element: <CategoryPage />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/wishlist",
      element: <Wishlist />,
    },
  ]);
  return (
    <div className="font-primaryRegular">
      <RouterProvider router={router} />
    </div>
  );
}
