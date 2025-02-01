import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            <p>&copy; 2025 Sithamu Hela Rasa. All rights reserved.</p>
          </div>
          <div className="space-x-4">
            <a
              href="https://wa.me/+1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <i className="fab fa-whatsapp fa-2x"></i>
            </a>
            <a
              href="https://facebook.com/sithamuhalarasa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          <p>Contact us at: +94 123 456 789</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
