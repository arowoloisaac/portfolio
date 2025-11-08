import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import "../../../assets/styles/glow.css";
import type { IProject } from "@/components/sub-function/project";
import projectData from "@/components/sub-function/project";


const CardTopImageDemo = () => {
  const [projects, getProjects] = useState<IProject[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await projectData();
      getProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <>
      {projects.map((project, index) => (
        <Card className="max-w-xs pt-0" key={index}>
          <CardContent className="px-0">
            <img
              src={project.imageUrl}
              alt="Banner"
              className="aspect-video h-50 rounded-t-xl object-cover"
            />
          </CardContent>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>
              {project.shortDescription?.slice(0, 100)}
            </CardDescription>
          </CardHeader>
          <CardFooter className="gap-3 max-sm:flex-col max-sm:items-stretch">
            <Button className="glow-on-hover" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </Button>
            <Button
              className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-radial-purple-500/10 "
              variant={"outline"}
              asChild
            >
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default CardTopImageDemo;
