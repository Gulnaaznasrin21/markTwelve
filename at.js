const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function calculateArea(side1,side2){
    const triangleArea = 1/2*(side1 * side2);
    return triangleArea;

}

function isTriangle(){
   const areaOfTriangle =  calculateArea((Number(inputs[0].value)),(Number(inputs[1].value)));
   outputEl.innerText ="Area of a triangle using heron's formula is" + areaOfTriangle +"units";
}  
isTriangleBtn.addEventListener("click",isTriangle);





