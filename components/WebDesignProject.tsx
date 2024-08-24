import Image from "next/image";
import Link from "next/link";

const WebDesignProject = ({
  title,
  description,
  imgUrl,
}: {
  title: string;
  description: string;
  imgUrl: string;
}) => {
  return (
    <Link href="" className="flex flex-col">
      <div className="relative h-[320px] w-[327px]">
        <Image src={imgUrl} alt={title} fill />
      </div>
      <div className="bg-[#FDF3F0]">
        <h2 className="text-h3 uppercase text-primary">{title}</h2>
        <p className="text-body">{description}</p>
      </div>
    </Link>
  );
};

export default WebDesignProject;
