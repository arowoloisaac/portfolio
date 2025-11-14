import { motion } from "motion/react";
import Skills from "./Skills";

const About = () => {
  return (
    <section className="max-w-5xl mx-auto pt-20 px-4">
      <div className="mb-4 text-gray-400 text-sm">
        <h2 className="text-2xl font-bold mb-4 tracking-wide">
          WHO AM I?
        </h2>
      </div>
      <hr className="mb-8 border-gray-700" />
      <div className="flex flex-col md:flex-row items-start md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-[55%] w-full mb-6 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm Arowolo Isaac.
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="md:w-[45%] w-full md:pl-8"
        >
          <div className="rounded-xl shadow p-6">
            <p className="mb-4 text-lg">
              Let me duly introduce myself to you, My name is Arowolo Isaac
              Abiodun and I am a graduate of the Tomsk State University where I
              studied Software Engineering and gained most of my experience as a
              software engineer.
            </p>
            <p className="text-lg">
              Acquiring this knowledge does not suffice what I have attained,
              but I have applied them on multiple occasions at different scopes
              from planning to deployment over the course of 4 years, both
              collaboratively and independently, where I have proven myself as a
              learner and a leader.
            </p>
          </div>
        </motion.div>
      </div>
      {/* expertise */}
      <Skills />
    </section>
  );
};

export default About;
