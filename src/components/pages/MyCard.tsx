import projectData from '../functions/project';
import { Button } from '../ui/button';
import type { IProject } from '../functions/project';
import { useEffect, useState } from 'react';

const MyCard = ({ prop }: { prop: IProject }) => {
   return (
      <div
         className="relative bg-card flex flex-col sm:flex-row border overflow-hidden gap-4 rounded-md"
         key={prop.id}>
         <div
            className={`absolute top-1 right-1 rounded-md p-1.5 hover:p-2 text-xs hover:outline-2 ${
               prop.status === 'Ongoing'
                  ? ' bg-accent/50'
                  : 'bg-primary/80 text-primary-foreground'
            }`}>
            {prop.status}
         </div>
         <img
            className="h-56 w-full sm:h-70 sm:w-[45%] lg:w-98"
            src={prop.imageUrl}
            alt=""
         />
         <div className="flex flex-col justify-center gap-6 py-3 px-2.5">
            <div>
               <h4 className="text-xl leading-none font-semibold mb-1.5">
                  {prop.title}
               </h4>
               <h6 className="text-lg text-muted-foreground">
                  {prop.shortDescription}
               </h6>
            </div>

            <div className="flex gap-2">
               <Button className="px-8 bg-primary text-lg text-primary-foreground">
                  Github
               </Button>
               <Button className="px-8 bg-secondary hover:bg-secondary/55 text-lg text-secondary-foreground">
                  Demo
               </Button>
            </div>
         </div>
      </div>
   );
};

const MyCardFunc = () => {
   const [getProjects, setProjects] = useState<IProject[]>([]);

   useEffect(() => {
      setProjects(projectData);
   }, []);

   console.log(getProjects);
   return (
      <div className="grid gap-4">
         {getProjects.map((item) => (
            <MyCard prop={item} />
         ))}
      </div>
   );
};

export { MyCard, MyCardFunc };
