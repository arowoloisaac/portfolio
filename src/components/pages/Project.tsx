import CardTopImageDemo from "../shadcn-studio/card/card-05";

const Project = () => {
  return (
    <section className="max-w-5xl mx-auto pt-6 pb-8 px-4">
      <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
        My Projects
      </h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300 text-sm">
        Welcome to my project page. Here you’ll find a summary of my work,
        including timelines and documentation.
      </p>
      <div className="scroll-smooth grid max-md: grid-cols-1  min-lg:grid-cols-3 gap-2">
        <CardTopImageDemo />
      </div>
    </section>
  );
};

export default Project;
