import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import CaretRightIcon from "@/public/assets/shared/caret-right.svg";

type ServiceProps = {
  name: string;
  imageUrl: string;
};

const Service = (props: ServiceProps) => {
  const { name, imageUrl } = props;
  return (
    <div className="relative h-[250px] w-full overflow-hidden rounded-[15px]">
      <Image
        src={imageUrl}
        alt="Web design Service"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 bg-[rgba(0,0,0,0.65)] text-white">
        <h2 className="text-h2-sm uppercase">{name}</h2>
        <Link
          href=""
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
