// Practice what you learned!
let firstParagraph = document.body.children[1].children[1].children[0];

let secondParagraph = document.body.children[1].children[1].children[1];

let sectionParagraph = document.body.children[1].children[1];

let paragraphStatus = false;

let colorStatus = false;
// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
let buttonParagraph = document.querySelector("button");
//    - Select the second button by using an "id"
let buttonColor = document.getElementById("buttonColor");
// 2) Add "click" event listener to both buttons (with two different functions).
buttonParagraph.addEventListener("click", deleteParagraph);
buttonColor.addEventListener("click", changeColor);
//    The functions should "console.dir()" the clicked buttons.

//    - Output the first button by using the variable in which it's stored
function deleteParagraph(event) {
  console.dir(buttonParagraph);
  if (!paragraphStatus) {
    paragraphStatus = true;
    sectionParagraph.removeChild(firstParagraph);
  } else {
    paragraphStatus = false;
    sectionParagraph.insertAdjacentElement("afterbegin", firstParagraph);
  }
}
//    - Output the second button WITHOUT using the variable in which it's stored
function changeColor(event) {
  console.dir(event.target);
  if (!colorStatus) {
    colorStatus = true;
    firstParagraph.style.color = "red";
    secondParagraph.className = "textColor"; 
  } else {
    colorStatus = false;
    firstParagraph.style.color = "black";
    secondParagraph.className = "";
  }
}
// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!
