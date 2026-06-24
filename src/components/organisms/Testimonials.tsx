import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonialsData } from '../../data/testimonials.data';
import { useIntersectionObserver } from '../../hooks';

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { ref, isVisible } = useIntersectionObserver();

  const total = testimonialsData.length;

  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total]);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next, isHovered]);

  // Show 3 cards (previous, current, next) on desktop
  const visibleCards = [
    testimonialsData[(current - 1 + total) % total],
    testimonialsData[current],
    testimonialsData[(current + 1) % total],
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#F7F8FF]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`text-center mb-12 reveal ${isVisible ? 'visible' : ''}`}>
          <span className="inline-flex items-center px-3 py-1 blue-badge rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            AVIS CLIENTS
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-900 mb-3">Ce qu'ils disent de moi</h2>
          <div className="section-underline" />
        </div>

        {/* Carousel */}
        <div
          className={`relative reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Arrow left */}
          <button
            onClick={prev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex w-10 h-10 bg-white border border-gray-200 rounded-full items-center justify-center shadow-md hover:bg-gray-50 hover:border-primary hover:text-primary transition-all duration-200"
            aria-label="Précédent"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Cards grid */}
          <div className="grid md:grid-cols-3 gap-5 px-2">
            {visibleCards.map((t, idx) => (
              <div
                key={`${t.id}-${idx}`}
                className={`bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-6 transition-all duration-300 ${
                  idx === 1 ? 'ring-2 ring-primary/20 scale-[1.02]' : 'opacity-80'
                }`}
              >
                {/* Author */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}, {t.company}</div>
                  </div>
                </div>

                {/* Quote icon */}
                <div className="text-primary mb-3">
                  <svg width="24" height="20" viewBox="0 0 24 20" fill="currentColor" className="opacity-30">
                    <path d="M0 20V12.571C0 5.53 4.5 1.5 13.5 0L14 2.286C9.5 3.5 7.5 6 7.5 9H11V20H0zm13 0V12.571C13 5.53 17.5 1.5 26.5 0L27 2.286C22.5 3.5 20.5 6 20.5 9H24V20H13z"/>
                  </svg>
                </div>

                {/* Text */}
                <p className="text-gray-600 text-sm leading-relaxed">{t.text}</p>

                {/* Stars */}
                <div className="flex gap-1 mt-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Arrow right */}
          <button
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex w-10 h-10 bg-white border border-gray-200 rounded-full items-center justify-center shadow-md hover:bg-gray-50 hover:border-primary hover:text-primary transition-all duration-200"
            aria-label="Suivant"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Témoignage ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
