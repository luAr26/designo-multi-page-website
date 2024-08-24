import ContactInfo from "@/components/ContactInfo";
import FooterLogo from "@/components/FooterLogo";
import FooterNav from "@/components/FooterNav";
import SocialLinks from "@/components/SocialLinks";
const Details = () => {
  return (
    <div className="flex flex-col items-center py-16 tablet:py-20">
      <div className="tablet:flex tablet:w-full tablet:items-center tablet:justify-between tablet:border-b-[1px] tablet:border-[rgba(255,255,255,0.1)] tablet:pb-10">
        <FooterLogo />
        <FooterNav />
      </div>
      <div className="tablet:flex tablet:w-full tablet:items-end tablet:justify-between tablet:pt-[31px]">
        <ContactInfo />
        <SocialLinks />
      </div>
    </div>
  );
};

export default Details;
