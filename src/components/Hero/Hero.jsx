// eslint-disable-next-line no-unused-vars
import React from "react";
import HeroImg from "../../assets/hero_image.svg";
import { motion } from "framer-motion";
import { SlideRight } from "../../utility/animation";

const Hero = () => {
  return (
    <>
      <div className='container grid grid-cols-1   md:grid-cols-2 min-h-[650px] relative'>
        {/* brand info */}
        <div className='flex flex-col justify-center py-14 md:pr-8 xl:pr-20 md:py-0'>
          <div className='text-center md:text-left space-y-6  w-full'>
            <motion.h1
              variants={SlideRight(0.6)}
              initial='hidden'
              animate='visible'
              className='text-5xl font-semibold lg:text-6xl !leading-tight'
            >
              Smart Assets Management{" "}
              <span className='text-primary'>System</span>
            </motion.h1>
            <motion.p
              variants={SlideRight(0.8)}
              initial='hidden'
              animate='visible'
            >
              For academic examination.
            </motion.p>
            {/* button section */}
            <motion.div
              variants={SlideRight(1.0)}
              initial='hidden'
              animate='visible'
              className='flex gap-8 justify-center md:justify-start !mt-8 items-center'
            >
              <button className='primary-btn'>Get Started</button>
            </motion.div>
          </div>
        </div>
        {/* Hero image */}
        <div className='flex justify-center items-end '>
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src={HeroImg}
            alt=''
            className='w-[350px] md:w-[550px] xl:w-[800px]'
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
