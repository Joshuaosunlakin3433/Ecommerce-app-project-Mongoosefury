import Cloth from "../assets/Product-cloth.png";
import Bag from "../assets/Product-bag.png";
import CPU from "../assets/Product-cpu.png";
import BookShelf from "../assets/Product-bookshelf.png";
import ProductCard from "../components/ProductCard";
import ProductHeadings from "../components/ProductHeadings";
import Tag from "../components/Tag";

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
}

const bestSellingProducts: ProductCardProps[] = [
  {
    image: Cloth,
    name: "The north coat",
    currentPrice: 260,
    originalPrice: 360,
    rating: 4.5,
    reviewCount: 65,
    isNew: false,
  },
  {
    image: Bag,
    name: "Leather Bag",
    currentPrice: 960,
    originalPrice: 1160,
    rating: 4.5,
    reviewCount: 32,
    isNew: true,
  },
  {
    image: CPU,
    name: "RGB liquid CPU Cooler",
    currentPrice: 160,
    originalPrice: 170,
    rating: 4.8,
    reviewCount: 21,
    isNew: false,
  },
  {
    image: BookShelf,
    name: "Small Bookshelf",
    currentPrice: 360,
    rating: 4.2,
    reviewCount: 15,
    isNew: false,
  },
];

const BestSellingProducts = () => {
  return (
    <div className="mt-20">
      <Tag>This Month</Tag>
      <ProductHeadings title="Best Selling Products" buttonText="View All" />

      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-10">
        {bestSellingProducts.map((product) => (
          <div key={product.name} className="w-full">
            <ProductCard
              name={product.name}
              image={product.image}
              currentPrice={product.currentPrice}
              originalPrice={product.originalPrice}
              rating={product.rating}
              reviewCount={product.reviewCount}
              isNew={product.isNew}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellingProducts;
