import React from "react";
import { NavbarMenu } from "../../mockData/data.js";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import HeroImg from "../../assets/logo.svg";
import ResponsiveMenu from "./ResponsiveMenu.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='bg-[#2e7cf12d]'
      >
        <div className='container flex justify-between items-center  py-6'>
          {/* Logo section */}
          <div className='flex items-center gap-2'>
            <motion.img
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={HeroImg}
              alt=''
              className='w-[120px] lg:w-[200px]'
            />
          </div>

          {/* Menu section */}
          <div className='hidden lg:block'>
            <ul className='flex items-center gap-6'>
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className='inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold'
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* CTA Button section */}
          <div className='hidden lg:block space-x-6'>
            <button className='text-white bg-secondary font-semibold rounded-full px-6 py-2 '>
              Take Your Exam
            </button>
          </div>
          {/* Mobile Hamburger Menu */}
          <div className='lg:hidden' onClick={() => setIsOpen(!isOpen)}>
            <MdMenu className='text-4xl' />
          </div>
        </div>
      </motion.div>

      {/* mobile Sidebar section */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
