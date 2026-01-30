import { motion } from 'motion/react';
import Skills from './Skills';
import { EncryptedText } from '../ui/encrypted-text';

const About = () => {
   // initial={{opacity:0.1}} whileInView={{opacity:0.95}}
   return (
      <motion.section className="relative max-w-6xl mx-auto py-20 px-4 min-h-screen">
         <div className="mb-4">
            <h2 className="text-5xl font-bold mb-4 tracking-wide ">
               WHO AM I?
            </h2>
         </div>
         <hr className="mb-8 " />
         <div className="h-screen flex flex-col md:flex-row items-start md:items-center">
            <motion.div
               initial={{ opacity: 0, x: -40 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.7 }}
               className="md:w-[50%] w-full mb-6 md:mb-0">
               <EncryptedText
                  text="Welcome, My name is Arowolo Isaac."
                  className="text-3xl md:text-5xl font-bold capitalize "
                  encryptedClassName="text-neutral-500"
                  revealedClassName=""
                  revealDelayMs={30}
               />
            </motion.div>
            <motion.div
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1.2 }}
               className="md:w-[50%] w-full md:pl-8">
               <div className="rounded-lg shadow px-8 py-7 font-light card sm:text-xl">
                  <motion.p
                     initial={{ x: 60, y: 20, opacity: 0.2 }}
                     whileInView={{
                        opacity: 0.9,
                        x: 0,
                        y: 0,
                        transition: { duration: 0.8, ease: 'easeOut' },
                     }}
                     className="mb-4">
                     Let me duly introduce myself to you, My name is Arowolo
                     Isaac Abiodun and I am a graduate of the Tomsk State
                     University where I studied Software Engineering and gained
                     most of my experience as a software engineer.
                  </motion.p>
                  <motion.p
                     initial={{ x: -60, y: 20, opacity: 0.1 }}
                     whileInView={{
                        opacity: 0.9,
                        x: 0,
                        y: 0,
                        transition: { duration: 0.8, ease: 'easeIn' },
                     }}>
                     Acquiring this knowledge does not suffice what I have
                     attained, but I have applied them on multiple occasions at
                     different scopes from planning to deployment over the
                     course of 4 years, both collaboratively and independently,
                     where I have proven myself as a learner and a leader.
                  </motion.p>
               </div>
            </motion.div>
         </div>
         {/* expertise */}
         <Skills />
      </motion.section>
   );
};

export default About;
