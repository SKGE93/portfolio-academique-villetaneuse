// ============================================================
//  Glossaire, explications courtes (2 à 3 lignes max) affichées
//  quand on clique sur un badge de techno, d'architecture ou de notion.
//  La clé doit correspondre EXACTEMENT au texte du badge.
//  Textes sans tiret « — » ni deux-points « : ».
// ============================================================

export const glossary = {
  // Front-end
  'React': 'Bibliothèque JavaScript de Meta pour construire des interfaces en composants réutilisables, avec une mise à jour efficace de l’affichage.',
  'Angular 19': 'Framework front complet de Google en TypeScript, avec une architecture structurée, des services et de l’injection de dépendances pour de grosses applications.',
  'TypeScript': 'JavaScript enrichi d’un typage statique, ce qui permet d’attraper des erreurs avant l’exécution et de mieux maintenir le code.',
  'JavaScript': 'Le langage du web côté navigateur, il rend les pages interactives avec les clics, les formulaires, les animations et les données dynamiques.',
  'HTML': 'Le langage de structure des pages web, le squelette du contenu avec les titres, les paragraphes, les images et les liens.',
  'CSS': 'Le langage de mise en forme du web, pour les couleurs, les polices, les espacements, la mise en page et les animations.',
  'HTML/CSS/JS': 'Le trio de base du web, HTML pour la structure, CSS pour le style et JavaScript pour l’interactivité.',
  'Vite': 'Outil de build moderne, avec un serveur de développement très rapide et une génération optimisée du site pour la production.',
  'React Router': 'Gère la navigation entre les pages d’une application React sans recharger le navigateur (single page app).',
  'Axios': 'Bibliothèque pour envoyer des requêtes HTTP et consommer des API, donc récupérer ou envoyer des données à un serveur.',
  'Chart.js': 'Bibliothèque de graphiques (courbes, barres, camemberts…) pour visualiser des données dans une page web.',
  'RxJS': 'Bibliothèque de programmation réactive utilisée avec Angular pour gérer des flux de données et d’événements asynchrones.',
  'Bootstrap': 'Framework CSS prêt à l’emploi, avec des grilles, des boutons et des composants pour créer vite des sites responsives.',
  'Figma': 'Outil de maquettage et de design d’interface, on conçoit l’UX et l’UI avant de coder pour visualiser le rendu final.',
  'Maquettage': 'Concevoir l’interface (écrans, parcours) avant le développement, pour valider l’expérience utilisateur.',
  'Visualisation': 'Représenter des données ou des résultats sous forme graphique pour les rendre lisibles et compréhensibles.',

  // APIs
  'TMDB API': 'API publique de The Movie Database, elle fournit les films, les affiches, les notes et les synopsis consommés par CinéSearch.',
  'OpenWeatherMap': 'API météo qui fournit les données en temps réel et les prévisions utilisées par WeatherDash.',

  // Back-end & temps réel
  'PHP': 'Langage côté serveur très répandu sur le web, il génère des pages et dialogue avec une base de données.',
  'Node.js': 'Environnement qui exécute du JavaScript côté serveur, utile pour des API et des outils côté back.',
  'WebSocket': 'Protocole de communication en temps réel, le serveur et le client échangent instantanément, ce qui est idéal pour un chat.',
  'Ratchet': 'Bibliothèque PHP qui implémente les WebSocket, elle permet les échanges en temps réel côté serveur PHP.',
  'Google Apps Script': 'Langage basé sur JavaScript pour automatiser Google Workspace (Sheets, Gmail, Drive) côté serveur.',

  // Architecture & qualité
  'MVC': 'Architecture « Modèle Vue Contrôleur », on sépare les données, l’affichage et la logique pour un code clair et maintenable.',
  'POO': 'Programmation Orientée Objet, on modélise le code en objets (classes, héritage, interfaces) réutilisables.',
  'Exceptions (try-catch)': 'Mécanisme pour gérer les erreurs sans planter le programme, par exemple une division par zéro, grâce aux blocs try et catch.',
  'UML': 'Langage de modélisation visuelle, des diagrammes pour concevoir les classes et la structure d’un logiciel avant de coder.',
  'Algorithmique': 'L’art de concevoir des suites d’étapes (algorithmes) efficaces pour résoudre un problème.',
  'Structures de données': 'Façons d’organiser les données en mémoire (tableaux, listes, arbres…) pour les manipuler efficacement.',
  'Nombres complexes': 'Nombres de la forme a + bi, utilisés ici pour calculer et dessiner l’ensemble de Mandelbrot.',
  'TDD': 'Test Driven Development, on écrit les tests avant le code, ce qui fiabilise et guide le développement.',
  'Vitest': 'Framework de tests unitaires rapide et intégré à Vite, il vérifie automatiquement que chaque fonction marche.',
  'Playwright': 'Outil de tests de bout en bout, il pilote un vrai navigateur pour vérifier que l’application fonctionne entièrement.',
  'Cahier des charges': 'Document qui formalise les besoins et les contraintes d’un projet, la base de l’accord entre le client et le développeur.',
  'Gestion des délais': 'Planifier et respecter les échéances d’un projet, en tenant compte des dépendances et des imprévus.',

  // Mobile
  'Flutter': 'Framework de Google pour créer des applications mobiles iOS et Android à partir d’un seul code, en Dart.',
  'Dart': 'Langage de programmation de Google, utilisé avec Flutter pour développer des applications mobiles.',
  'Cross-platform': 'Un seul code qui fonctionne sur plusieurs plateformes (iOS et Android), au lieu d’en écrire un par système.',
  'JSON': 'Format texte léger pour stocker et échanger des données structurées, utilisé ici pour la persistance locale.',

  // Données & systèmes
  'SQL': 'Langage standard pour interroger et manipuler des bases de données relationnelles (tables, requêtes).',
  'MySQL/MariaDB': 'Systèmes de gestion de bases de données relationnelles très répandus pour stocker les données d’une application.',
  'PostgreSQL': 'Base de données relationnelle robuste et open source, réputée pour sa fiabilité et ses fonctionnalités avancées.',
  'MongoDB': 'Base de données NoSQL orientée documents (JSON), flexible et adaptée aux données peu structurées.',
  'Modélisation relationnelle': 'Concevoir les tables et leurs liens (jusqu’à la normalisation et la BCNF) pour des données cohérentes et sans redondance.',
  'Gestion des accès': 'Définir qui peut voir ou modifier quoi selon les rôles (étudiant, enseignant…) pour sécuriser les données.',
  'SQLAlchemy': 'ORM Python, il fait le pont entre les objets du code et la base SQL, sans écrire de SQL brut.',
  'Linux': 'Système d’exploitation libre, très utilisé sur les serveurs, manipulé en ligne de commande pour déployer.',
  'Apache': 'Serveur web qui héberge et délivre des sites et des applications aux navigateurs.',
  'Services réseau': 'Logiciels qui communiquent sur un réseau (web, base de données…), installés et configurés sur un serveur.',
  'Docker': 'Outil de conteneurisation, il empaquète une application et son environnement pour la lancer partout à l’identique.',
  'Git': 'Système de gestion de versions, il suit l’historique du code et permet de travailler à plusieurs sans se gêner.',
  'D3.js (Delaunay/Voronoï)': 'Bibliothèque JavaScript de visualisation de données, ses modules Delaunay et Voronoï calculent et dessinent le diagramme.',
  'SVG': 'Format d’image vectorielle à base de formes, net à toute taille, idéal pour exporter un diagramme.',
}
