# brief3
# HelpDesk — Atlas Solutions

## 1. Description du projet

HelpDesk est une application web interactive permettant de gérer les demandes de support informatique au sein de l'entreprise fictive Atlas Solutions.

L'application permet d'afficher les incidents informatiques sous forme de cartes, d'ajouter de nouvelles demandes et de supprimer des demandes existantes.

## 2. Technologies utilisées

- **HTML5** : structure de la page web et formulaire.
- **CSS3** : mise en forme et adaptation de l'interface.
- **Tailwind CSS** : classes utilitaires pour le design.
- **JavaScript Vanilla** : gestion des demandes et manipulation du DOM.
- **Font Awesome** : affichage des icônes.
- **Git et GitHub** : gestion des versions du projet.

## 3. Fonctionnalités

- Affichage dynamique des demandes sous forme de cartes.
- Présentation du titre, de la description, de la catégorie et de la priorité.
- Ajout d'une nouvelle demande à partir du formulaire.
- Suppression d'une demande avec confirmation.
- Mise à jour automatique du compteur de demandes.
- Affichage des catégories : Réseau, Logiciel et Matériel.
- Identification visuelle des priorités : Haute, Normale et Basse.
- Réinitialisation du formulaire après l'ajout d'une demande.

## 4. Structure du projet

```text
HelpDesk/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── src/
│   └── output.css
└── README.md
```

## 5. Installation et lancement

1. Télécharger ou cloner le dépôt GitHub.
2. Ouvrir le dossier du projet dans Visual Studio Code.
3. Vérifier que les fichiers HTML, CSS et JavaScript sont correctement placés.
4. Vérifier que les chemins des fichiers CSS et JavaScript correspondent à la structure du projet.
5. Générer le fichier `output.css` si nécessaire, à l'aide de la configuration Tailwind CSS du projet.
6. Ouvrir `index.html` dans un navigateur, par exemple avec l'extension Live Server de Visual Studio Code.

## 6. Fonctionnement

Les demandes sont stockées dans un tableau JavaScript contenant des objets. Chaque objet possède un identifiant unique, un titre, une description, une catégorie et une priorité.

La fonction `AFF()` affiche les demandes dans la page et actualise le compteur. La fonction `supprimer(id)` retire la demande correspondant à l'identifiant fourni. L'événement `submit` du formulaire permet d'ajouter une nouvelle demande sans recharger la page.

## 7. Limites du projet

Les données sont conservées uniquement dans le tableau JavaScript pendant l'exécution de la page. Elles ne sont pas enregistrées dans une base de données ni sauvegardées avec `localStorage`.

Le bouton « Modifier » est présent dans l'interface, mais sa fonctionnalité reste à développer.

## 8. Auteur

Projet réalisé individuellement dans le cadre de la formation Développeur Web et Web Mobile.

## 9. Objectif pédagogique

Ce projet permet de pratiquer HTML5, CSS3 et JavaScript Vanilla, notamment la manipulation du DOM, les événements, les tableaux d'objets, les formulaires et la mise à jour dynamique d'une interface web.
## 10.link 
https://anas1818ans-maker.github.io/brief3/
