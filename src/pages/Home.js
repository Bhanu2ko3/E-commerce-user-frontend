import React from "react";
import Hero from "../components/Hero";
import About from "./About";
import Footer from "../components/Footer";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="p-10">
        <h2 className="text-2xl font-bold text-center">Our Best Sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Add Product Cards Here */}
        </div>
      </section>
      <Products />
      <About />
      <Footer />
      
    </div>
  );
};

export default Home;
