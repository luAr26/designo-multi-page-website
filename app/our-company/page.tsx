import AboutHero from "@/components/AboutHero";
import LocationsSection from "@/components/LocationsSection";
import TheRealDeal from "@/components/TheRealDeal";
import WorldClassTalent from "@/components/WorldClassTalent";
import Footer from "@/sections/homepage/Footer";

const OurCompany = () => {
  return (
    <>
      <main>
        <AboutHero />
        <WorldClassTalent />
        <LocationsSection />
        <TheRealDeal />
      </main>
      <Footer />
    </>
  );
};

export default OurCompany;
