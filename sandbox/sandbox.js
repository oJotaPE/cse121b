// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}

function doStuff(data) {
  let output = document.querySelector("#output");
  results = data;
  let html = `<h2>${results.name}</h2>
               <img src="${results.sprites.front_default}" alt="image of ${results.name}}`;
  outputElement.innerHTML = html;
}
getPokemon(url);
console.log("second: ", results);