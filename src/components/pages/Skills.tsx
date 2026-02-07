import {
   FaAws,
   FaBootstrap,
   FaCss3,
   FaDatabase,
   FaDocker,
   FaHtml5,
   FaPython,
   FaReact,
} from 'react-icons/fa';
import {
   SiFastapi,
   SiFlask,
   SiGin,
   SiMongodb,
   SiMysql,
   SiPostgresql,
   SiPostman,
   SiSelenium,
   SiShadcnui,
   SiSupabase,
   SiTailwindcss,
   SiTypescript,
   SiVercel,
} from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { FiFramer } from 'react-icons/fi';
import { TbBrandCSharp, TbBrandGolang } from 'react-icons/tb';
import { DiDotnet, DiHeroku, DiMsqlServer } from 'react-icons/di';
import { motion } from 'framer-motion';

const mystacks = {
   'Frontend Development': {
      description:
         'I build slick, responsive websites mainly with React and TypeScript. Love using Tailwind for styling and shadcn/ui components to make things look polished fast. ',
      Stacks: [
         {
            name: 'React',
            icon: <FaReact style={{ color: '#61DAFB' }} />,
         },
         {
            name: 'TypeScript',
            icon: <SiTypescript style={{ color: '#3178C6' }} />,
         },
         {
            name: 'JavaScript',
            icon: <IoLogoJavascript style={{ color: '#F7DF1E' }} />,
         },
         {
            name: 'HTML5',
            icon: <FaHtml5 style={{ color: '#E34F26' }} />,
         },
         {
            name: 'CSS3',
            icon: <FaCss3 style={{ color: '#1572B6' }} />,
         },
         {
            name: 'Tailwind CSS',
            icon: <SiTailwindcss style={{ color: '#38BDF8' }} />,
         },
         {
            name: 'Bootstrap',
            icon: <FaBootstrap style={{ color: '#7952B3' }} />,
         },
         {
            name: 'shadcn/ui',
            icon: <SiShadcnui />,
         },
         {
            name: 'Motion',
            icon: <FiFramer style={{ color: '#0055FF' }} />,
         },
      ],
   },
   'Backend Development': {
      description:
         'I build solid backends and APIs mainly with Python using FastAPI and Flask, plus C# with .NET Core, and Go projects with Gin. Handle SQL databases for data persistence and test all APIs thoroughly with Postman.',
      Stacks: [
         {
            name: 'Python',
            icon: <FaPython style={{ color: '#3776AB' }} />,
         },
         {
            name: 'FastAPI',
            icon: <SiFastapi style={{ color: '#005571' }} />,
         },
         {
            name: 'Flask',
            icon: <SiFlask style={{ color: '#000000' }} />,
         },
         {
            name: 'C#',
            icon: <TbBrandCSharp style={{ color: '#9C7DAA' }} />,
         },
         {
            name: '.NET Core',
            icon: <DiDotnet style={{ color: '#512BD4' }} />,
         },
         {
            name: 'Golang',
            icon: <TbBrandGolang style={{ color: '#00ADD8' }} />,
         },
         {
            name: 'Gogin',
            icon: <SiGin style={{ color: '#00D4B6' }} />,
         },
         {
            name: 'SQL',
            icon: <FaDatabase style={{ color: '#4479A1' }} />,
         },
         {
            name: 'Postman',
            icon: <SiPostman style={{ color: '#FF6C37' }} />,
         },
      ],
   },
   'DevOps & Automation Tools': {
      description:
         'I use Docker to containerize apps, deploy to AWS, Heroku, and Vercel for different projects. Selenium handles all my testing automation, keeping deployments smooth and reliable.',
      Stacks: [
         {
            name: 'Docker',
            icon: <FaDocker style={{ color: '#2496ED' }} />,
         },
         {
            name: 'AWS',
            icon: <FaAws style={{ color: '#FF9900' }} />,
         },
         {
            name: 'Heroku',
            icon: <DiHeroku style={{ color: '#6567F7' }} />,
         },
         {
            name: 'Selenium',
            icon: <SiSelenium style={{ color: '#43B02A' }} />,
         },
         {
            name: 'Vercel',
            icon: <SiVercel style={{ color: '#000000' }} />,
         },
      ],
   },
   'System Analysis': {
      description:
         'I map out entire systems upfront - from use cases and domain models to detailed class diagrams, sequence flows, and component breakdowns. This planning catches issues early and keeps development on track.',
      Stacks: [
         {
            name: 'Class Diagram',
            icon: '',
         },
         {
            name: 'Use Cases',
            icon: '',
         },
         {
            name: 'Package Diagram',
            icon: '',
         },
         {
            name: 'Domain Model',
            icon: '',
         },
         {
            name: 'Sequence Diagram',
            icon: '',
         },
         {
            name: 'Component Diagram',
            icon: '',
         },
         {
            name: 'Activity Diagram',
            icon: '',
         },
      ],
   },
   Database: {
      description:
         'I work with both SQL and NoSQL databases - PostgreSQL and MySQL for relational data, MongoDB when I need flexibility, MSSQL for Microsoft stacks, and Supabase when I want Postgres with easy APIs built-in.',
      Stacks: [
         {
            name: 'Supabase',
            icon: <SiSupabase style={{ color: '#3ECB9B' }} />,
         },
         {
            name: 'PostgreSQL',
            icon: <SiPostgresql style={{ color: '#336791' }} />,
         },
         {
            name: 'MSSQL',
            icon: <DiMsqlServer style={{ color: '#E44125' }} />,
         },
         {
            name: 'MySQL',
            icon: <SiMysql style={{ color: '#E57F27' }} />,
         },
         {
            name: 'MongoDB',
            icon: <SiMongodb style={{ color: '#47A248' }} />,
         },
      ],
   },
};

const Skills = () => {
   return (
      <div className="mt-12  rounded-tl-2xl  rounded-br-2xl p-6 card">
         <h1 className="text-center uppercase py-10 text-3xl lg:text-4xl md:text-4xl font-bold mb-4 tracking-wide">
            Skillset I Acquired Over the years
         </h1>
         {Object.entries(mystacks).map(([key, values], idx) => (
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
               viewport={{ once: false, amount: 0.3 }}
               key={idx}>
               <div className="flex flex-col sm:flex-row justify-between  pb-8">
                  <div className="sm:w-[45%]">
                     <h3 className="text-2xl font-semibold mb-2 ">{key}</h3>
                     <p className="mb-4  text-lg ">{values.description}</p>
                  </div>
                  <div className="sm:w-[40%]">
                     <div className="inline-flex align-middle items-center flex-wrap gap-2">
                        <span className="font-semibold text-xl text-gray-800 dark:text-white pr-1">
                           Stacks:
                        </span>
                        {Object.entries(values.Stacks).map(([key, value]) => (
                           <div
                              key={key}
                              className="flex items-center gap-4.5 inner-card  px-2.5 py-1 rounded-lg text-base sm:text-lg font-medium">
                              {value.name}
                              {value.icon}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </motion.div>
         ))}
      </div>
   );
};

export default Skills;
