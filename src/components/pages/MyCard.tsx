import projectData from '../functions/project';
import { Button } from '../ui/button';
import type { IProject } from '../functions/project';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MyCard = ({ prop }: { prop: IProject }) => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{
            opacity: 1,
            transition: { duration: 0.3*Number(prop.id), ease: 'linear' },
         }}
         className="relative bg-card flex flex-col lg:flex-row border overflow-hidden gap-4  rounded-md "
         key={prop.id}>
         <div
            className={`absolute top-1 right-1 font-semibold lowercase rounded-md p-1.5 hover:p-2 text-sm
               leading-3 hover:outline-1 ${
                  prop.status === 'Ongoing'
                     ? ' bg-accent/50'
                     : 'bg-primary/90 text-primary-foreground'
               }`}>
            {prop.status}
            <p className="absolute -top-0 -right-0 text-black bg-green-700 rounded-full text-xs"></p>
         </div>
         <img
            className="h-72 w-full sm:h-full  lg:w-98"
            src={prop.imageUrl}
            alt=""
         />
         <div className="flex flex-col justify-center gap-5 py-3 px-2.5">
            <div>
               <h4 className="text-2xl leading-none font-semibold mb-6">
                  {prop.title}
               </h4>
               <h6 className="text-xl mb-6">
                  {prop.shortDescription}
               </h6>
               <div className="flex flex-wrap gap-2 mt-2">
                  {' '}
                  {prop.tags.flatMap((itm, idx) => (
                     <span
                        className="text-muted-foreground text-xs sm:text-sm border lowercase px-2 rounded-xl bg-accent/25 "
                        key={idx}>
                        {itm}
                     </span>
                  ))}
               </div>
            </div>

            <div className="flex gap-2">
               <a
                  href={prop.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Button className="px-8 bg-primary text-lg text-primary-foreground">
                     Github
                  </Button>
               </a>

               {prop.demoUrl === '' ? (
                  ''
               ) : (
                  <a href="" target="_blank">
                     <Button className="px-8 bg-secondary hover:bg-secondary/55 text-lg text-secondary-foreground">
                        Demo
                     </Button>
                  </a>
               )}
            </div>
         </div>
      </motion.div>
   );
};

const MyCardFunc = () => {
   const [getProjects, setProjects] = useState<IProject[]>([]);

   useEffect(() => {
      setProjects(projectData);
   }, []);

   return (
      <div id='projects' className="grid grid-cols-1 gap-6 sm:gap-5 md:-mt-40 lg:-mt-12">
         {getProjects.map((item) => (
            <MyCard prop={item} />
         ))}
      </div>
   );
};

export { MyCard, MyCardFunc };
