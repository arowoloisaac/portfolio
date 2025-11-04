"use client";
import { motion } from "motion/react";
import {
  first_circle_style,
  second_circle_style,
  third_circle_style,
} from "../animations";

const Home = () => {
  const my_image = "/src/assets/images/passport.jpg";
  return (
    <>
      {first_circle_style()}
      {second_circle_style()}
      {third_circle_style()}

      <section
        className="min-h-screen relative flex flex-col md:flex-row items-center justify-center pt-28 px-4 bg-cover bg-center transition-all duration-700"
        style={{ paddingLeft: "40px" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 w-full text-center md:text-left mb-8 md:mb-0"
        >
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">Full-stack Developer</h1>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
            Hi, I’m Arowolo Isaac. I build modern web experiences and creative
            solutions.
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
