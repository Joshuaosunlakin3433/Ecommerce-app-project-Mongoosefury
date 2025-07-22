import React from "react";
import { FaHeart, FaEye, FaStar } from "react-icons/fa";

interface ProductCardProps {
  image: string;
  name: string;
  currentPrice: number;
  originalPrice?: number;
  rating?: number;
  reviewCount?: number;
  isNew?: boolean;
  onAddToCart?: () => void;
  onToggleFavorite?: () => void;
  onQuickView?: () => void;
  // Layout options
  priceRatingLayout?: "stacked" | "inline"; // New prop for layout control
  showPriceFirst?: boolean; // Control order when inline
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  currentPrice,
  originalPrice,
  rating = 4.0,
  reviewCount = 0,
  isNew = false,
  onAddToCart,
  onToggleFavorite,
  onQuickView,
  priceRatingLayout = "stacked", // Default to stacked (the current layout)
  showPriceFirst = true,
}) => {
  // Price section component
  const PriceSection = () => (
    <div className="flex gap-1.5 sm:gap-2 items-center">
      <span className="text-secondaryRed font-semibold text-sm sm:text-base">
        ${currentPrice}
      </span>
      {originalPrice && (
        <span className="line-through text-textGray text-xs sm:text-sm">
          ${originalPrice}
        </span>
      )}
    </div>
  );

  // Rating section component
  const RatingSection = () => (
    <div className="flex gap-1.5 sm:gap-2 items-center">
      <div className="flex items-center gap-0.5">
        {[
          ...new Array(5)
            .fill(0)
            .map((_, index) => (
              <FaStar
                key={index}
                className={`text-xs sm:text-sm ${
                  index < rating ? "text-[#FFAD32]" : "text-gray-300"
                }`}
              />
            )),
        ]}
      </div>
      {reviewCount > 0 && (
        <span className="text-textGray text-xs sm:text-sm">({reviewCount})</span>
      )}
    </div>
  );

  // Conditional layout rendering
  const renderPriceAndRating = () => {
    if (priceRatingLayout === "inline") {
      return (
        <div className="flex justify-between items-center">
          {showPriceFirst ? (
            <>
              <PriceSection />
              <RatingSection />
            </>
          ) : (
            <>
              <RatingSection />
              <PriceSection />
            </>
          )}
        </div>
      );
    }

    // Default stacked layout
    return (
      <>
        <PriceSection />
        <RatingSection />
      </>
    );
  };

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-50 group hover:z-10 duration-200 cursor-pointer">
      <div className="relative bg-secondaryWhite p-4 sm:p-6 md:p-8 lg:p-10 rounded-sm">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:size-26 mx-auto object-contain group-hover:scale-90 transition-transform duration-200"
        />

        {isNew && (
          <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 text-xs text-white py-1 px-2 sm:px-3 rounded-md bg-greenButton inline">
            NEW
          </div>
        )}

        <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 z-0 flex flex-col gap-1 sm:gap-1.5 items-center *:cursor-pointer">
          <span
            className="bg-white rounded-full p-1.5 sm:p-2 hover:bg-secondaryWhite transition ease-in-out duration-150"
            onClick={onToggleFavorite}
          >
            <FaHeart className="w-4 h-4 sm:w-5 sm:h-5 md:size-6" />
          </span>
          <span
            className="bg-white rounded-full p-1.5 sm:p-2 hover:bg-secondaryWhite transition ease-in-out duration-150"
            onClick={onQuickView}
          >
            <FaEye className="w-4 h-4 sm:w-5 sm:h-5 md:size-6" />
          </span>
        </div>

        <button
          className="absolute left-0 bottom-0 w-full bg-black text-white py-1.5 rounded-b-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-medium cursor-pointer text-sm sm:text-base"
          onClick={onAddToCart}
        >
          Add to Cart
        </button>
      </div>

      <div
        className={`flex flex-col gap-1.5 pt-2 sm:pt-3 ${
          priceRatingLayout === "inline" ? "gap-2" : "gap-1.5"
        }`}
      >
        <p className="font-medium text-gray-800 text-sm sm:text-base leading-tight">
          {name}
        </p>
        {renderPriceAndRating()}
      </div>
    </div>
  );
};

export default ProductCard;
export type { ProductCardProps };