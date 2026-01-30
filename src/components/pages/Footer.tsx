import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
   return (
      <footer className="w-full border  rounded-tl-xl rounded-tr-xl pt-6 pb-6 ">
         <div className="max-w-5xl sm:max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-center justify-between gap-4">
            <div className="text-center sm:text-left">
               <div className="font-semibold text-lg ">
                  Designed &amp; Developed by Isaac
               </div>
               <div className=" text-xs sm:text-base">
                  Available for hire — open to freelance &amp; full‑time roles
               </div>
            </div>

            <div className="flex items-center gap-4">
               <div className="flex gap-3">
                  <a
                     href="https://github.com/arowoloisaac"
                     aria-label="GitHub"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="hover:text-purple-400 transition">
                     <Github size={20} />
                  </a>
                  <a
                     href="https://linkedin.com/in/isaac-arowolo-07386325a"
                     aria-label="LinkedIn"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="hover:text-purple-400 transition">
                     <Linkedin size={20} />
                  </a>
               </div>
            </div>
         </div>

         <div className="max-w-5xl mx-auto mt-4 text-center text-xs sm:text-base px-4">
            © {new Date().getFullYear()} Isaac. All rights reserved. —{' '}
            <a href="/resume" className="hover:underline">
               Resume
            </a>
         </div>
      </footer>
   );
};

export default Footer;
