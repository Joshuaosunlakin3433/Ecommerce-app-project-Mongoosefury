import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
}

const Tag = ({ children }: TagProps) => {
  return (
    <div className="flex items-center gap-2 sm:gap-3 h-5 sm:h-6 md:h-7 rounded-l-sm mb-3 sm:mb-4">
      <span className="h-5 w-2.5 sm:h-6 sm:w-3 md:h-7 md:w-[14px] bg-secondaryRed rounded-sm"></span>
      <div className="text-secondaryRed font-semibold text-xs sm:text-sm md:text-base">
        {children}
      </div>
    </div>
  );
};

export default Tag;