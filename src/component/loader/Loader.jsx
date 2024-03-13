import React from 'react'
import { motion } from "framer-motion";

const loadingContainer = {
  width: "4rem",
  height: "4rem",
  display: "flex",
  justifyContent: "space-around",
};

const loadingCircle = {
  display: "block",
  width: "1rem",
  height: "1rem",
  backgroundColor: "#3A36DB",
  borderRadius: "0.5rem",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};

const loadingCircleTransition = {
  duration: 0.9,
  ease: "easeInOut",
  repeatType: 'mirror',
  repeat: 10000000000
};
export const Loader = () => {
  return (
    <div>
      {/* Background overlay */}
      <div className="fixed w-full min-h-screen z-50 bg-white">
        <div className="flex fixed w-full justify-center items-center h-screen">
          <h1 className='text-sm md:text-3xl lg:text-3xl mr-4'>Wait a moment please...</h1><br/>
          {/* Loading animation */}
          <motion.div
            style={loadingContainer}
            variants={loadingContainerVariants}
            initial="start"
            animate="end"
          >
            <motion.span
              style={loadingCircle}
              variants={loadingCircleVariants}
              transition={loadingCircleTransition}
            ></motion.span>
            <motion.span
              style={loadingCircle}
              variants={loadingCircleVariants}
              transition={loadingCircleTransition}
            ></motion.span>
            <motion.span
              style={loadingCircle}
              variants={loadingCircleVariants}
              transition={loadingCircleTransition}
            ></motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
