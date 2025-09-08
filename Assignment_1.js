// DOM elements
const colorBtn = document.getElementById("colorBtn");
const textBtn = document.getElementById("textBtn");
const title = document.getElementById("title");
const hoverBox = document.getElementById("hoverBox");

// Change background color when clicking button
colorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor ==="pink" ? "white" : "pink" ;
});

// Change text content when button is clicked
textBtn.addEventListener("click", () => {
  title.textContent =
    title.textContent === "I am a web page"
      ? "I just changed"
      : "I am a web page";
});

// Mouseover on the box
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "orange";
  hoverBox.textContent = "Yay!";
});

// Reset when mouse leaves
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "lightgray";
  hoverBox.textContent = "Hover over me";
});