
"use client";

import React, { useState } from "react";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import { motion, AnimatePresence } from "framer-motion";

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 300 : -300,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {

        return {
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0
        };
    }
};




const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Carousel = (props)=>{
    const [[page, direction], setPage] = useState([0, 0]);


    const paginate = (newDirection) => {
        // let newPage = 0;

        const newPage = page + newDirection > props.children.length-1 || page + newDirection < 0 ? 0 : page + newDirection 
        
      setPage([newPage, newDirection]);
    };
  
    return (
      <div className="containerOfCarousel w-full h-full md:w-10/12 md:h-52 lg:h-80 xl:w-3/6  lg:w-auto  md:m-auto  flex  relative  overflow-hidden">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
          className=" w-full mx-10 text-black relative "
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
  
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >{props.children[page]}</motion.div>
        </AnimatePresence>

        {page !== props.children.length && <ArrowRightCircleIcon className="w-10 h-10  absolute right-0 top-1/2 z-10"onClick={()=> paginate(1)} />}
        {page !== 0 && <ArrowLeftCircleIcon className="left-0 w-10 h-10 absolute top-1/2 z-10" onClick={()=> paginate(-1)} />}


      </div>
    );
}

export default Carousel;

