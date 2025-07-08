import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: "sm" | "md" | "lg";
  showRating?: boolean;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  size = "md",
  showRating = false,
  className = "",
}) => {
  // Size configurations
  const sizeConfig = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5; // Only show half star for .5 and above
    const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar
          key={`full-${i}`}
          className={`text-[#FFAD32] ${sizeConfig[size]}`}
        />
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt
          key="half"
          className={`text-[#FFAD32] ${sizeConfig[size]}`}
        />
      );
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaRegStar
          key={`empty-${i}`}
          className={`text-gray-300 ${sizeConfig[size]}`}
        />
      );
    }

    return stars;
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex items-center">{renderStars()}</div>
      {showRating && (
        <span className={`text-gray-600 ${sizeConfig[size]} ml-1`}>
          ({rating.toFixed(1)})
        </span>
      )}
    </div>
  );
};

export default StarRating;
export type { StarRatingProps };
