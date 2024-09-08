import ContactForm from "@/components/ContactForm";
import FooterContact from "@/components/FooterContact";
import LocationsSection from "@/components/LocationsSection";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  return (
    <>
      <main className="main-contact pt-[96px] tablet:pt-[155px]">
        <ContactForm />
        <LocationsSection />
      </main>
      <FooterContact />
      <Toaster position="top-right" />
    </>
  );
};

export default Contact;
