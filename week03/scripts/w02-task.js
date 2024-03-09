// W02-Task - Profile Home Page

// Step 1 - Setup type tasks - no code required

// Step 2 - Variables

const fullName = "João Pedro Gomes da Silva";
let currentYear = 2024;
let profilePicture = ["\\week03\\images\\profile-pic.jpg", "profile-pic"];
// Step 3 - Element Variables

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yeaElement = document.querySelector("#year");
const imageElement = document.createElement("img");


// Step 4 - Adding Content
nameElement.innerHTML = `<strong> ${fullName} <strong>`;
const placeHolder = document.querySelector("img");


placeHolder.setAttribute("src", profilePicture[0]);
placeHolder.setAttribute("alt",`Profile image of ${fullName}` );


// Step 5 - Array
const FavFoods = ["brazilian X tudo", " pasta", " rice, beans, beef, french fries", " chicken wings"]
let goodFood = " chicken pie"
FavFoods.push(goodFood);
foodElement.innerHTML += `<br>${FavFoods}`
FavFoods.shift();
foodElement.innerHTML += `<br>${FavFoods}`
FavFoods.pop()
foodElement.innerHTML += `<br>${FavFoods}`








