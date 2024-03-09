import React, { forwardRef, useRef } from "react";

export const ItemSelectorHScroll = forwardRef(({ dataList, idx, handleImageClick, handleImageHover }, ref) => {
  const datRef = useRef(null);

  const handleMouseMove = (event) => {
    const rect = datRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;

    // Calculate the width of the corner area (e.g., 50 pixels)
    const cornerWidth = 50;

    // Check if the mouse is in the left or right corner
    const isLeftCorner = x <= cornerWidth;
    const isRightCorner = x >= rect.width - cornerWidth;

    if (isLeftCorner) {
      console.log("Mouse is in the left corner", ref);
      ref.current.scrollTo({
        top: 0,
        left: -300,
        behavior: "smooth",
      });
    } else if (isRightCorner) {
      console.log("Mouse is in the right corner");
      ref.current.scrollTo({
        top: 0,
        left: ref.current.scrollLeft + 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div
        ref={(el) => {
          datRef.current = el;
          if (ref) {
            ref.current = el;
          }
        }}
        className='flex items-center text-slate-400 dark:text-slate-50 overflow-x-auto bg-gray-300 dark:bg-gray-700 py-8 my-16 lg:my-16 bg-opacity-60 dark:bg-opacity-60'
        onMouseMove={handleMouseMove}
      >
        {dataList.map((data, key) => (
          <>
            <img
              key={data.id}
              src={data.image_src}
              alt={data.name}
              className={`shrink-0 w-28 h-28 md:w-44 md:h-52 lg:w-60 lg:h-52 bg-white rounded-lg mx-2 hover:border-red-500 border-4 dark:bg-gray-400 dark:hover:border-lime-400 cursor-pointer hover:scale-125 ease-out duration-300 ${idx === key ? 'scale-125 border-red-500 mx-8' : 'border-gray-700'}`}
              onMouseOver={() => handleImageHover(key)}
              onClick={handleImageClick}
              data-tooltip-target="tooltip-default"
            />
            {/* <div className="shrink-0 transition-all rounded bg-gray-800 p-2 text-xs text-white mt-8 text-center">{data.name}</div> */}
          </>
        ))}
      </div>
    </>
  );
});
