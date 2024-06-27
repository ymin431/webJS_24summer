document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector("#img");
  const bt = document.querySelector("button");

  let n = 1;
  let htmlTag = `<img src="../04img/${n}.png" />`;

  const max = 6;
  const min = 1;

  bt.addEventListener("click", () => {
    n = Math.floor(Math.random() * (max - min + 1) + min);
    htmlTag = `<img src="../04img/${n}.png" />`;
    img.innerHTML = htmlTag;
  });
});
