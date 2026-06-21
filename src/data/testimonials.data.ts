export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Sophie Laurent',
    role: 'CTO',
    company: 'InnovaSoft',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b17c?w=80&h=80&fit=crop&crop=face',
    text: 'Un expert technique exceptionnel qui comprend non seulement le code, mais aussi les enjeux business. Les délais ont été respectés avec une qualité de code irréprochable.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marc Dubois',
    role: 'Fondateur',
    company: 'Creative Pulse',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    text: 'Travailler avec ce professionnel a été une révélation. Son approche méthodique et sa capacité à proposer des solutions innovantes ont transformé notre produit.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Julian Clarke',
    role: 'Lead Dev',
    company: 'CloudSphere',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    text: 'L\'intégration technique était parfaite. La documentation fournie est d\'une clarté rare, ce qui a grandement facilité la passation avec notre équipe interne.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Amina Kone',
    role: 'Product Manager',
    company: 'FinTech Hub',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face',
    text: 'Isaac a une capacité rare à comprendre rapidement les besoins métier et à les traduire en solutions techniques élégantes. Je recommande vivement !',
    rating: 5,
  },
  {
    id: 5,
    name: 'David Mbeki',
    role: 'CEO',
    company: 'StartupLab',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
    text: 'Une expertise en IA générative impressionnante combinée à un sens du design exceptionnel. MrStrong01 a dépassé toutes nos attentes sur ce projet.',
    rating: 5,
  },
];
