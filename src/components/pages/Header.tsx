import { ModeToggle } from "../mode-toogle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

function App_Header() {
  const navigate = useNavigate();
  const navigationItems = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Blogs", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <header className="navbar">
      <div className="logo">
        <a href="/">My Portfolio</a>
      </div>

      <nav
        style={{
          border: "1px solid",
          borderRadius: "8px",
          padding: "4px",
          // borderColor: isDark ? "white" : "neutral-100",
        }}
        className="nav-links"
      >
        {navigationItems.map((item) => (
          <a
            className={
              item == navigationItems[0]
                ? "pl-3"
                : item == navigationItems[4]
                ? "pr-3"
                : ""
            }
            href={item.path}
          >
            {item.name}
          </a>
        ))}
      </nav>

      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>☰</DropdownMenuTrigger>
          <DropdownMenuContent>
            {navigationItems.map((item) => (
              <DropdownMenuItem
                id={item.name}
                onClick={() => handleNavigate(item.path)}
              >
                {item.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="toggle">
        <ModeToggle />
      </div>
    </header>
  );
}

export default App_Header;
