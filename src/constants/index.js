import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `Je suis un développeur full stack passionné et doué pour créer des applications Web robustes et évolutives. Avec 5 ans d'expérience pratique, j'ai perfectionné mes compétences dans les technologies front-end comme React et Next.js, ainsi que dans les technologies back-end comme Node.js, MySQL, PostgreSQL et MongoDB. Mon objectif est de mettre à profit mon expertise pour créer des solutions innovantes qui stimulent la croissance de l'entreprise et offrent des expériences utilisateur exceptionnelles.`;

export const ABOUT_TEXT = `Je suis un développeur full stack dévoué et polyvalent, passionné par la création d'applications Web efficaces et conviviales. Avec 5 ans d'expérience professionnelle, j'ai travaillé avec diverses technologies, notamment React, Next.js, Node.js, MySQL, PostgreSQL et MongoDB. Mon parcours dans le développement Web a commencé avec une profonde curiosité pour le fonctionnement des choses, et il a évolué vers une carrière où je m'efforce continuellement d'apprendre et de m'adapter aux nouveaux défis. Je m'épanouis dans des environnements collaboratifs et j'aime résoudre des problèmes complexes pour proposer des solutions de haute qualité. En dehors du codage, j'aime rester actif, explorer de nouvelles technologies et contribuer à des projets open source.`;

export const EXPERIENCES = [  
  {
    year: "2024 - Present", 
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Dirigé une équipe de développement et de maintenance d'applications Web utilisant JavaScript, React.js et Node.js. Implémentation d'API RESTful et intégration des bases de données MongoDB. Collaborer avec les parties prenantes pour définir les exigences et les délais du projet.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2023 - 2024",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Conception et développement d'interfaces utilisateur pour les applications Web utilisant Next.js et React. Travailler en étroite collaboration avec les développeurs back-end pour intégrer les composants front-end aux API Node.js. Implémentation de designs réactifs et optimisation des performances frontend.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2022 - 2023",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Développement et maintenance d'applications Web à l'aide de JavaScript, React.js et Node.js. Conception et mise en œuvre d'API RESTful pour la communication de données. Collaboration avec des équipes interfonctionnelles pour livrer des produits logiciels de haute qualité dans les délais.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2021 - 2022",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contribution au développement d'applications Web utilisant JavaScript, React.js et Node.js. Gestion de bases de données et mise en œuvre de solutions de stockage de données à l'aide de MongoDB. Travailler en étroite collaboration avec les chefs de produits pour prioriser les fonctionnalités et les améliorations.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const EDUCATION = [
  {
    year: "2023 (6 mois)",
    degree: "Formation en Graphisme",
    institution: "Centre de Formation en Arts Numériques, Bénin",
    description: `Développement de compétences en design graphique à l'aide des logiciels Adobe Photoshop, Illustrator et InDesign. Création de visuels pour des projets de branding, marketing et communication visuelle.`,
    technologies: ["Adobe Photoshop", "Illustrator", "InDesign"],
  },
  {
    year: "2022 (3 mois)",
    degree: "Certificat en Marketing Digital",
    institution: "Google Digital Garage",
    description: `Apprentissage des bases du marketing digital, y compris l'optimisation des moteurs de recherche (SEO), la publicité en ligne, et la gestion des réseaux sociaux. Approfondissement des stratégies de contenu numérique.`,
    technologies: ["SEO", "Google Ads", "Facebook Ads"],
  },
  {
    year: "2021 - 2022",
    degree: "Licence professionnelle en Systèmes Informatiques et Logiciels",
    institution: "Université de Cotonou, Bénin",
    description: `Acquisition de compétences en développement logiciel, gestion de bases de données et en conception de systèmes informatiques. Projets pratiques incluant la conception d'applications web et mobiles, ainsi que l'intégration des bases de données.`,
    technologies: ["Java", "PHP", "SQL", "JavaScript"],
  },
  {
    year: "2019 - 2021",
    degree: "BTS en Informatique de Gestion",
    institution: "Institut Supérieur de Technologie Appliquée, Bénin",
    description: `Formation en gestion de systèmes d'information, développement d'applications d'entreprise, et analyse des besoins informatiques. Participation à des stages professionnels pour acquérir une expérience concrète du secteur.`,
    technologies: ["C#", "VB.NET", "Oracle", "MySQL"],
  }
];


export const PROJECTS = [
  {
    title: "Site E-Commerce ",
    image: project1,
    description:
      "Un site Web de commerce électronique entièrement fonctionnel avec des fonctionnalités telles que la liste des produits, le panier d'achat et l'authentification des utilisateurs.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Application de gestion des tâches",
    image: project2,
    description:
      "Une application de gestion de tâches et de projets, avec des fonctionnalités telles que la création de tâches, l'affectation et le suivi des progrès.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "Un site Web de portfolio personnel présentant des projets, des compétences et des coordonnées.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Plateforme de blogs",
    image: project4,
    description:
      "Une plate-forme de création et de publication d'articles de blog, avec des fonctionnalités telles que l'édition de texte enrichi, les commentaires et les profils utilisateur.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "BENIN, Abomey-calavi ",
  phoneNo: "+229 67 69 76 70 ",
  email: "missimahouzoun@gmail.com",
};
