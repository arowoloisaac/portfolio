import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { HiArrowUpRight } from 'react-icons/hi2';

const projects = [
   {
      id: '1',
      title: 'Project Management System',
      problem:
         'Managing projects across teams often requires handling tasks, roles, deadlines, and background processes in a structured way.',
      solution:
         'I built a project management system with role-based access, task hierarchies, and scheduled background jobs to support real-world team workflows.',
      githubUrl: 'https://github.com/arowoloisaac/pm',
      demoUrl: '',
      tags: ['C#', 'React', '.NET', 'Quartz', 'SQL', 'Typescript', 'MSSQL'],
   },
   {
      id: '4',
      title: 'Digital School Management System',
      problem:
         'Schools need a centralized system to manage students, staff, academic records, and daily operations efficiently.',
      solution:
         'I developed a digital school management system that organizes academic data, user roles, and administrative processes in a single platform.',
      githubUrl: 'https://github.com/arowoloisaac/Cabinet-Prototype-Frontend',
      demoUrl: '',
      tags: ['C#', 'Vue.js', '.NET', 'JavaScript', 'SQL', 'MSSQL'],
   },
   {
      id: '5',
      title: 'Food Delivery Application',
      problem:
         'Food delivery platforms must coordinate users, orders, and restaurants while providing a smooth user experience.',
      solution:
         'I built a food delivery application that handles ordering flows, user interactions, and backend logic for managing food requests.',
      githubUrl: 'https://github.com/arowoloisaac/portfolio',
      demoUrl: '',
      tags: ['C#', 'React', '.NET', 'JavaScript', 'SQL'],
   },
   {
      id: '8',
      title: 'YOURSEARCH',
      problem:
         'Users often struggle to find relevant information quickly across large datasets or platforms.',
      solution:
         'I developed a search-driven application that efficiently retrieves and presents relevant results using a structured backend and responsive frontend.',
      githubUrl: 'https://github.com/arowoloisaac/portfolio',
      demoUrl: '',
      tags: ['C#', 'React', '.NET', 'Typescript', 'SQL'],
   },
];

const FeaturedProject = () => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{
            opacity: 0.9,
            transition: { duration: 0.7, ease: 'easeIn' },
         }}
         className="h-fit flex flex-col justify-center items-center my-6 gap-4 py-4 px-5  lg:-mt-9">
         <h1 className="text-3xl leading-none space-x-1 mb-2.5 font-bold capitalize max-w-xl lg:max-w-3xl xl:max-w-4xl text-center">
            Notable Projects where I Shown My Expertise.
         </h1>
         <div className="grid md:grid-cols-2 sm:grid-cols-1  gap-4 max-w-xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
            {projects.map((itm, idx) => (
               <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: idx } }}
                  className="flex flex-col justify-between dark:border bg-card rounded-md p-3 sm:text-lg lg:p-5 "
                  key={itm.id}>
                  <h1 className="text-xl text-primary font-bold text-center mb-1.5">
                     {itm.title}
                  </h1>
                  <span>
                     <span className="underline capitalize">problem</span>:{' '}
                     <span className="text-pretty text-muted-foreground">
                        {itm.problem}
                     </span>
                  </span>
                  <br />
                  <span>
                     <span className="underline">Solution</span>:{' '}
                     <span className="text-pretty text-muted-foreground">
                        {itm.solution}
                     </span>
                  </span>
                  <br />
                  <span className="flex flex-wrap gap-1.5">
                     {itm.tags.map((tag, idx) => (
                        <span
                           key={idx}
                           className="rounded-md inner-card px-3 align-middle text-sm text-muted-foreground">
                           {tag}
                        </span>
                     ))}
                  </span>
               </motion.div>
            ))}
         </div>
         <a href="/projects">
            <Button className="w-xs sm:w-sm bg-secondary text-secondary-foreground hover:bg-secondary/80 h-12 text-lg px-4">
               Explore other Projects
               <HiArrowUpRight className="font-bold size-5 animate-caret-blink transition-normal duration-1000" />
            </Button>
         </a>
      </motion.div>
   );
};

export default FeaturedProject;
