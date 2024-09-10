import Image from "next/image";
import Link from "next/link";

const GraphicDesignProject = ({
  title,
  description,
  imgUrl,
}: {
  title: string;
  description: string;
  imgUrl: string;
}) => {
  return (
    <Link
      href=""
      className="project-link flex w-[327px] flex-col items-center overflow-clip rounded-[15px] tablet:w-full tablet:flex-row desktop:w-[calc(33.3333%-20px)] desktop:flex-col"
    >
      <div className="relative h-[320px] w-[327px] shrink-0 tablet:h-[310px] tablet:w-[339px] desktop:h-[320px] desktop:w-full">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="327px, (min-width: 768px) 339px, (min-width: 1190px) 349.98px"
        />
      </div>
      <div className="project-info w-[327px] bg-[#FDF3F0] px-[30px] py-8 text-center tablet:flex tablet:h-[310px] tablet:w-full tablet:flex-col tablet:justify-center desktop:h-auto">
        <h2 className="text-h3 uppercase text-primary">{title}</h2>
        <p className="mt-4 text-body">{description}</p>
      </div>
    </Link>
  );
};

export default GraphicDesignProject;
