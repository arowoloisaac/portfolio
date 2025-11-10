const techStack = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Vue.js",
  "Tailwind CSS",
  "Bootstrap",
  "shadcn/ui",
  "Motion",
  "Sass",
];

const techStack2 = [
  "Flask",
  "Fastapi",
  "C#",
  ".NET Core",
  "Express.js",
  "Node.js",
  "Python",
  "SQL",
  "Postman",
];

const techStack3 = ["PostgreSQL", "MongoDB", "MSSQL", "MySQL"];

const devops = [
  "Docker",
  "GitHub Actions",
  "AWS",
  "Azure",
  "Heroku",
  "Selenium",
  "Vercel",
];

const Skills = () => {
  return (
    <div className="mt-12 rounded-xl shadow p-6">
      <h1 className="text-center py-10 text-3xl md:text-4xl font-bold mb-4 tracking-wide text-gray-900 dark:text-white">
        Professional Skillset
      </h1>
      {/* frontend */}
      <div className="flex justify-between  pb-8">
        <div className="w-[45%]">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Frontend Development
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            I build modern, responsive web interfaces using frameworks like
            React and Vue.js.
          </p>
        </div>
        <div className="w-[40%]">
          <div className="flex flex-wrap gap-2">
            <div className=" font-semibold text-gray-900 dark:text-white">
              Tech stack:
            </div>
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* backend */}
      <div className="flex justify-between  pb-8">
        <div className="w-[45%]">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Backend Development
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            I develop scalable APIs and backend systems using Express.js, Flask,
            FastAPI, and .NET Core WebAPI to be specific.
          </p>
        </div>
        <div className="w-[40%]">
          <div className="flex flex-wrap gap-2">
            <div className=" font-semibold text-gray-900 dark:text-white">
              Tech stack:
            </div>
            {techStack2.map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* databases */}
      <div className="flex justify-between pb-8">
        <div className="w-[45%]">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Database
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            I design, manage, and optimize relational and NoSQL databases for
            scalable applications.
          </p>
        </div>
        <div className="w-[40%]">
          <div className="flex flex-wrap gap-2">
            <div className=" font-semibold text-gray-900 dark:text-white">
              Tech stack:
            </div>
            {techStack3.map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* devops */}
      <div className="flex justify-between pb-8">
        <div className="w-[45%]">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            DevOps & Automation Tools
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            I use modern DevOps tools and CI/CD pipelines to automate
            deployments and improve development workflow.
          </p>
        </div>
        <div className="w-[40%]">
          <div className="flex flex-wrap gap-2">
            <div className="font-semibold text-gray-900 dark:text-white">
              Tech stack:
            </div>
            {devops.map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
