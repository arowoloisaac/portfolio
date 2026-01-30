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
      <section className="md:max-w-lg lg:max-w-lg mx-auto py-2">
         <h2 className="text-3xl font-bold mb-2 ">Get in Touch</h2>
         <p className="mb-5 text-lg">
            Thank you for your interest! I’m always excited to connect,
            collaborate, or discuss new opportunities. I’ll get back to you as
            quickly as possible—whether you’re looking to hire me or just want
            to say hello.
         </p>
         <div className="mb-3 text-base sm:text-xl text-accent-foreground font-semibold">
            Feel free to reach out anytime!
         </div>

         {details.map((item, index) => (
            <motion.a
               initial={{ opacity: 0 }}
               whileInView={{
                  opacity: 1,
                  transition: { duration: 0.8 },
               }}
               whileHover={{ rotate: 0.1 }}
               className="card flex items-center wrap-anywhere gap-5 border mb-2 px-5 2xl:px-7 py-3.5 rounded-lg hover:px-6"
               key={index}>
               {item.icon}
               <div className="text-wrap">
                  <h5 className="text-lg font-normal">{item.name}</h5>
                  <a href={item.link} className="hover:italic text-base ">
                     {item.text}
                  </a>
               </div>
            </motion.a>
         ))}
      </section>
   );
};

export default ContactDetail;
