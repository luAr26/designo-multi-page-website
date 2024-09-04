import ContactForm from "@/components/ContactForm";
import FooterContact from "@/components/FooterContact";
import LocationsSection from "@/components/LocationsSection";
import Main from "@/components/Main";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  return (
    <>
      <Main>
        <ContactForm />
        <LocationsSection />
      </Main>
      <FooterContact />
      <Toaster position="top-right" />
    </>
  );
};

export default Contact;
