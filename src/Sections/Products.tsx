import ProductHeadings from "../Components/ProductHeadings";
import Tag from "../Components/Tag";
import DogFood from "../assets/Dog Food.png";
import Benz from "../assets/Benz.png";
import Camera from "../assets/CamonCamera.png";
import Laptop from "../assets/AsusLaptop.png";
import GamePad from "../assets/GP11_PRD3 1.png";
import Sneakers from "../assets/Copa_Sense 1.png";
import Jacket from "../assets/Jacket.png";
import CurologySet from "../assets/routine-nav.webp";
import ProductCard from "../Components/ProductCard";

type Product = {
  name: string;
  image: string;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  priceRatingLayout?: "stacked" | "inline";
  showPriceFirst?: boolean;
};

const productsArray: Product[] = [
  {
    name: "Breed Dry Dog Food",
    image: DogFood,
    originalPrice: 25.99,
    rating: 4.5,
    reviewCount: 120,
    priceRatingLayout: "inline",
  },
  {
    name: "CANON EOS DSLR Camera",
    image: Camera,
    originalPrice: 500,
    rating: 4.3,
    reviewCount: 78,
    priceRatingLayout: "inline",
  },
  {
    name: "ASUS FHD Gaming Laptop",
    image: Laptop,
    originalPrice: 899.99,
    rating: 4.6,
    reviewCount: 210,
    priceRatingLayout: "inline",
  },
  {
    name: "Curology Product Set",
    image: CurologySet,
    originalPrice: 500,
    rating: 4.5,
    reviewCount: 134,
    priceRatingLayout: "inline",
  },
  {
    name: "Kids Electric Car",
    image: Benz,
    originalPrice: 3500,
    rating: 4.8,
    reviewCount: 45,
    isNew: true,
    priceRatingLayout: "inline",
  },
  {
    name: "Jr. Zoom Soccer Cleats",
    image: Sneakers,
    originalPrice: 1160,
    rating: 4.7,
    reviewCount: 150,
    priceRatingLayout: "inline",
  },
  {
    name: "GamePad",
    image: GamePad,
    originalPrice: 660,
    rating: 4.2,
    reviewCount: 65,
    isNew: true,
    priceRatingLayout: "inline",
  },
  {
    name: "Jacket",
    image: Jacket,
    originalPrice: 800,
    rating: 4.4,
    reviewCount: 98,
    priceRatingLayout: "inline",
  },
];

const Products = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 mx-auto max-w-7xl">
      <Tag>Our Products</Tag>
      <ProductHeadings title="Explore Our Products" showArrows />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-4 gap-y-6 sm:gap-y-8 md:gap-y-10">
        {productsArray.slice(0, 8).map((product) => (
          <div key={product.name} className="flex justify-center">
            <ProductCard
              name={product.name}
              image={product.image}
              currentPrice={product.originalPrice}
              isNew={product.isNew}
              rating={product.rating}
              reviewCount={product.reviewCount}
              priceRatingLayout={product.priceRatingLayout}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
