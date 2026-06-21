import React from 'react';
import { Briefcase, TrendingUp, Users, Rocket } from 'lucide-react';
import { experiencesData } from '../../data/experiences.data';
import { useIntersectionObserver, useCounter } from '../../hooks';

const statCards = [
  { icon: <TrendingUp size={20} className="text-primary" />, value: 4, suffix: '+', label: 'Ans d\'expérience cumulée' },
  { icon: <Rocket size={20} className="text-primary" />, value: 34, suffix: '+', label: 'Projets livrés avec succès' },
  { icon: <Users size={20} className="text-primary" />, value: 5, suffix: '+', label: 'Équipes accompagnées' },
];

const StatCounterCard: React.FC<{ icon: React.ReactNode; value: number; suffix: string; label: string; start: boolean }> = ({
  icon, value, suffix, label, start
}) => {
  const count = useCounter(value, 2000, start);
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-6 flex items-center gap-4">
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold font-poppins text-gray-900">{count}{suffix}</div>
        <div className="text-sm text-gray-500">{label}</div>
      </div>
    </div>
  );
};

export const Experience: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#F7F8FF]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-900 mb-3">Mon Parcours</h2>
          <p className="text-gray-500 text-base max-w-lg mx-auto leading-relaxed">
            Une rétrospective de mon évolution professionnelle, alliant design stratégique, développement technique et créativité numérique.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16">
          {/* Timeline */}
          <div className={`relative reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-200 to-transparent" />

            <div className="space-y-10">
              {experiencesData.map((exp) => (
                <div key={exp.id} className="relative flex gap-6 pl-14">
                  {/* Timeline dot */}
                  <div className={`absolute left-[15px] top-1.5 w-[22px] h-[22px] rounded-full border-4 border-white shadow-md flex-shrink-0 ${
                    exp.current ? 'bg-primary' : 'bg-blue-200'
                  }`} />

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.05)] p-6 card-hover">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <span className="text-xs text-primary font-semibold uppercase tracking-wider">{exp.period}</span>
                        <h3 className="text-lg font-bold font-poppins text-gray-900 mt-0.5">{exp.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Briefcase size={13} className="text-gray-400" />
                          <span className="text-sm text-gray-500 font-medium">{exp.company}</span>
                        </div>
                      </div>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-semibold">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full pulse-dot" />
                          En poste
                        </span>
                      )}
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 bg-blue-50 text-primary text-xs font-medium rounded-lg border border-blue-100">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats cards */}
          <div className={`space-y-4 reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
            {statCards.map((stat) => (
              <StatCounterCard key={stat.label} {...stat} start={isVisible} />
            ))}

            {/* Available CTA */}
            <div className="bg-primary rounded-2xl p-6 text-white mt-4">
              <h3 className="font-bold text-lg mb-2">Disponible pour vos projets</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                Je suis ouvert aux missions freelance, CDI et collaborations à distance. Discutons de votre prochain projet !
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-3 bg-white text-primary font-semibold rounded-xl text-sm hover:bg-blue-50 transition-colors"
              >
                Prendre contact →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
