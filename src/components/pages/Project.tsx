'use client';

import { MyCardFunc } from './MyCard';

const Project = () => {
   return (
      <section className="max-w-6xl min-h-screen mx-auto my-8 md:my-20 px-4">
         <h2 className="text-3xl lg:text-5xl font-bold mb-2 dark:text-white">
            My Projects
         </h2>
         <p className="mb-6  dark:text-gray-300 text-sm sm:text-lg">
            Welcome to my project page. Here you will find a summary of my work,
            including timelines and documentation.
         </p>

         <div className="p-3  backdrop-blur-xs backdrop-grayscale  border-2 rounded-md mb-2.5 card">
            <span className="text-md dark:text-gray-300 ">
               Over the years have worked on multiple projects, which includes
               freelancing projects mostly covered with NDA, personal projects,
               and collaborated with teams on several occassions to deliver
               quality software solutions.
            </span>
         </div>
         <MyCardFunc />
      </section>
   );
};

export default Project;
