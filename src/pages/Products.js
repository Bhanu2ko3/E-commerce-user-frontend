import { motion } from "framer-motion";
import kokis from "../images/kokis.jpg"; 
import aluwa from "../images/aluwa.jpg";
import asmi from "../images/asmi.jpg";  
import kondakawum from "../images/kondakawum.jpg";
import munkawum from "../images/munkawum.jpg";
import paniwalalu from "../images/paniwalalu.jpg";      

const ProductCard = ({ name, image, price }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="bg-white shadow-lg rounded-lg p-4 text-center"
  >
    <img src={image} alt={name} className="w-full h-40 object-cover rounded-lg" />
    <h3 className="text-lg font-bold mt-2">{name}</h3>
    <p className="text-secondary font-semibold">${price}</p>
    <button className="bg-primary text-white px-4 py-2 mt-3 rounded-lg">
      Add to Cart
    </button>
  </motion.div>
);

const Products = () => (
  <div className="p-10">
    <h2 className="text-2xl font-bold text-center">Our Sweets</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      
      <ProductCard name="Kokis" image={kokis} price="5" />
      <ProductCard name="Aluwa" image={aluwa} price="5" />
      <ProductCard name="Asmi" image={asmi} price="5" />
      <ProductCard name="Mun kawum" image={munkawum} price="5" />
      <ProductCard name="Konda kawum" image={kondakawum} price="5" />
      <ProductCard name="Pani walalu" image={paniwalalu} price="5" />
    </div>
  </div>
);

export default Products;
