const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");
const gridView = document.getElementById("arrivalsDiv");
const listView = document.getElementById("listView");

console.log({ gridView });
console.log({ listView });

gridBtn.addEventListener("click", () => {
  gridView.style.display = "block";
  listView.style.display = "none";
});

listBtn.addEventListener("click", () => {
  listView.style.display = "block";
  gridView.style.display = "none";
});
