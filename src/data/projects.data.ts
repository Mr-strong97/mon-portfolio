export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'Web' | 'Mobile' | 'IA' | 'Design' | 'Équipe';
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'AI Content Studio',
    description: 'Plateforme de génération de contenu visuel propulsée par l\'intelligence artificielle pour les équipes créatives.',
    category: 'Mon Parcours',
    tags: ['React', 'OpenAI', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: 'https://github.com/Mr-strong97',
    featured: true,
  },
  {
    id: 2,
    title: 'Portail Client Nexus',
    description: 'Interface de gestion centralisée pour clients B2B, optimisant le suivi des flux logistiques en temps réel.',
    category: 'Web',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: 'https://github.com/Mr-strong97',
    featured: true,
  },
  {
    id: 3,
    title: 'SwiftPay Mobile',
    description: 'Application de paiement mobile sécurisée avec intégration biométrique et gestion de portefeuille multi-devises.',
    category: 'Mobile',
    tags: ['React Native', 'Firebase', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: 'https://github.com/Mr-strong97',
    featured: true,
  },
  {
    id: 4,
    title: 'Analytica Core',
    description: 'Moteur d\'analyse prédictive utilisant le machine learning pour anticiper les tendances du marché financier.',
    category: 'IA',
    tags: ['Python', 'TensorFlow', 'Django'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: 'https://github.com/Mr-strong97',
  },
  {
    id: 5,
    title: 'HealthSync',
    description: 'Application compagnon pour objets connectés, centralisant les données de santé pour un suivi médical préventif.',
    category: 'Mobile',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: 'https://github.com/Mr-strong97',
  },
  {
    id: 6,
    title: 'Optima Logistics',
    description: 'Système ERP web complet pour l\'optimisation des tournées de livraison et la gestion des inventaires complexes.',
    category: 'Équipe',
    tags: ['Laravel', 'MySQL', 'Vue.js'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: 'https://github.com/Mr-strong97',
  },
  {
    id: 7,
    title: 'Design System Pro',
    description: 'Bibliothèque de composants UI unifiée pour une équipe de 20 designers, améliorant la cohérence de 80%.', 
    category: 'Design',
    tags: ['Figma', 'Storybook', 'React'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: 'https://github.com/Mr-strong97',
  },
  {
    id: 8,
    title: 'ChatBot IA Assistant',
    description: 'Assistant conversationnel intelligent intégrant GPT-4 pour le support client automatisé 24/7.',
    category: 'IA',
    tags: ['OpenAI', 'React', 'WebSocket'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: 'https://github.com/Mr-strong97',
  },
  {
    id: 9,
    title: 'E-Commerce Platform',
    description: 'Plateforme e-commerce complète avec gestion de catalogue, panier, paiement et tableau de bord admin.',
    category: 'Équipe',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: 'https://github.com/Mr-strong97',
  },
];

export const projectCategories = ['Tous', 'Web', 'Mobile', 'IA', 'Design', 'Équipe'] as const;
