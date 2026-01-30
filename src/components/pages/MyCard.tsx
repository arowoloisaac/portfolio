import projectData from '../functions/project';
import { Button } from '../ui/button';
import type { IProject } from '../functions/project';
import { useEffect, useState } from 'react';

const MyCard = ({ prop }: { prop: IProject }) => {
   return (
      <div
         className="bg-card flex flex-col sm:flex-row border overflow-hidden gap-4 rounded-md"
         key={prop.id}>
         <img
            className="h-56 w-full sm:h-64 sm:w-98"
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
               <div>
                  <Button className="px-8 bg-primary text-lg text-primary-foreground">
                     Github
                  </Button>
               </div>
               <div>
                  <Button className="px-8 bg-secondary hover:bg-secondary/55 text-lg text-secondary-foreground">
                     Demo
                  </Button>
               </div>
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
