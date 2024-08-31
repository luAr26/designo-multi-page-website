import Main from "@/components/Main";
import ServiceHero from "@/components/ServiceHero";
import GraphicDesignProjects from "@/components/GraphicDesignProjects";
import Footer from "@/sections/homepage/Footer";
import GraphicDesignRelatedServices from "@/components/GraphicDesignRelatedServices";

export default function GraphicDesign() {
  return (
    <>
      <Main>
        <ServiceHero>
          <div className="service-hero-container flex flex-col items-center py-[105px] text-white tablet:py-16">
            <h1 className="text-h1-sm tablet:text-h1">Graphic Design</h1>
            <p className="mt-6 max-w-[327px] text-center text-body-sm tablet:max-w-[450px] tablet:text-body">
              We deliver eye-catching branding materials that are tailored to
              meet your business objectives.
            </p>
          </div>
        </ServiceHero>
        <GraphicDesignProjects />
        <GraphicDesignRelatedServices />
      </Main>
      <Footer />
    </>
  );
}
