/** @format */
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Features from "@/sections/homepage/Features";
import Footer from "@/sections/homepage/Footer";
import Services from "@/sections/homepage/Services";
export default function Home() {
  return (
    <>
      <Hero />
      <Main>
        <Services />
        <Features />
      </Main>
      <Footer />
    </>
  );
}
