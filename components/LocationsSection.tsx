import Location from "@/components/Location";

const locations = [
  {
    name: "Canada",
    imgUrl: "/assets/shared/desktop/illustration-canada.svg",
  },
  {
    name: "Australia",
    imgUrl: "/assets/shared/desktop/illustration-australia.svg",
  },
  {
    name: "United Kingdom",
    imgUrl: "/assets/shared/desktop/illustration-united-kingdom.svg",
  },
];

const LocationsSection = () => {
  return (
    <div className="py-[120px] tablet:container desktop:py-[160px]">
      <div className="flex flex-col space-y-8 desktop:flex-row desktop:justify-around desktop:space-y-0">
        {locations.map((location) => (
          <Location key={location.name} {...location} />
        ))}
      </div>
    </div>
  );
};

export default LocationsSection;
