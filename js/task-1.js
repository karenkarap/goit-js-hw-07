const items = document.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

for (const item of items) {
  let subtitle = item.querySelector('h2');
  let descr = item.querySelector('ul');
  console.log(`Category: ${subtitle.textContent}`);
  console.log(`Elements ${descr.children.length}`);
}
