import Image from "next/image";

type FeatureProps = {
  title: string;
  imageUrl: string;
  description: string;
};

const Feature = (props: FeatureProps) => {
  const { title, imageUrl, description } = props;
  return (
    <div className="flex flex-col items-center tablet:flex-row tablet:space-x-12 desktop:flex-col desktop:space-x-0">
      <div className="feature-container relative h-[202px] w-[202px] shrink-0">
        <Image src={imageUrl} alt="" fill />
      </div>
      <div className="text-center tablet:text-left desktop:text-center">
        <h3 className="mt-12 text-h3 uppercase">{title}</h3>
        <p className="mt-8 max-w-[327px] text-body tablet:max-w-none">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Feature;
