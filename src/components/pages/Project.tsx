'use client';
import { Button } from '../ui/button';
import CTA from './CTA';
import { MyCardFunc } from './MyCard';
import { FaChevronDown } from 'react-icons/fa';

const Project = () => {
   return (
      <section className="max-w-5xl min-h-screen mx-auto px-4 ">
         <div className="h-screen flex flex-col items-center justify-center gap-3 text-center">
            {' '}
            <h2 className="text-3xl lg:text-5xl capitalize font-bold mb-2 ">
               I build systems, not just software apps.
            </h2>
            <p className="mb-6 text-base sm:text-2xl text-pretty">
               Welcome to my project section. Each project reflects my approach
               to system design & analysis, Software development, and practical
               problem-solving.
            </p>
            <a href="#projects">
               <Button className="w-xs sm:w-sm text-lg h-12 px-4">
                  Explore my work
                  <FaChevronDown className='animate-bounce size-5 ml-2' />
               </Button>
            </a>
         </div>

         <MyCardFunc />
         <CTA />
      </section>
   );
};

export default Project;
