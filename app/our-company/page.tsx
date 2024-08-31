import AboutHero from "@/components/AboutHero";
import LocationsSection from "@/components/LocationsSection";
import TheRealDeal from "@/components/TheRealDeal";
import WorldClassTalent from "@/components/WorldClassTalent";
import Footer from "@/sections/homepage/Footer";
import Main from "@/components/Main";

const OurCompany = () => {
  return (
    <>
      <Main>
        <AboutHero />
        <WorldClassTalent />
        <LocationsSection />
        <TheRealDeal />
      </Main>
      <Footer />
    </>
  );
};

export default OurCompany;
