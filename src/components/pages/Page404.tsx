import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { motion } from 'motion/react';

const Page404 = () => {
   const navigate = useNavigate();
   return (
      <div className="backdrop-blur flex flex-col items-center justify-center min-h-screen text-center gap-4">
         <motion.p className="text-3xl md:text-7xl">404</motion.p>
         <p className="text-3xl font-bold">Page not found</p>
         <span className="pb-2.5">
            Sorry, we couldn’t find the page you’re looking for.
         </span>
         <Button
            onClick={() => {
               navigate('/');
            }}
            variant="outline">
            ← Back to home{' '}
         </Button>
      </div>
   );
};

export default Page404;
