import { useState } from "react";
import { ModeToggle } from "../mode-toogle";

function App_Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        {/* <a href="/" className="pl-3">Home</a> */}
        <a className="pl-3" href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/resume">Resume</a>
        <a href="/blog">Blogs</a>
        <a href="/contact" className="pr-3">
          Contact
        </a>
      </nav>
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <div className="toggle">
        <ModeToggle />
      </div>
    </header>
  );
}

export default App_Header;