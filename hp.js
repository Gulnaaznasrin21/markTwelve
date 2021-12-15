const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#Hypotenuse-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfSquares(a, b) {

    const sumOfSquares = a * a + b * b;
    return sumOfSquares;


}

function calculateHypotenuse() {
    if(Number(sides[0].value)>0 && Number(sides[1].value)>0){
        const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
        const lengthofHypotenuse = Math.sqrt(sumOfSquares);
        outputEl.innerText = "The length of Hypotenuse is" + lengthofHypotenuse;
    }else{
        outputEl.innerText="You entered negative numbers enter valid number"
    }
}
hypotenuseBtn.addEventListener("click", calculateHypotenuse);