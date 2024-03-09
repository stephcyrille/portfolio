import React, { useRef, useState } from 'react'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

import { DriverBigCard } from '../components/DriverBigCard';
import { DriverNameDisplay } from '../components/DriverNameDisplay';
import { DriverCharactersList } from '../components/DriverCharactersList';
import { drivers } from '../data/drivers';

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

  const handleImageHover = (index) => {
    setSelectedDriverIndex(index);
  };
  
  const handleImageClick = (index) => {
    navigate("/projects/f1-predictor/select-constructor");
  };


  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
    >

      <div className='bg-gradient-to-r from-indigo-100 via-purple-100 to-teal-100 h-screen dark:from-lime-200 dark:via-gray-600 dark:to-gray-600 pt-36'>
        <DriverNameDisplay drivers={drivers} driver_index={selectedDriverIndex} />
        <DriverBigCard drivers={drivers} driver_index={selectedDriverIndex} />
        <DriverCharactersList ref={containerRef} drivers={drivers} driver_index={selectedDriverIndex} handleImageHover={handleImageHover} handleImageClick={handleImageClick} />
      </div>
    </motion.div>
  )
}

  