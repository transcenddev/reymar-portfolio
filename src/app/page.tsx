"use client";

import { useEffect } from "react";
import FAQs from "@/sections/FAQs";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Services from "@/sections/Services";
import Projects from "@/sections/Projects";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  // Handle hash scrolling when navigating from other pages
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

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
