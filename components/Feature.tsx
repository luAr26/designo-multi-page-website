import Image from "next/image";

type FeatureProps = {
  title: string;
  imageUrl: string;
  description: string;
};

const Feature = (props: FeatureProps) => {
  const { title, imageUrl, description } = props;
  return (
    <div className="flex flex-col items-center tablet:flex-row tablet:space-x-12">
      <div className="relative h-[202px] w-[202px] shrink-0">
        <Image src={imageUrl} alt="" fill />
      </div>
      <div className="text-center tablet:text-left">
        <h3 className="mt-12 text-h3 uppercase">{title}</h3>
        <p className="mt-8 text-body">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
