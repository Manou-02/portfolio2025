export interface Project {
  id: string;
  title: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
  image: string;
  category: "frontend" | "fullstack" | "mobile";
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "ecommerce-analytics",
    title: {
      en: "E-commerce Analytics Platform",
      fr: "Plateforme d'Analyse E-commerce",
    },
    description: {
      en: "Comprehensive analytics dashboard for e-commerce businesses with real-time data visualization, inventory management, and customer insights.",
      fr: "Tableau de bord d'analyse complet pour les entreprises e-commerce avec visualisation de données en temps réel, gestion d'inventaire et insights clients.",
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    category: "fullstack",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    liveUrl: "https://ecommerce-analytics.demo",
    githubUrl: "https://github.com/manourakoto/ecommerce-analytics",
  },
  {
    id: "travel-booking",
    title: {
      en: "Travel Booking Platform",
      fr: "Plateforme de Réservation de Voyage",
    },
    description: {
      en: "Modern travel booking interface with advanced search, interactive maps, and seamless user experience for discovering and booking destinations.",
      fr: "Interface de réservation de voyage moderne avec recherche avancée, cartes interactives et expérience utilisateur fluide pour découvrir et réserver des destinations.",
    },
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    category: "frontend",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Mapbox"],
    liveUrl: "https://travel-booking.demo",
    githubUrl: "https://github.com/manourakoto/travel-booking",
  },
  {
    id: "crypto-trading",
    title: {
      en: "Crypto Trading Platform",
      fr: "Plateforme de Trading Crypto",
    },
    description: {
      en: "Secure cryptocurrency trading platform with real-time market data, portfolio tracking, and advanced charting capabilities.",
      fr: "Plateforme de trading de cryptomonnaies sécurisée avec données de marché en temps réel, suivi de portefeuille et capacités de graphiques avancées.",
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    category: "fullstack",
    technologies: ["Next.js", "WebSocket", "Chart.js", "Redis"],
    liveUrl: "https://crypto-trading.demo",
    githubUrl: "https://github.com/manourakoto/crypto-trading",
  },
  {
    id: "social-media-app",
    title: {
      en: "Social Media App",
      fr: "Application de Médias Sociaux",
    },
    description: {
      en: "Modern social media application with real-time messaging, story features, and advanced content sharing capabilities.",
      fr: "Application de médias sociaux moderne avec messagerie en temps réel, fonctionnalités de stories et capacités de partage de contenu avancées.",
    },
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    category: "frontend",
    technologies: ["React Native", "Expo", "Firebase", "Socket.io"],
    liveUrl: "https://social-app.demo",
    githubUrl: "https://github.com/manourakoto/social-media-app",
  },
  {
    id: "project-management",
    title: {
      en: "Project Management Tool",
      fr: "Outil de Gestion de Projet",
    },
    description: {
      en: "Collaborative project management platform with Kanban boards, team chat, file sharing, and advanced reporting features.",
      fr: "Plateforme de gestion de projet collaborative avec tableaux Kanban, chat d'équipe, partage de fichiers et fonctionnalités de reporting avancées.",
    },
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    category: "fullstack",
    technologies: ["React", "Express.js", "MongoDB", "Socket.io"],
    liveUrl: "https://project-mgmt.demo",
    githubUrl: "https://github.com/manourakoto/project-management",
  },
  {
    id: "fitness-app",
    title: {
      en: "Fitness Tracking App",
      fr: "Application de Suivi Fitness",
    },
    description: {
      en: "Cross-platform fitness app with workout tracking, progress monitoring, social features, and personalized training plans.",
      fr: "Application fitness multi-plateforme avec suivi d'entraînement, surveillance des progrès, fonctionnalités sociales et plans d'entraînement personnalisés.",
    },
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    category: "mobile",
    technologies: ["React Native", "Expo", "SQLite", "HealthKit"],
    liveUrl: "https://fitness-app.demo",
    githubUrl: "https://github.com/manourakoto/fitness-app",
  },
];

export interface ExperienceItem {
  id: string;
  title: {
    en: string;
    fr: string;
  };
  company: {
    en: string;
    fr: string;
  };
  period: string;
  description: {
    en: string;
    fr: string;
  };
  achievements: {
    en: string[];
    fr: string[];
  };
  icon: "briefcase" | "code" | "rocket";
  color: "primary" | "accent" | "chart-1";
}

export const experiences: ExperienceItem[] = [
  {
    id: "senior-fullstack",
    title: {
      en: "Senior Full-Stack Developer",
      fr: "Développeur Full-Stack Senior",
    },
    company: {
      en: "TechCorp Solutions",
      fr: "TechCorp Solutions",
    },
    period: "2022 - Present",
    description: {
      en: "Leading the development team in creating scalable web applications using modern React and Node.js technologies.",
      fr: "Direction de l'équipe de développement dans la création d'applications web évolutives utilisant les technologies React et Node.js modernes.",
    },
    achievements: {
      en: [
        "Led development of 5+ enterprise applications",
        "Reduced page load times by 40% through optimization",
        "Mentored 3 junior developers",
      ],
      fr: [
        "Dirigé le développement de 5+ applications d'entreprise",
        "Réduit les temps de chargement de page de 40% grâce à l'optimisation",
        "Encadré 3 développeurs juniors",
      ],
    },
    icon: "briefcase",
    color: "primary",
  },
  {
    id: "frontend-developer",
    title: {
      en: "Frontend Developer",
      fr: "Développeur Frontend",
    },
    company: {
      en: "WebCraft Agency",
      fr: "Agence WebCraft",
    },
    period: "2020 - 2022",
    description: {
      en: "Developed and maintained multiple client projects, focusing on performance and user experience optimization.",
      fr: "Développé et maintenu plusieurs projets clients, en se concentrant sur les performances et l'optimisation de l'expérience utilisateur.",
    },
    achievements: {
      en: [
        "Built 15+ responsive web applications",
        "Implemented design systems and component libraries",
        "Improved client satisfaction scores by 25%",
      ],
      fr: [
        "Construit 15+ applications web responsives",
        "Implémenté des systèmes de design et des bibliothèques de composants",
        "Amélioré les scores de satisfaction client de 25%",
      ],
    },
    icon: "code",
    color: "accent",
  },
  {
    id: "junior-developer",
    title: {
      en: "Junior Web Developer",
      fr: "Développeur Web Junior",
    },
    company: {
      en: "StartupCo",
      fr: "StartupCo",
    },
    period: "2019 - 2020",
    description: {
      en: "Started my professional journey in a fast-paced startup environment, quickly learning and adapting to new technologies.",
      fr: "J'ai commencé mon parcours professionnel dans un environnement de startup dynamique, apprenant et m'adaptant rapidement aux nouvelles technologies.",
    },
    achievements: {
      en: [
        "Contributed to core product development",
        "Learned modern JavaScript frameworks",
        "Collaborated with design and product teams",
      ],
      fr: [
        "Contribué au développement du produit principal",
        "Appris les frameworks JavaScript modernes",
        "Collaboré avec les équipes de design et produit",
      ],
    },
    icon: "rocket",
    color: "chart-1",
  },
];
