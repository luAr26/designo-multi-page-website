import Image from "next/image";

type FeatureProps = {
  title: string;
  imageUrl: string;
  description: string;
};

const Feature = (props: FeatureProps) => {
  const { title, imageUrl, description } = props;
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[202px] w-[202px]">
        <Image src={imageUrl} alt="" fill />
      </div>
      <h3 className="mt-12 text-h3 uppercase">{title}</h3>
      <p className="mt-8 text-center text-body">{description}</p>
    </div>
  );
};

export default Feature;
