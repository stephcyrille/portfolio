import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { Loader } from '../../../component/loader/Loader';
import { drivers } from '../data/drivers';
import { races } from '../data/circuits';

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
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(()=>{
    setTimeout(
      () => setLoading(false), 
      3000
    );
  }, [loading])

  const handleBackClick = (index) => {
    navigate("/projects/f1-predictor/select-driver");
  };

  return (
    <>
     {loading ? <Loader /> :
        <motion.div
          variants={routeVariants}
          initial="initial"
          animate="final"
        >
          <div className="relative mix-blend-overlay">
            <img src={drivers[selectedDriverIndex].team} alt="BannerImage" className="absolute h-screen lg:h-screen w-full object-cover object-right z-10" />
            <div className="absolute z-20 bg-gradient-to-r from-gray-900 via-gray-600 to-red-300 dark:from-gray-900 dark:via-lime-800 dark:to-gray-900 h-screen lg:h-screen w-full opacity-60" />
            <div className="absolute z-20 h-screen lg:h-screen w-full pt-24 md:pt-32 lg:pt-32">
              <button
                onClick={handleBackClick}
                className="bg-transparent text-red-100 dark:border-lime-600 dark:hover:bg-lime-600 hover:text-white hover:bg-red-600 dark:hover:text-blue-100 dark:text-lime-300 py-2 px-4 rounded-full 
                focus:outline-none transition duration-200 mb-8 lg:mb-0 md:mb-0 hover:shadow-xl lg:ml-12 hover:-translate-x-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>

                Restart
              </button>

              <div className='flex flex-col items-center'>
                <img
                src={drivers[selectedDriverIndex].image_src}
                alt={`Driver main`}
                className={`w-60 h-60 lg:w-96 lg:h-96 rounded-full mb-8 border-red-500 dark:border-lime-500 border-x-4 border-spacing-10 mr-8`} />
                <h1 className='text-4xl md:text-7xl lg:text-7xl font-face-gm text-yellow-400 drop-shadow-[0_1.2px_1.2px_rgba(250,0,0,0.8)] dark:text-white'>{drivers[selectedDriverIndex].name}</h1>
                <div className='text-5xl md:text-9xl lg:text-9xl mb-10 text-red-500 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-face-gm dark:text-lime-400'>#5</div>

                <div className='p-8 rounded-3xl text-gray-100 font-face-gm text-center bg-red-600 bg-opacity-5 dark:text-00 dark:bg-lime-500 dark:bg-opacity-5'>
                  <h1 className='text-xl md:text-4xl lg:text-4xl mb-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Position predicted: <span className='font-bold'>5</span></h1>
                  <h1 className='text-sm md:text-3xl lg:text-3xl mb-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Circuit name: <span className=''>{races[selectedDriverIndex].name}</span></h1>

                  <p className='text-xs md:text-sm lg:text-sm italic drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'><span className='underline'>Important: </span>The winning probability is around 30% with margin estimated to +/- 6 rank positions</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>}
    </>
  )
}
