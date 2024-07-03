document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector("img");
  const num = document.querySelector("input");
  const button = document.querySelector("button");

  let flag = true; // true이면 랜덤수 생성 가능 flase이면 랜덤수 생성 불가

  const getRandom = () => {
    return Math.floor(Math.random() * 100 + 1);
  };

  let random = getRandom();
  console.log(random);

  const updownGame = (img, num, button) => {
    if (num.value > random) img.src = "../img/down.png";
    else if (num.value < random) img.src = "../img/up.png";
    else {
      img.src = "../img/good.png";
      num.style.display = "none";
      button.textContent = "번호를 다시 생성하세요.";
      flag = false;
    }
  };

  button.addEventListener("click", () => {
    if (!flag) {
      random = getRandom();
      console.log(random);
      img.src = "../img/what.png";
      num.style.display = "inline";
      num.value = "";
      button.textContent = "확인";
      flag = true;
    } else if (num.value == "") {
      alert("숫자를 입력하세요.");
      num.focus();
    } else updownGame(img, num, button);
  });
});
