"use client";
import { motion } from "motion/react";
import {
  first_circle_style,
  second_circle_style,
  third_circle_style,
} from "../animations";
import useRole  from "../sub-function/role";

const Home = () => {
  const my_image = "/src/assets/images/passport.jpg";
  const {roleIndex, displayedRole} = useRole();

  return (
    <>
      {first_circle_style()}
      {second_circle_style()}
      {third_circle_style()}

      <section
        className="min-h-screen relative flex flex-col md:flex-row items-center justify-center pt-4 px-4 bg-cover bg-center transition-all duration-700"
        style={{ paddingLeft: "30px" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 w-full text-center md:text-left mb-8 md:mb-0 lg:pl-16"
        >
          <div className="flex flex-col gap-8 lg:flex-row items-center">
            <h4 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Software Engineer
            </h4>

            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-lg font-medium text-gray-700 dark:text-gray-300"
            >
              {displayedRole}
              <span className="inline-block w-1 h-5 align-middle bg-gray-700 dark:bg-gray-300 ml-1 animate-pulse" />
            </motion.span>
          </div>

          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
            Hi, I’m Arowolo Isaac. A Software Engineer who sees between the
            lines and understand the stance of giving the best experience
            regardless of the situation.
          </p>
          <a
            href="#projects"
            className="bg-purple-600 hover:bg-purple-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition"
          >
            View My Projects
          </a>
        </motion.div>
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 4 }}
          className="md:w-1/2 w-full flex justify-center"
        >
          <img
            src={my_image}
            alt="Profile"
            className="w-64 h-72 rounded-2xl shadow-xl object-cover"
          />
        </motion.div>
      </section>
    </>
  );
};

export default Home;
