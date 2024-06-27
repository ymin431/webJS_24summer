document.addEventListener("DOMContentLoaded", () => {
  function getRandomDiceNumber() {
    const max = 6;
    const min = 1;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function updateDice(id, dice) {
    const img = document.querySelector(`#${id}`);
    img.innerHTML = `<p>${id}</p><img src="../img/${dice}.png" />`;
  }

  function buttonClick(user) {
    const computer = getRandomDiceNumber();

    updateDice("computer", computer);
    updateDice("user", user);

    const result = document.querySelector("#result");
    if (computer == user) result.textContent = "맞춤";
    else result.textContent = "틀림";
  }

  for (let i = 1; i <= 6; i++) {
    document.querySelector(`#d${i}`).addEventListener("click", () => {
      buttonClick(i);
    });
  }
});
