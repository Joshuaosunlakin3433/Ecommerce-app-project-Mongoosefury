import React, { useState } from "react";
import { FaArrowDownShortWide, FaCartShopping, FaRegHeart, FaSearchengin } from "react-icons/fa6";

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "French" },
  { code: "es", label: "Spanish" },
  { code: "de", label: "German" },
  { code: "zh", label: "Chinese" },
];

const NavBar: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState("English");
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSelect = (lang: string) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // You can replace alert with actual search logic
  };

  return (
    <div className="flex flex-col">
      <div className="bg-black w-full h-9 flex items-center justify-center gap-60">
        <p className="text-white text-center text-xs font-display flex gap-2 ml-25">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="text-md font-bold underline font-display">
            ShopNow
          </span>
        </p>
        <div className="relative flex">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-xs font-display flex gap-1"
          >
            <span>{selectedLang}</span>{" "}
            <FaArrowDownShortWide className="mt-0.5" />
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.label)}
                  className="block w-full text-left text-gray-800 text-sm font-display hover:bg-gray-100"
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <nav className="bg-white shadow-md pt-10">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-around items-center">
          <div className="font-bold text-gray-800 text-3xl">Exclusive</div>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-800 hover:text-blue-600 hover:border-b-1">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-blue-600 hover:border-b-1">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-blue-600 hover:border-b-1">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-blue-600 hover:border-b-1">
                Contact
              </a>
            </li>
          </ul>
          <div>
      <form onSubmit={handleSearch} className="w-70 max-w-md flex items-center bg-gray-100 rounded-lg">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="What are you looking for?"
          className="flex-grow px-4 py-2 text-gray-700 focus:outline-none bg-transparent"
        />
        <button
          type="submit"
          className="px-4 py-2 text-gray-600 hover:text-black"
        >
          <FaSearchengin className="text-2xl" />
        </button>
      </form>
    </div>
    <div className="flex items-center gap-7 -ml-28">
    <FaRegHeart className="text-2xl text-black" />
    <FaCartShopping className="text-2xl text-black" />
    </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
