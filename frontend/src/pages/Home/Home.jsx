import React from "react";
import Hero from "../../components/home/Hero";
import CompanyIntro from "../../components/home/CompanyIntro";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import WhyOdissHome from "../../components/home/WhyOdissHome";
import CTASection from "../../components/home/CTASection";

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <CompanyIntro />
      <WhyOdissHome />
      <FeaturedProducts />

      <CTASection />
    </main>
  );
};

export default Home;