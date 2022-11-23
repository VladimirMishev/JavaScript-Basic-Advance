let spanElement = document.querySelector("span");
spanElement.className = "spanStyle";
spanElement.innerText =
  "* Please enter your name but not longer than 60 characters";

let inputElement = document.querySelector("input");
inputElement.addEventListener("input", getCharacterCount);

function getCharacterCount(event) {
  spanElement.className = "spanStyle";
  if (event.target.value.length > 50) {
    inputElement.className = "inputStyleRed";
    spanElement.innerText =
      "You enter: " + event.target.value.length + "/60 characters.";
  } else {
    spanElement.innerText =
      "You enter: " + event.target.value.length + "/60 characters.";
      inputElement.className = ""
  }
  if (event.target.value.length == inputElement.maxLength) {
    spanElement.innerText = "You reach your max input character number.";
    spanElement.className = "spanStyleRed";
  }
}
