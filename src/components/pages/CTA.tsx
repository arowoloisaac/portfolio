import { useNavigate } from 'react-router';
import { Button } from '../ui/button';
import { BiPhoneCall } from 'react-icons/bi';

const CTA = () => {
   const navigate = useNavigate();
   return (
      <div className="flex items-center justify-center text-pretty text-center min-h-88  my-1.5  rounded-2xl">
         <div className="flex flex-col justify-center items-center max-w-2xl lg:max-w-4xl gap-3">
            <h1 className="text-3xl font-bold uppercase">
               I'm Open to opportunities
            </h1>
            <span className="text-lg text-muted-foreground">
               Whether it’s a full-time role or a freelance project, I bring a
               strong development mindset and clean system design.
            </span>
            <Button
               onClick={() => navigate('/contact')}
               className="w-xs sm:w-sm h-12 text-lg px-4 ">
               Get in touch{' '}
               <BiPhoneCall className=" animate-pulse ml-2.5 size-5" />
            </Button>
         </div>
      </div>
   );
};

export default CTA;
