import ServiceHero from "@/components/ServiceHero";
import WebDesignProjects from "@/components/WebDesignProjects";
import WebDesignRelatedServices from "@/components/WebDesignRelatedServices";
import Footer from "@/sections/homepage/Footer";

export default function WebDesign() {
  return (
    <>
      <main className="main-service pt-24 tablet:pt-[155px]">
        <ServiceHero>
          <div className="service-hero-container flex flex-col items-center py-[105px] text-white tablet:py-16">
            <h1 className="text-h1-sm tablet:text-h1">Web Design</h1>
            <p className="mt-6 max-w-[327px] text-center text-body-sm tablet:max-w-[450px] tablet:text-body">
              We build websites that serve as powerful marketing tools and bring
              memorable brand experiences.
            </p>
          </div>
        </ServiceHero>
        <WebDesignProjects />
        <WebDesignRelatedServices />
      </main>
      <Footer />
    </>
  );
}
