// import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const NewsletterSubscription = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    // we will call out API here to handle.
    console.log(data);
    alert("Subscribed successfully!");
    reset();
  };

  return (
    <div className='w-full bg-gradient-to-r from-secondary to-primary p-8 md:p-16 xl:p-32 h-[50%] relative overflow-hidden'>
      {/* Background bulbs */}
      <div className='absolute inset-0 z-0'>
        <motion.div
          className='w-20 h-20 rounded-full bg-white opacity-20 absolute top-10 left-10'
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className='w-16 h-16 rounded-full bg-white opacity-15 absolute bottom-20 right-20'
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className='w-12 h-12 rounded-full bg-white opacity-10 absolute top-1/2 left-1/4'
          animate={{
            x: [0, 10, 0],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className='sm:max-w-4xl lg:max-w-4xl 2xl:max-w-4xl mx-auto text-center relative z-10'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4'
        >
          Be the first to know when the product is ready.
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col md:flex-row sm:w-1/2 mx-auto justify-center items-stretch gap-4'
        >
          <div className='flex-grow w-full'>
            <input
              type='email'
              placeholder='Enter your email'
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address"
                }
              })}
              className='w-full px-4 py-3 md:px-6 md:py-4 2xl:py-5 rounded-full text-gray-700 2xl:placeholder:text-xl placeholder:text-base focus:outline-none focus:ring-2 '
            />
            {errors.email && (
              <p className='text-red-500 text-sm mt-1 text-left'>
                {errors.email.message}
              </p>
            )}
          </div>
          <div className='sm:w-auto w-full'>
            <button
              type='submit'
              className='bg-secondary md::w-auto w-full text-white sm:text-base md::text-xl font-normal leading-4 py-3 px-6 md:px-6 md:py-4 2xl:py-5 rounded-full hover:bg-secondary/10 hover:border transition duration-300 ease-in-out disabled:opacity-50'
            >
              Submit
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
