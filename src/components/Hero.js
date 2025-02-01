import React from "react";
import menuBg from "../images/menu.png"; // Import the background image

const Hero = () => {
  return (
    <section
      className="text-white text-center py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${menuBg})` }} // Set the background image
    >
      <h2 className="text-4xl font-bold">Authentic Sri Lankan Sweets</h2>
      <p className="mt-4 text-lg">Experience the true taste of Sri Lanka!</p>
      <a
        href="/products"
        className="mt-6 inline-block bg-beige text-primary px-6 py-3 rounded-lg font-bold"
      >
        View Products
      </a>
    </section>
  );
};

export default Hero;
