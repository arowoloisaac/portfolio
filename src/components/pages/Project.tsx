"use client";

import Card3dDemo from "../shadcn-studio/card/card-16";

const Project = () => {
  return (
    <section className="max-w-5xl mx-auto pt-6 pb-6 px-4">
      <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
        My Projects
      </h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300 text-sm">
        Welcome to my project page. Here you will find a summary of my work,
        including timelines and documentation.
      </p>

      <div className="p-5 bg-white/25 backdrop-blur-xs backdrop-grayscale  border-2 rounded-md">
        <span className=" text-gray-600 dark:text-gray-300 ">
          Over the years have worked on multiple projects, which includes
          freelancing projects, personal projects, and collaborated with teams
          on several occassions to deliver quality software solutions.
        </span>
      </div>
      <div className="pt-2 scroll-smooth grid max-md: grid-cols-1  min-lg:grid-cols-3 gap-4">
        <Card3dDemo />
      </div>
    </section>
  );
};

export default Project;
