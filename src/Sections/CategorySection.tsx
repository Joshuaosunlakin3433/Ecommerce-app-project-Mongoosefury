import BrowseCategory from "./BrowseCategory";
import BestSellingProducts from "./BestSellingProducts";
import CategoryBanner from "./CategoryBanner";

const CategorySection = () => {
  return (
    <section className="font-secondary py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 mx-auto max-w-7xl">
        <BrowseCategory />
        <BestSellingProducts />
        <CategoryBanner/>
      </div>
    </section>
  );
};

export default CategorySection;