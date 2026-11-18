# PamPam — Boutique

Site vitrine d'une boutique de proximité située au Marché Massalassi à Lomé (Togo), présentant ses produits par catégorie, avec un design moderne adapté au mobile.

**Lien :** [pampam-iota.vercel.app](https://pampam-iota.vercel.app)

## Fonctionnalités

- Page d'accueil dynamique avec animations
- Grille produits dense pleine largeur, avec tuiles de catégories servant de filtre (inspiré d'Assivito)
- Pagination adaptative (24 produits par page), masquée tant qu'il n'y a qu'une page ; remise à la page 1 à chaque changement de filtre
- Prix affichés sur les cartes, fiche détaillée (modale), bouton « Commander » via WhatsApp et bouton « Télécharger » l'image
- Boutons d'action (Voir les produits / Nous contacter) dans le bandeau d'accueil
- Formulaire de contact envoyant le message via WhatsApp
- Lien WhatsApp direct
- Mode sombre / clair
- Bilingue français / anglais (sélecteur FR/EN, choix mémorisé)
- Compteur de visites (GoatCounter)

## Structure

```
index.html        Structure des pages (les cartes produits sont générées par le JS)
index.css         Styles
js/i18n.js        Traductions FR / EN des textes de l'interface uniquement
js/products.js    Catégories + produits (textes, prix, photo, caractéristiques)
js/main.js        Logique : rendu, langues, filtres, modale, commandes, formulaire
```

## Ajouter ou modifier un produit

Tout se passe dans **`js/products.js`** (un seul fichier) :

1. Déposer sa photo dans `images/<nom-du-produit>/` (une seule image par carte).
2. Copier un objet dans le tableau `PRODUCTS` et renseigner : `id`, `category`, `image`,
   `name` (fr/en), `desc` (fr/en), `alt` (fr/en), `badge`, `price`, `specs` (fr/en).

La carte, le badge prix, la fiche détaillée et les boutons « Détails / Commander /
Télécharger » sont générés automatiquement. **Aucune modification de `i18n.js`, de
`index.html` ou du CSS n'est nécessaire.**

Pour corriger un prix : changer uniquement la valeur `price` du produit concerné.
Pour remplacer une photo : changer uniquement la valeur `image`.

## Stack

- HTML5 / CSS3 / JavaScript (vanilla)
- Déploiement continu via GitHub + Vercel
