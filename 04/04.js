// 익명 함수 function - 바로 호출할 땐 따로 함수명 지어줄 필요 X
// document.addEventListener("DOMContentLoaded", function () {
//   console.log("안녕!!");
// });

// ()=>{}가 위의 익명 함수와 같은 기능을 함
document.addEventListener("DOMContentLoaded", () => {
  console.log("화살표 함수!!");

  // 변수 선언
  // 요즘은 document.getElementByID 잘 안쓰고 document.querySelector 많이 씀
  // const msg = document.getElementById("msg");
  const msg = document.querySelector("#msg");
  const bt = document.querySelector("button");

  // msg.innerHTML = "<h1>안녕</h1>";
  // msg.textContent = "<h1>안녕</h1>";

  bt.addEventListener("click", () => {
    if (msg.innerHTML == "안녕") msg.innerHTML = "잘가";
    else msg.innerHTML = "안녕";
  });
});
