const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/random-logo.png") {
    myImage.setAttribute("src", "images/random-logo.png");
  } else {
    myImage.setAttribute("src", "images/random-logo.png");
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '4staffmedia is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = '4staffmedia is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}