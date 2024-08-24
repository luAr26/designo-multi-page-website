import CallToAction from "@/components/CallToAction";
import Details from "@/components/Details";

const Footer = () => {
  return (
    <footer className="relative mt-[121px] text-white tablet:mt-[67px]">
      <div className="container">
        <CallToAction />
        <Details />
      </div>
      <div className="absolute inset-0 top-[190px] -z-10 bg-black tablet:top-[264px]"></div>
    </footer>
  );
};

export default Footer;
