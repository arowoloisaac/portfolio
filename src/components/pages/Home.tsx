'use client';
import { motion } from 'motion/react';
// import UseTime from "../animations/cube";
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
               whileInView={{ opacity: 1, transition: { duration: 1, ease:'easeIn' } }}
               className=" h-screen justify-center md:h-120 lg:h-150 xl:min-h-screen flex flex-col sm:flex-row items-center px-5 md:px-3">
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
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 4 }}
                  //   max-sm:hidden
                  className="md:w-[32%] w-full flex justify-center ">
                  <img
                     src={my_image}
                     alt="Profile"
                     className="w-64 h-72 rounded-xl shadow-xl object-cover"
                     loading="lazy"
                  />
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
