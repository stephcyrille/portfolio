import React, { useRef, useState, useEffect } from 'react'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

import { DriverBigCard } from '../components/DriverBigCard';
import { ItemNameDisplay } from '../components/ItemNameDisplay';
import { DriverCharactersList } from '../components/DriverCharactersList';
import { getAllDriversList } from '../../../services'

const routeVariants = {
  initial: {
      x: '-100%'
  },
  final: {
    x: '0',
    transition: {
      duration: 0.5,
      delay: 0.1,
    },
  }
}



export const PredictorFirstPage = (props) => {
  const navigate = useNavigate();

  const containerRef = useRef(null);
  const [selectedDriverIndex, setSelectedDriverIndex] = useState(0);
  const [driversList, setDriversList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllDriversList();
        console.log('Drivers List:', result);
        try{
          setDriversList(result);
        } catch (arr_error) {
          console.log("Your array is empty: ", arr_error);
        }
        // Handle the result or update your component state accordingly
      } catch (error) {
        // Handle errors
        console.error('Error getting drivers list:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleImageHover = (index) => {
    setSelectedDriverIndex(index);
  };
  
  const handleImageClick = () => {
    navigate("/projects/f1-predictor/select-circuit");
  };


  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      {/* TODO Check first if we are connected with the Backend, Then test if we have a data */}
      <div className="relative mix-blend-overlay">
        <img src={driversList.length > 0 ? driversList[selectedDriverIndex].constructor_img : ''} alt="BannerImage" className="absolute h-screen lg:h-screen w-full object-cover object-right z-10" />
        <div className="absolute z-20 bg-gradient-to-r from-gray-900 via-gray-600 to-red-300 dark:from-gray-900 dark:via-lime-800 dark:to-gray-900 h-screen lg:h-screen w-full opacity-60" />
        <div className="absolute z-20 h-screen lg:h-screen w-full pt-32">
          <div className='text-amber-400 dark:text-lime-400 pb-0'>
            <h1 className='text-center lg:text-xl md:text-xl text-white'>
              Select the driver
            </h1>
            <ItemNameDisplay data={driversList} item_index={selectedDriverIndex} />
          </div>
          <DriverBigCard drivers={driversList} driver_index={selectedDriverIndex} />
          <DriverCharactersList ref={containerRef} drivers={driversList} driver_index={selectedDriverIndex} handleImageHover={handleImageHover} handleImageClick={handleImageClick} />
        </div>
      </div>
    </motion.div>
  )
}

  