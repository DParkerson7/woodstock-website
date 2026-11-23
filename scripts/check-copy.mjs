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
must(home, 'Woodstock Coffee &amp; Bakeshop · est. 2012 · new ownership 2024 · expansion on the horizon!', 'footer line');
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
must(home, 'I made a ton of mistakes.', 'Matt Childress quote');
must(home, 'You just have to hang in there for the first two or three years.', 'Matt Childress close');
must(home, 'quote from founder', 'founder attribution');
must(home, 'Anybody can sell a cupcake.', 'founder cupcake line');
must(home, 'We inspire lives one box at a time.', 'founder box line');
must(home, 'It’s a great day to be alive.', 'founder alive line');
mustNot(home, /Matt Childress/, 'Matt name on the homepage');
mustNot(home, /Dale Childress/, 'Dale name in a homepage attribution');
must(home, 'Opening winter 2027', 'honey kicker');
must(home, 'Honey Be Good is Jackson’s FIRST family cafe', 'honey heading');
must(home, 'Play, sip, and belong.', 'honey body');
must(home, 'Visit the link below to start your membership today!', 'honey membership line');
mustNot(home, /Honey Be Good is next door/, 'old honey heading');
mustNot(home, /\[Founders quote coming soon\]/, 'old founders placeholder');
must(home, 'The mission is to serve.', 'mission line');
must(home, 'From the current owner', 'owner label');
must(home, 'New things are on the horizon!', 'staying line');
must(home, 'staying-3510.jpg', 'staying sketch');
must(home, 'Pencil sketch mock-up of the new coffee bar.', 'staying alt');
must(home, 'strip-3772.jpg', 'latte heart');
must(home, 'strip-1-2.jpg', 'iced caramel');
mustNot(home, /\[Owner quote coming soon\]/, 'old owner placeholder');
mustNot(home, /Since 2012/, 'since 2012 kicker');
mustNot(home, /Owner \/ operator/, 'owner kicker');
mustNot(home, /80 Innsdale Cove, Suite A\./, 'old come-by heading');
mustNot(home, /The Parkerson family/, 'old footer line');
must(home, 'At just 18 years old', 'elena story');
mustNot(home, /From the street you can see/, 'old street paragraph');
mustNot(home, /Matt Childress and his father/, 'old founders sentence on the homepage');
mustNot(home, /8am/, 'upcoming hours on the homepage');
mustNot(home, /est\.\s*2024/i, 'est. 2024');
mustNot(home, /established in 2024/i, 'established in 2024');
mustNot(home, /since 2024/i, 'since 2024 without late');

must(cakes, 'a piece of cake!', 'cakes hero line');
mustNot(cakes, /The bench/, 'the bench kicker');
must(cakes, '6 inch round — $45', '6-inch price');
must(cakes, '8 inch round — $55', '8-inch price');
must(cakes, '8 inch heart shape — $60', 'heart price');
must(cakes, 'The base price is just a starting point to your order.', 'cake quote line');
must(cakes, 'Prices, sizes, and more', 'prices heading');
must(cakes, 'Wedding cakes', 'wedding heading');
must(cakes, 'Our team is dedicated to being the best option for your wedding!', 'wedding line');
must(cakes, 'cake-video-1.mp4', 'cake video 1');
must(cakes, 'cakes-strip-9122.jpg', 'cake strip');
must(cakes, 'wedding-8500.jpg', 'wedding photo');
must(cakes, '243204993569164', 'cake form id');
mustNot(cakes, /Classic Vintage Blue/, 'old named cake menu');

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
must(cafe, 'New lobby, better ingredients, unforgettable coffee.', 'cafe hero line');
must(cafe, 'Coming in February', 'roaster timing');
must(cafe, 'lobby-3397.jpg', 'lobby couch photo');
must(cafe, 'Plastic free, fully compostable to-go cups', 'compostable cups');
must(cafe, 'Custom roasted espresso beans', 'custom beans');
must(cafe, 'Locally farmed ingredients', 'local ingredients');
must(cafe, 'House made syrups', 'house syrups list');
mustNot(cafe, /The cup/, 'the cup kicker');
mustNot(cafe, /Coffee should not be that expensive/, 'old price title');
mustNot(cafe, /latte-matcha/, 'matcha image');
mustNot(cafe, /A richer cafe story/, 'old cafe story heading');

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
  const allowed = (html.match(/late 2024|new ownership 2024/g) ?? []).length;
  if (allowed !== hits.length) {
    problems.push(`${file} mentions 2024 ${hits.length} times but only ${allowed} are "late 2024" or "new ownership 2024"`);
  }
}

if (problems.length) {
  console.error(problems.map((line) => `• ${line}`).join('\n'));
  process.exit(1);
}

console.log(`Copy check passed (${files.length} pages).`);
