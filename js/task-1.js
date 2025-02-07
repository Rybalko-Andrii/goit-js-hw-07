const items = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const elemCount = item.querySelectorAll("li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elemCount}`);
});
