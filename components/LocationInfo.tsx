import Image from "next/image";
import { twMerge } from "tailwind-merge";

const LocationInfo = ({
  country,
  name,
  street,
  city,
  phone,
  email,
  imgUrl,
}: {
  country: string;
  name: string;
  street: string;
  city: string;
  phone: string;
  email: string;
  imgUrl: string;
}) => {
  return (
    <div className="tablet:container">
      <div className="flex flex-col tablet:space-y-[31px] desktop:flex-row-reverse desktop:gap-[30px] desktop:space-y-0">
        <div className="relative h-[320px] w-full shrink-0 overflow-clip tablet:h-[326px] tablet:rounded-[15px] desktop:h-[326px] desktop:w-[350px]">
          <Image src={imgUrl} alt={name} fill className="object-cover" />
        </div>
        <div className="bg-[#FDF3F0] px-6 py-20 text-center text-dark-gray tablet:rounded-[15px] tablet:py-[88px] tablet:pl-[75px] tablet:pr-[74px] tablet:text-left desktop:flex desktop:flex-1 desktop:flex-col desktop:pl-[95px] desktop:pr-[95px] desktop:text-left">
          <h2
            className={twMerge(
              "text-h1-sm text-primary tablet:text-h2",
              "tablet:tracking-[0]",
            )}
          >
            {country}
          </h2>
          <div className="tablet:flex tablet:space-x-[60px]">
            <p className="mt-6 text-body-sm tablet:w-[225px] tablet:text-body">
              <span className="font-bold">{name}</span> <br />
              {street} <br />
              {city}
            </p>
            <p className="mt-6 text-body-sm tablet:w-[225px] tablet:text-body">
              <span className="font-bold">Contact</span>
              <br />P : {phone} <br />M : {email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
