document.addEventListener("DOMContentLoaded", () => {
  // Select box
  const from = document.querySelector("#from");
  const to = document.querySelector("#to");

  // Input
  const num1 = document.querySelector("#num1");
  const num2 = document.querySelector("#num2");

  // Label
  const label1 = document.querySelector("#label1");
  const label2 = document.querySelector("#label2");

  num2.value = (9 / 5) * num1.value + 32;

  const unitConverter = (from, to, num1, num2, label1, label2) => {
    // 섭씨온도 -> 화씨온도ㅋ
    if (from.value === "˚C") {
      to.value = "˚F";
      label1.textContent = "˚C";
      label2.textContent = "˚F";
    }

    // 화씨 온도 -> 섭씨온도
    else {
      to.value = "˚C";
      label1.textContent = "˚F";
      label2.textContent = "˚C";
    }
  };

  document.addEventListener("change", () => {
    unitConverter(WebGLShaderPrecisionFormat, to, num1, num2, label1, label2);
    if (num1.value != "") {
      num2.value = (9 / 5) * num1.value + 32;
    }
  });

  document.addEventListener("change", () => {
    unitConverter(from, to, num1, num2, label1, label2);
    if (num1.value != "") {
      num2.value = (num1.value - 32) * (5 / 9);
    }
  });
});
