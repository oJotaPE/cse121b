//global variables
let countryList = []; //it needs to be an array to make sure my site will work
const intro = document.querySelector("#intro");
const info = document.querySelector("#info");


//display function
const displayCountries = (countries) => {
  countries.forEach(country => {

      let article = document.createElement("article");
      article.setAttribute("id", `country`)

      const name = document.createElement("h3");
      name.textContent = `${country.name.common}`;
      name.setAttribute("id", `country-name`);

      const flag = document.createElement("img");
      flag.setAttribute("src", `${country.flags.svg}`);
      flag.setAttribute("alt", `${country.flags.alt}`);
      flag.setAttribute("id", `country-flag`);

      const capital = document.createElement("li");
      capital.innerText = `Capital: ${country.capital}`;

      const region = document.createElement("li");
      region.innerText = `Continent: ${country.region}`;

      const population = document.createElement("li");
      population.innerText= `Population: ${country.population}`


      const ul = document.createElement("ul");
      ul.setAttribute("id", `country-data`)
      ul.appendChild(capital);
      ul.appendChild(population);
      ul.appendChild(region);
      
      
      article.appendChild(name);
      article.appendChild(flag);
      article.appendChild(ul);
      

      info.appendChild(article);
      // console.log(article);
  });
}

// async function using fetch
const url = 'https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population'; //API with flag, name, capital and continent for each country
const getCountry = async () => { //declare this is an async function
  const response = await fetch(url); //wait for it to finish to load instead of doing other stuff
  if(response.ok) {
    const countries = await response.json(); //turn it into json
    countryList = countries;
    displayCountries(countryList);
    console.log(templeList);
  }
}

//reset function
function reset() {
  info.innerHTML = "";
}

//filterCountry function
const filterCountry = (countries) => {
  // reset();

  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let checkedBoxes = [];
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      checkedBoxes.push(checkbox.id);
    }
  });

    //verify the continent
    let filtered = countryList.filter((country) => {
      return checkedBoxes.includes(country.region.toLowerCase())
    });

  reset();
  displayCountries(filtered);

  if (filered = []) {
    displayCountries(countryList);
  }
}

//adding introduction to the site
let presentation = document.createElement("p");
presentation.innerText = `This website is supposed to present data for all the countries, and to provide a way to filter and specify the list of countries depending on what you are looking for. \n For the section chosen above, here is the list: `
intro.appendChild(presentation);

//calling getCountry to fetch data
getCountry();

//event handler
const button = document.querySelector("#filter-button");
button.addEventListener("click", filterCountry);