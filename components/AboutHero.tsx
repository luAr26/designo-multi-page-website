import Image from "next/image";

const AboutHero = () => {
  return (
    <div className="tablet:container">
      <div className="about-hero-container flex flex-col desktop:flex-row-reverse">
        <div className="relative h-[320px] w-full shrink-0 overflow-clip tablet:rounded-t-[15px] desktop:h-[480px] desktop:w-[476px] desktop:rounded-l-none desktop:rounded-r-[15px]">
          <Image
            src="/assets/about/tablet/image-about-hero.jpg"
            alt="About Hero"
            fill
            className="object-cover"
          />
        </div>
        <div className="bg-primary px-6 py-20 text-center text-white tablet:rounded-b-[15px] tablet:py-16 desktop:flex desktop:flex-col desktop:justify-center desktop:rounded-l-[15px] desktop:rounded-r-none desktop:pl-[95px] desktop:pr-[82px] desktop:text-left">
          <h2 className="text-h1-sm tablet:text-h1">About Us</h2>
          <p className="mt-6 text-body-sm tablet:mx-auto tablet:mt-8 tablet:max-w-[573px] tablet:text-body">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We&apos;ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We&apos;re always looking forward to creating brands,
            products, and digital experiences that connect with our
            client&apos;s audiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
