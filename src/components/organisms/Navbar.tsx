import React, { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';
import { useScrollSpy } from '../../hooks';

const navLinks = [
  { id: 'hero', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'experience', label: 'Expériences' },
  { id: 'projects', label: 'Projets' },
  { id: 'testimonials', label: 'Témoignages' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy(navLinks.map(l => l.id));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 navbar-blur shadow-[0_2px_16px_rgba(0,0,0,0.06)] border-b border-gray-100'
            : 'bg-white'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[64px]">
            {/* Logo */}
            <button
              onClick={() => scrollTo('hero')}
              className="flex items-center gap-2 text-primary font-bold text-xl font-poppins hover:opacity-80 transition-opacity"
            >
              <Code2 size={22} className="text-primary" />
              <span>MrStrong01</span>
            </button>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg
                    ${activeSection === link.id
                      ? 'text-primary font-semibold'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0.5 left-4 right-4 h-[2px] bg-primary rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => scrollTo('contact')}
                className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-[10px] hover:bg-primary-dark transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Me contacter
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/20" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute top-[64px] left-0 right-0 bg-white shadow-xl border-t border-gray-100 transition-transform duration-300 ${
            menuOpen ? 'translate-y-0' : '-translate-y-4'
          } max-h-[calc(100vh-64px)] overflow-y-auto`}
        >
          <div className="flex flex-col py-4 px-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left py-3 px-4 text-base font-medium rounded-xl mb-1 transition-colors ${
                  activeSection === link.id
                    ? 'text-primary bg-blue-50 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="mt-3 py-3 px-4 bg-primary text-white font-semibold rounded-xl text-center hover:bg-primary-dark transition-colors"
            >
              Me contacter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
