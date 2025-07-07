import { createContext, useContext, useEffect, useState } from "react";

type CartItem = {
  title: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (title: string, quantity: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.title === item.title);
      if (existing) {
        return prev.map((i) =>
          i.title === item.title
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      } else {
        return [...prev, item];
      }
    });
  };

  const updateQuantity = (title: string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.title === title ? { ...item, quantity } : item
      )
    );
  };

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setCartItems(parsed);
      } catch (e) {
        console.error("Failed to parse cart:", e);
      }
    }
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
