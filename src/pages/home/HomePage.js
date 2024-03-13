import React from 'react'
import { motion } from "framer-motion";
import { Hero } from '../../component/Hero';
import { ExperienceStarWarComponent } from '../../component/experience/ExperienceStarWars';
import { Skills } from '../../component/skills/Skills';
import { Footer } from '../../component/footer/Footer';

const routeVariants = {
  initial: {
      x: '200%',
      transition: {
        type: "spring",
        mass: 0.4,
      },
  },
  final: {
      x: '0'
  }
}

export const HomePage = () => {

  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <div className='bg-gradient-to-r from-indigo-200 via-purple-200 to-teal-300 max-h-auto dark:from-lime-200 dark:via-gray-600 dark:to-gray-600'>
        <Hero />
      </div>
        
      <div>
        <Skills />
        <ExperienceStarWarComponent />
      </div>

      <Footer />
    </motion.div>
  )
}
