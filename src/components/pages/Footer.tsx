import { FaGithub, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const details = [
   {
      name: 'Github',
      // style={{ color: '#181717' }}
      icon: <FaGithub className="size-5 sm:size-6" />,
      link: 'https://github.com/arowoloisaac',
   },
   {
      name: 'Telegram',
      icon: (
         <FaTelegramPlane
            className="size-5 sm:size-6"
            style={{ color: '#0088CC' }}
         />
      ),
      link: 'https://t.me/arowoloisaac',
   },
   {
      name: 'LinkedIn',
      icon: (
         <FaLinkedinIn
            className="size-5 sm:size-6"
            style={{ color: '#0077B5' }}
         />
      ),
      link: 'https://www.linkedin.com/in/isaac-arowolo-07386325a/',
   },
   {
      name: 'X',
      icon: <FaXTwitter className="size-5 sm:size-6" />,
      link: 'https://www.linkedin.com/in/isaac-arowolo-07386325a/',
   },
];

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

            <div className="flex items-center gap-4 ">
               <div className="flex gap-3">
                  {details.map((itm) => (
                     <a
                        href={itm.link}
                        aria-label={itm.name}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition border bg-secondary rounded-full p-1.5">
                        {itm.icon}
                     </a>
                  ))}
                  
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
