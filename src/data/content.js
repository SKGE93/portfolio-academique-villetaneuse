// ============================================================
//  Contenu du portfolio — Séraphin Eyala
//  Rempli depuis PROFIL_COMPLET.md. Les passages d'auto-évaluation
//  marqués « (à confirmer) » sont des propositions à valider/affiner.
//  Le design s'adapte automatiquement à ce fichier.
// ============================================================

export const profile = {
  name: 'Séraphin Eyala',
  role: 'Développeur Full-Stack — Data & IA',
  formation: 'BUT Informatique — Développement d’applications',
  ecole: 'IUT de Villetaneuse · USPN',
  annees: '2023 — 2026',
  email: 'eyalas472@gmail.com',
  github: 'https://github.com/SKGE93',
  linkedin: 'https://linkedin.com/in/seraphin-eyala',
  portfolio: 'https://github.com/SKGE93',
  tagline: 'Portfolio académique — démarche de valorisation des compétences',
}

// Section INTRODUCTION
export const intro = {
  paragraphs: [
    'Passionné d’informatique depuis tout jeune, j’en ai fait mon métier. Le BUT Informatique de l’IUT de Villetaneuse m’a permis d’acquérir des compétences solides en développement web, en programmation et en gestion de bases de données, en alternant projets académiques, SAÉ et mises en situation professionnelle.',
    'J’ai un intérêt particulier pour le développement web et mobile, et je m’oriente aujourd’hui vers la data et l’intelligence artificielle — une veille active sur Hacker News, Reddit et Dev.to autour de l’IA générative et des LLMs nourrit cette direction.',
    'Mon ambition : devenir développeur full-stack avec une spécialisation Data & IA. C’est pourquoi je poursuis mes études en MSc Data Engineering à Aivancity, école spécialisée en IA et data, après avoir consolidé mes bases tout au long du BUT.',
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
      'Concevoir et développer des applications de bout en bout : du premier algorithme en Python aux SPA modernes React/Angular, en passant par la POO en Java (héritage, interfaces, gestion d’exceptions).',
    outils: ['Python', 'Java', 'React', 'Angular', 'PHP MVC', 'TypeScript'],
    saes: ['Shapes (formes Java)', 'CinéSearch', 'WeatherDash'],
    ressources: ['Algorithmique', 'Développement orienté objet', 'Développement web'],
  },
  {
    id: 'optimiser',
    num: '02',
    titre: 'Optimiser',
    sous: 'des applications',
    color: 'var(--coral)',
    resume:
      'Analyser et améliorer des algorithmes : manipulation de nombres complexes et génération de l’ensemble de Mandelbrot en Python, sensibilisation à la complexité et à la performance.',
    outils: ['Python', 'Algorithmique', 'Structures de données'],
    saes: ['Ensemble de Mandelbrot'],
    ressources: ['Mathématiques pour l’informatique', 'Algorithmique avancée'],
  },
  {
    id: 'administrer',
    num: '03',
    titre: 'Administrer',
    sous: 'des systèmes informatiques communicants',
    color: 'var(--sky)',
    resume:
      'Installer et configurer des services réseau : préparation de serveurs, environnement LAMP, segmentation VLAN et sécurité, administration Google Workspace — avec rédaction de comptes rendus techniques.',
    outils: ['Linux', 'Apache', 'MySQL/MariaDB', 'Docker', 'VLAN', 'Google Workspace'],
    saes: ['Préparation d’un serveur', 'Environnement LAMP', 'Modernisation réseau (stage)'],
    ressources: ['Systèmes & réseaux', 'Administration système'],
  },
  {
    id: 'gerer',
    num: '04',
    titre: 'Gérer',
    sous: 'des données de l’information',
    color: 'var(--mint)',
    resume:
      'Concevoir et exploiter des modèles de données : base de données universitaire, système de gestion des notes avec restrictions d’accès par rôle, modélisation relationnelle jusqu’à la BCNF et optimisation de requêtes.',
    outils: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL', 'SQLAlchemy'],
    saes: ['Base de données universitaire', 'Système de gestion des notes', 'Gestion Utilisateurs (FastAPI)'],
    ressources: ['Bases de données', 'Modélisation des données'],
  },
  {
    id: 'conduire',
    num: '05',
    titre: 'Conduire',
    sous: 'un projet',
    color: 'var(--amber)',
    resume:
      'Cadrer et piloter un projet : simulation client/développeur (recueil de besoins, cahier des charges, dialogue continu, gestion des délais à distance), méthodes Agile/Scrum et diagramme de Gantt.',
    outils: ['Agile / Scrum', 'Jira', 'Diagramme de Gantt', 'Figma'],
    saes: ['La ferme de la ville (client/dév)'],
    ressources: ['Gestion de projet', 'Management des SI'],
  },
  {
    id: 'collaborer',
    num: '06',
    titre: 'Collaborer',
    sous: 'au sein d’une équipe informatique',
    color: 'var(--pink)',
    resume:
      'Travailler en équipe produit : projets de groupe (exposition Basquiat & Warhol, messagerie temps réel, OtakuGo à 5), versioning Git/GitHub, maquettage Figma, écoute active et intégration des retours.',
    outils: ['Git', 'GitHub', 'Figma', 'Méthodes Agile'],
    saes: ['Expo Basquiat & Warhol', 'Messagerie annotée (SAE S4)', 'OtakuGo'],
    ressources: ['Travail en équipe', 'Droit numérique', 'Communication'],
  },
]

// Bilan des SAÉ (mémos + auto-évaluation)
// Les points d'auto-évaluation sont une première version (à confirmer).
export const saes = [
  {
    code: 'SAE S4',
    titre: 'Messagerie instantanée annotée',
    objectif:
      'Développer une messagerie temps réel où chaque utilisateur doit annoter les messages pour continuer à échanger, afin d’encourager la réflexion active.',
    equipe: 'Projet de groupe',
    duree: 'Semestre 4',
    taches: [
      'Maquettage UX/UI sur Figma',
      'Front-end HTML/CSS/JS',
      'Back-end PHP en architecture MVC',
      'Échanges temps réel via WebSocket (Ratchet)',
    ],
    outils: ['PHP', 'MVC', 'WebSocket', 'Ratchet', 'JavaScript', 'Figma'],
    resultats: 'Application fonctionnelle de messagerie temps réel avec mécanique d’annotation.',
    valorisation: 'Maîtrise du temps réel (WebSocket) et d’une architecture MVC propre — directement valorisable en stage/alternance web.',
    pointsForts: ['Architecture MVC claire et séparée', 'Découverte du temps réel (WebSocket)'],
    vigilance: ['Coordination du travail de groupe sur la même base de code (à confirmer)'],
    acquis: ['Mieux découper les tâches Git en amont (à confirmer)'],
  },
  {
    code: 'SAÉ',
    titre: 'OtakuGo — application mobile de recommandation',
    objectif:
      'Concevoir une application mobile cross-platform recommandant des contenus selon les préférences de l’utilisateur (sélection de genres, fiches détaillées).',
    equipe: 'Équipe de 5',
    duree: 'Projet de groupe',
    taches: [
      'Moteur de recommandation par préférences',
      'Fiches détaillées (synopsis, note, épisodes)',
      'Persistance JSON locale',
      'Développement cross-platform Flutter / Dart',
    ],
    outils: ['Flutter', 'Dart', 'JSON', 'Cross-platform'],
    resultats: 'Application mobile complète fonctionnant sur Android et iOS.',
    valorisation: 'Expérience concrète du mobile et du travail en équipe de 5 — utile pour des missions full-stack/mobile.',
    pointsForts: ['Travail en équipe élargie (5 personnes)', 'Première app mobile aboutie'],
    vigilance: ['Synchronisation des contributions à 5 (à confirmer)'],
    acquis: ['Cadrer les rôles plus tôt dans le projet (à confirmer)'],
  },
  {
    code: 'SAÉ',
    titre: 'Site exposition « À quatre mains » (Basquiat & Warhol)',
    objectif:
      'Réaliser, en fin de 1ʳᵉ année, un premier site complet présentant une exposition fictive autour des œuvres collaboratives de Basquiat et Warhol.',
    equipe: 'Projet de groupe',
    duree: 'Fin de 1ʳᵉ année',
    taches: [
      'Maquettage Figma',
      'Intégration HTML / CSS',
      'Traduction anglaise dynamique en JavaScript',
      'Intégration vidéo immersive',
    ],
    outils: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    resultats: 'Premier site complet mobilisant l’ensemble des compétences de 1ʳᵉ année.',
    valorisation: 'Première démonstration de bout en bout de la chaîne front (maquette → intégration → interactivité).',
    pointsForts: ['Premier projet complet maîtrisé', 'Introduction réussie à JavaScript'],
    vigilance: ['Code JS encore peu structuré à ce stade (à confirmer)'],
    acquis: ['Bases solides réinvesties dans les projets suivants'],
  },
]

// Volets STAGE — BUT 3 et BUT 2 (2ᵉ année)
export const stages = [
  {
    annee: 'BUT 3',
    poste: 'Stagiaire IT',
    entreprise: 'IFFP — Institut Français de Formation Professionnelle',
    lieu: 'Nanterre, Île-de-France',
    periode: 'Mars — Juin 2026',
    missions: [
      'KioskSign — borne d’accueil interactive (Apps Script + HTML/CSS) alimentée dynamiquement par Google Sheets.',
      'Signatures Gmail — déploiement automatique de signatures HTML personnalisées sur tout le domaine Google Workspace (clasp / Apps Script).',
      'Workspace Cleaner & Radar Drive — nettoyage des fichiers orphelins/doublons et rapport de conformité des permissions Drive.',
      'Dashboard MDP & Onboarding Professeurs — tableaux de bord et automatisation de l’intégration des nouveaux enseignants.',
      'Modernisation réseau — segmentation VLAN, renforcement sécurité, administration Google Workspace.',
      'Refonte du site vitrine sous WordPress / Elementor + documentation technique pour chaque projet.',
    ],
    pointsForts: [
      'Automatisation à fort impact (Apps Script) sur des processus métiers réels',
      'Polyvalence : développement, réseau et administration Workspace',
    ],
    vigilance: ['Prioriser les nombreux chantiers menés en parallèle (à confirmer)'],
    surprises: ['Portée des automatisations à l’échelle de tout un domaine Workspace (à confirmer)'],
    acquis: ['Documenter systématiquement chaque outil pour le rendre maintenable'],
  },
  {
    annee: 'BUT 2',
    poste: 'Stagiaire Informatique & Web',
    entreprise: 'Association Jean Luc François',
    lieu: 'Pantin',
    periode: 'Février — Mars 2025',
    missions: [
      'Refonte et maintenance du site WordPress — optimisation thèmes / extensions, amélioration des performances.',
      'Mise en place de workflows No-Code (Airtable, Zapier) — réduction des tâches manuelles répétitives.',
      'Force de proposition technique et adaptabilité au sein d’une équipe restreinte.',
    ],
    pointsForts: [
      'Adaptation rapide à un nouvel environnement',
      'Autonomie tout en s’intégrant bien à l’équipe',
    ],
    vigilance: ['Cadre associatif à but non lucratif : composer avec des moyens limités'],
    surprises: ['Gestion constructive des désaccords en réunion, à l’opposé du cadre scolaire'],
    acquis: ['Écoute active et prise en compte des retours pour améliorer le travail'],
  },
]

// CONCLUSION
export const conclusion = {
  paragraphs: [
    'Au fil du BUT, mes points forts se sont dessinés : une vraie polyvalence full-stack (du front React/Angular au back PHP, Java, Python/FastAPI), une capacité d’automatisation concrète démontrée en stage, et une aisance à apprendre en autonomie de nouvelles technologies.',
    'Mes points de vigilance restent la priorisation quand les chantiers se multiplient et la structuration du travail de groupe — des axes que j’ai progressivement améliorés d’une SAÉ à l’autre.',
    'Pour la suite, j’emporte une méthode : documenter, découper tôt, écouter les retours. Ces acquis nourrissent directement mon orientation vers la Data & l’IA et ma poursuite d’études en MSc Data Engineering à Aivancity.',
  ],
}
