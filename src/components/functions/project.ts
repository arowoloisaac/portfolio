import portfolioImage from "@/assets/images/portfolio.png";

interface IProject {
  id: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
  githubUrl: string;
  demoUrl: string;
}


const projectData = (): IProject[] => {
  return [
    {
      id: "1",
      title: "Project Management System",
      shortDescription:
        "User Interface for managing projects, tasks, and team collaboration.",
      imageUrl:
        "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
      githubUrl: "https://github.com/arowoloisaac/pm",
      demoUrl: "",
    },
    {
      id: "2",
      title: "Project Management System",
      shortDescription: "API for managing projects, tasks, and team collaboration.",
      imageUrl:
        "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
      githubUrl: "https://github.com/arowoloisaac/Project-Management",
      demoUrl: "",
    },
    {
      id: "3",
      title: "Key Management System",
      shortDescription: "Full-stack web application for managing keys and access.",
      imageUrl:
        "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
      githubUrl: "https://github.com/arowoloisaac/Key-Management-System",
      demoUrl: "",
    },
    {
      id: "4",
      title: "Digital School Management System",
      shortDescription: "Digital platform for managing school cabinets and resources.",
      imageUrl:
        "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
      githubUrl: "https://github.com/arowoloisaac/Cabinet-Prototype-Frontend",
      demoUrl: "",
    },
    {
      id: "5",
      title: "Food Delivery Application",
      shortDescription: "A full-stack food ordering website application.",
      imageUrl:
        "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
      githubUrl: "https://github.com/arowoloisaac/portfolio",
      demoUrl: "",
    },{
      id: "6",
      title: "Portfolio Website",
      shortDescription: "My public portfolio website to showcase my skills and projects.",
      imageUrl:
        portfolioImage,
      githubUrl: "https://github.com/arowoloisaac/portfolio",
      demoUrl: "https://arowolo.vercel.app/",
    },
  ];
};

export default projectData;
export type { IProject };