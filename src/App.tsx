import './App.css';
import { ThemeProvider } from '@/components/theme-provider';
import { useEffect, useState } from 'react';
import Home from '@/components/pages/Home';
import { Routes, Route } from 'react-router-dom';
import App_Header from '@/components/pages/Header';
import About from '@/components/pages/About';
import Project from '@/components/pages/Project';
import Contact from '@/components/pages/Contact';
import Footer from '@/components/pages/Footer';
import Resume from '@/components/pages/Resume';
import pdfresume from '@/assets/documents/arowoloisaac.pdf';
import Page404 from '@/components/pages/Page404';
import Blog from '@/components/pages/Blog';
import { Toaster } from '@/components/ui/sonner';

const STORAGE_KEY = 'vite-ui-theme';
const DEFAULT_THEME: 'light' | 'dark' = 'dark';

function App() {
   const [isDark, setIsDark] = useState<boolean>(() => {
      try {
         const stored = localStorage.getItem(STORAGE_KEY);
         if (stored) return stored === 'dark';
         if (typeof document !== 'undefined') {
            return (
               document.documentElement.classList.contains('dark') ||
               DEFAULT_THEME === 'dark'
            );
         }
      } catch (e) {}
      return DEFAULT_THEME === 'dark';
   });
   isDark;
   useEffect(() => {
      const updateTheme = () => {
         try {
            const theme = localStorage.getItem(STORAGE_KEY);
            if (theme) {
               setIsDark(theme === 'dark');
            } else if (typeof document !== 'undefined') {
               setIsDark(
                  document.documentElement.classList.contains('dark') ||
                     DEFAULT_THEME === 'dark'
               );
            }
         } catch (e) {}
      };

      window.addEventListener('themeChange', updateTheme);
      window.addEventListener('storage', updateTheme);
      updateTheme();

      return () => {
         window.removeEventListener('themeChange', updateTheme);
         window.removeEventListener('storage', updateTheme);
      };
   }, []);

   return (
      <>
         <div className="relative z-50 min-h-screen">
            <ThemeProvider
               defaultTheme={DEFAULT_THEME}
               storageKey={STORAGE_KEY}>
               <App_Header />

               <main className="flex-1">
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/about" element={<About />} />
                     <Route path="projects" element={<Project />} />
                     <Route path="contact" element={<Contact />} />
                     <Route
                        path="resume"
                        element={<Resume file={pdfresume} />}
                     />
                     <Route path="blog" element={<Blog />} />
                     <Route path="*" element={<Page404 />} />
                  </Routes>
               </main>
               <Toaster position="top-right" richColors />
               <Footer />
            </ThemeProvider>
         </div>
      </>
   );
}

export default App;
