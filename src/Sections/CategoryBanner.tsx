import JBL from "../assets/Category-JBL.png";

const CategoryBanner = () => {
  return (
    <div className="bg-black text-white mt-10 md:mt-20 p-4 md:p-6 lg:p-9">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center font-secondary">
        {/* Text Content */}
        <div className="text-center lg:text-left w-full lg:w-auto">
          <div className="text-greenButton font-semibold mb-2 md:mb-3 text-sm md:text-base">
            Categories
          </div>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-0">
            Enhance Your <br className="hidden sm:block" /> Music Experience
          </h2>
          
          {/* Countdown Timer */}
          <div className="flex gap-2 justify-center lg:justify-start text-black my-4 md:my-5">
            <div className="bg-white rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:size-15 flex flex-col items-center justify-center tracking-tight">
              <span className="text-xs sm:text-sm md:text-xs font-semibold">23</span>
              <span className="text-xs sm:text-sm md:text-xs -mt-0.5">Hours</span>
            </div>
            <div className="bg-white rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:size-15 flex flex-col items-center justify-center tracking-tight">
              <span className="text-xs sm:text-sm md:text-xs font-semibold">05</span>
              <span className="text-xs sm:text-sm md:text-xs -mt-0.5">Days</span>
            </div>
            <div className="bg-white rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:size-15 flex flex-col items-center justify-center tracking-tight">
              <span className="text-xs sm:text-sm md:text-xs font-semibold">59</span>
              <span className="text-xs sm:text-sm md:text-xs -mt-0.5">Minutes</span>
            </div>
            <div className="bg-white rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:size-15 flex flex-col items-center justify-center tracking-tight">
              <span className="text-xs sm:text-sm md:text-xs font-semibold">35</span>
              <span className="text-xs sm:text-sm md:text-xs -mt-0.5">Seconds</span>
            </div>
          </div>
          
          <button className="bg-greenButton py-2 px-4 sm:py-3 sm:px-6 cursor-pointer rounded-sm hover:bg-green-500 transition ease-in-out duration-200 text-sm sm:text-base">
            Buy Now!
          </button>
        </div>
        
        {/* Image Section */}
        <div className="relative z-0 w-full lg:w-auto flex justify-center lg:justify-end mt-6 lg:mt-0">
          <span className="absolute h-32 w-20 sm:h-40 sm:w-24 md:h-48 md:w-28 lg:h-55 lg:w-35 top-8 sm:top-12 md:top-16 lg:top-25 right-8 sm:right-12 md:right-16 lg:right-25 bg-secondaryWhite opacity-60 blur-3xl -z-10 -mt-4 lg:-mt-10"></span>
          <img 
            src={JBL} 
            alt="JBL speaker" 
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:size-80 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;