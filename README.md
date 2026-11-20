# Woodstock Coffee & Bakeshop

A review site for the co-owners — David, April, and Elena Parkerson — of Woodstock Coffee and Bake Shop in Jackson, Tennessee. The shop opened September 11, 2012. This build says **est. 2012**. 2024 is only the year the Parkersons bought it.

The current public site stays on Squarespace at [woodstockcoffeeandbakeshop.com](https://www.woodstockcoffeeandbakeshop.com/). This repository does not point that domain anywhere.

## Preview

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:47321](http://127.0.0.1:47321).

```bash
npm run build
npm run preview
```

`npm run build` writes a static site to `dist/` and then checks that the important facts survived (2012, today’s hours, the two order forms, and that the longer hours did not leak onto the homepage).

## Section map

Comments in the page source and a `data-section` attribute mark each block. Visitors do not see the numbers. On the homepage, the header logo and the hours block stay above the numbered sequence.

### Homepage

- Banner: header logo
- Hours and contact
1. What we make
2. Step inside
3. Established 2012, off of Vann Drive in Jackson, Tennessee.
4. Order a cake and Order a box lunch
5. A neighborhood bakery, still on the same cove
6. Meet the owner/operator
7. Honey Be Good is Jackson’s FIRST family cafe
8. The Woodstock you love is staying

The footer is last on every page and is not numbered.

### Coffee

1. The cafe
2. We're roasting our own coffee
3. Lattes, extras, and milk
4. We can't share too much

### Cakes

1. Cakes
2. Base prices
3. Four priced designs
4. How the decorating team works
5. Flavors, fillings, and buttercream
6. Recent cakes
7. Kitchen notes and reviews

### Lunch

1. Box lunches
2. The box, sandwiches, and breads
3. A packed lunch photograph is coming

### Catering

1. Bulk orders
2. Box lunches in bulk and cupcakes
3. How an order goes
4. Cakes the kitchen has already made
5. No invented reviews

### Expansion

1. The Woodstock you love is staying
2. Coffee bar studies
3. More of the day, and upcoming hours
4. Woodstock after hours
5. A ceiling study
6. Honey-yellow sketches
7. Coffee station, floor plan v3
8. Honey Be Good
9. Come during the hours on the door

### Page not found

1. Page not found

## Pages

| Page | What it is |
| --- | --- |
| Home | Storefront, wordmark, est. 2012, today’s hours and contact, the founding story, the three owners without invented bios, Honey Be Good, and a doorway into the expansion chapter. |
| Cakes | Order form, three sizes, four priced designs, a flavor board waiting for a real list, and the cake album. |
| Lunch | Box lunches, sandwiches, breads, and a note on Dale Childress and the handwriting in the boxes. |
| Catering | Bulk box lunches, cupcakes, delivery, and an invitation to call. |
| Cafe | The coffee menu we can verify, and a clear “more detailed info coming soon.” |
| Expansion | Upcoming hours (labeled as not in effect), coffee-bar studies, ceiling studies, honey-yellow sketches, floor plan v3, and Honey Be Good’s play-space sketch. |

## What is real

- Address, phone, email, Instagram, and today’s hours: Monday–Saturday 9am–5pm, Sunday closed.
- Cake sizes and the four priced designs, copied from the current menu.
- Box lunch, sandwich, bread, coffee, and catering prices, copied from the current menu.
- Order forms: [cakes](https://www.jotform.com/form/243204993569164) and [box lunches](https://www.jotform.com/form/242637975469172).
- The founding story, adapted from the shop’s About page, including the Christ-centered mission as that page already states it.
- Photographs of the storefront, the rooms, drinks, and cakes. They come from the files supplied for this build and from the shop’s own Squarespace library. They are stored in this repo. Nothing hotlinks Squarespace.
- The official sunflower **WS** logo, used as the favicon, the header mark, and the footer mark. It was not redrawn.
- Expansion studies supplied with the brief: coffee-bar renders, ceiling studies, honey-yellow sketches, floor plan v3, and the Honey Be Good play sketch.
- Honey Be Good, linked as a neighbor at [honeybeegood.cafe](https://honeybeegood.cafe), same building, opening 2027. Their memberships are not copied.
- Facebook and TikTok links, taken from the footer of the current site.

## What is waiting on the owners

These sections are designed on purpose. They are not broken, and they are not filled with guesses.

- Cake flavors, fillings, and buttercream. No verified list, so the board says coming soon.
- Portraits and a few words from David, April, and Elena.
- Named decorator bios.
- Customer reviews and quotes.
- A photograph of a packed box lunch. None was in the files or on the current site.
- A pastry list, brunch items, and a fuller cafe story. The page says more detailed info is coming soon.
- Cupcake styles, cookies, cake balls, charcuterie, and goodie baskets. Not listed, because we do not have a verified menu for them.
- Dates for the expansion, Sunday hours, and the after-hours calendar.
- Two people photographs from the current site were left out. We do not have names, and we will not caption strangers as staff.

Upcoming hours appear only on the Expansion page, under a label that they are not in effect yet: Monday–Wednesday 8am–6pm, Thursday–Saturday 8am–8pm.

## Type

The wordmark is set in **Titan One**, a free font under the SIL Open Font License, with a 1960s/70s poster weight. The intended licensed wordmark is **Superfreak**. Superfreak is not in this repo and should not be copied in. When the license is purchased, replace the Titan One import in `src/styles/global.css` and the `--display` stack.

Headlines are Fraunces. Body text is Outfit. The lunch note uses Caveat. All four are self-hosted.

## GitHub Pages

`.github/workflows/pages.yml` builds on every push to `main` and deploys to GitHub Pages.

In the repository settings, set Pages to **GitHub Actions**. The workflow serves a user site (`username.github.io`) from `/` and a project site from `/repository-name/`.

The pages send `noindex` so this review build does not compete with the live Squarespace site. Remove the robots tag in `src/layouts/Base.astro` when this site is ready to be the public one. Do not point `woodstockcoffeeandbakeshop.com` or `woodstockbakeshop.com` here until the owners say so.

## Photographs

| File | What it is |
| --- | --- |
| `public/images/logo-sunflower.png` | Official mark |
| `public/images/storefront-facade.jpg` | The sunflower sign on the building |
| `public/images/interior-jukebox.jpg` | Case, jukebox, and the sign inside |
| `public/images/interior-gallery-wall.jpg` | Teal wall, lamps, Miss Vickie’s |
| `public/images/interior-merch-corner.jpg` | The corner whose sign says merch is coming soon |
| `public/images/latte-*.jpg` | Drinks photographed in the shop |
| `public/images/cakes/` | Cakes from the shop’s own photographs |
| `public/images/mockups/` | Expansion studies, labeled as studies on the page |
