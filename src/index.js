import "./style.css";

console.log("WORKING!");
console.log("watch is working too");

const picture = document.createElement("img");
picture.src = "../dist/restaurant.jpg";
picture.classList.add(".header__img");

const content = document.querySelector("#content");
content.appendChild(picture);
