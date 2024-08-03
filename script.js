let firstNum = "";
let secondNum = "";
let opet = "";
let ans = "";
let numbers = document.querySelectorAll(".num");
let options = document.querySelectorAll(".opt");
let screen = document.querySelector("#input");
let answer = document.querySelector("#ans");
let options2 = document.querySelectorAll(".opt2");
let lcd= document.querySelector("#display");

function display() {
    screen.innerText = `${firstNum} ${opet} ${secondNum}`;
}
function calculate(firstNum, secondNum, opet){
    const num1 = parseFloat(firstNum);
    const num2 = parseFloat(secondNum);
    let result = 0;
    if(opet=== "+"){
        result= num1+num2;
    }
    else if(opet=== "-"){
        result= num1-num2;
    }
    else if(opet=== "x"){
        result= num1*num2;
    }
    else if(opet=== "/"){
        result = num2 !== 0 ? num1 / num2 : "Error";
    }
    else if(opet=== "%"){
        result=num1 % num2;
    }
    else if(opet=== "!"){
        let val=1;
            const num = parseInt(firstNum);
            for(let i=1;i<=num;i++){
                val*=i;
            }
        result=val;
    }
    else if(opet==="^1/2"){
        result= Math.sqrt(num1);
    }
    else if(opet==="inverse"){
        result=1/num1;
    }
    else if(opet==="^3"){
        result=num1*num1*num1;
    }
    else if(opet==="^2"){
        result=num1*num1;
    }
    answer.innerText=`= ${result}`;
}
numbers.forEach(num => {
    num.addEventListener("click", function handler(event) {
        if (opet === "") {
            firstNum += num.innerText;
        } else {
            secondNum += num.innerText;
        }
        display();
    });
});

options.forEach(opt => {
    opt.addEventListener("click", () => {
        if (opet === "") {
            opet = opt.innerText;
            console.log(opet);
            display();
        } else {
            console.log("Operator already selected");
        }
    });
});

options2.forEach(opt => {
    opt.addEventListener("click", () => {
        let attribute = opt.getAttribute("id");
        if(attribute=== "reset"){
            answer.innerText= "";
            firstNum = "";
            secondNum = "";
            opet = "";
            screen.style.opacity= "1";
            display();
        }
        else if(attribute === "delete"){
            if (secondNum) {
                secondNum = secondNum.slice(0, -1);
            } else if (opet) {
                opet = "";
            } else if (firstNum) {
                firstNum = firstNum.slice(0, -1);
            }
            display();
        }
        else if(attribute === "/"){
            opet="/";
            display();
            // calculate(firstNum, secondNum, opet);
        }
        else if(attribute === "!"){
            opet="!";
            
            display();
            
        }
        else if(attribute==="decimal"){
            if (opet === "") {
                if (!firstNum.includes(".")) {
                    firstNum += ".";
                }
            } 
            else {
                if (!secondNum.includes(".")) {
                    secondNum += ".";
                }
            }
            display();
        }
        else if(attribute==="equal"){
            screen.style.opacity= "0.5";
            answer.style.fontSize= "20px";
            lcd.style.paddingTop= "4px";
            calculate(firstNum, secondNum, opet);
        }
        else if(attribute === "root"){
            opet="^1/2";
            display();
        }
        else if(attribute === "inv"){
            screen.innerText= `1/${firstNum}`;
            opet= "inverse";
        }
        else if(attribute==="cube"){
            opet="^3";
            display();
        }
        else if(attribute==="sq"){
            opet="^2";
            display();
        }
    });
});