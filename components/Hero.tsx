import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-primary pt-20 text-center text-white tablet:rounded-[15px] tablet:bg-[transparent] tablet:pt-0 desktop:text-left">
      <div className="hero-container container tablet:max-w-[688px] tablet:rounded-[15px] tablet:bg-primary tablet:pt-[60px] desktop:max-w-[1110px] desktop:px-[95px] desktop:pt-[139px]">
        <div className="desktop:flex desktop:justify-between">
          <div>
            <h1 className="mx-auto max-w-[327px] text-h1-sm tablet:max-w-[573px] tablet:text-h1 desktop:max-w-[540px]">
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className="mx-auto mt-[24px] max-w-[327px] text-body-sm tablet:mx-auto tablet:mt-[30px] tablet:max-w-[445px] tablet:text-body desktop:mx-0">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <Link href="" className="btn mt-6 inline-block">
              Learn More
            </Link>
          </div>
          <div className="relative mx-auto mt-20 h-[371px] w-[284px] tablet:hidden">
            <Image src="/assets/home/mobile/hero-image.png" alt="" fill />
          </div>
          <div className="relative mx-auto mt-20 hidden h-[371px] w-[284px] tablet:block desktop:hidden">
            <Image src="/assets/home/tablet/hero-image.png" alt="" fill />
          </div>
          <div className="relative hidden h-[501px] w-[284px] desktop:block">
            <Image src="/assets/home/desktop/hero-image.png" alt="" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
