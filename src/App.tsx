import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  FileDown,
} from 'lucide-react';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Education } from './components/Education';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });

      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
  ];

  return (
    <div className="min-h-screen">
      <nav
        className={`fixed top-0 left-0 h-screen w-64 glass-nav transform transition-transform duration-300 z-50 
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold gradient-text mb-8">Portfolio</h2>
          <div className="space-y-2">
            {navItems.map(({ id, label, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`nav-item ${activeSection === id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                <Icon className="w-5 h-5" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <button
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/10 lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <main className="lg:ml-64">
        <section
          id="home"
          className="min-h-screen relative flex items-center section-padding"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-blue-900/20" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
          </div>
          <div className="relative z-10 max-w-4xl">
            <div className="animate-fade-left">
              <h1 className="text-7xl font-bold mb-6 gradient-text">
                Aarmendra Singh
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                Data Scientist & Machine Learning Engineer
              </p>
            </div>
            <div
              className="flex gap-6 mb-12 animate-fade-right"
              style={{ animationDelay: '0.3s' }}
            >
              <a
                href="https://github.com/Aarmendrasingh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/aarmendra-singh-%F0%9F%9A%80-7323b2265/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:aarmendrasingh5568@gmail.com"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <button
              onClick={() => window.open('/Aarmendra_Singh.pdf', '_blank')}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-white 
                font-medium flex items-center gap-2 hover:opacity-90 transition-all hover:scale-105 animate-fade-right"
              style={{ animationDelay: '0.6s' }}
            >
              Download Resume
              <FileDown className="w-5 h-5" />
            </button>
          </div>
        </section>

        <About />
        <Projects />
        <Education />
      </main>
    </div>
  );
}

export default App;
