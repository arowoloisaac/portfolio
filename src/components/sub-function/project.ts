interface IProject {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  demoUrl: string;
}


const projectData = async (): Promise<IProject[]> => {
  return [
    {
      id: "1",
      title: "Project Management System",
      shortDescription:
        "User Interface for managing projects, tasks, and team collaboration.",

      description:
        "Smooth, flowing gradients blending rich reds and blues in an abstract swirl.",
      imageUrl:
        "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      id: "2",
      title: "Project Management System",
      shortDescription: "API for managing projects, tasks, and team collaboration.",
      description:
        "Smooth, flowing gradients blending rich reds and blues in an abstract swirl.",
      imageUrl:
        "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      id: "3",
      title: "Key Management System",
      shortDescription: "Full-stack web application for managing keys and access.",
      description:
        "Smooth, flowing gradients blending rich reds and blues in an abstract swirl.",
      imageUrl:
        "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      id: "4",
      title: "Digital School Management System",
      shortDescription: "Digital platform for managing school cabinets and resources.",
      description:
        "Smooth, flowing gradients blending rich reds and blues in an abstract swirl.",
      imageUrl:
        "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      id: "5",
      title: "Food Delivery Application",
      shortDescription: "A full-stack food ordering website application.",
      description:
        "Smooth, flowing gradients blending rich reds and blues in an abstract swirl.",
      imageUrl:
        "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
      githubUrl: "#",
      demoUrl: "#",
    },
  ];
};

export default projectData;
export type { IProject };