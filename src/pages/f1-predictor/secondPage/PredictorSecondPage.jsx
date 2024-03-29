import React, {useRef, useState} from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

import { ItemSelectorHScroll } from '../components/ItemSelectorHScroll';
import { ItemNameDisplay } from '../components/ItemNameDisplay';
import { races } from '../data/circuits';

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
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const handleBackClick = (index) => {
    navigate("/projects/f1-predictor/select-driver");
  };

  const [selectedDriverIndex, setSelectedDriverIndex] = useState(0);

  const handleImageHover = (index) => {
    setSelectedDriverIndex(index);
  };
  
  const handleImageClick = (index) => {
    navigate("/projects/f1-predictor/prediction");
  };

  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <div className="relative mix-blend-overlay">
        <img src={races[selectedDriverIndex].imgSrc} alt="BannerImage" className="absolute h-screen lg:h-screen w-full object-cover object-right z-10" />
        <div className="absolute z-20 bg-gradient-to-r from-gray-900 via-gray-600 to-red-300 dark:from-gray-900 dark:via-lime-800 dark:to-gray-900 h-screen lg:h-screen w-full opacity-60" />
        <div className="absolute z-20 h-screen lg:h-screen w-full pt-24 lg:pt-32 md:pt-32">
        <button
          onClick={handleBackClick}
          className="bg-transparent text-red-100 dark:border-lime-600 dark:hover:bg-lime-600 hover:text-white hover:bg-red-600 dark:hover:text-blue-100 dark:text-lime-300 py-2 px-4 rounded-full 
          focus:outline-none transition duration-200 mb-4 lg:mb-0 md:mb-0 hover:shadow-xl lg:ml-12 hover:-translate-x-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>

          Select the driver
        </button>

        <div className='text-amber-100 dark:text-lime-400 pb-2 md:pb-6 lg:pb-6 bg-amber-800 dark:bg-amber-600 bg-opacity-20 dark:bg-opacity-20 py-4'>
          <ItemNameDisplay data={races} item_index={selectedDriverIndex} textSize="text-5xl" textSizeSm='text-2xl' race={true} />
        </div>
        <div className="mx-auto lg:flex md:flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="md:py-8 sm:p-8 lg:grid lg:grid-cols-2 lg:static lg:max-h-full bg-white lg:overflow-visible rounded-lg shadow-lg dark:bg-gray-700 bg-opacity-80 dark:bg-opacity-70">
            <div className="p-6 flex flex-col text-amber-950 dark:text-amber-200 text-xl lg:text-2xl md:text-2xl justify-evenly">
                <h3><span className='underline font-bold'>Round {races[selectedDriverIndex].id}:</span> <span className="text-sm lg:text-xl md:text-xl">{races[selectedDriverIndex].name}</span></h3>
                <h3><span className='underline font-bold'>Location:</span> <span className="text-sm lg:text-xl md:text-xl">{races[selectedDriverIndex].city}, {races[selectedDriverIndex].country}</span></h3>
                <h3><span className='underline font-bold'>Date</span>: <span className="text-sm lg:text-xl md:text-xl">{races[selectedDriverIndex].date}</span></h3>
            </div>
            <div className="p-6 md:flex lg:flex md:justify-center lg:justify-center">
              <img className='h-60 md:h-80 lg:h-80 self-center' src={races[selectedDriverIndex].image_src} alt="Stephane Cyrille" />
            </div>
          </div>
        </div>

        <ItemSelectorHScroll ref={containerRef} dataList={races} idx={selectedDriverIndex} handleImageHover={handleImageHover} handleImageClick={handleImageClick} /> 
        </div>
      </div>
    </motion.div>
  )
}
