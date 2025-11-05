// import { Github, Linkedin } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="w-full py-4 px-8">
//       <div className="flex flex-col justify-between items-center max-w-5xl mx-auto lg:flex-row">
//         <div>Designed &amp; Developed By Isaac</div>
//         <div>&copy; 2025</div>
//         <div className="flex gap-4">
//           <a href="github.com/arowoloisaac">
//             <Github size={20} />
//           </a>
//           <a href="linkedin.com/in/isaac-arowolo-07386325a/">
//             <Linkedin size={20} />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-100 py-6 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-4">
        <div className="text-sm">
          <div className="font-semibold">Designed &amp; Developed by Isaac</div>
          <div className="text-gray-400 text-xs">Available for hire — open to freelance &amp; full‑time roles</div>
        </div>

        <div className="flex items-start">
          <nav className="hidden md:flex gap-4 text-sm">
            <a href="/about" className="hover:underline">About</a>
            <a href="/projects" className="hover:underline">Projects</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/arowoloisaac"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/isaac-arowolo-07386325a"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Isaac. All rights reserved. — <a href="/resume.pdf" className="hover:underline">Resume</a>
      </div>
    </footer>
  );
};

export default Footer;
