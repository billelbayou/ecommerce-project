import { create } from "zustand";
import { Product } from "./types/Product";

interface ChoosenCategoyState {
  selectedCategory: string;

  setSelectedCategory: (category: string) => void;
}

const useStore = create<ChoosenCategoyState>((set) => ({
  selectedCategory: "mens-shoes",

  // Action to update the selected category
  setSelectedCategory: (category: string) =>
    set({ selectedCategory: category }),
}));

interface WishlistState {
  wishlist: Product[];

  // Action to toggle a product in the wishlist
  toggleWishlist: (product: Product) => void;
}

// Create the Zustand store for the wishlist with type safety
export const useWishlistStore = create<WishlistState>((set) => ({
  wishlist: [],

  // Toggle action to add or remove a product from the wishlist
  toggleWishlist: (product) => set((state) => {
    const exists = state.wishlist.some((item) => item.id === product.id);
    
    if (exists) {
      // Remove the product if it already exists
      return { wishlist: state.wishlist.filter((item) => item.id !== product.id) };
    } else {
      // Add the product if it doesn't exist
      return { wishlist: [...state.wishlist, product] };
    }
  }),
}));
interface CartState {
  cart: Product[];

  // Action to add a product to the cart
  addProductToCart: (product: Product) => void;

  removeProductFromCart: (productId: string) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],


  addProductToCart: (product) => set((state) => {
    const exists = state.cart.some((item) => item.id === product.id);
    if (!exists) {
      return { cart: [...state.cart, product] };
    }
    return state;
  }),

  removeProductFromCart: (productId) => set((state) => ({
    cart: state.cart.filter((item) => item.id.toString() !== productId)
  })),
}));

export default useStore;
