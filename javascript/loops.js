//declear variables
const buttonFor = document.getElementById("forLoop");
const inputNumber = document.getElementById("number");
const displayResult = document.getElementById("diplayResult");
let inputValue = 0;

//declear variable for section highlight
const buttonForOf = document.querySelector("#highlight button");
const anchorList = document.querySelectorAll("#highlight a");
let onClass = true;

//declear variable for section displayUserInfo
const buttonForOn = document.querySelector("#displayUserInfo button");
let userData = true;

//declear variable for section statistic
const inputTargetNumber = document.querySelector("#statistic input");
const buttonWhile = document.querySelector("#statistic button");
let inputTargetValue = 0;

//events functions
function getInsertValue(event) {
  inputValue = event.target.value;
  if (inputValue === "" || inputValue <= "0") {
    buttonFor.disabled = true;
    displayResult.style.display = "none";
  } else {
    buttonFor.disabled = false;
  }
}

function getResult(event) {
  let sum = 0;

  for (let i = 0; i <= inputValue; i++) {
    sum = sum + i;
  }

  displayResult.innerText = "The sum of all numbers is: " + sum;
  displayResult.style.display = "block";
}

//event functions for section highlight
function anchorHighlight(event) {
  if (onClass) {
    for (const anchor of anchorList) {
      anchor.classList.add("highlightAnhor");
    }
    onClass = false;
  } else {
    for (const anchor of anchorList) {
      anchor.classList.remove("highlightAnhor");
    }
    onClass = true;
  }
}

//event functions for section displayUserInfo
function displayUserData(event) {
  const sectionElement = document.getElementById("displayUserInfo");

  if (userData) {
    const userObject = {
      userName: "Vladimir",
      userEmail: "vladimir.mishev982@gmail.com",
      userAge: 40,
      userGender: "male",
      getTextInfor() {
        console.log("hello object");
      },
    };

    userObject.getTextInfor();

    let displayUser = document.createElement("ul");
    displayUser.classList.add("displayUserInfo");

    for (const property in userObject) {
      let listElement = document.createElement("li");
      listElement.innerHTML =
        property + ": " + "<strong>" + userObject[property] + "</strong>";
      displayUser.append(listElement);
    }

    sectionElement.insertAdjacentElement("beforeend", displayUser);

    userData = false;
  } else {
    const unorderElement = document.querySelector("ul");
    sectionElement.removeChild(unorderElement);
    userData = true;
  }
}

//event functions for section statistic
function clearElement() {
  const numberOfRolls = document.querySelector("#numberOfRolls");
  if (numberOfRolls) {
    numberOfRolls.textContent = "X";
  }
  const targetNumber = document.querySelector("#targetNumber");
  if (targetNumber) {
    targetNumber.textContent = "Y";
  }
  const listElement = document.querySelector("#statistic ul");
  if (listElement) {
    listElement.parentElement.removeChild(listElement);
  }
}

function getInputTargetNumber(event) {
  if (event.target.value > 0 && event.target.value <= 6) {
    buttonWhile.disabled = false;
    inputTargetValue = event.target.value;
    const warningElement = document.getElementById("warning");
    if (warningElement) {
      warningElement.parentElement.removeChild(warningElement);
    }
    clearElement();
  } else if (event.target.value === "") {
    buttonWhile.disabled = true;
    const warningElement = document.getElementById("warning");
    if (warningElement) {
      warningElement.parentElement.removeChild(warningElement);
    }
    clearElement();
  } else {
    const warningMessage = document.createElement("p");
    warningMessage.textContent = "*Plase enter valid Number between 1 or 6.";
    warningMessage.style.color = "red";
    warningMessage.id = "warning";
    inputTargetNumber.insertAdjacentElement("afterend", warningMessage);
    buttonWhile.disabled = true;
    clearElement();
  }
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollResult(event) {
  let numberOfRolls = document.querySelector("#numberOfRolls");
  let targetNumber = document.querySelector("#targetNumber");
  targetNumber.textContent = inputTargetValue;

  let listElement = document.querySelector("#statistic ul");

  if (listElement) {
    listElement.innerHTML = "";
  } else {
    listElement = document.createElement("ul");
    listElement.classList.add("displayUserInfo");
  }

  let countRolls = 0;
  let resultEqual = true;

  while (resultEqual) {
    const rollDiceNumber = rollDice();
    if (rollDiceNumber == inputTargetValue) {
      resultEqual = false;
      countRolls++;
      let listItemElement = document.createElement("li");
      listItemElement.textContent =
        "Role " + countRolls + ": " + rollDiceNumber;
      listElement.append(listItemElement);
    } else {
      countRolls++;
      let listItemElement = document.createElement("li");
      listItemElement.textContent =
        "Role " + countRolls + ": " + rollDiceNumber;
      listElement.append(listItemElement);
    }
  }

  numberOfRolls.textContent = countRolls;

  buttonWhile.insertAdjacentElement("afterend", listElement);
}

//declear events
buttonFor.addEventListener("click", getResult);
inputNumber.addEventListener("input", getInsertValue);

//declear events for section highlight
buttonForOf.addEventListener("click", anchorHighlight);

//declear events for section highlight
buttonForOn.addEventListener("click", displayUserData);

//declear events for section statistic
inputTargetNumber.addEventListener("input", getInputTargetNumber);
buttonWhile.addEventListener("click", rollResult);
