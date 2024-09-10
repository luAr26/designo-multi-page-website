import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import CaretRightIcon from "@/public/assets/shared/caret-right.svg";

const AppDesignRelatedServices = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center space-y-6 pt-24 tablet:pt-[120px] desktop:flex-row desktop:space-x-[30px] desktop:space-y-0 desktop:pt-[160px]">
        <div className="relative h-[250px] w-[327px] overflow-hidden rounded-[15px] tablet:h-[200px] tablet:w-full desktop:h-[308px]">
          <Image
            src="/assets/home/mobile/image-app-design.jpg"
            alt="Web design Service"
            fill
            className="object-cover"
            sizes="327px, (min-width: 768px) 688px"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 bg-[rgba(0,0,0,0.65)] text-white hover:bg-[rgba(231,129,107,0.65)]">
            <h2 className="text-h2-sm uppercase tablet:text-h2">Web design</h2>
            <Link
              href={`/services/web-design`}
              className={twMerge(
                "flex items-center space-x-4 text-btn uppercase",
                "tracking-[5px]",
              )}
            >
              <span>View projects</span>
              <CaretRightIcon className="h-[10px] w-[7px] stroke-primary" />
            </Link>
          </div>
        </div>
        <div className="relative h-[250px] w-[327px] overflow-hidden rounded-[15px] tablet:h-[200px] tablet:w-full desktop:h-[308px]">
          <Image
            src="/assets/home/mobile/image-graphic-design.jpg"
            alt="Web design Service"
            fill
            className="object-cover"
            sizes="327px, (min-width: 768px) 688px"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 bg-[rgba(0,0,0,0.65)] text-white hover:bg-[rgba(231,129,107,0.65)]">
            <h2 className="text-h2-sm uppercase tablet:text-h2">
              Graphic Design
            </h2>
            <Link
              href={`/services/graphic-design`}
              className={twMerge(
                "flex items-center space-x-4 text-btn uppercase",
                "tracking-[5px]",
              )}
            >
              <span>View projects</span>
              <CaretRightIcon className="h-[10px] w-[7px] stroke-primary" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDesignRelatedServices;
