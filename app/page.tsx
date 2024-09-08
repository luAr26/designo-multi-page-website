/** @format */
import Hero from "@/components/Hero";
import Features from "@/sections/homepage/Features";
import Footer from "@/sections/homepage/Footer";
import Services from "@/sections/homepage/Services";
export default function Home() {
  return (
    <>
      <main className="main-home">
        <Hero />
        <Services />
        <Features />
      </main>
      <Footer />
    </>
  );
}
