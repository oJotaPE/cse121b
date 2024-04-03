//global variables
let countryList = [] //it needs to be an array to make sure my site will work

// async function using fetch
const url = 'https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population' //API with flag, name, capital and continent for each country

const getCountry = async () => { //declare this is an async function
  const response = await fetch(url); //wait for it to finish to load instead of doing other stuff
  if(response.ok) {
    const countries = await response.json(); //turn it into json
    countryList = countries;
    displayCountries(countryList);
  }
}


//adding introduction to the site
const intro = document.querySelector("#intro");
let presentation = document.createElement("p");
presentation.innerText = `This website is supposed to present data for all the countries, and to provide a way to filter and specify the list of countries depending on what you are looking for. \n For the section chosen above, here is the list: `
intro.appendChild(presentation);

//display function
const displayCountries = (countries) => {
  countries.forEach(country => {

      let article = document.createElement("article");
      article.setAttribute("id", `country`)

      const name = document.createElement("h3");
      name.textContent = `${country.name.common}`;

      const flag = document.createElement("img");
      flag.setAttribute("src", `${country.flags.svg}`);
      flag.setAttribute("alt", $`${country.flags.alt}`);

      const capital = document.createElement("p");
      capital.textContent = `${country.capital}`;

      const region = document.createElement("p");
      region.textContent = `${country.region}`;

      const population = document.createElement("p");
      population.textContent = `${country.population}`


      const ul = document.createElement("ul");
      const caLi = document.createElement("li");
      caLi.innerText = `capital: ${capital}`;
      const poLi = document.createElement("li");
      poLi.innerText = `population: ${population}`
      const reLi = document.createElement("li");
      reLi.innerText = `region: ${region}`;
      ul.appendChild(caLi);
      ul.appendChild(poLi);
      ul.appendChild(reLi);
      
      
      article.appendChild(name);
      article.appendChild(flag);
      article.appendChild(ul);
      

      // intro.appendChild(article);
      console.log(article);
  });
}

//calling getCountry to fetch data
getCountry();