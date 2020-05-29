alert("i am linked");

//global variables
let stringA;
let numberA;
let operator;
let stringB;
let numberB;

//-------------Number Buttons--------------------------
//----------------------1------------------------------
let btnOne = document.getElementById("one");
btnOne.addEventListener("click", btnOneFunction);

function btnOneFunction() {
  document.getElementById("numbers").innerHTML += "1";
}

//----------------------2------------------------------
let btnTwo = document.getElementById("two");
btnTwo.addEventListener("click", btnTwoFunction);

function btnTwoFunction() {
  document.getElementById("numbers").innerHTML += "2";
}

//----------------------3------------------------------
let btnThree = document.getElementById("three");
btnThree.addEventListener("click", btnThreeFunction);

function btnThreeFunction() {
  document.getElementById("numbers").innerHTML += "3";
}

//----------------------4------------------------------
let btnFour = document.getElementById("four");
btnFour.addEventListener("click", btnFourFunction);

function btnFourFunction() {
  document.getElementById("numbers").innerHTML += "4";
}


//----------------------5------------------------------
let btnFive = document.getElementById("five");
btnFive.addEventListener("click", btnFiveFunction);

function btnFiveFunction() {
  document.getElementById("numbers").innerHTML += "5";
}

//----------------------6------------------------------
let btnSix = document.getElementById("six");
btnSix.addEventListener("click", btnSixFunction);

function btnSixFunction() {
  document.getElementById("numbers").innerHTML += "6";
}

//----------------------7------------------------------
let btnSeven = document.getElementById("seven");
btnSeven.addEventListener("click", btnSevenFunction);

function btnSevenFunction() {
  document.getElementById("numbers").innerHTML += "7";
}

//----------------------8------------------------------
let btnEight = document.getElementById("eight");
btnEight.addEventListener("click", btnEightFunction);

function btnEightFunction() {
  document.getElementById("numbers").innerHTML += "8";
}

//----------------------9------------------------------
let btnNine= document.getElementById("nine");
btnNine.addEventListener("click", btnNineFunction);

function btnNineFunction() {
  document.getElementById("numbers").innerHTML += "9";
}

//----------------------0------------------------------
let btnZero = document.getElementById("zero");
btnZero.addEventListener("click", btnZeroFunction);

function btnZeroFunction() {
  document.getElementById("numbers").innerHTML += "0";
}

//----------------------.------------------------------
let btnDecimal = document.getElementById("decimal");
btnDecimal.addEventListener("click", btnDecimalFunction);

function btnDecimalFunction() {
  document.getElementById("numbers").innerHTML += ".";
}

//-------------Operator Buttons --------------------------
//-------------------Adding-------------------------------
let btnAdd = document.getElementById("add");
btnAdd.addEventListener("click", btnAddFunction);

function btnAddFunction() {
  //Get the number from the calculator screen
  stringA = document.getElementById("numbers").innerHTML;
  //convert the string to a number
  numberA = Number(stringA);
  //Clear the screen
  document.getElementById("numbers").innerHTML = "";
  //Store this as the operator
  operator = "addition";
}

//-------------------subtracting-------------------------------
let btnSubtract = document.getElementById("subtract");
btnSubtract.addEventListener("click", btnSubtractFunction);

function btnSubtractFunction() {
  //Get the number from the calculator screen
  stringA = document.getElementById("numbers").innerHTML;
  //convert the string to a number
  numberA = Number(stringA);
  //Clear the screen
  document.getElementById("numbers").innerHTML = "";
  //Store this as the operator
  operator = "subtracting";
}

//-------------------Multiplying-------------------------------
let btnMultiply = document.getElementById("multiply");
btnMultiply.addEventListener("click", btnMultiplyFunction);

function btnMultiplyFunction() {
  //Get the number from the calculator screen
  stringA = document.getElementById("numbers").innerHTML;
  //convert the string to a number
  numberA = Number(stringA);
  //Clear the screen
  document.getElementById("numbers").innerHTML = "";
  //Store this as the operator
  operator = "multiplying";
}

//-------------------Dividing-------------------------------
let btnDivide = document.getElementById("divide");
btnDivide.addEventListener("click", btnDivideFunction);

function btnDivideFunction() {
  //Get the number from the calculator screen
  stringA = document.getElementById("numbers").innerHTML;
  //convert the string to a number
  numberA = Number(stringA);
  //Clear the screen
  document.getElementById("numbers").innerHTML = "";
  //Store this as the operator
  operator = "dividing";
}

//-------------------Square Root-------------------------------
let btnSqrt = document.getElementById("sqrt");
btnSqrt.addEventListener("click", btnSqrtFunction);

function btnSqrtFunction() {
  //Get the number from the calculator screen
  stringA = document.getElementById("numbers").innerHTML;
  //convert the string to a number
  numberA = Number(stringA);
  //Clear the screen
  document.getElementById("numbers").innerHTML = "";
  //Store this as the operator
  operator = "squareRoot";
  alert("I work");
}

//--------------------------Equals -----------------------
let btnEquals = document.getElementById("equals");
btnEquals.addEventListener("click", btnEqualsFunction);

function btnEqualsFunction() {
  //Get the number from the calculator screen
  stringB = document.getElementById("numbers").innerHTML;
  //convert the string to a number
  numberB = Number(stringB);
  //let answer = numberA + numberB;
    if (operator == "addition") {
      answer = numberA + numberB;
      document.getElementById("numbers").innerHTML = answer;
    }else if (operator == "subtracting"){
      answer = numberA - numberB;
      document.getElementById("numbers").innerHTML = answer;
    }else if (operator == "multiplying"){
      answer = numberA * numberB;
      document.getElementById("numbers").innerHTML = answer;
    }else if (operator == "dividing"){
      answer = numberA / numberB;
      document.getElementById("numbers").innerHTML = answer;
    }else if (operator == "squareRoot"){
      answer = Math.sqrt(numberA)
      document.getElementById("numbers").innerHTML = answer;
    }else if (operator == "square"){
      answer = numberA * numberA
      document.getElementById("numbers").innerHTML = answer;

    }
}

//------------------------Clear--------------------------------
let btnClear = document.getElementById("clear");
btnClear.addEventListener("click", btnClearFunction);

function btnClearFunction() {
  document.getElementById("numbers").innerHTML = "";
}
