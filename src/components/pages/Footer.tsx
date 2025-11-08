import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-white/20 backdrop-blur-md rounded-tl-xl rounded-tr-xl pt-6 pb-6 ">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <div className="font-semibold">Designed &amp; Developed by Isaac</div>
          <div className="text-gray-500 text-xs">
            Available for hire — open to freelance &amp; full‑time roles
          </div>
        </div>

        <nav className="hidden md:flex gap-6 text-sm">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/projects" className="hover:underline">
            Projects
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="mailto:arowoloisaacabiodun01@gmail.com"
            className="text-sm  hover:underline"
          >
            arowoloisaacabiodun01@gmail.com{" "}
          </a>

          <div className="flex gap-3">
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
      </div>

      <div className="max-w-5xl mx-auto mt-4 text-center text-xs text-gray-500 px-4">
        © {new Date().getFullYear()} Isaac. All rights reserved. —{" "}
        <a href="/resume" className="hover:underline">
          Resume
        </a>
      </div>
    </footer>
  );
};

export default Footer;
