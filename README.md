# Site personnalisable prêt pour Vercel

## Important
Ceci est une **première maquette originale**, pas une copie vérifiée de crediacreation.com : l'accès au rendu et aux ressources du site de référence n'a pas été possible. Les images proviennent d'URLs de démonstration Unsplash, les avis sont fictifs, les pages légales sont des modèles non validés.

## Personnaliser
Ouvrez `app/config.ts` pour modifier nom, textes, photos, services, projets, FAQ et avis.
Remplacez les URL d'images par vos propres fichiers placés dans `public/` (exemple : `/photo.jpg`).
Pour les couleurs, espacements et polices, ouvrez `app/globals.css`.
Le logo actuel est du texte modifiable dans `app/page.tsx`.

## Lancer en local
Installer Node.js 20+.
```
npm install
npm run dev
```
Puis ouvrir http://localhost:3000.

## Déployer sur Vercel
1. Décompresser le ZIP.
2. Mettre le dossier dans un dépôt GitHub.
3. Sur vercel.com, cliquer `Add New > Project` et importer ce dépôt.
4. Framework détecté : Next.js ; lancer `Deploy`.
5. Modifier le dépôt pour mettre à jour le site.

## Avant publication
Remplacer tous les avis fictifs, les images de démonstration et les textes légaux.
Vérifier les droits d'usage des images, les coordonnées et les obligations RGPD.
Le bouton de contact ouvre un e-mail, il n'y a pas de formulaire backend.
