import { useEffect, useState, useRef } from "react";
import { useCart } from "../context/CartContext";
import { useCartDrawer } from "../context/cartDrawerContext";
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

const Home = () => {
  const { addToCart } = useCart();
  const { openDrawer } = useCartDrawer();

  const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  const banners = [
    "/dem/images/hero_endframe__cvklg0xk3w6e_large 2.png",
    "/dem/images/hero_endframe__cvklg0xk3w6e_large 2.png",
    "/dem/images/hero_endframe__cvklg0xk3w6e_large 2.png",
    "/dem/images/hero_endframe__cvklg0xk3w6e_large 2.png",
    "/dem/images/hero_endframe__cvklg0xk3w6e_large 2.png",
  ];
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const products = [
    {
      image: "/dem/images/Gamepad.png",
      name: "HAVIT HV-G92 Gamepad",
      currentPrice: 120,
      originalPrice: 160,
      discount: 40,
      rating: 5,
      reviews: 88,
      hasAddToCart: true,
    },
    {
      image: "/dem/images/Keyboard.png",
      name: "AK-900 Wired Keyboard",
      currentPrice: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4,
      reviews: 75,
      hasAddToCart: true,
    },
    {
      image: "/dem/images/Gaming-Monitor.png",
      name: "IPS LCD Gaming Monitor",
      currentPrice: 370,
      originalPrice: 400,
      discount: 30,
      rating: 5,
      reviews: 99,
      hasAddToCart: true,
    },
    {
      image: "/dem/images/Comfort-Chair.png",
      name: "S-Series Comfort Chair",
      currentPrice: 375,
      originalPrice: 400,
      discount: 25,
      rating: 5,
      reviews: 99,
      hasAddToCart: true,
    },
    {
      image: "/dem/images/Comfort-Chair.png",
      name: "S-Series Comfort Chair",
      currentPrice: 375,
      originalPrice: 400,
      discount: 25,
      rating: 5,
      reviews: 99,
      hasAddToCart: true,
    },
  ];

  const [timeLeft, setTimeLeft] = useState(3 * 24 * 60 * 60);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (t: number) => {
    const days = Math.floor(t / (60 * 60 * 24));
    const hours = Math.floor((t % (60 * 60 * 24)) / 3600);
    const minutes = Math.floor((t % 3600) / 60);
    const seconds = t % 60;
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -240 : 240,
        behavior: "smooth",
      });
    }
  };

  // Persist cart to localStorage
  useEffect(() => {
  const saved = localStorage.getItem("cart");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        parsed.forEach((item) => {
          if (item) addToCart(item);
        });
      } else {
        console.warn("Cart in localStorage is not an array:", parsed);
      }
    } catch (err) {
      console.error("Invalid cart in localStorage", err);
    }
  }
}, []);

  return (
    <div className="bg-white w-screen ">
      <div className="max-w-7xl mx-auto">
        {/* Main container with sidebar and hero */}
        <section className="flex justify-center pt-10 items-center w-full">
          {/* Sidebar categories */}
          <aside className="w-64 pr-3 border-r border-gray-300 font-poppins">
            {categories.map((cat, idx) => (
              <div
                key={cat}
                className="flex justify-between items-center py-2 px-6 text-sm font-poppins cursor-pointer hover:text-red-500 transition"
              >
                {cat}
                {idx < 2 && (
                  <FaChevronRight size={12} className="text-gray-900" />
                )}
              </div>
            ))}
          </aside>

          {/* Hero Section */}
          <div className="relative w-full max-w-4xl ml-10 h-[310px] overflow-hidden bg-black">
            {/* Iphone image */}
            <div className="absolute inset-0 flex items-center justify-end pr-10">
              <img
                src={banners[bannerIndex]}
                alt="Iphone"
                className="w-100 h-fit object-right transition-all duration-300 transform"
                style={{ transform: "translateX(40px)" }}
              />
            </div>

            {/* Text content */}
            <div className="absolute left-0 top-0  h-full flex flex-col justify-center pl-16 z-10">
              <div className="flex items-center mb-4">
                <FaApple className="mr-2 text-white text-5xl" />
                <span className="text-white text-base font-poppins">
                  iPhone 14 Series
                </span>
              </div>
              <h2 className="text-5xl font-inter text-white mb-6 leading-tight">
                Up to 10% <br /> off Voucher
              </h2>
              <div className="flex items-center gap-2">
                <button className="text-white border-b-2 border-white pb-1 text-base font-poppins hover:border-gray-300 transition-colors">
                  Shop Now
                </button>
                <span className="text-white text-sm">
                  <FaArrowRight />
                </span>
              </div>
            </div>

            {/* Banner dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
              {banners.map((_, i) => (
                <FaCircle
                  key={i}
                  size={12}
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
        <section className="py-18 px-16">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-5 h-10 bg-red-500 rounded"></div>
            <span className="text-red-500 font-poppins text-base">Today's</span>
          </div>

          {/* Title and countdown */}
          <div className="flex items-center gap-20 mb-10">
            <h2 className="text-4xl font-inter text-black">Flash Sales</h2>

            {/* Countdown timer */}
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-xs text-black font-poppins mb-1">Days</p>
                <p className="text-2xl font-inter text-black">
                  {String(days).padStart(2, "0")}
                </p>
              </div>
              <div className="text-2xl text-red-500 font-light">:</div>
              <div className="text-center">
                <p className="text-xs text-black font-poppins mb-1">Hours</p>
                <p className="text-2xl font-inter text-black">
                  {String(hours).padStart(2, "0")}
                </p>
              </div>
              <div className="text-2xl text-red-500 font-light">:</div>
              <div className="text-center">
                <p className="text-xs font-poppins text-black mb-1">Minutes</p>
                <p className="text-2xl font-poppins text-black">
                  {String(minutes).padStart(2, "0")}
                </p>
              </div>
              <div className="text-2xl text-red-500 font-light">:</div>
              <div>
                <p className="text-xs font-poppins text-black">Seconds</p>
                <p className="text-2xl font-inter text-black">
                  {String(seconds).padStart(2, "0")}
                </p>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex gap-2 ml-auto">
              <button
                className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                onClick={() => scroll("left")}
              >
                <FaArrowLeft size={16} className="text-gray-600" />
              </button>
              <button
                className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                onClick={() => scroll("right")}
              >
                <FaArrowRight size={16} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Products grid */}
          <div
            className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide"
            ref={scrollRef}
            style={{ scrollBehavior: "smooth" }}
          >
            {products.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-lg relative w-64 min-w-64 group cursor-pointer"
              >
                {/* Discount badge */}
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded font-medium z-10">
                  -{p.discount}%
                </span>

                {/* Heart and eye icons */}
                <div className="absolute top-3 right-2 flex flex-col gap-2 z-10">
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
                    <FaRegHeart className="text-black hover:text-red-500 text-sm cursor-pointer" />
                  </button>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
                    <FaRegEye  className="text-black hover:text-blue-500 text-sm cursor-pointer" />
                  </button>
                </div>

                {/* Product image */}
                <div className="h-60 flex justify-center p-8">
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
                    className="absolute bottom-29 left-0 right-0 mx-fit bg-black text-white py-2 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-200"
                    onClick={() => {
                      addToCart({
                        title: p.name,
                        price: p.currentPrice,
                        quantity: 1,
                      });
                      toast.success(`${p.name} added to cart`);
                      openDrawer();
                    }}
                  >
                    Add To Cart
                  </motion.button>
                )}

                {/* Product details */}
                <div className="p-4 bg-white">
                  <h4 className="text-black font-medium text-base mb-2">
                    {p.name}
                  </h4>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-red-500 font-medium text-base">
                      ${p.currentPrice}
                    </span>
                    <span className="text-gray-400 line-through text-base">
                      ${p.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <FaStar
                          key={idx}
                          className={`text-sm ${
                            idx < p.rating ? "text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm">({p.reviews})</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Products button */}
          <div className="flex justify-center mt-16">
            <button className="bg-red-500 text-white px-12 py-4 rounded font-medium text-base hover:bg-red-600 transition-colors ">
              View All Products
            </button>
          </div>
          <div className="border-b border-gray-400 mt-4" />
        </section>
      </div>
       <CategorySection/>
      <Products/>
    </div>
  );
};


export default Home
