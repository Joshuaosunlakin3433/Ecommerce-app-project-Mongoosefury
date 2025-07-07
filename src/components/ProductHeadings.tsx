import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ProductHeadingsProps {
  title: string;
  showArrows?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
}

const ProductHeadings = ({
  title,
  showArrows,
  buttonText,
  onButtonClick,
}: ProductHeadingsProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-2 font-secondary mb-6 sm:mb-8 md:mb-10">
      <h2 className="font-heading font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl tracking-wide leading-tight">
        {title}
      </h2>
      <div className="inline-flex flex-row-reverse gap-2 items-center w-full sm:w-auto justify-end sm:justify-start">
        {showArrows ? (
          <>
            <button className="bg-secondaryWhite rounded-full hidden md:block p-1.5 sm:p-2 md:p-2.5 shadow hover:bg-secondaryRed transition cursor-pointer">
              <FaArrowRight className="text-black" size={10} />
            </button>
            <button className="bg-secondaryWhite rounded-full hidden md:block p-1.5 sm:p-2 md:p-2.5 shadow hover:bg-secondaryRed transition cursor-pointer">
              <FaArrowLeft className="text-black" size={10} />
            </button>
          </>
        ) : (
            <button
            onClick={onButtonClick}
            className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-sm text-white bg-secondaryRed hover:bg-hoverRed cursor-pointer transition ease-in duration-100 text-xs sm:text-sm md:text-base font-medium"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductHeadings;