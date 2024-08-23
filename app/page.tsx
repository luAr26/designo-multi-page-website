/** @format */
import Main from "@/components/Main";
import Features from "@/sections/homepage/Features";
import HomePageHeader from "@/sections/homepage/Header";
import Services from "@/sections/homepage/Services";
export default function Home() {
  return (
    <>
      <HomePageHeader />
      <Main>
        <Services />
        <Features />
      </Main>
    </>
  );
}
