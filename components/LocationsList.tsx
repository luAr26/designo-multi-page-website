import LocationInfo from "./LocationInfo";

const locations = [
  {
    id: 1,
    country: "Canada",
    name: "Designo Central Office",
    street: "3886 Wellington Street",
    city: "Toronto, Ontario M9C 3J5",
    phone: "+1 253-863-8967",
    email: "contact@designo.co",
    imgUrl: "/assets/locations/desktop/image-map-canada.png",
  },
  {
    id: 2,
    country: "Australia",
    name: "Designo AU Office",
    street: "19 Balonne Street",
    city: "New South Wales 2443",
    phone: "(02) 6720 9092",
    email: "contact@designo.au",
    imgUrl: "/assets/locations/desktop/image-map-australia.png",
  },
  {
    id: 3,
    country: "United Kingdom",
    name: "Designo UK Office",
    street: "13 Colorado Way",
    city: "Rhyd-y-fro SA8 9GA",
    phone: "078 3115 1400",
    email: "contact@designo.uk",
    imgUrl: "/assets/locations/desktop/image-map-united-kingdom.png",
  },
];

const LocationsList = () => {
  return (
    <div className="flex flex-col space-y-10 tablet:space-y-[120px] desktop:space-y-8">
      {locations.map((location) => (
        <LocationInfo key={location.id} {...location} />
      ))}
    </div>
  );
};

export default LocationsList;
