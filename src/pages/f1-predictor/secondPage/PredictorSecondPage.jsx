import React from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const routeVariants = {
  initial: {
    x: '200%',
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

export const PredictorSecondPage = () => {
  const navigate = useNavigate();

  const handleBackClick = (index) => {
    navigate("/projects/f1-predictor/select-driver");
  };

  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <div className='bg-gradient-to-r from-indigo-100 via-purple-100 to-teal-100 h-screen dark:from-lime-200 dark:via-gray-600 dark:to-gray-600 pt-36'>
        <button
          onClick={handleBackClick}
          class="bg-transparent hover:bg-red-600 dark:bg-gray-600 dark:text-lime-300 dark:border-lime-600 dark:hover:bg-lime-600 dark:hover:text-white text-red-500 hover:text-blue-100 border-2 border-red-400 py-2 px-4 rounded-full 
          focus:outline-none transition duration-200 hover:shadow-xl ml-12 hover:-translate-x-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>

          Select the driver
        </button>
      </div>
    </motion.div>
  )
}
