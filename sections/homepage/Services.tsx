import Service from "@/components/Service";

const Services = () => {
  return (
    <div className="container">
      <div className="flex flex-col space-y-6 pt-[120px] desktop:flex-row desktop:space-x-[30px] desktop:space-y-0 desktop:pt-[160px]">
        <div className="desktop:w-1/2">
          <Service
            imageUrl="/assets/home/mobile/image-web-design.jpg"
            name="Web design"
            heightFull={true}
          />
        </div>
        <div className="flex flex-col space-y-6 desktop:w-1/2">
          <Service
            imageUrl="/assets/home/mobile/image-app-design.jpg"
            name="App design"
          />
          <Service
            imageUrl="/assets/home/mobile/image-graphic-design.jpg"
            name="Graphic design"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
