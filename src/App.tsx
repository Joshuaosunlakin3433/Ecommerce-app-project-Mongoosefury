import React from 'react';
import './index.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";
import { CartProvider } from "./context/CartContext";
import { CartDrawerProvider } from "./context/cartDrawerContext";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  return (
    <CartProvider>
      <CartDrawerProvider>
        <div className="app-container">
          <header>
            <Navbar />
          </header>
          <main aria-label="Main content">
            <Outlet />
            <CartDrawer />
          </main>
          <Toaster position="top-right" />
        </div>
      </CartDrawerProvider>
    </CartProvider>
  );
};

export default App;
    <div className='flex flex-col justify-between min-h-screen'>
      <NavBar />
      <Footer />
    </div>
  )
}

export default App