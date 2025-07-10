import React from 'react';
import './index.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import { Outlet } from "react-router-dom";
import CartDrawer from "./Components/CartDrawer";
import { CartProvider } from "./context/CartContext";
import { CartDrawerProvider } from "./context/CartDrawerContext";
import { Toaster } from "react-hot-toast";
// import Home from "./pages/Home"

const App: React.FC = () => {
  return (
    <CartProvider>
      <CartDrawerProvider>
        <div className="app-container flex flex-col justify-between min-h-screen">
          <header>
            <NavBar />
          </header>
          <main aria-label="Main content">
            <Outlet />
            <CartDrawer />
          </main>
           <Footer />
          <Toaster position="top-right" />
        </div>
      </CartDrawerProvider>
    </CartProvider>
  );
};

export default App;