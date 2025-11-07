import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { useEffect, useState } from "react";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router";
import App_Header from "./components/pages/Header";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";
import Resume from "./components/pages/Resume";
import pdfresume from "../src/assets/documents/arowoloisaac.pdf";
import Page404 from "./components/pages/Page404";

const lightBg = "/src/assets/images/3w-bg.jpg"; // Replace with your light image path
const darkBg = "/src/assets/images/black-bg.jpg";

const STORAGE_KEY = "vite-ui-theme";
const DEFAULT_THEME: "light" | "dark" = "dark";

function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return stored === "dark";
      if (typeof document !== "undefined") {
        return (
          document.documentElement.classList.contains("dark") ||
          DEFAULT_THEME === "dark"
        );
      }
    } catch (e) {}
    return DEFAULT_THEME === "dark";
  });

  useEffect(() => {
    const updateTheme = () => {
      try {
        const theme = localStorage.getItem(STORAGE_KEY);
        if (theme) {
          setIsDark(theme === "dark");
        } else if (typeof document !== "undefined") {
          setIsDark(
            document.documentElement.classList.contains("dark") ||
              DEFAULT_THEME === "dark"
          );
        }
      } catch (e) {}
    };

    window.addEventListener("themeChange", updateTheme);
    window.addEventListener("storage", updateTheme);
    updateTheme(); 

    return () => {
      window.removeEventListener("themeChange", updateTheme);
      window.removeEventListener("storage", updateTheme);
    };
  }, []);

  return (
    <>
      {/* bg-gradient-to-br from-gray-900 via-purple-900 to-black */}
      <div
        className="flex flex-col min-h-screen px-4 bg-cover transition-all duration-700 overflow-x-hidden"
        style={{
          backgroundImage: `url(${isDark ? darkBg : lightBg})`,
        }}
      >
        <ThemeProvider defaultTheme={DEFAULT_THEME} storageKey={STORAGE_KEY}>
          <App_Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Project />} />
              <Route path="contact" element={<Contact />} />
              <Route path="resume" element={<Resume file={pdfresume} />} />
              <Route path="*" element={<Page404 />} />
              {/* Add other routes here */}
            </Routes>
          </main>
          <span className="p-8"></span>
          <Footer />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
