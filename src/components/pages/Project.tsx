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
        <CardTopImageDemo />
      </div>
      {/* <div className="flex flex-col md:flex-row items-start md:items-center bg-white dark:bg-gray-900 rounded-lg shadow p-4">
        <div className="md:w-1/3 w-full mb-2 md:mb-0">
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            Project Worked On:
          </span>
          <div className="text-gray-700 dark:text-gray-300">
            Portfolio Website
          </div>
        </div>
        <div className="md:w-1/3 w-full mb-2 md:mb-0">
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            Time:
          </span>
          <div className="text-gray-700 dark:text-gray-300">
            Jan 2025 - Mar 2025
          </div>
        </div>
        <div className="md:w-1/3 w-full">
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            Documentation:
          </span>
          <a
            href="#"
            className="text-purple-600 dark:text-purple-400 hover:underline"
          >
            View Docs
          </a>
        </div>
      </div> */}
    </section>
  );
};

export default Project;
