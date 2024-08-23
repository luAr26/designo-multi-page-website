import Service from "@/components/Service";

const Services = () => {
  return (
    <div className="container">
      <div className="flex flex-col space-y-6 pt-[120px]">
        <Service
          imageUrl="/assets/home/mobile/image-web-design.jpg"
          name="Web design"
        />
        <div className="flex flex-col space-y-6">
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
