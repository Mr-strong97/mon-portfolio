import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, Palette, Code2, FileText, Database, Brain, Book } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks';

const formations = [
  {
    id: 1,
    degree: 'Licence en Informatique',
    institution: 'université de kinshasa (UKIN)',
    period: '2025 — 2026',
    description: 'Formation en génie logiciel, algorithmique avancée et développement web/mobile.',
    icon: GraduationCap,
  },
  {
    id: 2,
    degree: 'Formation Fullstack JavaScript',
    institution: 'OpenClassrooms',
    period: '2024',
    description: 'Parcours intensif React, Node.js et bases de données avec projets professionnalisants.',
    icon: Code2,
  },
  {
    id: 3,
    degree: 'UX Design Professional Certificate',
    institution: 'Google (Coursera)',
    period: '2024',
    description: 'Recherche utilisateur, prototypage, tests d\'utilisabilité et design thinking.',
   icon: Palette,

  },
];

const certifications = [
    {
    name: 'Sciences et Analyse des Données',
    platform: 'HP LIFE',
    year: '2025',
    icon: Database,
  },
  {
    name: 'Prompt Engineering',
    platform: 'Certification',
    year: '2025',
    icon: FileText,
  },
  
  {
    name: 'Gestion de Projet Agile',
    platform: 'Formation Professionnelle',
    year: '2024',
    icon: Award,
  },
  {
    name: 'IA pour les Professionnels',
    platform: 'HP LIFE',
    year: '2023',
    icon: Brain,
  },

];

export const Education: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="education" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`mb-12 reveal ${isVisible ? 'visible' : ''}`}>
          <span className="inline-flex items-center px-3 py-1 blue-badge rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            FORMATION
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-900 mb-3">Formations &amp; Certifications</h2>
          <p className="text-gray-500 text-base max-w-xl leading-relaxed">
            Un parcours d'apprentissage continu pour rester à la pointe de l'innovation technologique.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {/* Formations */}
          <div className={`space-y-4 reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
            <h3 className="font-bold font-poppins text-gray-900 text-lg mb-5 flex items-center gap-2">
              <GraduationCap size={20} className="text-primary" />
              Formations
            </h3>
            {formations.map((f) => (
              <div key={f.id} className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.05)] p-5 card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    <f.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold font-poppins text-gray-900 mb-1">{f.degree}</h4>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-primary font-medium flex items-center gap-1">
                        <MapPin size={12} /> {f.institution}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Calendar size={11} /> {f.period}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className={`reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
            <h3 className="font-bold font-poppins text-gray-900 text-lg mb-5 flex items-center gap-2">
              <Award size={20} className="text-primary" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 shadow-sm p-4 card-hover">
                  <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    <cert.icon size={18} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 text-sm">{cert.name}</div>
                    <div className="text-xs text-gray-500">{cert.platform}</div>
                  </div>
                  <span className="text-xs text-primary font-medium bg-blue-50 px-2.5 py-1 rounded-lg">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>

            {/* Learning card */}
            <div className="mt-4 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
              <div className="text-2xl mb-3"><Book/></div>
              <h4 className="font-bold font-poppins mb-2">En apprentissage continu</h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                Je dédie 5h+ par semaine à l'apprentissage : IA avancée, architecture cloud et nouvelles technologies frontend.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
