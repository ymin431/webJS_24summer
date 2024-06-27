document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector("#img");
  const bt = document.querySelector("button");

  const max = 6;
  const min = 1;

  bt.addEventListener("click", () => {
    let n = Math.floor(Math.random() * (max - min + 1) + min);
    let htmlTag = `<img src="../img/${n}.png" />`;
    img.innerHTML = htmlTag;
  });
});
