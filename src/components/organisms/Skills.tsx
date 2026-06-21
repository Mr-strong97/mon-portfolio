import React, { useState } from 'react';
import {
  Code2, FileCode, Globe, Palette, Layers, Braces, Server, Terminal,
  Database, Layout, Code, HardDrive, Zap, Brain, Sparkles, Cpu,
  PenTool, Search, LayoutGrid, GitBranch, Box, Cloud, Send
} from 'lucide-react';
import { skillsData, toolsData, skillCategories } from '../../data/skills.data';
import { useIntersectionObserver } from '../../hooks';

const iconMap: Record<string, React.ReactElement<{ size?: number }>> = {
  Code2: <Code2 size={22} />, FileCode: <FileCode size={22} />, Globe: <Globe size={22} />,
  Palette: <Palette size={22} />, Layers: <Layers size={22} />, Braces: <Braces size={22} />,
  Server: <Server size={22} />, Terminal: <Terminal size={22} />, Database: <Database size={22} />,
  Layout: <Layout size={22} />, Code: <Code size={22} />, HardDrive: <HardDrive size={22} />,
  Zap: <Zap size={22} />, Brain: <Brain size={22} />, Sparkles: <Sparkles size={22} />,
  Cpu: <Cpu size={22} />, PenTool: <PenTool size={22} />, Search: <Search size={22} />,
  LayoutGrid: <LayoutGrid size={22} />, GitBranch: <GitBranch size={22} />, Box: <Box size={22} />,
  Cloud: <Cloud size={22} />, Send: <Send size={22} />,
};

const badgeColor: Record<string, string> = {
  Expert: 'bg-blue-50 text-primary border border-blue-200',
  Avancé: 'bg-indigo-50 text-indigo-700 border border-indigo-200',
  Intermédiaire: 'bg-gray-100 text-gray-600 border border-gray-200',
};

interface SkillCardProps {
  name: string;
  level: number;
  badge: string;
  description: string;
  icon: string;
  animate: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, level, badge, description, icon, animate }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.05)] p-6 card-hover">
    <div className="flex items-start justify-between mb-4">
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary">
        {iconMap[icon] || <Code2 size={22} />}
      </div>
      <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${badgeColor[badge] || badgeColor['Intermédiaire']}`}>
        {badge}
      </span>
    </div>
    <h3 className="font-bold font-poppins text-gray-900 text-lg mb-2">{name}</h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-5">{description}</p>
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Niveau de maîtrise</span>
        <span className="text-sm font-bold text-primary">{level}%</span>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  </div>
);

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Frontend');
  const { ref, isVisible } = useIntersectionObserver();

  const filtered = skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`mb-12 reveal ${isVisible ? 'visible' : ''}`}>
          <span className="inline-flex items-center px-3 py-1 blue-badge rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            EXPERTISE
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-900 mb-3">
            Ma Boîte à Outils Technique
          </h2>
          <p className="text-gray-500 text-base max-w-xl leading-relaxed">
            Un aperçu détaillé des langages, frameworks et outils que je maîtrise pour concevoir des solutions numériques performantes et scalables.
          </p>
        </div>

        {/* Category tabs */}
        <div className={`flex flex-wrap gap-2 mb-10 reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
          {filtered.map((skill) => (
            <SkillCard key={skill.name} {...skill} animate={isVisible} />
          ))}
        </div>

        {/* Tools & Workflow */}
        <div className={`reveal reveal-delay-3 ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-6 bg-primary rounded-full" />
            <h3 className="font-bold font-poppins text-gray-900 text-lg">Outils &amp; Workflow</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {toolsData.map((tool) => (
              <div
                key={tool.name}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:border-primary hover:text-primary hover:shadow-md transition-all duration-200 cursor-default"
              >
                <span className="text-primary">
                  {iconMap[tool.icon] ? React.cloneElement(iconMap[tool.icon], { size: 16 }) : null}
                </span>
                {tool.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
