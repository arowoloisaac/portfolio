import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-4 px-8">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <div>Designed and Developed By Isaac</div>
        <div>&copy; 2025</div>
        <div className=" flex gap-2">
          <Github size={24}  />
          <Linkedin size={24} className="ml-4" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
