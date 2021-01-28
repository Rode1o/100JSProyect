const button = document.querySelector("button");
const body = document.querySelector("body");
const colors = [
  "red",
  "green",
  "blue",
  "white",
  "pink",
  "brown",
  "yellow",
  "purple",
];
body.style.backgroundColor = "orange";
button.addEventListener("click", changeBackground);
function changeBackground() {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
}
