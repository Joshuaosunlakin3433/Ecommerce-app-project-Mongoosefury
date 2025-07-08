import Phones from "../assets/Category-CellPhone.png";
import Computers from "../assets/Category-Computer.png";
import SmartWatch from "../assets/Category-SmartWatch.png";
import Camera from "../assets/camera.png";
import HeadPhone from "../assets/Category-Headphone.png";
import Gaming from "../assets/Category-Gamepad.png";
import Tag from "../Components/Tag";
import ProductHeadings from "../Components/ProductHeadings";

const categories = [
  { name: "Phones", imageSrc: Phones },
  { name: "Computers", imageSrc: Computers },
  { name: "SmartWatch", imageSrc: SmartWatch },
  { name: "Camera", imageSrc: Camera },
  { name: "Headphone", imageSrc: HeadPhone },
  { name: "Gaming", imageSrc: Gaming },
  // For icon-based categories, you can add a special flag or handle them differently
  // { name: "Clothes", icon: GiClothes },
];

const BrowseCategory = () => {
  return (
    <>
      <Tag>Category</Tag>
      <ProductHeadings title="Browse By Category" showArrows />

      {/* Responsive grid layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5">
        {categories.map(({ name, imageSrc }) => (
          <div
            key={name}
            className="flex flex-col gap-3 px-4 py-3 items-center justify-center border rounded-sm cursor-pointer hover:bg-secondaryRed hover:border-transparent transition ease-in-out duration-200"
          >
            <img src={imageSrc} alt={name} className="size-8" />
            <span className="text-sm text-center">{name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default BrowseCategory;
