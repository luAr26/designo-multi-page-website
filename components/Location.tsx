import Image from "next/image";
import Link from "next/link";

type LocationProps = {
  name: string;
  imgUrl: string;
};
const Location = (props: LocationProps) => {
  const { name, imgUrl } = props;
  return (
    <div className="flex flex-col items-center">
      <div className="location-icon relative h-[202px] w-[202px]">
        <Image src={imgUrl} alt={name} fill />
      </div>
      <h3 className="mt-12 text-h3 uppercase">{name}</h3>
      <Link
        href="/locations"
        className="btn px-[18 px] mt-8 bg-primary text-btn text-white"
      >
        See location
      </Link>
    </div>
  );
};

export default Location;
