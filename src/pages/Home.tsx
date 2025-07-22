import { useEffect, useState, useRef } from "react";
import { useCart } from "../context/CartContext";
import { useCartDrawer } from "../context/CartDrawerContext";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import CategorySection from "../Sections/CategorySection"
import Products from "../Sections/Products"

import {
  FaChevronRight,
  FaStar,
  FaCircle,
  FaApple,
  FaArrowRight,
  FaArrowLeft,
  FaRegHeart,
  FaRegEye,
} from "react-icons/fa";
import NewArrival from "../Sections/NewArrival";

const Home = () => {
  const { addToCart } = useCart();
  const { openDrawer } = useCartDrawer();

  // Data arrays
  const categories = [
    "Woman's Fashion", "Men's Fashion", "Electronics", "Home & Lifestyle",
    "Medicine", "Sports & Outdoor", "Baby's & Toys", "Groceries & Pets", "Health & Beauty"
  ];

  const banners = Array(5).fill("/dem/images/hero_endframe__cvklg0xk3w6e_large 2.png");

  const products = [
    { image: "/dem/images/Gamepad.png", name: "HAVIT HV-G92 Gamepad", currentPrice: 120, originalPrice: 160, discount: 40, rating: 5, reviews: 88 },
    { image: "/dem/images/Keyboard.png", name: "AK-900 Wired Keyboard", currentPrice: 960, originalPrice: 1160, discount: 35, rating: 4, reviews: 75 },
    { image: "/dem/images/Gaming-Monitor.png", name: "IPS LCD Gaming Monitor", currentPrice: 370, originalPrice: 400, discount: 30, rating: 5, reviews: 99 },
    { image: "/dem/images/Comfort-Chair.png", name: "S-Series Comfort Chair", currentPrice: 375, originalPrice: 400, discount: 25, rating: 5, reviews: 99 },
    { image: "/dem/images/Comfort-Chair.png", name: "S-Series Comfort Chair", currentPrice: 375, originalPrice: 400, discount: 25, rating: 5, reviews: 99 }
  ].map(p => ({ ...p, hasAddToCart: true }));

  const timeLabels = ["Days", "Hours", "Minutes", "Seconds"];

  // State
  const [bannerIndex, setBannerIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3 * 24 * 60 * 60);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Effects
  useEffect(() => {
    const timer = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [banners.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          parsed.forEach((item) => item && addToCart(item));
        }
      } catch (err) {
        console.error("Invalid cart in localStorage", err);
      }
    }
  }, []);

  // Helper functions
  const formatTime = (t: number) => {
    const units = [60 * 60 * 24, 3600, 60, 1];
    return units.map(unit => Math.floor((t % (unit * 60)) / unit));
  };

  const timeValues = formatTime(timeLeft);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 280 : 240;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleAddToCart = (product) => {
    addToCart({
      title: product.name,
      price: product.currentPrice,
      quantity: 1,
    });
    toast.success(`${product.name} added to cart`);
    openDrawer();
  };

  return (
    <div className="bg-white w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main container with sidebar and hero */}
        <section className="flex flex-col lg:flex-row justify-center pt-6 md:pt-10 items-start lg:items-center w-full gap-6 lg:gap-0">
          {/* Sidebar categories */}
          <aside className="hidden md:block w-full md:w-64 md:pr-3 md:border-r border-gray-300 font-poppins">
            {categories.map((cat, idx) => (
              <div
                key={cat}
                className="flex justify-between items-center py-2 px-3 md:px-6 text-sm font-poppins cursor-pointer hover:text-red-500 transition"
              >
                {cat}
                {idx < 2 && <FaChevronRight size={12} className="text-gray-900" />}
              </div>
            ))}
          </aside>

          {/* Hero Section */}
          <div className="relative w-full max-w-4xl lg:ml-10 h-[250px] md:h-[310px] overflow-hidden bg-black rounded-lg">
            {/* iPhone image */}
            <div className="absolute inset-0 flex items-center justify-end pr-4 md:pr-10">
              <img
                src={banners[bannerIndex]}
                alt="iPhone"
                className="w-24 md:w-100 h-fit object-right transition-all duration-300 transform"
                style={{ transform: "translateX(20px) md:translateX(40px)" }}
              />
            </div>

            {/* Text content */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-center pl-6 md:pl-16 z-10">
              <div className="flex items-center mb-3 md:mb-4">
                <FaApple className="mr-2 text-white text-2xl md:text-5xl" />
                <span className="text-white text-xs md:text-base font-poppins">
                  iPhone 14 Series
                </span>
              </div>
              <h2 className="text-2xl md:text-5xl font-inter text-white mb-4 md:mb-6 leading-tight">
                Up to 10% <br /> off Voucher
              </h2>
              <div className="flex items-center gap-2">
                <button className="text-white border-b-2 border-white pb-1 text-sm md:text-base font-poppins hover:border-gray-300 transition-colors">
                  Shop Now
                </button>
                <span className="text-white text-xs md:text-sm">
                  <FaArrowRight />
                </span>
              </div>
            </div>

            {/* Banner dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3">
              {banners.map((_, i) => (
                <FaCircle
                  key={i}
                  size={window.innerWidth < 768 ? 8 : 12}
                  className={`transition cursor-pointer ${
                    i === bannerIndex ? "text-red-500" : "text-white/70"
                  }`}
                  onClick={() => setBannerIndex(i)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Flash Sale section */}
        <section className="py-12 md:py-18 px-0 md:px-16">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="w-4 md:w-5 h-8 md:h-10 bg-red-500 rounded"></div>
            <span className="text-red-500 font-poppins text-sm md:text-base">Today's</span>
          </div>

          {/* Title and countdown */}
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-20 mb-8 md:mb-10">
            <h2 className="text-2xl md:text-4xl font-inter text-black">Flash Sales</h2>

            {/* Countdown timer */}
            <div className="flex items-center gap-3 md:gap-6">
              {timeLabels.map((label, idx) => (
                <div key={label} className="flex items-center gap-3 md:gap-6">
                  <div className="text-center">
                    <p className="text-xs text-black font-poppins mb-1">{label}</p>
                    <p className="text-lg md:text-2xl font-inter text-black">
                      {String(timeValues[idx]).padStart(2, "0")}
                    </p>
                  </div>
                  {idx < timeLabels.length - 1 && (
                    <div className="text-lg md:text-2xl text-red-500 font-light">:</div>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="flex gap-2 md:ml-auto">
              {[
                { dir: "left", icon: FaArrowLeft },
                { dir: "right", icon: FaArrowRight }
              ].map(({ dir, icon: Icon }) => (
                <button
                  key={dir}
                  className="flex items-center justify-center w-10 md:w-12 h-10 md:h-12 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  onClick={() => scroll(dir)}
                >
                  <Icon size={14} className="text-gray-600" />
                </button>
              ))}
            </div>
          </div>

          {/* Products grid */}
          <div
            className="flex gap-4 md:gap-8 overflow-x-auto pb-4 scrollbar-hide"
            ref={scrollRef}
            style={{ scrollBehavior: "smooth" }}
          >
            {products.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-lg relative w-56 md:w-64 min-w-56 md:min-w-64 group cursor-pointer flex-shrink-0"
              >
                {/* Discount badge */}
                <span className="absolute top-2 md:top-3 left-2 md:left-3 bg-red-500 text-white text-xs px-2 py-1 rounded font-medium z-10">
                  -{p.discount}%
                </span>

                {/* Heart and eye icons */}
                <div className="absolute top-2 md:top-3 right-2 flex flex-col gap-2 z-10">
                  {[
                    { Icon: FaRegHeart, hoverColor: "hover:text-red-500" },
                    { Icon: FaRegEye, hoverColor: "hover:text-blue-500" }
                  ].map(({ Icon, hoverColor }, idx) => (
                    <button key={idx} className="w-7 md:w-8 h-7 md:h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
                      <Icon className={`text-black ${hoverColor} text-xs md:text-sm cursor-pointer`} />
                    </button>
                  ))}
                </div>

                {/* Product image */}
                <div className="h-48 md:h-60 flex justify-center p-6 md:p-8">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Add to cart button*/}
                {p.hasAddToCart && (
                  <motion.button
                    whileTap={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-24 md:bottom-29 left-0 right-0 mx-fit bg-black text-white py-2 rounded text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-200"
                    onClick={() => handleAddToCart(p)}
                  >
                    Add To Cart
                  </motion.button>
                )}

                {/* Product details */}
                <div className="p-3 md:p-4 bg-white">
                  <h4 className="text-black font-medium text-sm md:text-base mb-2 line-clamp-2">
                    {p.name}
                  </h4>
                  <div className="flex items-center gap-2 md:gap-3 mb-2">
                    <span className="text-red-500 font-medium text-sm md:text-base">
                      ${p.currentPrice}
                    </span>
                    <span className="text-gray-400 line-through text-sm md:text-base">
                      ${p.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: 5 }, (_, idx) => (
                        <FaStar
                          key={idx}
                          className={`text-xs md:text-sm ${
                            idx < p.rating ? "text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-500 text-xs md:text-sm">({p.reviews})</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Products button */}
          <div className="flex justify-center mt-12 md:mt-16">
            <button className="bg-red-500 text-white px-8 md:px-12 py-3 md:py-4 rounded font-medium text-sm md:text-base hover:bg-red-600 transition-colors w-full sm:w-auto">
              View All Products
            </button>
          </div>
          <div className="border-b border-gray-400 mt-4" />
        </section>
      </div>
      <CategorySection/>
      <Products/>
      <NewArrival/>
    </div>
  );
};

export default Home;