import { createContext, useContext, useState } from "react";

type CartDrawerContextType = {
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const CartDrawerContext = createContext<CartDrawerContextType | undefined>(undefined);

export const CartDrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <CartDrawerContext.Provider value={{ isDrawerOpen, openDrawer, closeDrawer }}>
      {children}
    </CartDrawerContext.Provider>
  );
};

export const useCartDrawer = () => {
  const context = useContext(CartDrawerContext);
  if (!context) {
    throw new Error("useCartDrawer must be used within CartDrawerProvider");
  }
  return context;
};
