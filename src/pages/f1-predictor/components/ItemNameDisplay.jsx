import React from "react";

export const ItemNameDisplay = ({data, item_index, textSize='text-7xl'}) => {
  
  return (
    <div className='pb-10'>
      {data.map((item, index) => (
        <h1 key={item.id} className={`drop-shadow-2xl absolute right-0 left-0 text-center text-5xl lg:${textSize} md:${textSize} mt-0 transition-opacity duration-300 ease-in-out ${item_index === index ? 'opacity-100 translate-y-0 transition-transform' : 'opacity-0 translate-y-10'}`}>
          {item.name}
        </h1>
      ))}
    </div>
  );
}