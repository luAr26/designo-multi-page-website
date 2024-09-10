import ServiceHero from "@/components/ServiceHero";
import AppDesignProjects from "@/components/AppDesignProjects";
import Footer from "@/sections/homepage/Footer";
import AppDesignRelatedServices from "@/components/AppDesignRelatedServices";

export default function AppDesign() {
  return (
    <>
      <main className="main-service pt-24 tablet:pt-[155px]">
        <ServiceHero>
          <div className="service-hero-container flex flex-col items-center py-[105px] text-white tablet:py-16">
            <h1 className="text-h1-sm tablet:text-h1">App Design</h1>
            <p className="mt-6 max-w-[327px] text-center text-body-sm tablet:max-w-[450px] tablet:text-body">
              Our mobile designs bring intuitive digital solutions to your
              customers right at their fingertips.
            </p>
          </div>
        </ServiceHero>
        <AppDesignProjects />
        <AppDesignRelatedServices />
      </main>
      <Footer />
    </>
  );
}
