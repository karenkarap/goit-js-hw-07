const items = document.querySelectorAll('.item');
const title = document.querySelectorAll('h2');

console.log(`Number of categories: ${items.length}`);

for (const item of title) {
  let subtitle = item.textContent;
  let descr = item.nextElementSibling;
  console.log(`Category: ${subtitle}`);
  console.log(`Elements ${descr.children.length}`);
}
