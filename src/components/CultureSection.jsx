import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
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
      className="bg-[#EEE9D3] py-20 animated"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
    
    >
      <div className="container mx-auto">
        <motion.div
          className="bg-[#DE6536] p-8 md:p-7 rounded-lg shadow-lg flex flex-col md:flex-row items-center"
          variants={childVariants}
        >
          {/* Text Content */}
          <motion.div className="w-full md:w-1/2 space-y-10" variants={childVariants}>
            <p className="text-base text-white">Arrivals</p>
            <h2 className="text-lg md:text-4xl font-bold text-white">
              Style trends are influenced <br />
              by the cultures.
            </h2>
            <p className="text-sm md:text-base text-white opacity-80">
              When they are in the means of fashion or how they are portrayed, cultures constantly leave us in the trendy corner. What they seek and the variety of fashions have their own aesthetics that define us as individuals or a unity that makes us move.
            </p>

            <motion.button
              className="flex items-center gap-16 bg-white text-[#1E1916] px-2 py-2 rounded-full shadow-md border-2 transition-all duration-300 font-bold text-sm justify-between"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex-grow text-left">LEARN MORE</span>
              <span
                className="bg-[#1E1916] text-white w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full shadow-md ml-2"
              >
                <MdArrowForward size={20} />
              </span>
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0"
            variants={childVariants}
          >
            <img
              src="/images/r5.jpg"
              alt="Two women smiling"
              className="w-80 h-[360px] object-cover rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CultureSection;
