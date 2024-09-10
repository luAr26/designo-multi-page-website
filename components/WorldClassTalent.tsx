import Image from "next/image";

const WorldClassTalent = () => {
  return (
    <section className="tablet:container tablet:mt-[120px]">
      <div className="world-class-talent-container desktop:flex">
        <div className="relative h-[320px] w-full tablet:overflow-clip tablet:rounded-t-[15px] desktop:h-[640px] desktop:w-[476px] desktop:shrink-0 desktop:rounded-l-[15px] desktop:rounded-r-none">
          <Image
            src="/assets/about/desktop/image-world-class-talent.jpg"
            alt="World class talent"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100%, 476px"
          />
        </div>
        <div className="bg-[#FDF3F0] px-6 py-20 text-center tablet:rounded-b-[15px] tablet:py-[68px] desktop:flex desktop:flex-col desktop:justify-center desktop:rounded-r-[15px] desktop:pl-[94px] desktop:pr-[95px] desktop:text-left">
          <h3 className="text-h1-sm text-primary tablet:text-h2 tablet:tracking-[0]">
            World-class talent
          </h3>
          <p className="mt-6 text-body">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className="mt-[14px] text-body tablet:mt-[26px]">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand&apos;s story and mission.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorldClassTalent;
