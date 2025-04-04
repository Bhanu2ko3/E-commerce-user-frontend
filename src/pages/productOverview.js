import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/20/solid';
import { useState, useEffect, useRef } from 'react';
import { useCart } from '../Context/CartContext'; // Context for cart functionality

export default function ProductOverview() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;
  const { addToCart } = useCart();

  const [PackQuantity, setQuantity] = useState(10);
  const [inputQuantity, setInputQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const productRef = useRef(null);

  useEffect(() => {
    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  if (!product) {
    return <div className="text-center text-red-500 text-lg">No product found</div>;
  }

  const calculatePrice = () => {
    // Ensure price is a number
    let unitPrice = typeof product.price === 'string'
      ? parseFloat(product.price.replace('$', '').trim())
      : product.price;

    let quantityMultiplier = PackQuantity / 10; // 10 = 1x, 20 = 2x, 50 = 5x
    return unitPrice * quantityMultiplier * inputQuantity;
  };

  const handleAddToCart = () => {
    const cartProduct = {
      ...product,
      quantity: inputQuantity,
      packQuantity: PackQuantity,
      totalPrice: calculatePrice()
    };
    addToCart(cartProduct);
    setAddedToCart(true);
    setQuantity(10);
    setInputQuantity(1);
    window.alert(`${product.name} added to cart!`);
  };

  const handleIncreaseQuantity = () => {
    setInputQuantity(inputQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (inputQuantity > 1) setInputQuantity(inputQuantity - 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 max-w-lg text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        ref={productRef}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover rounded-lg"
        />
        <h2 className="text-2xl font-bold text-gray-900 mt-4">{product.name}</h2>

        <p className="text-lg text-primary font-semibold mt-2">RS. {product.price}</p>

        <div className="flex justify-center mt-2">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`h-6 w-6 ${i < product.rating ? 'text-yellow-500' : 'text-gray-300'}`}
            />
          ))}
        </div>

        <p className="text-gray-700 mt-4">
          {product.name} is a delicious Sri Lankan sweet that you will love. Freshly made and packed with flavor!
        </p>

        {/* Pack Quantity Buttons */}
        <div className="mt-6">
          <label className="block text-left text-gray-700">Amount : {PackQuantity} Pack</label>
          <div className="flex justify-center gap-4 mt-2">
            {[10, 20, 50].map((qty) => (
              <button
                key={qty}
                onClick={() => setQuantity(qty)}
                className={`w-20 h-12 border border-gray-300 rounded-md ${
                  PackQuantity === qty ? 'bg-[#1B5E20] text-white' : 'bg-white'
                }`}
              >
                {qty} Pack
              </button>
            ))}
          </div>

          {/* Quantity Input */}
          <div className="mt-4">
            <label className="block text-left text-gray-700">Quantity</label>
            <div className="flex items-center justify-center mt-2">
              <button className="w-10 h-10 bg-gray-200 rounded-md" onClick={handleDecreaseQuantity}>-</button>
              <input
                type="number"
                min="1"
                value={inputQuantity}
                onChange={(e) => setInputQuantity(Number(e.target.value))}
                className="w-24 p-2 mx-2 border border-gray-300 rounded-md text-center"
              />
              <button className="w-10 h-10 bg-gray-200 rounded-md" onClick={handleIncreaseQuantity}>+</button>
            </div>
          </div>
        </div>

        {/* Calculated Price */}
        <div className="mt-4 text-lg font-semibold text-gray-900">
          Price: {calculatePrice()} LKR
        </div>

        {/* Clear Selection Button */}
        <button
          className="mt-4 text-gray-600 hover:text-[#1B5E20]"
          onClick={() => {
            setQuantity(10);
            setInputQuantity(1);
          }}
        >
          Clear Selection
        </button>

        {/* Add to Cart */}
        <button
          className="mt-6 w-full bg-[#1B5E20] text-white py-2 rounded-md hover:bg-[#2E7D32]"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>

        {/* View Cart */}
        {addedToCart && (
          <button
            className="mt-4 w-full bg-gray-200 text-black py-2 rounded-md hover:bg-gray-300"
            onClick={() => navigate('/cart')}
          >
            View Cart
          </button>
        )}
      </motion.div>
    </div>
  );
}
