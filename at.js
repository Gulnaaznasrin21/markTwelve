const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function calculateArea(side1,side2){
    const triangleArea = 1/2*(side1 * side2);
    return triangleArea;

}

function isTriangle(){
    if((Number(inputs[0].value))>0 && (Number(inputs[1].value))>0){
        const areaOfTriangle =  calculateArea((Number(inputs[0].value)),(Number(inputs[1].value)));
        outputEl.innerText ="Area of a triangle using heron's formula is" + areaOfTriangle +"units";
    }else{
        outputEl.innerText="you entered negative number please enter valid number"

    }
}  
isTriangleBtn.addEventListener("click",isTriangle);





