import React from 'react';
import { FaInstagram, FaPinterest, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.2 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function Footer() {
  return (
    <motion.footer
      className="bg-[#de6536] pt-20 pb-8"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
    >
      {/* Wave SVG at the top of the footer */}
      <div className="wave-container relative overflow-hidden">
        <svg
          className="wave absolute top-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#DE6536"
            d="M0,192L48,176C96,160,192,128,288,128C384,128,480,192,576,213.3C672,235,768,213,864,176C960,139,1056,85,1152,80C1248,75,1344,117,1392,160L1440,192V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-8">
        
        {/* Left Section */}
        <motion.div variants={sectionVariants}>
          <h1 className="text-3xl text-white font-bold">FEMMEFIT</h1>
          <p className="text-base text-white mt-2">Since 2023</p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-8">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1E1916] transform hover:-translate-y-1 transition-transform duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1E1916] transform hover:-translate-y-1 transition-transform duration-300"
            >
              <FaPinterest size={24} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1E1916] transform hover:-translate-y-1 transition-transform duration-300"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </motion.div>

        {/* Navigation Section 1 */}
        <motion.div variants={sectionVariants}>
          <h3 className="text-xl text-white font-bold">Navigation</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-white hover:text-[#1E1916]">Home</a></li>
            <li><a href="#" className="text-white hover:text-[#1E1916]">Contact</a></li>
            <li><a href="#" className="text-white hover:text-[#1E1916]">Shop</a></li>
            <li><a href="#" className="text-white hover:text-[#1E1916]">Sale</a></li>
          </ul>
        </motion.div>

        {/* Navigation Section 2 */}
        <motion.div variants={sectionVariants}>
          <h3 className="text-xl text-white font-bold">Navigation</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-white hover:text-[#1E1916]">About</a></li>
            <li><a href="#" className="text-white hover:text-[#1E1916]">Help</a></li>
            <li><a href="#" className="text-white hover:text-[#1E1916]">Customer</a></li>
          </ul>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div variants={sectionVariants}>
          <h3 className="text-xl text-white font-bold">Subscribe to our newsletter</h3>
          <div className="flex flex-col mt-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-2 w-full border border-[#1E1916] rounded-md mb-4"
            />
            <button className="p-2 bg-[#1E1916] text-white rounded-md">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
