import Image from "next/image";

const TheRealDeal = () => {
  return (
    <section className="tablet:container">
      <div className="desktop:flex desktop:flex-row-reverse">
        <div className="relative h-[320px] w-full tablet:overflow-clip tablet:rounded-t-[15px] desktop:h-[640px] desktop:w-[476px] desktop:shrink-0 desktop:rounded-l-none desktop:rounded-r-[15px]">
          <Image
            src="/assets/about/desktop/image-real-deal.jpg"
            alt="The real deal"
            fill
            className="object-cover"
          />
        </div>
        <div className="bg-[#FDF3F0] px-6 py-20 text-center tablet:rounded-b-[15px] tablet:py-[68px] desktop:flex desktop:flex-col desktop:justify-center desktop:rounded-l-[15px] desktop:pl-[94px] desktop:pr-[95px] desktop:text-left">
          <h3 className="text-h1-sm text-primary tablet:text-h2 tablet:tracking-[0]">
            The real deal
          </h3>
          <p className="mt-6 text-body">
            As strategic partners in our client&apos;s businesses, we are ready
            to take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className="mt-[14px] text-body tablet:mt-[26px]">
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheRealDeal;
