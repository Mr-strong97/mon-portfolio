export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  current: boolean;
  description: string[];
  technologies: string[];
  type: 'full-time' | 'freelance' | 'academic';
}

export const experiencesData: Experience[] = [
  {
    id: 1,
    title: 'Responsable Design',
    company: 'Next Code Agency',
    period: '2023 — Présent',
    current: true,
    description: [
      'Conception et supervision du design de tous les projets clients',
      'Création des maquettes UI/UX avec Figma et Adobe XD',
      'Développement Frontend des interfaces web et mobile',
      'Intégration des solutions IA dans les projets clients',
      'Collaboration cross-fonctionnelle avec les équipes dev & marketing',
    ],
    technologies: ['React', 'TypeScript', 'Figma', 'Tailwind', 'IA API'],
    type: 'full-time',
  },
  {
    id: 2,
    title: 'Développeur Fullstack Freelance',
    company: 'Clients Indépendants',
    period: '2023 — Présent',
    current: false,
    description: [
      'Développement d\'applications web sur mesure pour PME et startups',
      'Conception et implémentation de bases de données relationnelles',
      'Intégration d\'APIs tierces (paiement, cartographie, IA)',
      'Livraison de plus de 15 projets web en solo avec satisfaction client',
    ],
    technologies: ['Node.js', 'React', 'MySQL', 'Laravel', 'Vue.js'],
    type: 'freelance',
  },
 {
  id: 3,
  title: 'Développeur Frontend (Projets Académiques)',
  company: 'Université / Projets Personnels',
  period: '2023 — 2024',
  current: false,
  description: [
    'Développement d’interfaces web modernes avec React et Bootstrap',
    'Intégration de maquettes et création de composants réutilisables',
    'Réalisation de projets académiques axés sur le développement web',
    'Application des bonnes pratiques d’accessibilité et d’expérience utilisateur',
  ],
  technologies: ['React', 'JavaScript', 'CSS3', 'Bootstrap', 'Git'],
  type: 'academic',
},
];
