const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#Hypotenuse-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
    const sumOfSquares = a * a + b * b;
    return sumOfSquares;


}

function calculateHypotenuse() {
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthofHypotenuse = Math.sqrt(sumOfSquares);
    outputEl.innerText = "The length of Hypotenuse is" + lengthofHypotenuse;

}
hypotenuseBtn.addEventListener("click", calculateHypotenuse);