import {
   FaGithub,
   FaLinkedinIn,
   FaTelegramPlane,
   FaPhoneAlt,
} from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { motion } from 'motion/react';


const details = [
   {
      name: 'Github',
      icon: <FaGithub className="size-6" style={{ color: '#181717' }} />,
      link: 'https://github.com/arowoloisaac',
      text: 'arowoloisaac',
   },
   {
      name: 'Telegram',
      icon: <FaTelegramPlane className="size-6" style={{ color: '#0088CC' }} />,
      link: 'https://t.me/arowoloisaac',
      text: 'uncommon_legend',
   },
   {
      name: 'LinkedIn',
      icon: <FaLinkedinIn className="size-6" style={{ color: '#0077B5' }} />,
      link: 'https://www.linkedin.com/in/isaac-arowolo-07386325a/',
      text: 'Arowolo Isaac',
   },
   {
      name: 'Email',
      icon: <BiLogoGmail className="size-6" style={{ color: '#FF6B35' }} />,
      text: 'arowoloisaacabiodun01@gmail.com',
      link: 'mailto:arowoloisaacabiodun01@gmail.com',
   },
   {
      name: 'Phone Number',
      icon: <FaPhoneAlt className="size-6" style={{ color: '#6B7280' }} />,
      link: 'tel:+7958832964',
      text: '+7958832964',
   },
];

const ContactDetail = () => {
   return (
      <section className="md:max-w-lg lg:max-w-lg mx-auto">
         <div className="px-4 py-2">
            <h2 className="text-3xl font-bold mb-2 dark:text-slate-200 text-gray-800">
               Get in Touch
            </h2>
            <p className="mb-4 text-lg">
               Thank you for your interest! I’m always excited to connect,
               collaborate, or discuss new opportunities. I’ll get back to you
               as quickly as possible—whether you’re looking to hire me or just
               want to say hello.
            </p>
            <div className="mb-6 text-xl text-purple-700 dark:text-purple-400 font-semibold">
               Feel free to reach out anytime!
            </div>

            <div>
               <div>
                  {details.map((item, index) => (
                     <motion.a
                        initial={{ opacity: 0 }}
                        whileInView={{opacity:1, transition:{duration:0.8}}}
                        whileHover={{ rotate: 0.1}}
                        className=" card flex items-center gap-5 border dark:border-[#4d4d4d]  mb-2 px-5 2xl:px-7 py-3.5 rounded-lg hover:border-blue-400 hover:px-6"
                        key={index}
                        >
                        <div>{item.icon}</div>
                        <div>
                           <h5 className='text-lg font-normal'>{item.name}</h5>
                           <a href={item.link} className="hover:italic text-base">{item.text}</a>
                        </div>
                     </motion.a>
                  ))}
               </div>
            </div>
            {/* <div className="space-y-4">
               <div>
                  <span className="font-medium">Email:</span>
                  <a
                     href="mailto:arowoloisaac01@gmail.com"
                     className="ml-2 text-purple-600 dark:text-purple-400 hover:underline">
                     arowoloisaacabiodun01@gmail.com
                  </a>
               </div>
               <div>
                  <span className="font-medium">Github:</span>
                  <a
                     href="https://github.com/arowoloisaac"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="ml-2 text-purple-600 dark:text-purple-400 hover:underline">
                     github.com/arowoloisaac
                  </a>
               </div>
               <div>
                  <span className="font-medium">Phone:</span>
                  <a
                     href="tel:+79528832964"
                     className="ml-2 text-purple-600 dark:text-purple-400 hover:underline">
                     +7 (952) 883-29-64
                  </a>
                  <a
                     href="tel:+2349024191288"
                     className="ml-2 text-purple-600 dark:text-purple-400 hover:underline">
                     +234 (902) 419-12-88
                  </a>
               </div>

               <div>
                  <span className="font-medium">Telegram:</span>
                  <a
                     href="https://t.me/arowoloisaac"
                     className="ml-2 text-purple-600 dark:text-purple-400 hover:underline">
                     @arowoloisaac
                  </a>
               </div>
               <div>
                  <span className="font-medium">Location:</span>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">
                     Nigeria
                  </span>
               </div>
               <div>
                  <span className="font-medium0">LinkedIn:</span>
                  <a
                     href="https://www.linkedin.com/in/isaac-arowolo-07386325a/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="ml-2 text-purple-600 dark:text-purple-400 hover:underline">
                     linkedin.com/in/isaac-arowolo-07386325a/
                  </a>
               </div>
            </div> */}
         </div>
      </section>
   );
};

export default ContactDetail;
