let mainScreen = document.getElementById("screen");
let clearBtn = document.getElementById("clear");
let equalBtn = document.getElementById("equal");
equalBtn.addEventListener("click", calculate);

let numbers = document.querySelectorAll(".number");
let numbersArray = Array.from(numbers);

let operators = document.querySelectorAll(".operator");
let operatorsArray = Array.from(operators);

let rem = 0;
numbersArray.forEach((i) => {
  i.addEventListener("click", (e) => {
    if (rem == 0) {
      mainScreen.textContent = "";
      rem = 1;
    }
    mainScreen.textContent += i.textContent;
    console.log(i.textContent);
  });
});

operatorsArray.forEach((i) => {
  i.addEventListener("click", (e) => {
    mainScreen.textContent += i.textContent;
    console.log(i.textContent);
    rem = 1;
  });
});

clearBtn.addEventListener("click", () => {
  console.log(clearBtn);
  mainScreen.textContent = 0;
  rem = 0;
});

function calculate() {
  rem = 0;
  let input = mainScreen.textContent;

  let opr;
  if (input.includes("+")) {
    operator = "+";
    let [op1, op2] = findOperands(operator);
    mainScreen.textContent = `${+op1 + +op2}`;
  }
  else if (input.includes("-")) {
    operator = "-";
    let [op1, op2] = findOperands(operator);
    mainScreen.textContent = `${+op1 - +op2}`;
  }
  else if (input.includes("x")) {
    operator = "x";
    let [op1, op2] = findOperands(operator);
    mainScreen.textContent = `${+op1 * +op2}`;
  }
  else if (input.includes("/")) {
    opr = "/";
    let [op1, op2] = findOperands(opr);
    mainScreen.textContent = `${+op1 / +op2}`;
  }

  else if(input.includes("%")){
    operator= "%";
    let[op1]= findOperands(operator);
    mainScreen.textContent = `${+op1 /100 }`;
  }
  else{
    console.log('h')
  }
  function findOperands(operator) {
    let index = input.indexOf(operator);
    let inpArray = input.split("");
    let op1 = "";
    for (let i = 0; i < index; i++) {
      op1 += inpArray[i];
    }
    let op2 = "";
    for (let i = index + 1; i < inpArray.length; i++) {
      op2 += inpArray[i];
    }

    return [op1, op2];
  }

}

console.log(numbers);
