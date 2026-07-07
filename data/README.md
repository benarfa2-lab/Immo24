# Contrat de données Immo24 — pour le dev backend

Ce dossier définit le **schéma unifié des annonces**. C'est la source de vérité
que l'API backend doit exposer et que toutes les pages front doivent consommer.

## Fichiers

| Fichier | Rôle |
|---------|------|
| `annonces.json` | Les 195 annonces de la maquette, au format unifié. Jeu de données de démo → à remplacer par la vraie base. |
| `schema.json` | JSON Schema (draft-07) décrivant chaque champ. C'est le contrat. |

## État actuel du front (à savoir avant de brancher l'API)

Aujourd'hui les données sont **inlinées en dur** dans les pages, avec des schémas
légèrement divergents. `annonces.json` les unifie. Points de vigilance :

- Dans `map-listings.html`, le tableau `properties` (l'inline le plus complet) a
  servi de base d'extraction. Le champ `promoteur` y a été **renommé `agence`**
  dans le schéma unifié.
- `agence.html` (`biensProps`), les cartes de `index.html`, `listing.html`,
  `terrain.html`, `projet-neuf.html` dupliquent des sous-ensembles de ces données.
  → À faire converger vers `annonces.json` lors du câblage backend.
- La fonction `getFiltered()` de `map-listings.html` est la **spec exacte de
  l'endpoint de recherche** : elle liste tous les filtres attendus (kind,
  transaction, zone, prix min/max, pièces, ville, agences, médias, bbox carte).

## TODO backend (dettes temporaires marquées TEMP dans le schéma)

1. `img` / `logo` : URLs externes (Unsplash, site d'un vrai promoteur) →
   remplacer par le stockage média + gérer le cas **sans photo** (voir `etats.html`).
2. `date` : fraîcheur relative en chaîne (`"2j"`) → remplacer par
   `published_at` en ISO 8601, la fraîcheur étant calculée à l'affichage.
3. `agence` : nom en texte libre → `agence_id` (clé étrangère) + table agences.
4. `status` : ajouté au schéma mais toutes les annonces de démo sont `active`.
   Les autres états (`reserved`, `sold`, `expired`, `suspended`, `draft`) sont
   illustrés côté UI dans `etats.html`.
5. `id` : entier séquentiel de démo → conserver un identifiant stable/opaque.

## Endpoints suggérés (à confirmer avec le backend)

- `GET /api/annonces?transaction=&zone=&prix_min=&prix_max=&pieces=&media=&bbox=`
  → renvoie une liste filtrée (miroir de `getFiltered()`).
- `GET /api/annonces/:id` → détail (page `listing.html` / `projet-neuf.html`).
- `GET /api/agences/:id`, `GET /api/promoteurs/:id` → fiches.
