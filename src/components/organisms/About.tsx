import React from 'react';
import { MapPin, Languages, Briefcase, Target, Download, Check, Code2, Brain, Rocket, Users } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks';

const softSkills = [
  { icon: Brain, label: "Problem Solving" },
  { icon: Users, label: "Travail en équipe" },
  { icon: Rocket, label: "Innovation" },
  { icon: Target, label: "Rigueur & Précision" }
];

const philosophyTags = ['Accessibilité', 'Expérience Utilisateur', 'Design Atomique', 'Performance', 'Automatisation IA'];

export const About: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F7F8FF]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`mb-12 reveal ${isVisible ? 'visible' : ''}`}>
          <span className="inline-flex items-center px-3 py-1 blue-badge rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            À PROPOS
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold font-poppins text-gray-900 leading-tight mb-4">
            Construire l'avenir du Web.
          </h2>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <p className="text-gray-500 text-base lg:text-lg max-w-xl leading-relaxed">
              Développeur Full-Stack & Designer UI spécialisé dans la création d'expériences numériques haute performance.
            </p>
            <a
              href="/mon_cv.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-[10px] hover:bg-gray-900 hover:text-white transition-all duration-200 text-sm whitespace-nowrap"
            >
              <Download size={16} />
              Télécharger mon CV
            </a>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Identity card — spans 2 cols */}
          <div className={`lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-8 reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-44 h-44 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden border-2 border-blue-100">
                  <img src="/my1.jpg" alt="Avatar de Maxime" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Identity text */}
              <div className="flex-1">
                <h3 className="text-xl font-bold font-poppins text-primary mb-3">Identité &amp; Expertise</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                 Développeur Full-Stack passionné par la création d’expériences numériques, je conçois des applications modernes alliant performance, fiabilité et ergonomie. J’accorde une attention particulière à la qualité du développement, à l’expérience utilisateur et aux détails qui font la différence.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: <Briefcase size={14} className="text-primary" />, label: 'Poste actuel', value: 'Co-fondateur    @Next Code' },
                    { icon: <Target size={14} className="text-primary" />, label: 'Spécialité', value: 'Fullstack + IA + UX' },
                    { icon: <Languages size={14} className="text-primary" />, label: 'Langues', value: 'Français, Anglais, Lingala' },
                    { icon: <MapPin size={14} className="text-primary" />, label: 'Localisation', value: 'Disponible à distance' },
                  ].map((item) => (
                    <div key={item.label} className="bg-gray-50 rounded-xl p-3">
                      <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-1">
                        {item.icon}
                        <span>{item.label}</span>
                      </div>
                      <div className="font-semibold text-gray-800 text-sm">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="flex gap-4 mt-6 pt-6 border-t border-gray-100">
              <div className="flex-1 bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold font-poppins text-gray-900">10+</div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Projets Solo</div>
              </div>
              <div className="flex-1 bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold font-poppins text-gray-900">24+</div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Projets Équipe</div>
              </div>
              <div className="flex-1 bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold font-poppins text-gray-900">3+</div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Ans d'Expérience</div>
              </div>
            </div>
          </div>

          {/* Culture Code card */}
          <div className={`bg-gray-900 rounded-2xl p-8 text-white reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-5">
              <Code2 size={22} />
            </div>
            <h3 className="text-xl font-bold font-poppins mb-3">Culture Code</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Passionné par la propreté du code, j'adhère aux principes SOLID et à l'architecture modulaire pour garantir des systèmes évolutifs et maintenables.
            </p>
            <div className="space-y-3">
              {['TypeScript & Modern JavaScript', 'Architecture Modulaire', 'Intégration IA / API'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={11} className="text-primary" />
                  </div>
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Design card */}
          <div className={`lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-8 reveal reveal-delay-3 ${isVisible ? 'visible' : ''}`}>
            <div className="grid sm:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl font-bold font-poppins text-primary mb-3">Philosophie de l'IA</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Pour moi, l'intelligence artificielle n'est pas un substitut à la créativité humaine, mais un accélérateur d'innovation. Je l'utilise comme un outil stratégique pour automatiser les tâches répétitives, explorer de nouvelles idées et améliorer la qualité des solutions que je conçois. L'objectif reste le même : créer des produits utiles, performants et centrés sur l'humain.
                </p>
                <div className="flex flex-wrap gap-2">
                  {philosophyTags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl h-36 flex items-center justify-center">
                <div className="text-xl text-primary"><Code2 className="w-20 h-20" /></div>
              </div>
            </div>
          </div>

          {/* Soft skills */}
          <div className={`bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-6 reveal reveal-delay-4 ${isVisible ? 'visible' : ''}`}>
            <h3 className="font-bold font-poppins text-gray-900 mb-4">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-3">
              {softSkills.map((skill) => (
                <div key={skill.label} className="flex items-center gap-2 bg-gray-50 rounded-xl p-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <skill.icon size={14} className="text-primary" />
                  </div>
                  <span className="text-sm text-gray-700">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
