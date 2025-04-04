"use client";

import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import AluwaIMG from "../images/aluwa.jpg";
import AsmiIMG from "../images/asmi.jpg";
import KokisIMG from "../images/kokis.jpg";
import KondaKawumIMG from "../images/kondakawum.jpg";
import MungkawumIMG from "../images/munkawum.jpg";
import PaniwalaluIMG from "../images/paniwalalu.jpg";

export default function Products() {
  const navigate = useNavigate();
  const [products] = useState([
    {
      id: 1,
      name: "Aluwa",
      price: 1200,
      rating: 4,
      image: AluwaIMG,
    },
    {
      id: 2,
      name: "Asmi",
      price: 300,
      rating: 5,
      image: AsmiIMG,
    },
    {
      id: 3,
      name: "Kokis",
      price: 850,
      rating: 3,
      image: KokisIMG,
    },
    {
      id: 4,
      name: "Konda Kawum",
      price: 850,
      rating: 3,
      image: KondaKawumIMG,
    },
    {
      id: 5,
      name: "Mung Kawum",
      price: 850,
      rating: 3,
      image: MungkawumIMG,
    },
    {
      id: 6,
      name: "Pani Walalu",
      price: 850,
      rating: 3,
      image: PaniwalaluIMG,
    },
  ]);

  return (
    <div className="bg-white py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        Our Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-lg p-5 text-center border border-gray-200"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-lg font-bold mt-4 text-gray-900">
              {product.name}
            </h3>
            <p className="text-primary font-semibold mt-1">
              RS. {product.price}
            </p>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-5 w-5 ${
                    i < product.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <motion.button
              className="mt-4 w-full bg-[#1B5E20] text-white py-2 rounded-md hover:bg-[#66BB6A] focus:outline-none focus:ring focus:ring-[#1B5E20]"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/productOverview", { state: product })}
            >
              Order Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
