/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name : "João Pedro Gomes",
    photo : "\\images\\profile-pic.jpg",

    favoriteFoods : [
        "X tudo", 
        "pizza", 
        "french fries",
        "chicken wings"
    ],
    hobbies : [
        "card games",
        "hanging out with friends",
        "cooking"
    ],
    placesLived : [],
}

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Rio de Janeiro, Brasil",
        length: "13 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Minas Gerais, Brasil",
        length: "5 years"
    }
);

/* DOM Manipulation - Output */

/* Name */
let myName = document.querySelector("#name");
myName.textContent = myProfile.name;

/* Photo with attributes */
let myPicture = document.querySelector("#photo");
myPicture.setAttribute("src", myProfile.photo);
myPicture.setAttribute("alt", "my profile picture");

/* Favorite Foods List*/
function addFood(food){
    let list = document.createElement("li");
    list.textContent = food;
    document.querySelector("#favorite-foods").appendChild(list);

}

let foodList = myProfile.favoriteFoods;
foodList.forEach(function(food) {addFood(food)})


/* Hobbies List */
function addHobby(hobby) {
    let list = document.createElement("li");
    list.textContent = hobby;
    document.querySelector("#hobbies").appendChild(list);
}

let hobbyList = myProfile.hobbies;
hobbyList.forEach(function(hobby) {addHobby(hobby)})

/* Places Lived DataList */
myProfile.placesLived.forEach(state => {
    let aPlace = document.createElement("dt");
    let aLength = document.createElement("dd");

    aPlace.textContent = state.place;
    aLength.textContent = state.length;

    document.querySelector("#places-lived").appendChild(aPlace);
    document.querySelector("#places-lived").appendChild(aLength);
})