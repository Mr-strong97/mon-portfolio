export interface Skill {
  name: string;
  level: number;
  badge: 'Expert' | 'Avancé' | 'Intermédiaire';
  description: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'AI' | 'UX/UI' | 'Tools';
}

export const skillsData: Skill[] = [
  // Frontend
  { name: 'React.js', level: 92, badge: 'Expert', description: 'Développement de SPAs avec Hooks, Context API et optimisation des performances.', icon: 'Code2', category: 'Frontend' },
  { name: 'TypeScript', level: 88, badge: 'Expert', description: 'Architecture logicielle typée, interfaces complexes et typage strict.', icon: 'FileCode', category: 'Frontend' },
  { name: 'Next.js', level: 85, badge: 'Avancé', description: 'Applications SSR/SSG performantes avec App Router et optimisations SEO.', icon: 'Globe', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, badge: 'Expert', description: 'Design systems utilitaires, animations fluides et responsive design haute fidélité.', icon: 'Palette', category: 'Frontend' },
  { name: 'Vue.js', level: 78, badge: 'Avancé', description: 'Applications réactives avec Composition API et Pinia.', icon: 'Layers', category: 'Frontend' },
  { name: 'JavaScript', level: 90, badge: 'Expert', description: 'ES6+, programmation asynchrone, manipulation du DOM et API web.', icon: 'Braces', category: 'Frontend' },

  // Backend
  { name: 'Node.js', level: 85, badge: 'Avancé', description: 'Environnements serveurs asynchrones, API RESTful et microservices.', icon: 'Server', category: 'Backend' },
  { name: 'Python', level: 80, badge: 'Avancé', description: 'Scripting, automation et développement backend avec Django/FastAPI.', icon: 'Terminal', category: 'Backend' },
  { name: 'Django', level: 75, badge: 'Avancé', description: 'Applications web full-featured avec ORM, auth et API REST.', icon: 'Database', category: 'Backend' },
  { name: 'Laravel', level: 72, badge: 'Intermédiaire', description: 'Applications PHP élégantes avec Eloquent ORM et système de routing.', icon: 'Layout', category: 'Backend' },
  { name: 'PHP', level: 70, badge: 'Intermédiaire', description: 'Développement backend classique et intégration WordPress.', icon: 'Code', category: 'Backend' },

  // Database
  { name: 'PostgreSQL', level: 82, badge: 'Avancé', description: 'Gestion de bases de données relationnelles, modélisation et requêtes complexes SQL.', icon: 'Database', category: 'Database' },
  { name: 'MySQL', level: 80, badge: 'Avancé', description: 'Conception de schémas, requêtes optimisées et procédures stockées.', icon: 'HardDrive', category: 'Database' },
  { name: 'MongoDB', level: 75, badge: 'Avancé', description: 'Bases de données NoSQL, agrégations et indexation performante.', icon: 'Database', category: 'Database' },
  { name: 'Firebase', level: 78, badge: 'Avancé', description: 'Real-time DB, authentification et Cloud Functions.', icon: 'Zap', category: 'Database' },

  // AI
  { name: 'IA Générative', level: 90, badge: 'Expert', description: 'ChatGPT API, Gemini, génération de contenu IA et automatisation intelligente.', icon: 'Brain', category: 'AI' },
  { name: 'Prompt Engineering', level: 88, badge: 'Expert', description: 'Conception de prompts avancés, chaînes de réflexion et optimisation des outputs.', icon: 'Sparkles', category: 'AI' },
  { name: 'Intégration API IA', level: 85, badge: 'Avancé', description: 'Intégration de modèles IA dans des applications web et mobile.', icon: 'Cpu', category: 'AI' },

  // UX/UI
  { name: 'Figma', level: 88, badge: 'Expert', description: 'Conception d\'interfaces, prototypage interactif et design system.', icon: 'PenTool', category: 'UX/UI' },
  { name: 'UX Research', level: 80, badge: 'Avancé', description: 'Analyse utilisateur, wireframing et tests d\'utilisabilité.', icon: 'Search', category: 'UX/UI' },
  { name: 'Design System', level: 85, badge: 'Avancé', description: 'Création de bibliothèques de composants cohérentes et scalables.', icon: 'LayoutGrid', category: 'UX/UI' },

  // Tools
  { name: 'Git & GitHub', level: 90, badge: 'Expert', description: 'Gestion de versions, GitFlow, pull requests et collaboration.', icon: 'GitBranch', category: 'Tools' },
  { name: 'Docker', level: 70, badge: 'Intermédiaire', description: 'Containerisation d\'applications et orchestration basique.', icon: 'Box', category: 'Tools' },
  { name: 'Vercel / Netlify', level: 85, badge: 'Avancé', description: 'Déploiement continu, CI/CD et optimisation des performances.', icon: 'Cloud', category: 'Tools' },
];

export const toolsData = [
  { name: 'Git / GitHub', icon: 'GitBranch' },
  { name: 'Figma', icon: 'PenTool' },
  { name: 'VS Code', icon: 'Code2' },
  { name: 'Postman', icon: 'Send' },
  { name: 'Docker', icon: 'Box' },
  { name: 'Vercel', icon: 'Cloud' },
  { name: 'Canva', icon: 'Palette' },
];

export const skillCategories = ['Frontend', 'Backend', 'Database', 'AI', 'UX/UI', 'Tools'] as const;
