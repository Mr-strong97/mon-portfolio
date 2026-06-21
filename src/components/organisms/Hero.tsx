import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Zap, Brain, Code2 } from 'lucide-react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { useTypingEffect, useCounter, useIntersectionObserver } from '../../hooks';

const typingWords = ['Fullstack Developer', 'AI Specialist', 'UX Designer', 'Problem Solver'];

const socialLinks = [
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/isaac-mbuyama-9b9781362' },
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/Mr-strong97' },
  { icon: FaYoutube, label: 'YouTube', href: 'https://www.youtube.com/@Monsieurstrong1' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/monsieurstrong01?igsh=cHN4ZTZubXhpMnRk' },
  { icon: FaFacebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61590437656627' },
];

const StatCard: React.FC<{ value: number; suffix: string; label: string; start: boolean }> = ({ value, suffix, label, start }) => {
  const count = useCounter(value, 2000, start);
  return (
    <div className="text-center">
      <div className="text-3xl font-bold font-poppins text-gray-900">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-500 mt-1">{label}</div>
    </div>
  );
};

export const Hero: React.FC = () => {
  const typedText = useTypingEffect(typingWords, 80, 1800);
  const { ref: statsRef, isVisible: statsVisible } = useIntersectionObserver();
  const [loaded] = useState(true);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-[64px] overflow-hidden bg-white">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Decorative blue orb */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-50 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-64px)]">
          {/* Left: Text content */}
          <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 blue-badge px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full pulse-dot" />
              <span> MrStrong01 — Dev &amp; IA</span>
            </div>

            {/* Main title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-gray-900 leading-tight mb-4">
              Fullstack Developer<br />
              <span className="text-primary">&amp; AI Specialist</span>
            </h1>

            {/* Typing text */}
            <div className="text-xl sm:text-2xl font-medium text-gray-500 mb-6 h-8">
              <span className="typing-cursor">{typedText}</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
              Développeur Fullstack passionné, spécialiste en IA Générative et UX Design. Je conçois et développe des projets complets de A à Z — du design à la mise en production.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold rounded-[10px] hover:bg-primary-dark transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Voir mes projets
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent border-2 border-gray-900 text-gray-900 font-semibold rounded-[10px] hover:bg-gray-900 hover:text-white transition-all duration-200"
              >
                Me contacter
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-400 social-icon hover:text-primary"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            {/* Stats */}
            <div
              ref={statsRef as React.RefObject<HTMLDivElement>}
              className="flex items-center gap-8 mt-10 pt-8 border-t border-gray-100"
            >
              <StatCard value={10} suffix="+" label="Projets Solo" start={statsVisible} />
              <div className="w-px h-10 bg-gray-200" />
              <StatCard value={24} suffix="+" label="Projets Équipe" start={statsVisible} />
              <div className="w-px h-10 bg-gray-200" />
              <StatCard value={3} suffix="+" label="Ans d'Exp." start={statsVisible} />
            </div>
          </div>

          {/* Right: Visual cards (matching mockup) */}
          <div
            className={`relative flex items-center justify-center transition-all duration-700 delay-200 ${
              loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Main card */}
            <div className="bg-white rounded-2xl shadow-[0_4px_40px_rgba(37,99,235,0.12)] border border-blue-50 p-8 w-full max-w-[420px]">
              {/* Performance badge */}
              <div className="absolute -top-4 right-8 flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-xl shadow-lg text-sm font-medium">
                <Zap size={14} className="text-yellow-400" />
                <div>
                  <div className="text-xs text-gray-400">Performance</div>
                  <div className="font-bold">99/100</div>
                </div>
                <div className="ml-2 text-primary font-bold text-xs">+84%</div>
              </div>

              {/* Intelligence Interface card */}
              <div className="mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Brain size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold font-poppins text-gray-900 mb-2">Intelligence Interface</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Algorithmes d'adaptation contextuelle pour une UX fluide et prédictive.</p>

                {/* Chart */}
                <div className="mt-4 flex items-end gap-2 h-16">
                  {[40, 65, 45, 80, 60, 90, 75].map((h, idx) => (
                    <div key={idx} className="flex-1 rounded-t-md" style={{
                      height: `${h}%`,
                      background: idx === 5 ? '#2563EB' : idx === 3 ? '#3B82F6' : '#DBEAFE',
                    }} />
                  ))}
                </div>
              </div>

              {/* Bottom cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                    <Brain size={20} className="text-primary" />
                  </div>
                  <div className="font-bold text-gray-900 text-sm">IA Core</div>
                  <div className="text-xs text-gray-500 mt-1">LLM Integration & Agentic Workflows</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                    <Code2 size={20} className="text-primary" />
                  </div>
                  <div className="font-bold text-gray-900 text-sm">UX/UI</div>
                  <div className="text-xs text-gray-500 mt-1">Design System & User Centricity</div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -left-6 top-1/4 float-anim">
              <div className="bg-white shadow-lg border border-blue-100 px-4 py-2.5 rounded-2xl text-sm font-semibold text-gray-900 whitespace-nowrap">
                <span className="text-primary">10+</span> Projets Solo
              </div>
            </div>
            <div className="absolute -right-4 bottom-1/4 float-anim-delay">
              <div className="bg-white shadow-lg border border-blue-100 px-4 py-2.5 rounded-2xl text-sm font-semibold text-gray-900 whitespace-nowrap">
                <span className="text-primary">IA</span> Specialist
              </div>
            </div>

            {/* Skill badges below */}
            <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-3">
              {['Intégration IA', 'UX Strategy', 'Fullstack Dev'].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 text-xs">
          <span>Scrollez pour explorer</span>
          <ChevronDown size={20} className="bounce-arrow" />
        </div>
      </div>
    </section>
  );
};
