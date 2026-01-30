"use client";
import { motion } from "motion/react";
// import UseTime from "../animations/cube";
import useRole from "@/components/functions/role";
import my_image from "@/assets/images/passport.jpg";
import { PixelatedCanvas } from "../ui/pixelated-canvas";


const Home = () => {
  const { roleIndex, displayedRole } = useRole();

  return (
     <>
        {/* <div className="pointer-events-none max-md:hidden">
        <UseTime />
      </div> */}
        <section className="relative  min-h-screen flex flex-col lg:flex-row items-center justify-center  px-4 bg-cover bg-center transition-all duration-700">
           <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 w-full max-lg:max-w-xl text-center md:text-left mb-8 lg:mb-0 lg:pl-16">
              <div className="flex flex-col min-[768px]:gap-5 min-[1024px]:flex-row max-sm:items-center lg:items-center">
                 <span className="text-2xl font-bold mb-0 lg:text-4xl lg:mb-4">
                    Software Engineer
                 </span>

                 <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg font-medium">
                    {displayedRole}
                    <span className="inline-block w-1 h-5 align-middle bg-gray-700 dark:bg-gray-300 ml-1 animate-pulse" />
                 </motion.span>
              </div>

              <p className="text-xl mb-8 ">
                 Hi, I’m Arowolo Isaac. A Software Engineer who sees between the
                 lines and understand the stance of giving the best experience
                 regardless of the situation.
              </p>
              <div className="flex max-sm:flex-col gap-2">
                 {' '}
                 <a
                    href="projects"
                    className="button font-semibold py-3 px-8 rounded-md shadow-lg ">
                    View My Projects
                 </a>{' '}
                 <a
                    href="projects"
                    className="  font-semibold py-3 px-8 rounded-md shadow-lg transition">
                    Send a Message
                 </a>
              </div>
           </motion.div>
           {/* Image Column */}
           <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 4 }}
              className="md:w-1/2 w-full flex justify-center max-sm:hidden">
              <PixelatedCanvas
                 src={my_image}
                 width={400}
                 height={500}
                 cellSize={1}
                 dotScale={0.8}
                 shape="square"
                 backgroundColor="#000000"
                 dropoutStrength={0.1}
                 interactive
                 distortionStrength={3}
                 distortionRadius={80}
                 distortionMode="swirl"
                 followSpeed={0.6}
                 jitterStrength={4}
                 jitterSpeed={4}
                 sampleAverage
                 tintColor="#FFFFFF"
                 tintStrength={0.2}
                 className="rounded-xl border border-neutral-800 shadow-lg"
              />
              {/* <img
                 src={my_image}
                 alt="Profile"
                 className="w-64 h-72 md:w-120 md:h-fit rounded-xl shadow-xl object-cover"
                 loading="lazy"
              /> */}
           </motion.div>
        </section>
     </>
  );
};

export default Home;
