import ContactInfo from "@/components/ContactInfo";
import FooterLogo from "@/components/FooterLogo";
import FooterNav from "@/components/FooterNav";
import SocialLinks from "@/components/SocialLinks";
const Details = () => {
  return (
    <div className="flex flex-col items-center py-16">
      <FooterLogo />
      <FooterNav />
      <ContactInfo />
      <SocialLinks />
    </div>
  );
};

export default Details;
