import portfolioImage from '@/assets/images/portfolio.png';
import yourSearch from '@/assets/images/yoursearch.jpg'

const Status = {
   Ongoing: 'Ongoing',
   Testing: 'Testing',
   Completed: 'Completed',
} as const;

type StatusType = (typeof Status)[keyof typeof Status];

interface IProject {
   id: string;
   title: string;
   shortDescription: string;
   imageUrl: string;
   githubUrl: string;
   demoUrl: string;
   status: StatusType;
}

const projectData = (): IProject[] => {
  return [
     {
        id: '1',
        title: 'Project Management System',
        shortDescription:
           'A web-based system for planning projects, tracking tasks, and collaborating with team members in one place.',
        imageUrl:
           'https://www.elegantthemes.com/blog/wp-content/uploads/2020/06/best-project-management-platforms-featured-image-scaled.jpg',
        githubUrl: 'https://github.com/arowoloisaac/pm',
        demoUrl: '',
        status: 'Completed',
     },
     {
        id: '2',
        title: 'Ordering System',
        shortDescription:
           'A backend API designed to handle orders, manage items, and process order-related operations efficiently.',
        imageUrl:
           'https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto',
        githubUrl: 'https://github.com/arowoloisaac/Project-Management',
        demoUrl: '',
        status: 'Completed',
     },
     {
        id: '3',
        title: 'Key Management System',
        shortDescription:
           'A full-stack application for tracking physical keys, managing access, and monitoring key usage.',
        imageUrl:
           'https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto',
        githubUrl: 'https://github.com/arowoloisaac/Key-Management-System',
        demoUrl: '',
        status: 'Completed',
     },
     {
        id: '4',
        title: 'Digital School Management System',
        shortDescription:
           'A digital solution for managing school cabinets, resources, and internal school operations.',
        imageUrl:
           'https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto',
        githubUrl: 'https://github.com/arowoloisaac/Cabinet-Prototype-Frontend',
        demoUrl: '',
        status: 'Completed',
     },
     {
        id: '5',
        title: 'Food Delivery Application',
        shortDescription:
           'A full-stack food ordering platform that allows users to browse meals, place orders, and manage deliveries.',
        imageUrl:
           'https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto',
        githubUrl: 'https://github.com/arowoloisaac/portfolio',
        demoUrl: '',
        status: 'Completed',
     },
     {
        id: '6',
        title: 'Bank Account System',
        shortDescription:
           'A console-based application for creating bank accounts and performing basic banking operations.',
        imageUrl:
           'https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto',
        githubUrl: 'https://github.com/arowoloisaac/portfolio',
        demoUrl: '',
        status: 'Completed',
     },
     {
        id: '7',
        title: 'Portfolio Website',
        shortDescription:
           'A personal portfolio website showcasing my projects, skills, and professional journey.',
        imageUrl: portfolioImage,
        githubUrl: 'https://github.com/arowoloisaac/portfolio',
        demoUrl: 'https://arowolo.vercel.app/',
        status: 'Completed',
     },
     {
        id: '8',
        title: 'YOURSEARCH',
        shortDescription:
           'A search-focused platform currently under development to help users find relevant information quickly.',
        imageUrl: yourSearch,
        githubUrl: 'https://github.com/arowoloisaac/portfolio',
        demoUrl: '',
        status: 'Ongoing',
     },
     {
        id: '9',
        title: 'Football Assistant',
        shortDescription:
           'An ongoing project aimed at assisting football fans with insights, stats, and match-related information.',
        imageUrl: portfolioImage,
        githubUrl: 'https://github.com/arowoloisaac/portfolio',
        demoUrl: '',
        status: 'Ongoing',
     },
  ];
  
};

export default projectData;
export type { IProject };
