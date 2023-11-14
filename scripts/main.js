let myHeading = document.querySelector("h1");
myHeading.textContent = "Cow Girl And Cakes";

let myButton = document.querySelector("button");
let myImage = document.querySelector("img");

function setUserName() {
  let myName = prompt("Пожалуйста, введите ваше имя.");
  if (myName) {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Hello, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Hello, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cow.png") {
    myImage.setAttribute("src", "./images/cow.png");
  } else {
    myImage.setAttribute("src", "./images/brain.png");
  }
};