import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url);

function walk(dir) {
  const files = [];
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) files.push(...walk(path));
    else if (name.endsWith('.html')) files.push(path);
  }
  return files;
}

const files = walk(dist.pathname);
if (!files.length) {
  console.error('No HTML in dist/. Run astro build first.');
  process.exit(1);
}

const byName = Object.fromEntries(files.map((file) => [file.replace(dist.pathname, ''), file]));
const read = (suffix) => {
  const key = Object.keys(byName).find((name) => name === suffix);
  if (!key) throw new Error(`Missing ${suffix}. Have: ${Object.keys(byName).join(', ')}`);
  return readFileSync(byName[key], 'utf8');
};

const home = read('index.html');
const cakes = read('cakes/index.html');
const lunch = read('lunch/index.html');
const catering = read('catering/index.html');
const cafe = read('cafe/index.html');
const expansion = read('expansion/index.html');
const all = files.map((file) => readFileSync(file, 'utf8')).join('\n');

const problems = [];
const must = (haystack, needle, label) => {
  if (!haystack.includes(needle)) problems.push(`Missing ${label}: ${needle}`);
};
const mustNot = (haystack, pattern, label) => {
  if (pattern.test(haystack)) problems.push(`Unexpected ${label}`);
};

must(home, 'Coffee &amp; Bakeshop', 'wordmark');
must(home, '2012', 'established year');
must(home, 'September 11, 2012', 'opening date');
must(home, '9am–5pm', 'current hours');
must(home, 'Sunday closed', 'Sunday closed');
must(home, '731-554-1969', 'phone');
must(home, 'ws.coffeebakeshop@gmail.com', 'email');
must(home, '80 Innsdale Cv, Suite A', 'address');
must(home, 'https://www.instagram.com/woodstock_coffee.and.bakeshop/', 'instagram');
must(home, 'https://honeybeegood.cafe', 'honey be good');
must(home, 'https://www.jotform.com/form/243204993569164', 'cake form');
must(home, 'https://www.jotform.com/form/242637975469172', 'lunch form');
must(home, 'logo-sunflower.png', 'official logo');
must(home, 'First established in 2012 in Jackson, Tennessee', 'founding line');
must(home, '[Founders quote coming soon]', 'founders placeholder');
must(home, 'From the founders', 'founders label');
must(home, 'The mission is to serve.', 'mission line');
must(home, '[Owner quote coming soon]', 'owner placeholder');
must(home, 'From the current owner', 'owner label');
must(home, 'At just 18 years old', 'elena story');
mustNot(home, /From the street you can see/, 'old street paragraph');
mustNot(home, /Matt Childress and his father/, 'old founders sentence on the homepage');
mustNot(home, /8am/, 'upcoming hours on the homepage');
mustNot(home, /est\.\s*2024/i, 'est. 2024');
mustNot(home, /established in 2024/i, 'established in 2024');
mustNot(home, /since 2024/i, 'since 2024 without late');

must(cakes, '$45', '6-inch price');
must(cakes, '$55', '8-inch price');
must(cakes, '$60', 'heart price');
must(cakes, 'Classic Vintage Blue', 'named cake');
must(cakes, '$70', 'vintage blue price');
must(cakes, 'Classic Vintage Burgundy', 'burgundy cake');
must(cakes, '$90', 'burgundy price');
must(cakes, 'Vintage Baby Blue', 'baby blue cake');
must(cakes, 'Classic Vintage Wedding Cake', 'wedding cake');
must(cakes, '$95', 'wedding price');
must(cakes, 'Coming soon', 'flavor placeholder');
must(cakes, '243204993569164', 'cake form id');

must(lunch, '$10', 'box lunch price');
must(lunch, 'Miss Vickie', 'chips');
must(lunch, 'Dale Childress', 'Dale homage');
must(lunch, 'Pimento', 'sandwich');
must(lunch, '242637975469172', 'lunch form id');
mustNot(lunch, /pass(ed|ing)/i, 'a funereal note about Dale');

must(catering, '$9.00', 'bulk lunch price');
must(catering, '$3.25', 'cupcake price');
must(catering, '$3.00', 'cupcake bulk price');
must(catering, 'delivery', 'delivery');
mustNot(catering, /charcuterie/i, 'invented charcuterie menu');

must(cafe, 'house-made', 'house syrups');
must(cafe, 'Peanut Butter Cup', 'peanut butter latte');
must(cafe, '$4.50', 'peanut butter price');
must(cafe, '$0.90', 'shaken espresso');
must(cafe, 'More detailed info coming soon', 'cafe placeholder');

must(expansion, 'The Woodstock you love is staying', 'expansion line');
must(expansion, '8am–6pm', 'upcoming daytime hours');
must(expansion, '8am–8pm', 'upcoming evening hours');
must(expansion, 'Not in effect yet', 'upcoming label');
must(expansion, 'honey-be-good-play-sketch', 'play sketch');
must(expansion, 'floor-plan-v3', 'floor plan');
must(expansion, 'coffee-bar-render-people', 'people render');
must(expansion, 'ceiling-lighting', 'ceiling study');
must(expansion, 'sketch-floor-honey', 'honey sketch');

mustNot(all, /Founding Hive/i, 'Honey Be Good membership offer');
mustNot(all, /lorem ipsum/i, 'placeholder latin');
mustNot(all, /est\.\s*2024/i, 'est. 2024 anywhere');
mustNot(all, /squarespace-cdn/i, 'hotlinked Squarespace image');

for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const hits = html.match(/2024/g);
  if (!hits) continue;
  const late = html.match(/late 2024/g) ?? [];
  if (late.length !== hits.length) {
    problems.push(`${file} mentions 2024 ${hits.length} times but "late 2024" only ${late.length} times`);
  }
}

if (problems.length) {
  console.error(problems.map((line) => `• ${line}`).join('\n'));
  process.exit(1);
}

console.log(`Copy check passed (${files.length} pages).`);
