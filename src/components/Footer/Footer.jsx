// import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";
import HeroImage from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className='rounded-t-3xl'>
      <div className='bg-[#2e7cf12d]'>
        <div className='container'>
          <div className='grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-black'>
            {/* brand info section */}
            <div className='py-8 px-4 space-y-4'>
              <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                <motion.img
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                  src={HeroImage}
                  alt=''
                  className='w-[120px] lg:w-[200px]'
                />
              </div>
              <p>
                Revolutionizing academic examinations with secure, efficient,
                and transparent digital management.
              </p>
              <div className='flex items-center justify-start gap-5 !mt-6'>
                <a href='#' className='hover:text-secondary duration-200'>
                  <HiLocationMarker className='text-3xl' />
                </a>
                <a href='#' className='hover:text-secondary duration-200'>
                  <FaInstagram className='text-3xl' />
                </a>
                <a href='#' className='hover:text-secondary duration-200'>
                  <FaFacebook className='text-3xl' />
                </a>
                <a href='#' className='hover:text-secondary duration-200'>
                  <FaLinkedin className='text-3xl' />
                </a>
              </div>
            </div>
            {/* Footer Links  */}
            <div className='grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14'>
              <div className='py-8 px-4'>
                <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>
                  Student Portal
                </h1>
                <ul className='flex flex-col gap-3'>
                  <li>
                    <a href='#' className='hover:text-secondary duration-200'>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:text-secondary duration-200'>
                      Digital Booklet
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:text-secondary duration-200'>
                      View Report
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:text-secondary duration-200'>
                      Login
                    </a>
                  </li>
                </ul>
              </div>
              <div className='py-8 px-4'>
                <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>
                  Teachers Portal
                </h1>
                <ul className='flex flex-col gap-3'>
                  <li>
                    <a href='#' className='hover:text-secondary duration-200'>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:text-secondary duration-200'>
                      Compose Exam
                    </a>
                  </li>

                  <li>
                    <a href='#' className='hover:text-secondary duration-200'>
                      Login
                    </a>
                  </li>
                </ul>
              </div>
              <div className='py-8 px-4'>
                <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>
                  Contact Us
                </h1>
                <ul className='flex flex-col gap-3'>
                  <li>
                    <a href='#' className='hover:text-secondary duration-200'>
                      Kimihurura
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:text-secondary duration-200'>
                      +250 70000000
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* copyright section  */}
          <div className='mt-8'>
            <div className='text-center py-6 border-t-2 border-gray-800/10'>
              <span className='text-sm text-black/60'>
                {" "}
                @copyright 2024 University of Kigali
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
