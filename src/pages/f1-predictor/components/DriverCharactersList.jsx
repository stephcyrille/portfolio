import React, { forwardRef } from "react";

export const DriverCharactersList = forwardRef(({drivers, driver_index, handleImageClick}, ref) => {

  return <div
    ref={ref}
    className='flex items-center text-slate-400 dark:text-slate-50 overflow-x-auto bg-slate-500 py-8 my-16 lg:my-16'
  >
    {drivers.map((driver, index) => (
      <img
        key={driver.id}
        src={driver.image_src}
        alt={driver.name}
        className={`w-28 h-28 md:w-44 md:h-44 lg:w-44 lg:h-44 rounded-full mx-2 hover:border-lime-400 border-4 cursor-pointer hover:scale-125 ease-out duration-300 ${driver_index === index && 'scale-125 border-lime-400 mx-6'}`}
        onMouseOver={() => handleImageClick(index)} />
    ))}
  </div>;
})