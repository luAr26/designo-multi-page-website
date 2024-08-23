import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-primary pt-20 text-center text-white">
      <div className="container">
        <h1 className="text-h1-sm">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="mt-[24px] text-body-sm">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>

        <Link href="" className="btn mt-6 inline-block">
          Learn More
        </Link>
        <div className="relative mx-auto mt-20 h-[371px] w-[284px]">
          <Image src="/assets/home/mobile/hero-image.png" alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default Hero;
