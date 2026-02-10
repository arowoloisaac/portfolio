'use client';
import { motion } from 'motion/react';
// import { TbBrandCSharp } from 'react-icons/tb';
// import { FaPython, FaReact } from 'react-icons/fa';
// import { SiDotnet } from 'react-icons/si';
import useRole from '@/components/functions/role';
import my_image from '@/assets/images/passport.jpg';
import { NavLink } from 'react-router';
import WhatIBring from './WhatIBring';
import FeaturedProject from './FeaturedProject';
import CTA from './CTA';

const Home = () => {
   const { roleIndex, displayedRole } = useRole();

   return (
      <>
         {/* min-h-screen flex flex-col max-md:py-0 max-lg:py-8 lg:flex-row items-center justify-center px-4 bg-cover bg-center */}
         <section className="flex justify-center w-full">
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{
                  opacity: 1,
                  transition: { duration: 1, ease: 'easeIn' },
               }}
               // md:h-120 lg:h-150
               className=" h-screen justify-center md:-mt-46 xl:-mt-0 xl:min-h-screen flex flex-col sm:flex-row items-center px-5 md:px-3">
               {' '}
               <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className=" lg:w-[68%] w-full max-lg:max-w-xl text-center md:text-left mb-8 lg:mb-0 ">
                  <div className="flex flex-col min-md:gap-4 min-lg:flex-row max-sm:items-center lg:items-center">
                     <span className="text-2xl font-bold mb-0 lg:text-4xl 2xl:text-5xl lg:mb-4">
                        Software Engineer
                     </span>

                     <motion.span
                        key={roleIndex}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-lg font-medium ">
                        {displayedRole}
                        <span className="inline-block w-0.5 h-4 align-middle bg-gray-700 dark:bg-gray-300 ml-1 animate-pulse" />
                     </motion.span>
                  </div>

                  <p className="text-lg md:text-2xl mb-8 text-pretty">
                     I design, analyze, and build software systems using
                     frameworks, and modern tools.
                  </p>
                  <div className="flex max-sm:flex-col gap-2 max-sm:items-center">
                     {' '}
                     <NavLink
                        to="projects"
                        className="button w-xs sm:w-fit sm:text-lg font-semibold py-3 px-8 rounded-md ">
                        View My Projects
                     </NavLink>{' '}
                     <NavLink
                        to="/contact"
                        className="w-xs sm:w-fit font-semibold sm:text-lg py-3 px-8 rounded-md bg-secondary text-secondary-foreground">
                        Send a Message
                     </NavLink>
                  </div>
               </motion.div>
               {/* Image Column */}
               <motion.div
                  //   max-sm:hidden
                  className="relative md:w-[32%] w-full flex justify-center ">
                  <motion.img
                     animate={{
                        scaleY: 1.11,
                        scaleX: [1.02, 1.05, 1.02],
                     }}
                     transition={{
                        scaleY: {
                           duration: 5,
                           repeat: Infinity,
                           ease: 'easeInOut',
                        },
                        scaleX: {
                           duration: 4,
                           repeat: Infinity,
                           ease: 'easeInOut',
                        },
                     }}
                     whileInView={{ opacity: 1, x: 0 }} 
                     initial={{ opacity: 0, x: 40 }}
                     whileHover={{ scale: 1.3 }}
                     src={my_image}
                     alt="Profile"
                     className="w-64 h-72 rounded-xl shadow-xl object-cover"
                     loading="lazy"
                  />
                  {/* <div className="relative w-68 h-74">
                     <img
                        src={my_image}
                        alt="Profile"
                        className="w-64 h-72 rounded-xl shadow-xl object-cover"
                        loading="lazy"
                     />
                     <TbBrandCSharp className="size-12 absolute bg-transparent -top-0 -right-4  p-1.5 " />
                     <SiDotnet className="size-12 absolute bg-transparent top-15 -right-4  p-1.5 " />
                     <motion.div animate={{ rotate: [0, 0, 0.0004]}} transition={{duration:1, repeat:Infinity}}>
                        <FaReact className="size-12 absolute bg-transparent top-30 -right-4  p-1.5 animate-spin duration-1000 transition-all" />
                     </motion.div>

                     <FaPython className="size-12 absolute bottom-15 -right-4  p-1.5  transition-all" />
                  </div>*/}
               </motion.div>
            </motion.div>
         </section>
         <WhatIBring />
         <FeaturedProject />
         <CTA />
         {/* put some projects here */}
         {/* put the contact deail here */}
      </>
   );
};

export default Home;
