import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-primary pt-20 text-center text-white tablet:mx-10 tablet:rounded-[15px] tablet:pt-[60px]">
      <div className="container">
        <h1 className="text-h1-sm tablet:mx-auto tablet:max-w-[573px] tablet:text-h1">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="mt-[24px] text-body-sm tablet:mx-auto tablet:mt-[30px] tablet:max-w-[445px] tablet:text-body">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>

        <Link href="" className="btn mt-6 inline-block">
          Learn More
        </Link>
        <div className="relative mx-auto mt-20 h-[371px] w-[284px] tablet:hidden">
          <Image src="/assets/home/mobile/hero-image.png" alt="" fill />
        </div>
        <div className="relative mx-auto mt-20 hidden h-[371px] w-[284px] tablet:block">
          <Image src="/assets/home/tablet/hero-image.png" alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default Hero;
