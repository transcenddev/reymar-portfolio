import FAQs from "@/sections/FAQs";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Services from "@/sections/Services";
import Projects from "@/sections/Projects";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Projects />
      <Services />
      <Testimonials />
      <FAQs />
      <Footer /> 
    </>
  );
}
