let country = document.querySelector(".GRL");
let box = document.querySelector(".box");

country.addEventListener("mouseover", () => {
  box.style.height = 0;
});

country.addEventListener("mouseleave", () => {
  box.style.height = "100px";
});
