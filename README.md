# PamPam — Boutique

Site vitrine de la boutique PamPam, située au Marché Massalassi (Adidogomé — Bokovissimé) à Lomé, Togo.

**Lien du site :** https://pampam-iota.vercel.app

## Contenu

- Accueil avec présentation de la boutique
- Services (tirage de plan, jus frais, pure water, épicerie)
- Produits (pure water, boissons, vins, garri, chaussures, confiseries, papeterie, etc.)
- Contact avec carte interactive, téléphone et WhatsApp
- Mode sombre/clair

## Déploiement (GitHub + Vercel)

### 1. Créer le dépôt sur GitHub

- Va sur https://github.com/new
- Nomme le dépôt `pampam`
- Suis les instructions pour pusher le dossier en local :

```bash
git remote add origin https://github.com/bendictamangba/pampam.git
git branch -M main
git push -u origin main
```

### 2. Importer sur Vercel

- Va sur https://vercel.com/new
- Sélectionne le dépôt `bendictamangba/pampam`
- Laisse les paramètres par défaut (framework: `Other`)
- Clique sur **"Deploy"**

### 3. Mise à jour automatique

Après chaque modification, il suffit de pusher sur GitHub :

```bash
git add .
git commit -m "description des changements"
git push origin main
```

Vercel rebuild et redéploie automatiquement le site.

## Statistiques

GoatCounter est intégré pour compter les visites.

## Tech

HTML / CSS / JavaScript — site statique, sans base de données.
