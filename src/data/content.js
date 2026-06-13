// ============================================================
//  Contenu du portfolio — Séraphin Eyala
//  Textes à la 1re personne, sans tiret « — » ni deux-points « : ».
// ============================================================

export const profile = {
  name: 'Séraphin Eyala',
  role: 'Développeur Full Stack · Data & IA',
  formation: 'BUT Informatique · Développement d’applications',
  ecole: 'IUT de Villetaneuse · USPN',
  annees: '2023 à 2026',
  email: 'eyalas472@gmail.com',
  github: 'https://github.com/SKGE93',
  linkedin: 'https://linkedin.com/in/seraphin-eyala',
  portfolio: 'https://github.com/SKGE93',
  tagline: 'Portfolio académique, ma démarche de valorisation des compétences',
}

// Section INTRODUCTION
export const intro = {
  paragraphs: [
    'Je suis passionné d’informatique depuis tout jeune. Ce qui m’a attiré, c’est surtout la curiosité de comprendre comment les choses fonctionnent, et c’est elle qui m’a donné envie d’en faire mon métier. Le BUT Informatique de l’IUT de Villetaneuse m’a ensuite permis d’acquérir des bases solides en développement web, en programmation et en gestion de bases de données, en alternant projets académiques, SAÉ et mises en situation professionnelle.',
    'J’ai un intérêt particulier pour le développement web et mobile, et je m’oriente aujourd’hui vers la data et l’intelligence artificielle. Je nourris cette direction par une veille active sur Hacker News, Reddit et Dev.to autour de l’IA générative et des LLMs.',
    'Mon ambition est de devenir développeur full stack avec une spécialisation Data & IA. C’est pourquoi je poursuis mes études en MSc Data Engineering à Aivancity, école spécialisée en IA et data, après avoir consolidé mes bases tout au long du BUT.',
  ],
  highlights: [
    { k: '6', v: 'compétences du référentiel' },
    { k: '3', v: 'années de BUT' },
    { k: '8+', v: 'projets & SAÉ réalisés' },
  ],
}

// Les 6 COMPÉTENCES du référentiel BUT Informatique
export const competences = [
  {
    id: 'realiser',
    num: '01',
    titre: 'Réaliser',
    sous: 'un développement d’application',
    color: 'var(--violet)',
    resume:
      'Python a été mon tout premier langage et c’est avec lui que j’ai attrapé le goût du code. J’aime partir d’une idée et la voir prendre vie, qu’il s’agisse de manipuler des tableaux ou de bâtir la logique d’une application. En Java j’ai senti une vraie progression le jour où j’ai compris la programmation orientée objet et la gestion des exceptions, et ça m’a donné confiance pour la suite.',
    outils: ['Python', 'Java', 'POO', 'Exceptions (try-catch)', 'Algorithmique'],
    preuves: ['Tableaux Python', 'Calculatrice Java', 'Dessin de formes Java'],
    ressources: ['Introduction à l’algorithmique', 'Développement orienté objet'],
  },
  {
    id: 'optimiser',
    num: '02',
    titre: 'Optimiser',
    sous: 'des applications',
    color: 'var(--coral)',
    resume:
      'L’ensemble de Mandelbrot reste l’un des projets que j’ai le moins aimés tellement la partie mathématique était exigeante à coder. Mais je suis content de l’avoir fait, parce qu’il m’a montré à quel point Python peut être puissant, de la visualisation au calcul avancé. J’en retiens surtout que je sais m’accrocher sur un sujet qui ne me passionne pas au départ.',
    outils: ['Python', 'Nombres complexes', 'Algorithmique', 'Visualisation'],
    preuves: ['Ensemble de Mandelbrot'],
    ressources: ['Algorithmique avancée', 'Mathématiques pour l’informatique'],
  },
  {
    id: 'administrer',
    num: '03',
    titre: 'Administrer',
    sous: 'des systèmes informatiques communicants',
    color: 'var(--sky)',
    resume:
      'C’est le domaine où je me sentais le moins à l’aise au début. Préparer un serveur puis monter un environnement LAMP m’a sorti de ma zone de confort, et certaines étapes me sont restées floues sur le moment. Avec le recul j’y vois ma première vraie immersion dans le réseau, et j’ai appris à rédiger un compte rendu technique clair à l’écrit comme à l’oral.',
    outils: ['Linux', 'Apache', 'MySQL/MariaDB', 'PHP', 'Services réseau'],
    preuves: ['Préparation d’un serveur', 'Environnement LAMP'],
    ressources: ['Systèmes & réseaux', 'Administration système'],
  },
  {
    id: 'gerer',
    num: '04',
    titre: 'Gérer',
    sous: 'des données de l’information',
    color: 'var(--mint)',
    resume:
      'La gestion des données est un domaine où je me suis senti à l’aise assez vite. Concevoir une base universitaire m’a semblé plutôt naturel, et le système de gestion des notes m’a poussé plus loin avec les restrictions d’accès par rôle. C’est là que j’ai vraiment mesuré l’importance de la cohérence et de la sécurité des données.',
    outils: ['SQL', 'Modélisation relationnelle', 'MySQL/MariaDB', 'Gestion des accès'],
    preuves: ['Base de données universitaire', 'Système de gestion des notes'],
    ressources: ['Bases de données', 'Modélisation des données'],
  },
  {
    id: 'conduire',
    num: '05',
    titre: 'Conduire',
    sous: 'un projet',
    color: 'var(--amber)',
    resume:
      'J’ai adoré la simulation client développeur parce qu’elle m’a fait toucher du doigt mon objectif de devenir développeur web. En jouant tour à tour le client et le développeur, j’ai appris à recueillir un besoin, à dialoguer et à composer avec un client qui tarde parfois à répondre. J’ai compris concrètement comment un simple retard de réponse peut décaler tout un projet.',
    outils: ['Cahier des charges', 'Maquettage', 'HTML/CSS/JS', 'Gestion des délais'],
    preuves: ['La ferme de la ville (simulation client/développeur)'],
    ressources: ['Gestion de projet', 'Conduite de projet'],
  },
  {
    id: 'collaborer',
    num: '06',
    titre: 'Collaborer',
    sous: 'au sein d’une équipe informatique',
    color: 'var(--pink)',
    resume:
      'Le site de l’exposition « À quatre mains » reste mon projet de groupe préféré. Le thème artistique m’a laissé beaucoup de liberté créative et j’ai pris plaisir à imaginer une exposition fictive. C’est aussi là que j’ai fait mes premiers pas en JavaScript, et voir ma progression sur une année entière m’a rendu vraiment fier.',
    outils: ['HTML', 'CSS', 'JavaScript', 'Figma', 'Git'],
    preuves: ['Site Basquiat & Warhol'],
    ressources: ['Travail en équipe', 'Communication'],
  },
]

// Bilan des SAÉ — uniquement les vraies SAÉ, du plus récent au plus ancien.
export const saes = [
  {
    code: 'SAÉ · S6',
    img: 'cover-voronoi.png',
    titre: 'Diagramme de Voronoï, application web (S6A01 · Groupe J)',
    objectif:
      'Avec mon groupe, j’ai développé une application web qui génère un diagramme de Voronoï à partir de points fournis par l’utilisateur (un fichier .txt de coordonnées), avec un calcul automatique et un export du résultat en SVG.',
    equipe: 'Projet de groupe (Groupe J)',
    duree: 'Semestre 6',
    taches: [
      'Phase 1, l’implémentation, avec le chargement d’un fichier de coordonnées, le calcul du diagramme et l’export SVG accompagné de contrôles de validité',
      'Phase 2, la comparaison de 4 IA génératives (ChatGPT, Claude, Gemini, Mistral) pour régénérer et améliorer l’application',
      'Phase 3, un travail individuel d’approfondissement',
      'Des tests unitaires avec Vitest et des tests de bout en bout avec Playwright',
    ],
    outils: ['JavaScript', 'D3.js (Delaunay/Voronoï)', 'SVG', 'Vite', 'Vitest', 'Playwright'],
    resultats: 'On a obtenu une application qui génère et exporte des diagrammes de Voronoï, accompagnée d’une étude comparative des implémentations produites par différentes IA.',
    valorisation: 'Des algorithmes géométriques, de la qualité logicielle (tests unitaires et de bout en bout) et un regard critique sur les outils d’IA générative, en plein dans mon orientation Data & IA.',
    pointsForts: ['Je me suis formé à la génération de prompts pour obtenir un contenu de qualité sans gaspiller de tokens', 'J’ai comparé plusieurs IA sur la même tâche et mis en place de vrais tests automatisés (Vitest et Playwright)'],
    vigilance: ['Coder la logique mathématique du diagramme a été la partie la plus pénible', 'La qualité du prompt change tout, un prompt mal rédigé donne un résultat faible'],
    acquis: ['Certaines IA sont plus fortes en code, mais la qualité du prompt joue énormément sur le résultat', 'L’IA n’est pas toujours la meilleure solution, j’ai d’ailleurs eu recours à d’autres approches pendant le projet'],
  },
  {
    code: 'SAÉ · S5',
    img: 'cover-otakugo.png',
    titre: 'OtakuGo, application mobile de recommandation',
    objectif:
      'Avec mon équipe, j’ai conçu une application mobile multiplateforme qui recommande des contenus selon les préférences de l’utilisateur (sélection de genres et fiches détaillées).',
    equipe: 'Équipe de 5',
    duree: 'Semestre 5',
    taches: [
      'Un moteur de recommandation par préférences',
      'Des fiches détaillées (synopsis, note, épisodes)',
      'Une persistance JSON locale',
      'Un développement multiplateforme en Flutter et Dart',
    ],
    outils: ['Flutter', 'Dart', 'JSON', 'Cross-platform'],
    resultats: 'On a livré une application mobile complète qui fonctionne sur Android et iOS.',
    valorisation: 'Une expérience concrète du mobile et du travail en équipe de 5, utile pour des missions full stack ou mobile.',
    pointsForts: ['J’ai réussi un projet sur une techno mobile jamais vue en cours (Flutter et Dart)', 'La liberté de choisir un thème qui nous plaisait m’a donné envie de m’impliquer et d’exprimer ma créativité'],
    vigilance: ['La répartition des tâches à 5 demande une bonne coordination', 'Se lancer sur une technologie inconnue a demandé un temps d’adaptation'],
    acquis: ['J’ai appris à réutiliser mes acquis pour monter vite en compétence sur un nouveau langage', 'J’ai retenu que la liberté sur un projet motive plus que des consignes pas à pas'],
  },
  {
    code: 'SAÉ · S3 & S4',
    img: 'cover-messagerie.png',
    titre: 'Messagerie instantanée avec annotation des messages',
    objectif:
      'Avec mon groupe, j’ai développé une messagerie en temps réel où, pour continuer à échanger, chaque utilisateur doit annoter les messages, ce qui encourage une réflexion active et une meilleure compréhension des échanges.',
    equipe: 'Projet de groupe',
    duree: 'Semestres 3 & 4',
    taches: [
      'La conception des maquettes sur Figma (interface & expérience utilisateur)',
      'L’intégration front en HTML, CSS et JavaScript (structuration, formulaires, dynamisation)',
      'Le back en PHP avec une architecture MVC (logique applicative et base de données)',
      'Les échanges en temps réel via WebSocket (bibliothèque PHP Ratchet)',
    ],
    outils: ['PHP', 'MVC', 'WebSocket', 'Ratchet', 'JavaScript', 'Figma'],
    resultats: 'On a obtenu des conversations fluides et instantanées entre utilisateurs, avec la mécanique d’annotation.',
    valorisation: 'Une maîtrise du temps réel (WebSocket) et d’une architecture MVC propre, directement valorisable en stage ou en alternance web.',
    pointsForts: ['On a bien réparti les tâches et bien progressé sur GitHub en équipe', 'J’ai découvert le temps réel avec les WebSocket'],
    vigilance: ['Quelques complications côté base de données, mais rien de bloquant'],
    acquis: ['Je me suis formé en autonomie sur un langage plus poussé (PHP) que les bases vues en S1', 'J’ai consolidé l’architecture MVC déjà abordée en cours'],
  },
]

// SAÉ de 1re année, une par compétence et par semestre (S1 & S2).
// L'affectation S1/S2 est une 1re proposition à ajuster ; « À compléter » = créneau à remplir.
export const saesY1 = [
  // Réaliser
  {
    competence: 'Réaliser',
    color: 'var(--violet)',
    semestre: 'S1',
    titre: 'Tableaux & calculs en Python',
    desc: 'J’ai manipulé des tableaux et calculé des directions (latitude et longitude). C’est mon premier langage et le début de ma logique de développement.',
    img: 'tableaux-python-1.png',
    gallery: ['tableaux-python-1.png', 'tableaux-python-2.png', 'tableaux-python-3.png', 'tableaux-python-4.png', 'tableaux-python-5.png'],
  },
  {
    competence: 'Réaliser',
    color: 'var(--violet)',
    semestre: 'S2',
    titre: 'POO en Java (calculatrice + formes)',
    desc: 'Une calculatrice avec gestion d’exceptions (try-catch) et un dessin de formes géométriques, où j’ai pratiqué l’héritage, les interfaces et les bibliothèques graphiques.',
    img: 'calculatrice-java-1.png',
    gallery: ['calculatrice-java-1.png', 'calculatrice-java-2.png', 'calculatrice-java-3.png', 'calculatrice-java-4.png', 'calculatrice-java-5.png', 'cover-formejava.png'],
  },
  // Optimiser
  {
    competence: 'Optimiser',
    color: 'var(--coral)',
    semestre: 'S2',
    titre: 'Ensemble de Mandelbrot (Python)',
    desc: 'Des algorithmes qui manipulent des nombres complexes et génèrent des graphes, de l’algorithmique vue sous un angle très mathématique.',
    img: 'mandelbrot-1.png',
    gallery: ['mandelbrot-1.png', 'mandelbrot-2.png', 'mandelbrot-3.png', 'mandelbrot-4.png'],
  },
  // Administrer
  {
    competence: 'Administrer',
    color: 'var(--sky)',
    semestre: 'S1',
    titre: 'Préparation d’un serveur',
    desc: 'Ma première installation de services réseau, avec la rédaction et la présentation d’un compte rendu technique.',
    img: 'terminal-serveur.svg',
  },
  {
    competence: 'Administrer',
    color: 'var(--sky)',
    semestre: 'S2',
    titre: 'Environnement LAMP',
    desc: 'La mise en place d’un poste de développement avec Linux, Apache, MySQL/MariaDB et PHP.',
    img: 'terminal-lamp.svg',
  },
  // Gérer
  {
    competence: 'Gérer',
    color: 'var(--mint)',
    semestre: 'S1',
    titre: 'Base de données universitaire',
    desc: 'J’ai conçu un modèle de données (tables étudiant, évaluation…) pour répondre à un système d’information.',
    img: 'bdd-1.png',
    gallery: ['bdd-1.png', 'bdd-2.png', 'bdd-3.png'],
  },
  {
    competence: 'Gérer',
    color: 'var(--mint)',
    semestre: 'S2',
    titre: 'Système de gestion des notes',
    desc: 'Un modèle de données pour les notes et bilans, avec des restrictions d’accès par rôle (étudiants, enseignants, responsables).',
    img: 'notes-1.png',
    gallery: ['notes-1.png', 'notes-2.png', 'notes-3.png'],
  },
  // Conduire
  {
    competence: 'Conduire',
    color: 'var(--amber)',
    semestre: 'S2',
    titre: 'La ferme de la ville (simulation client / développeur)',
    desc: 'Mon projet de simulation client développeur, j’ai conçu un site sur un thème imposé en intégrant les retours du client à chaque étape, du recueil de besoins jusqu’à la livraison.',
    img: 'simulation-5.png',
    gallery: ['simulation-5.png', 'simulation-1.png', 'simulation-2.png', 'simulation-3.png', 'simulation-4.png', 'simulation-6.png', 'simulation-7.png', 'simulation-8.png', 'simulation-9.png'],
  },
  // Collaborer
  {
    competence: 'Collaborer',
    color: 'var(--pink)',
    semestre: 'S2',
    titre: 'Site « À quatre mains » (Basquiat & Warhol)',
    desc: 'Un projet de groupe, mon premier site complet, avec un site d’exposition et une traduction en anglais via JavaScript.',
    img: 'cover-basquiat.png',
    gallery: ['cover-basquiat.png', 'basquiat-1.png', 'basquiat-2.png', 'basquiat-3.png'],
  },
]

// Volets STAGE — BUT 3 et BUT 2 (2e année)
export const stages = [
  {
    annee: 'BUT 3',
    poste: 'Stagiaire IT',
    entreprise: 'IFFP, Institut Français de Formation Professionnelle',
    lieu: 'Nanterre, Île-de-France',
    periode: 'Mars à juin 2026',
    missions: [
      'J’ai créé KioskSign, une borne d’accueil interactive (Apps Script avec HTML et CSS) alimentée dynamiquement par Google Sheets.',
      'J’ai automatisé le déploiement de signatures Gmail HTML personnalisées sur tout le domaine Google Workspace (clasp et Apps Script).',
      'J’ai développé Workspace Cleaner et Radar Drive pour nettoyer les fichiers orphelins et doublons et produire un rapport de conformité des permissions Drive.',
      'J’ai mis en place un Dashboard MDP et automatisé l’onboarding des nouveaux professeurs (intégration, comptes, accès).',
      'J’ai participé à la modernisation du réseau, avec de la segmentation VLAN, du renforcement de sécurité et de l’administration Google Workspace.',
      'J’ai refondu le site vitrine sous WordPress et Elementor, en documentant techniquement chaque projet.',
    ],
    pointsForts: [
      'J’ai automatisé des processus métiers réels avec un fort impact (Apps Script)',
      'J’ai géré et même apprécié de jongler entre plusieurs chantiers en parallèle',
      'J’ai été force de proposition pour répondre aux besoins du directeur, même sans solution toute prête',
    ],
    vigilance: ['Veiller à viser des missions plus techniques pour progresser davantage'],
    surprises: [
      'L’ambiance était plus qu’agréable, travailler dans un lieu sain change toute la dynamique de travail, même en groupe',
      'J’ai pu toucher à des tâches plus concrètes, ce qui m’a été très utile',
    ],
    problemes: ['Mes tâches n’étaient pas si difficiles, donc je n’ai pas autant monté en compétences que je l’aurais souhaité'],
    acquis: ['Je documente désormais systématiquement chaque outil pour le rendre maintenable'],
    refaire: ['Si c’était à refaire, je demanderais des missions un peu plus techniques pour progresser davantage'],
    competences: ['Réaliser', 'Optimiser', 'Administrer', 'Conduire', 'Collaborer'],
  },
  {
    annee: 'BUT 2',
    poste: 'Stagiaire Informatique & Web',
    entreprise: 'Association Jean Luc François',
    lieu: 'Pantin',
    periode: 'Février à mars 2025',
    missions: [
      'J’ai refondu et maintenu le site WordPress, en optimisant les thèmes, les extensions et les performances.',
      'J’ai mis en place des workflows No Code (Airtable et Zapier) pour réduire les tâches manuelles répétitives.',
      'J’ai été force de proposition technique et je me suis adapté au sein d’une petite équipe.',
    ],
    pointsForts: [
      'Je me suis adapté rapidement pour une première expérience de développeur',
      'J’ai appris à répondre aux besoins techniques de mes collègues et à leur faire gagner du temps',
      'J’ai aimé être utile, apporter une évolution concrète à une entreprise est une sensation très agréable',
    ],
    vigilance: ['Dans un cadre associatif à but non lucratif, il faut composer avec des moyens limités'],
    surprises: ['J’ai été marqué par la gestion constructive des désaccords en réunion, à l’opposé du cadre scolaire'],
    problemes: ['Les tâches étaient assez simples, surtout de la maintenance WordPress, donc peu complexes techniquement'],
    acquis: ['J’ai développé mon écoute active et ma capacité à intégrer les retours pour améliorer mon travail'],
    refaire: ['Si c’était à refaire, je viserais des missions un peu plus complexes que la maintenance WordPress'],
    competences: ['Réaliser', 'Optimiser', 'Collaborer'],
  },
]

// PROJETS — universitaires ET personnels (type clairement affiché)
export const projects = [
  {
    nom: 'CinéSearch',
    img: 'cover-cinesearch.png',
    type: 'Personnel',
    annee: '2026',
    desc: 'J’ai construit cette application pour rechercher des films via l’API TMDB, avec les films populaires, le synopsis, la note et la date de sortie. C’est un projet personnel qui m’a permis de vraiment m’approprier React, ses hooks et la recherche avec debounce.',
    tech: ['React', 'Vite', 'React Router', 'Axios', 'TMDB API'],
    link: 'https://github.com/SKGE93/cine-search',
  },
  {
    nom: 'WeatherDash',
    img: 'cover-weatherdash.png',
    type: 'Personnel',
    annee: '2026',
    desc: 'J’ai développé ce tableau de bord météo en temps réel avec une navigation entre plusieurs vues. C’est mon terrain de jeu pour approfondir Angular, les Observables RxJS et les graphiques Chart.js, et j’aime voir les données prendre vie à l’écran.',
    tech: ['Angular 19', 'TypeScript', 'Chart.js', 'RxJS', 'OpenWeatherMap'],
    link: 'https://github.com/SKGE93/weather-dash',
  },
  {
    nom: 'OtakuGo',
    img: 'cover-otakugo.png',
    type: 'Universitaire',
    annee: '2025',
    desc: 'Avec une équipe de cinq nous avons créé cette application mobile qui recommande des contenus selon les goûts de l’utilisateur. J’étais fier d’y arriver alors que je ne connaissais ni Flutter ni Dart au départ, et ça m’a prouvé que je peux monter vite en compétence.',
    tech: ['Flutter', 'Dart', 'JSON'],
    link: 'https://github.com/SKGE93/Application-mobile-de-recommendations-anime',
  },
  {
    nom: 'Messagerie annotée',
    img: 'cover-messagerie.png',
    type: 'Universitaire',
    annee: '2024',
    desc: 'En groupe nous avons imaginé une messagerie où il faut annoter les messages pour pouvoir continuer à discuter, ce qui pousse à une lecture plus active. J’ai trouvé passionnant de gérer le temps réel avec les WebSocket et de structurer le back en PHP avec une architecture MVC.',
    tech: ['PHP', 'MVC', 'WebSocket', 'Ratchet', 'Figma'],
    link: 'https://github.com/Cheick6/SAE_S4',
  },
  {
    nom: 'Expo « À quatre mains », Basquiat & Warhol',
    img: 'cover-basquiat.png',
    type: 'Universitaire',
    annee: '2023',
    desc: 'J’ai conçu ce site d’exposition fictive autour des œuvres de Basquiat et Warhol. C’est le premier site complet que j’ai terminé et j’en suis sorti vraiment satisfait, surtout en ajoutant une traduction en anglais directement en JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    link: 'https://github.com/SKGE93/Expo_Basquiat',
  },
  {
    nom: 'La ferme de la ville',
    img: 'simulation-5.png',
    type: 'Universitaire',
    annee: '2023',
    desc: 'J’ai joué le rôle du développeur face à un client, en adaptant le site à chaque retour reçu. J’ai aimé cette relation itérative qui m’a appris à accueillir les feedbacks et à garder un code capable d’évoluer.',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    link: 'https://github.com/SKGE93/La-ferme-de-la-ville',
  },
  {
    nom: 'Shapes, formes géométriques en Java',
    img: 'cover-formejava.png',
    type: 'Universitaire',
    annee: '2023',
    desc: 'J’ai dessiné des formes géométriques en Java pour composer une maison entourée de montagnes. C’était mon premier contact avec des bibliothèques externes et la programmation orientée objet, et même si tout n’était pas clair au début, ça m’a donné envie d’aller plus loin.',
    tech: ['Java', 'UML', 'POO'],
    link: '',
  },
]

// SOFT SKILLS & EXPÉRIENCE TERRAIN (sécurité événementielle / JO 2024)
export const softskills = {
  intro:
    'En dehors du code, mon expérience d’agent de sécurité événementielle, notamment lors des Jeux Olympiques 2024, a forgé des qualités humaines que je réinvestis dans le travail en équipe technique.',
  experiences: [
    {
      poste: 'Agent SSIAP1 aux Jeux Olympiques 2024',
      structure: 'BSL Sécurité · Grand Palais, Paris',
      periode: 'Juin à août 2024',
      points: [
        'J’ai géré le public et communiqué avec les touristes dans un contexte international',
        'J’ai travaillé en équipe et dirigé une équipe d’agents',
        'J’ai géré le stress en situation imprévue, avec rigueur et ponctualité',
      ],
    },
    {
      poste: 'Diplômes SSIAP1 & APS',
      structure: 'FP Académie',
      periode: '2024',
      points: [
        'Service de Sécurité Incendie et d’Assistance aux Personnes (SSIAP1)',
        'Agent de Prévention et de Sécurité (APS)',
      ],
    },
  ],
  skills: [
    'Créativité',
    'Ambition',
    'Esprit d’équipe',
    'Autonomie',
    'Rigueur',
    'Gestion du stress',
    'Sens des responsabilités',
    'Communication',
  ],
}

// CONCLUSION
export const conclusion = {
  paragraphs: [
    'Au fil du BUT, mes points forts se sont dessinés. J’ai gagné une vraie polyvalence full stack, du front React et Angular au back PHP, Java et Python, une capacité d’automatisation concrète démontrée en stage, et une aisance à apprendre de nouvelles technologies en autonomie.',
    'Mes points de vigilance restent la priorisation quand les chantiers se multiplient et la structuration du travail de groupe, deux axes que j’ai progressivement améliorés d’une SAÉ à l’autre.',
    'Pour la suite, j’emporte une méthode simple, documenter, découper tôt et écouter les retours. Ces acquis nourrissent directement mon orientation vers la Data & l’IA et ma poursuite d’études en MSc Data Engineering à Aivancity.',
  ],
}
