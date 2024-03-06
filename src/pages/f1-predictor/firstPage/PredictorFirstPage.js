import React, { useRef, useState } from 'react'
import { motion } from "framer-motion";

import { DriverBigCard } from '../components/DriverBigCard';
import { DriverNameDisplay } from '../components/DriverNameDisplay';
import { DriverCharactersList } from '../components/DriverCharactersList';
import { drivers } from '../data/drivers';

const routeVariants = {
  initial: {
      x: '-100%'
  },
  final: {
      x: '0'
  }
}



export const PredictorFirstPage = (props) => {

  const containerRef = useRef(null);
  const [selectedDriverIndex, setSelectedDriverIndex] = useState(0);

  const handleImageClick = (index) => {

    setSelectedDriverIndex(index);
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
        <DriverCharactersList ref={containerRef} drivers={drivers} driver_index={selectedDriverIndex} handleImageClick={handleImageClick} />
      </div>
    </motion.div>
  )
}

  