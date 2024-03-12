import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

import { drivers } from '../data/drivers';

const routeVariants = {
  initial: {
    x: '100%',
    transition: {
      type: "spring",
      mass: 0.4,
    },
  },
  final: {
    x: '0',
    transition: {
      duration: 0.4,
      delay: 0.1,
    },
  }
}

export const PredictorThirdPage = () => {
  const [selectedDriverIndex] = useState(6);
  const navigate = useNavigate();

  const handleBackClick = (index) => {
    navigate("/projects/f1-predictor/select-circuit");
  };

  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <div className="relative mix-blend-overlay">
        <img src={drivers[selectedDriverIndex].team} alt="BannerImage" className="absolute h-screen lg:h-screen w-full object-cover object-right z-10" />
        <div className="absolute z-20 bg-gradient-to-r from-gray-900 via-gray-600 to-red-300 dark:from-gray-900 dark:via-lime-800 dark:to-gray-900 h-screen lg:h-screen w-full opacity-60" />
        <div className="absolute z-20 h-screen lg:h-screen w-full pt-32">
          <button
            onClick={handleBackClick}
            className="bg-transparent text-red-100 dark:border-lime-600 dark:hover:bg-lime-600 hover:text-white hover:bg-red-600 dark:hover:text-blue-100 dark:text-lime-300 py-2 px-4 rounded-full 
            focus:outline-none transition duration-200 mb-8 lg:mb-0 md:mb-0 hover:shadow-xl lg:ml-12 hover:-translate-x-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>

            Select the driver
          </button>

          <div className='text-amber-400 dark:text-lime-400 pb-0'>
            <h1 className='text-center lg:text-xl md:text-xl text-white'>
              Hello world!!
            </h1>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
