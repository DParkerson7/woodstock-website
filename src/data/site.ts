export const shop = {
  wordmark: 'Woodstock Coffee & Bakeshop',
  legalName: 'Woodstock Coffee and Bake Shop',
  establishedYear: 2012,
  opened: '2012-09-11',
  openedLabel: 'September 11, 2012',
  city: 'Jackson, Tennessee',
  street: '80 Innsdale Cv, Suite A',
  locality: 'Jackson',
  region: 'TN',
  postal: '38305',
  neighborhood: 'Right off Vann Drive.',
  phoneDisplay: '731-554-1969',
  phoneTel: '+17315541969',
  email: 'ws.coffeebakeshop@gmail.com',
  instagram: 'https://www.instagram.com/woodstock_coffee.and.bakeshop/',
  instagramHandle: '@woodstock_coffee.and.bakeshop',
  facebook: 'https://www.facebook.com/woodstockbakeryandco',
  tiktok: 'https://www.tiktok.com/@woodstock_bake',
  currentSite: 'https://www.woodstockcoffeeandbakeshop.com/',
  honey: 'https://honeybeegood.cafe',
  cakeForm: 'https://www.jotform.com/form/243204993569164',
  lunchForm: 'https://www.jotform.com/form/242637975469172',
  map: 'https://maps.google.com/?q=80+Innsdale+Cv+Suite+A+Jackson+TN+38305',
} as const;

export const hoursNow = [
  { days: 'Monday–Saturday', hours: '9am–5pm' },
  { days: 'Sunday', hours: 'Closed' },
] as const;

export const hoursUpcoming = [
  { days: 'Monday–Wednesday', hours: '8am–6pm' },
  { days: 'Thursday–Saturday', hours: '8am–8pm' },
  { days: 'Sunday', hours: 'No hours announced' },
] as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/cafe', label: 'Coffee' },
  { href: '/cakes', label: 'Cakes' },
  { href: '/catering', label: 'Catering' },
  { href: '/lunch', label: 'Lunch' },
  { href: '/expansion', label: 'Expansion' },
] as const;

export const cakeSizes = [
  { name: '6″ Round', price: '$45', note: 'Base price' },
  { name: '8″ Round', price: '$55', note: 'Base price' },
  { name: '8″ Heart shape', price: '$60', note: 'Base price' },
] as const;

export const featuredCakes = [
  { name: 'Classic Vintage Blue', price: '$70' },
  { name: 'Classic Vintage Burgundy', price: '$90' },
  { name: 'Vintage Baby Blue', price: '$70' },
  { name: 'Classic Vintage Wedding Cake', price: '$95' },
] as const;

export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export const cakeAlbum: Photo[] = [
  {
    src: 'images/cakes/cake-blue-swags.jpg',
    width: 1600,
    height: 2133,
    alt: 'A round cake in ivory buttercream with pale blue swags, ruffles, pearl dots, and blueberries on top, photographed by a window.',
    caption: 'Ivory and pale blue swags, finished with blueberries.',
  },
  {
    src: 'images/cakes/cake-baby-blue.jpg',
    width: 1600,
    height: 2133,
    alt: 'A round cake covered in baby-blue buttercream with ruffled borders, draped garlands, and white pearls.',
    caption: 'Baby blue, with garlands and pearls.',
  },
  {
    src: 'images/cakes/cake-burgundy-heart.jpg',
    width: 1600,
    height: 2133,
    alt: 'A heart-shaped burgundy cake with ruffled borders, black ribbon bows, pearl dots, and white script reading Happy 20th.',
    caption: 'A burgundy heart, lettered for a 20th.',
  },
  {
    src: 'images/cakes/cake-just-married.jpg',
    width: 1600,
    height: 2133,
    alt: 'A heart-shaped ivory cake with shell borders, pearl dots, and gold script reading Just Married.',
    caption: 'An ivory heart, lettered Just Married.',
  },
  {
    src: 'images/cakes/cake-ivory-pearls.jpg',
    width: 1200,
    height: 1600,
    alt: 'A tall ivory cake in a white box, with a shell border and scattered pearl dots.',
    caption: 'Ivory shells and pearls, packed to go.',
  },
  {
    src: 'images/cakes/cake-ivory-heart.jpg',
    width: 1125,
    height: 1500,
    alt: 'A heart-shaped ivory cake in a bakery box, bordered with shells and small pearls.',
    caption: 'Another ivory heart, ready in the box.',
  },
  {
    src: 'images/cakes/cake-ivory-blossoms.jpg',
    width: 1125,
    height: 1500,
    alt: 'A tall ivory cake on a white board, piped with ruffles and white buttercream blossoms.',
    caption: 'Ivory ruffles and piped blossoms.',
  },
  {
    src: 'images/cakes/cake-pastel-roses.jpg',
    width: 1125,
    height: 1500,
    alt: 'A close view of a pale pink cake covered in white ruffles, piped roses in pink, blue, and yellow, green leaves, and pearl dots.',
    caption: 'Pastel roses on a ruffled cake.',
  },
  {
    src: 'images/cakes/cake-red-roses.jpg',
    width: 1500,
    height: 2000,
    alt: 'A white cake topped with a cluster of red buttercream roses, gold dots, and a white ruffled border.',
    caption: 'Red roses on white.',
  },
  {
    src: 'images/cakes/cake-carrot.jpg',
    width: 1068,
    height: 1600,
    alt: 'A blue cake decorated with green, pink, and white piping, small carrot shapes, and chocolate carrots with green tops on the surface.',
    caption: 'A carrot cake from the kitchen, piped in blue, green, and pink.',
  },
];

export const sandwiches = [
  { name: 'Turkey & Cheese', price: '$8' },
  { name: 'Ham & Cheese', price: '$8' },
  { name: 'Chicken Salad', price: '$9' },
  { name: 'Club', price: '$9' },
  { name: 'Pimento & Cheese', price: '$8' },
] as const;

export const breads = ['White', 'Whole wheat', 'Croissant', 'Spinach wrap'] as const;

export const lattes = [
  { name: 'Vanilla', price: '$4' },
  { name: 'Caramel', price: '$4' },
  { name: 'Brown sugar', price: '$4' },
  { name: 'Matcha', price: '$4' },
  { name: 'Mocha', price: '$4' },
  { name: 'Hot Peanut Butter Cup', price: '$4.50' },
] as const;

export const cafeExtras = [
  { name: 'Hot chocolate', price: '$3' },
  { name: 'Shaken espresso', price: '$0.90' },
  { name: 'Black coffee', price: '$2' },
] as const;

export const milks = ['Whole', 'Almond', 'Half & half', 'Heavy cream'] as const;

export const expansionPoints = [
  'More time for coffee dates, catch-ups, and slow mornings.',
  'Community events and special gatherings throughout the year.',
  'Expanded lobby seating, with room to spread out.',
  'Cozy nooks for conversation, reading, and relaxing.',
  'Quiet spaces to work, study, or simply unplug.',
] as const;

export const studies: Photo[] = [
  {
    src: 'images/mockups/coffee-bar-render.jpg',
    width: 1280,
    height: 720,
    alt: 'Concept rendering of an expanded coffee bar: a teal and wood counter, a lighted pastry case, an espresso machine, two chalkboard menus, and a small play structure to the left. A design study, not a photograph of the finished room.',
    caption: 'Coffee bar study. The room is still a rendering.',
  },
  {
    src: 'images/mockups/coffee-bar-render-people.jpg',
    width: 1280,
    height: 720,
    alt: 'Concept rendering of the same coffee bar with people at the counter, a child pointing at the pastry case, and guests on a sofa. The figures are part of the design study, not photographs of staff.',
    caption: 'The same study, with figures to show how the room is meant to be used. They are not photographs of our team.',
  },
  {
    src: 'images/mockups/ceiling-lighting.jpg',
    width: 1280,
    height: 720,
    alt: 'Concept rendering of the coffee bar ceiling, with a dark grid ceiling, wood trim, pendant lights, and a teal menu soffit. A design study, not a photograph.',
    caption: 'Ceiling and lighting study.',
  },
  {
    src: 'images/mockups/ceiling-lighting-people.jpg',
    width: 1280,
    height: 720,
    alt: 'Concept rendering of the coffee bar with pendant lights on, and people ordering at the counter. Figures are part of the study, not photographs of staff.',
    caption: 'Lighting study, with the pendants on. Figures are part of the drawing, not our staff.',
  },
  {
    src: 'images/mockups/sketch-floor-honey.jpg',
    width: 1280,
    height: 720,
    alt: 'Honey-yellow pencil sketch of the coffee bar floor, counter, pastry case, and play structure.',
    caption: 'Honey-yellow pencil sketch of the floor and counter.',
  },
  {
    src: 'images/mockups/sketch-ceiling-honey.jpg',
    width: 1280,
    height: 720,
    alt: 'Honey-yellow pencil sketch of the coffee bar ceiling, pendant lights, and menu boards.',
    caption: 'Honey-yellow pencil sketch of the ceiling and lights.',
  },
];
