import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import CaretRightIcon from "@/public/assets/shared/caret-right.svg";

type ServiceProps = {
  name: string;
  imageUrl: string;
  heightFull?: boolean;
};

const Service = (props: ServiceProps) => {
  const { name, imageUrl, heightFull } = props;
  const hrefText = name.toLowerCase().replace(" ", "-");
  return (
    <div
      className={twMerge(
        "relative h-[250px] w-full overflow-hidden rounded-[15px] tablet:h-[200px] desktop:h-[308px]",
        heightFull && "desktop:h-[640px]",
      )}
    >
      <Image
        src={imageUrl}
        alt="Web design Service"
        fill
        className="object-cover"
        sizes="100%"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 bg-[rgba(0,0,0,0.65)] text-white hover:bg-[rgba(231,129,107,0.65)]">
        <h2 className="text-h2-sm uppercase tablet:text-h2">{name}</h2>
        <Link
          href={`/services/${hrefText}`}
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
  );
};

export default Service;
