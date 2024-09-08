import ContactForm from "@/components/ContactForm";
import FooterContact from "@/components/FooterContact";
import LocationsSection from "@/components/LocationsSection";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  return (
    <>
      <main className="main-contact">
        <ContactForm />
        <LocationsSection />
      </main>
      <FooterContact />
      <Toaster position="top-right" />
    </>
  );
};

export default Contact;
