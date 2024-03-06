import React, { useRef, useState } from 'react'
// import styles from './predictor.module.css';
// import logoF1 from '../../assets/images/predictor/F1_logo.png'
import driver_1 from '../../assets/images/predictor/drivers/albon.avif'
import driver_2 from '../../assets/images/predictor/drivers/alonso.avif'
import driver_3 from '../../assets/images/predictor/drivers/bottas.avif'
import driver_4 from '../../assets/images/predictor/drivers/checo.avif'
import driver_5 from '../../assets/images/predictor/drivers/gasly.avif'
import driver_6 from '../../assets/images/predictor/drivers/leclerc.avif'
import driver_7 from '../../assets/images/predictor/drivers/lewis.avif'
import driver_8 from '../../assets/images/predictor/drivers/magnussen.avif'
import driver_9 from '../../assets/images/predictor/drivers/max.avif'
import driver_10 from '../../assets/images/predictor/drivers/nico.avif'
import driver_11 from '../../assets/images/predictor/drivers/norris.avif'
import driver_12 from '../../assets/images/predictor/drivers/ocon.avif'
import driver_13 from '../../assets/images/predictor/drivers/piastri.avif'
import driver_14 from '../../assets/images/predictor/drivers/russell.avif'
import driver_15 from '../../assets/images/predictor/drivers/sainz.avif'
import driver_16 from '../../assets/images/predictor/drivers/sargeant.avif'
import driver_17 from '../../assets/images/predictor/drivers/stroll.avif'
import driver_18 from '../../assets/images/predictor/drivers/tsunoda.avif'
import driver_19 from '../../assets/images/predictor/drivers/zhou.avif'


export const PredictorPage = (props) => {
  const drivers = [driver_1, driver_2, driver_3, driver_4, driver_5, driver_6, driver_7, driver_8, driver_9, driver_10, driver_11, driver_12, driver_13, driver_14, driver_15, driver_16, driver_17, driver_18, driver_19];
  const drivers_name = ['Alex Albon', 'Fernando Alonso', 'Valteri Bottas', 'Sergio Pérez', 'Pierre Gasly', 'Charles Leclerc', 'Lewis Hamilton', 'Kevin Magnussen', 'Max Verstapen', 'Nico Hulkenberg', 'Lando Norris', 'Esteban Ocon', 'Oscar Piastri', 'Georges Russell', 'Carlos Sainz', 'Logan Sargeant', 'Lance Stroll', 'Yuki Tsunoda', 'Guannuy Zhou']

  const containerRef = useRef(null);
  const [selectedDriverIndex, setSelectedDriverIndex] = useState(0);

  const handleImageClick = (index) => {

    setSelectedDriverIndex(index);
  };


  return (
    <div className='bg-gradient-to-r from-indigo-100 via-purple-100 to-teal-100 h-screen dark:from-lime-200 dark:via-gray-600 dark:to-gray-600 pt-36'>
        <div className='text-gray-900 dark:text-slate-50 pb-10'>
          <h1 className='text-center lg:text-xl md:text-xl'>
            Select the driver
          </h1>
          {drivers_name.map((driver, index) => (
            <h1 key={`driver_${index}`} className={`drop-shadow-2xl absolute right-0 left-0 text-center text-5xl lg:text-7xl md:text-7xl mt-0 transition-opacity duration-300 ease-in-out ${selectedDriverIndex === index ? 'opacity-100 translate-y-0 transition-transform' : 'opacity-0 translate-y-10' }`}>
              {driver}
            </h1>
          ))}
          
        </div>

        <div className="h-72 mt-16 md:h-96 md:mt-20 lg:h-96 flex lg:mt-20">
          {drivers.map((driver, index) => (
            <>
              <img
                key={`2_driver_${index}`}
                src={driver}
                alt={`Driver main`}
                className={`absolute right-0 left-0 w-72 h-72 lg:w-96 lg:h-96 rounded-full mb-8 mx-auto border-red-500 dark:border-lime-500 border-x-4 border-spacing-10 transition-opacity duration-300 ease-in-out ${selectedDriverIndex === index ? 'opacity-100 translate-y-0 transition-transform' : 'opacity-0 translate-y-10' }`}
              />
            </>
            ))}
        </div>

        <div 
          ref={containerRef} 
          className='flex items-center text-slate-400 dark:text-slate-50 overflow-x-auto bg-slate-500 py-8 my-16 lg:my-16'
        >
        {drivers.map((driver, index) => (
          <img
            key={`3_driver_${index}`}
            src={driver}
            alt={`Driver ${index + 1}`}
            className={`w-28 h-28 md:w-44 md:h-44 lg:w-44 lg:h-44 rounded-full mx-2 hover:border-lime-400 border-4 cursor-pointer hover:scale-125 ease-out duration-300 ${selectedDriverIndex === index && 'scale-125 border-lime-400 mx-6'}`}
            onMouseOver={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  )
}