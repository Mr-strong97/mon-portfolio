import React, { useState, useMemo } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projectsData, projectCategories } from '../../data/projects.data';
import { useIntersectionObserver } from '../../hooks';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, category, tags, image, liveUrl, githubUrl }) => (
  <div className="group bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden card-hover">
    {/* Image */}
    <div className="relative overflow-hidden h-52">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
      {/* Category badge on image */}
      <div className="absolute top-3 left-3">
        <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-primary rounded-lg">
          {category}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-5">
      <h3 className="font-bold font-poppins text-gray-900 text-lg mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map((tag) => (
          <span key={tag} className="px-2.5 py-1 bg-gray-100 rounded-lg text-xs font-medium text-gray-600">
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              className="text-gray-400 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Live project"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
        <a
          href={liveUrl || '#'}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all duration-200"
        >
          Voir le projet <ArrowRight size={15} />
        </a>
      </div>
    </div>
  </div>
);

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Tous');
  const { ref, isVisible } = useIntersectionObserver();

  const filtered = useMemo(() => {
    if (activeFilter === 'Tous') return projectsData;
    return projectsData.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`mb-10 reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-900 mb-3">
            Réalisations Sélectionnées
          </h2>
          <p className="text-gray-500 text-base max-w-xl leading-relaxed">
            Une exploration de solutions numériques innovantes, alliant intelligence artificielle, interfaces web haute performance et expériences mobiles intuitives.
          </p>
        </div>

        {/* Filter tabs */}
        <div className={`flex flex-wrap gap-2 mb-8 reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-primary text-white border-primary shadow-sm'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
          {filtered.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {/* CTA */}
        <div className={`bg-gray-900 rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 reveal reveal-delay-3 ${isVisible ? 'visible' : ''}`}>
          <div>
            <h3 className="text-2xl font-bold font-poppins text-white mb-2">Prêt à lancer votre projet ?</h3>
            <p className="text-gray-400 text-sm">Discutons de vos objectifs et créons une expérience numérique d'exception.</p>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-shrink-0 px-6 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors shadow-lg text-sm whitespace-nowrap"
          >
            Démarrer une collaboration
          </button>
        </div>
      </div>
    </section>
  );
};
