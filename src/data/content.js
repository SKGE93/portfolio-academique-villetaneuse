// ============================================================
//  Contenu du portfolio — PLACEHOLDERS
//  Remplis chaque champ marqué « TODO » avec tes vraies infos.
//  Le design s'adapte automatiquement à ce fichier.
// ============================================================

export const profile = {
  name: 'Séraphin Eyala',
  role: 'Développeur Web Full Stack',
  formation: 'BUT Informatique — Développement d’applications',
  ecole: 'IUT de Villetaneuse · USPN',
  annees: '2023 — 2026',
  email: 'eyalas472@gmail.com',
  github: 'https://github.com/', // TODO: ton URL GitHub
  linkedin: 'https://linkedin.com/in/', // TODO: ton URL LinkedIn
  portfolio: 'https://', // TODO: ton portfolio dev réel
  tagline: 'Portfolio académique — démarche de valorisation des compétences',
}

// Section INTRODUCTION
export const intro = {
  // TODO: la logique de ton parcours, ton choix d'orientation,
  // tes ambitions pro et ta poursuite d'études (MSc Data Engineering)
  paragraphs: [
    'TODO — Présente la logique de ton parcours : pourquoi l’informatique, pourquoi le développement d’applications, ce qui t’a amené au BUT de Villetaneuse.',
    'TODO — Tes ambitions professionnelles : le métier de développeur full stack, ton orientation vers l’IA et la data, ton admission en MSc Data Engineering à Aivancity.',
  ],
  highlights: [
    { k: '6', v: 'compétences du référentiel' },
    { k: '3', v: 'années de BUT' },
    { k: '2', v: 'stages réalisés' },
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
    resume: 'TODO — Synthèse : ce que tu sais réaliser (SPA React/Angular, PHP MVC…).',
    outils: ['React', 'Angular', 'PHP MVC', 'TODO'],
    saes: ['SAÉ — TODO'],
    ressources: ['Module — TODO'],
  },
  {
    id: 'optimiser',
    num: '02',
    titre: 'Optimiser',
    sous: 'des applications',
    color: 'var(--coral)',
    resume: 'TODO — Algorithmique, complexité, performance, optimisation.',
    outils: ['TODO'],
    saes: ['SAÉ — TODO'],
    ressources: ['Module — TODO'],
  },
  {
    id: 'administrer',
    num: '03',
    titre: 'Administrer',
    sous: 'des systèmes informatiques',
    color: 'var(--sky)',
    resume: 'TODO — Réseaux, systèmes, déploiement, BDD.',
    outils: ['Docker', 'PostgreSQL', 'TODO'],
    saes: ['SAÉ — TODO'],
    ressources: ['Module — TODO'],
  },
  {
    id: 'gerer',
    num: '04',
    titre: 'Gérer',
    sous: 'des données de l’information',
    color: 'var(--mint)',
    resume: 'TODO — Bases de données, modélisation, requêtes, data.',
    outils: ['SQL', 'MongoDB', 'TODO'],
    saes: ['SAÉ — TODO'],
    ressources: ['Module — TODO'],
  },
  {
    id: 'conduire',
    num: '05',
    titre: 'Conduire',
    sous: 'un projet',
    color: 'var(--amber)',
    resume: 'TODO — Gestion de projet, Agile/Scrum, Gantt, cadrage.',
    outils: ['Agile', 'Scrum', 'TODO'],
    saes: ['SAÉ — TODO'],
    ressources: ['Module — TODO'],
  },
  {
    id: 'collaborer',
    num: '06',
    titre: 'Collaborer',
    sous: 'au sein d’une équipe',
    color: 'var(--pink)',
    resume: 'TODO — Travail d’équipe, Git/GitHub, communication, droit.',
    outils: ['Git', 'GitHub', 'TODO'],
    saes: ['SAÉ — TODO'],
    ressources: ['Module — TODO'],
  },
]

// Bilan des SAÉ (mémos + auto-évaluation)
export const saes = [
  {
    code: 'SAÉ — TODO',
    titre: 'Intitulé de la SAÉ',
    objectif: 'TODO — Objectif de la mise en situation.',
    equipe: 'TODO pers.',
    duree: 'TODO',
    taches: ['TODO — tâche 1', 'TODO — tâche 2'],
    outils: ['TODO'],
    resultats: 'TODO — Résultats / livrables produits.',
    valorisation: 'TODO — Valorisation possible (stage / alternance).',
    // Auto-évaluation
    pointsForts: ['TODO'],
    vigilance: ['TODO'],
    acquis: ['TODO — à faire plus vite / plus tôt / différemment'],
  },
]

// Volet STAGE BUT 3
export const stage = {
  entreprise: 'IFFP — Institut Français de Formation Professionnelle',
  lieu: 'Nanterre, Île-de-France',
  periode: 'Mars — Mai 2026',
  poste: 'Stagiaire IT',
  missions: [
    'TODO — Optimisation de solutions web sous WordPress / Elementor.',
    'TODO — Automatisation de processus via Google Apps Script.',
    'TODO — Intégration d’une API LLM pour automatiser des flux métiers.',
  ],
  // Recul critique
  pointsForts: ['TODO'],
  vigilance: ['TODO'],
  surprises: ['TODO'],
  problemes: ['TODO'],
  acquis: ['TODO'],
}

// CONCLUSION
export const conclusion = {
  paragraphs: [
    'TODO — Synthèse des points forts identifiés au fil du portfolio.',
    'TODO — Points de vigilance, bonnes pratiques, acquis pour la suite.',
  ],
}
