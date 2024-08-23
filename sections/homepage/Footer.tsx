import CallToAction from "@/components/CallToAction";
import Details from "@/components/Details";

const Footer = () => {
  return (
    <footer className="relative mt-[121px] text-white">
      <div className="container">
        <CallToAction />
        <Details />
      </div>
      <div className="absolute inset-0 top-[190px] -z-10 bg-black"></div>
    </footer>
  );
};

export default Footer;
