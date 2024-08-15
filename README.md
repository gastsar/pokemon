# Pokémon App

## Description

La Pokémon App est une application React en cours de développement, conçue pour permettre aux utilisateurs de parcourir, rechercher, filtrer, et gérer leurs Pokémon préférés. Les utilisateurs peuvent cliquer sur une carte Pokémon pour afficher plus de détails dans un modal.

## Fonctionnalités

- **Rechercher** : Recherchez des Pokémon en utilisant un champ de recherche.
- **Filtrer par Type** : Filtrez les Pokémon par type spécifique.
- **Favoris** : Ajoutez ou retirez des Pokémon de votre liste de favoris.
- **Modal de Détails** : Cliquez sur un Pokémon pour afficher ses détails dans un modal.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- **Node.js** (version 14.x ou supérieure)
- **npm** (ou yarn ou pnpm)
- L'application est développée en utilisant **ViteJS** pour une compilation rapide et une meilleure expérience de développement.

## Installation

Clonez le dépôt :

```bash
git clone https://github.com/gastsar/pokemon.git
```

Accédez au dossier du projet :

```bash
cd pokemon
```

Installez les dépendances :

```bash
npm install
```

ou si vous utilisez Yarn :

```bash
yarn install
```

ou avec pnpm :

```bash
pnpm install
```

## Utilisation

Lancez l'application en mode développement :

```bash
npm start
```

ou avec Yarn :

```bash
yarn start
```

ou avec Vite et pnpm :

```bash
pnpm run dev
```

Ouvrez votre navigateur et accédez à :

```arduino
http://localhost:5173/
```

Parcourez, recherchez et gérez vos Pokémon favoris !

## Structure du Projet

- **src/** : Contient tout le code source de l'application.
- **components/** : Contient les composants réutilisables de l'application comme Header, Cards, et Modal.
- **App.tsx** : Composant principal qui orchestre l'application.
- **App.css** : Fichier de styles global pour l'application.

## API

L'application utilise l'API [PokéBuild](https://pokebuildapi.fr/api/v1) pour récupérer les données des Pokémon.

## Technologies Utilisées

- **React** : Bibliothèque JavaScript pour créer des interfaces utilisateur.
- **TypeScript** : Superset de JavaScript qui ajoute un typage statique.
- **Tailwind CSS** : Framework CSS pour une conception rapide et réactive.
- **React Icons** : Bibliothèque d'icônes populaires.
- **ViteJS** : Outil de build pour un développement rapide.

## Contribution

J'améliorerai le codebase en intégrant Redux pour une meilleure gestion de l'état global de l'application , utiliser d'autre hooks natifs de react. De plus, je travaillerai à bien séparer les différents composants pour rendre le code plus modulaire et maintenable.

Je m'exerce à utiliser GitHub avec ce projet, donc toutes les contributions sont les bienvenues ! Si vous souhaitez améliorer ce projet, n'hésitez pas à créer une pull request ou à ouvrir une issue sur GitHub.

## Auteur

Narson kevine YVES (kevine_dev)
