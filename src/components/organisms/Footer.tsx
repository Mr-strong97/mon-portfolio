import React from 'react';
import { Code2 } from 'lucide-react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const quickLinks = [
  { label: 'Accueil', id: 'hero' },
  { label: 'À propos', id: 'about' },
  { label: 'Compétences', id: 'skills' },
  { label: 'Projets', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const socials = [
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/isaac-mbuyama-9b9781362/' },
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/Mr-strong97' },
  { icon: FaYoutube, label: 'YouTube', href: 'https://www.youtube.com/@Monsieurstrong1' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/monsieurstrong01?igsh=cHN4ZTZubXhpMnRk' },
  { icon: FaFacebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61590437656627' },
];

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Top section */}
        <div className="grid sm:grid-cols-3 gap-10 py-14 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-xl font-poppins mb-3">
              <Code2 size={22} className="text-primary" />
              <span>MrStrong01</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Développeur Fullstack passionné, spécialiste en IA Générative et UX Design.
            </p>
            <p className="text-primary text-sm font-medium italic">
              " Je code ma vie, une ligne à la fois"
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4 uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold text-white mb-4 uppercase text-xs tracking-widest">Réseaux Sociaux</h4>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition-all duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 MrStrong01 — Tous droits réservés
          </p>
          <p className="text-gray-500 text-sm">
            Conçu & Développé avec par{' '}
            <span className="text-primary font-medium">MrStrong01</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
