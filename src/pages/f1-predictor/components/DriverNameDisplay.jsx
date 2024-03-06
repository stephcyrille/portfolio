import React from "react";

export const DriverNameDisplay = ({drivers, driver_index}) => {
  
  return (
    <div className='text-gray-900 dark:text-slate-50 pb-10'>
      <h1 className='text-center lg:text-xl md:text-xl'>
        Select the driver
      </h1>
      {drivers.map((driver, index) => (
        <h1 key={driver.id} className={`drop-shadow-2xl absolute right-0 left-0 text-center text-5xl lg:text-7xl md:text-7xl mt-0 transition-opacity duration-300 ease-in-out ${driver_index === index ? 'opacity-100 translate-y-0 transition-transform' : 'opacity-0 translate-y-10'}`}>
          {driver.name}
        </h1>
      ))}

    </div>
  );
}