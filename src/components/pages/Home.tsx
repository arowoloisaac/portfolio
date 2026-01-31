"use client";
import { motion } from "motion/react";
// import UseTime from "../animations/cube";
import useRole from "@/components/functions/role";
import my_image from "@/assets/images/passport.jpg";
import { NavLink } from "react-router";


const Home = () => {
  const { roleIndex, displayedRole } = useRole();

  return (
     <>
        {/* <div className="pointer-events-none max-md:hidden">
        <UseTime />
      </div> */}
        <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 bg-cover bg-center transition-all duration-700">
           <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="lg:w-2/3 w-full max-lg:max-w-xl text-center md:text-left mb-8 lg:mb-0 lg:pl-16">
              <div className="flex flex-col min-[768px]:gap-5 min-[1024px]:flex-row max-sm:items-center lg:items-center">
                 <span className="text-2xl font-bold mb-0 lg:text-4xl 2xl:text-5xl lg:mb-4">
                    Software Developer
                 </span>

                 <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg font-medium ">
                    {displayedRole}
                    <span className="inline-block w-1 h-5 align-middle bg-gray-700 dark:bg-gray-300 ml-1 animate-pulse" />
                 </motion.span>
              </div>

              <p className="text-xl mb-8 ">
                 Hi There, My Name is Arowolo Isaac. A Software Developer and Analyst who sees between the
                 lines and understand the stance of giving the best experience
                 regardless of the situation.
              </p>
              <div className="flex max-sm:flex-col gap-2">
                 {' '}
                 <NavLink
                    to="projects"
                    
                    className="button font-semibold py-3 px-8 rounded-md ">
                    View My Projects
                 </NavLink>{' '}
                 <NavLink
                    to="/contact"
                    className=" font-semibold py-3 px-8 rounded-md bg-secondary text-secondary-foreground">
                    Send a Message
                 </NavLink>
              </div>
           </motion.div>
           {/* Image Column */}
           <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 4 }}
              className="md:w-1/2 w-full flex justify-center max-sm:hidden">
              <img
                 src={my_image}
                 alt="Profile"
                 className="w-64 h-72 rounded-xl shadow-xl object-cover"
                 loading="lazy"
              />
           </motion.div>
        </section>
     </>
  );
};

export default Home;
