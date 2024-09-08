import LocationsList from "@/components/LocationsList";
import Footer from "@/sections/homepage/Footer";

const Locations = () => {
  return (
    <>
      <main className="pt-[96px] tablet:pt-[155px]">
        <LocationsList />
      </main>
      <Footer />
    </>
  );
};

export default Locations;
