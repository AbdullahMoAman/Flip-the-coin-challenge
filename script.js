const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const coin = document.querySelector(".coin img");

btn.addEventListener("click", function () {
  const random = Math.random() < 0.5 ? "Heads" : "Tails";
  result.textContent = random;

  coin.src = `resources/${random}.svg`;
  console.log(coin);
});
