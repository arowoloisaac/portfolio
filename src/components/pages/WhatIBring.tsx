import { motion } from 'framer-motion';

const data = [
   {
      title: 'Frontend Development',
      text: ' Creating clean, usable interfaces with JavaScript frameworks.',
   },
   {
      title: 'Backend Development',
      text: 'Buidling APIs, and scalable services.',
   },
   {
      title: 'System Analysis',
      text: 'Turning requirements and business needs into clear system designs.',
   },
];

const WhatIBring = () => {
   return (
      <motion.div
         initial={{ opacity: 0, y: -40 }}
         whileInView={{
            opacity: 0.8,
            y: -10,
            transition: { duration: 0.35, ease: 'backIn' },
         }}
         // h-fit xl:h-72 sm:-mt-2.5 2xl:-mt-26
         className="h-fit sm:h-72 md:-mt-46 xl:-mt-0 ">
         <div className="flex justify-center">
            <div className="flex max-sm:flex-col gap-4 max-w-md md:max-w-5xl px-5">
               {data.map((itm, idx) => (
                  <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: idx * 0.35, ease: 'backIn' },
                     }}
                     whileHover={{scale:1.05}}
                     className="dark:border rounded-md basis-1/3 text-center p-3.5 bg-card"
                     key={idx}>
                     <h1 className="text-2xl mb-1 text-primary font-bold">
                        {itm.title}
                     </h1>
                     <span className="text-xl ">{itm.text}</span>
                  </motion.div>
               ))}
            </div>
         </div>
      </motion.div>
   );
};

export default WhatIBring;
