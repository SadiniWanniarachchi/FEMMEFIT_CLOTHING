import React from 'react';
import { motion } from 'framer-motion';
import { MdArrowForward } from 'react-icons/md';

const CultureSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.2 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="bg-[#EEE9D3] py-10 md:py-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-[#DE6536] p-6 sm:p-8 md:p-10 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6 md:gap-8"
          variants={childVariants}
        >
          {/* Text Section */}
          <motion.div
            className="w-full md:w-1/2 space-y-6 md:space-y-8"
            variants={childVariants}
          >
            <p className="text-sm sm:text-base text-white">Arrivals</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Style trends are influenced <br />
              by the cultures.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white opacity-80 leading-relaxed">
              When they are in the means of fashion or how they are portrayed, cultures
              constantly leave us in the trendy corner. What they seek and the variety of
              fashions have their own aesthetics that define us as individuals or a unity
              that makes us move.
            </p>
            <motion.button
              className="flex items-center gap-3 bg-white text-[#1E1916] px-4 py-2 rounded-full shadow-md border-2 transition-all duration-300 font-bold text-sm justify-between"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex-grow text-left">LEARN MORE</span>
              <span className="bg-[#1E1916] text-white w-8 h-8 flex items-center justify-center rounded-full shadow-md">
                <MdArrowForward size={20} />
              </span>
            </motion.button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            variants={childVariants}
          >
            <img
              src="/images/r5.jpg"
              alt="Woman in chair"
              className="w-full h-auto max-w-[300px] md:max-w-[400px] object-cover rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CultureSection;
