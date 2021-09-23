// sumatoria de
const textArea = document.getElementById("textArea");
const btnCalc = document.getElementById("btnCalc");
const nums = [];
let suma = 0;

const sumatoria = () => {
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      nums.push(i);
    }
  }
};

btnCalc.addEventListener("click", (e) => {
  e.preventDefault();

  sumatoria();
  nums.forEach((num) => {
    suma += num;
  });

  textArea.innerHTML = `Los números de 3 y 5: \n${nums.toString()} \nEl total de números es: ${
    nums.length
  } \nLa sumatoria de todos es: ${suma}`;
});
