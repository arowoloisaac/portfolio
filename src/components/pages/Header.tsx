import { ModeToggle } from '../mode-toogle';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

const navigationItems = [
   { name: 'About', path: '/about' },
   { name: 'Projects', path: '/projects' },
   { name: 'Resume', path: '/resume' },
   { name: 'Blogs', path: '/blog' },
   { name: 'Contact', path: '/contact' },
];

function App_Header() {
   const navigate = useNavigate();
   

   const handleNavigate = (path: string) => {
      navigate(path);
   };
   return (
      <header className="sticky top-0 block px-10 select-none pt-4 pb-2 max-md:px-2 backdrop-blur-md z-1000">
         <div className="flex justify-between items-center">
            <div className="logo">
               <NavLink className="hover:underline" to="/">
                  My Portfolio
               </NavLink>
            </div>
            <nav className="flex max-sm:hidden  justify-between rounded-md py-1 px-3 gap-6 border ">
               {navigationItems.map((item, idx) => (
                  <NavLink
                     key={idx}
                     className={({ isActive }) =>
                        isActive
                           ? 'inner-card px-4 rounded-sm backdrop-blur-xl '
                           : 'px-1 rounded-sm hover:backdrop-blur-xl '
                     }
                     to={item.path}>
                     {item.name}
                  </NavLink>
               ))}
            </nav>

            <div className="toggle">
               <ModeToggle />
               <div className="sm:hidden">
                  <DropdownMenu>
                     <DropdownMenuTrigger>
                        <Button variant="outline" size="icon">
                           ☰
                        </Button>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent>
                        {navigationItems.map((item) => (
                           <DropdownMenuItem
                              id={item.name}
                              onClick={() => handleNavigate(item.path)}>
                              {item.name}
                           </DropdownMenuItem>
                        ))}
                     </DropdownMenuContent>
                  </DropdownMenu>
               </div>
            </div>
         </div>
      </header>
   );
}

export default App_Header;
