import ContactForm from "@/components/ContactForm";
import FooterContact from "@/components/FooterContact";
import LocationsSection from "@/components/LocationsSection";
import Main from "@/components/Main";

const Contact = () => {
  return (
    <>
      <Main>
        <ContactForm />
        <LocationsSection />
      </Main>
      <FooterContact />
    </>
  );
};

export default Contact;
