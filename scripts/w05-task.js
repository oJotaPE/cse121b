/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples")
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement("article");
        
        const h3 = document.createElement("h3");
        h3.textContent = `${temple.templeName}`;

        const img = document.createElement("img");
        img.setAttribute("src", `${temple.imageUrl}`);
        img.setAttribute("alt", `${temple.location}`);

        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
        
    });
}
/* async getTemples Function using fetch()*/
const templeURL = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";

const getTemples = async () => {
    const response = await fetch(templeURL);
    if (response.ok) {
        const temples = await response.json();
        templeList = temples;
        displayTemples(templeList);
        console.log(templeList);
    }
}

/* reset Function */
function reset() {
    templesElement.innerHTML = "";
}

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    let filter = document.querySelector("#filtered").value;
    switch(filter) {

        case "utah" :
            let filteredUtah = templeList.filter((temple) => {
                return temple.location.includes("Utah");
            });
            displayTemples(filteredUtah);
            break;

        case "notutah":
            let filteredNotUtah = templeList.filter((temple) => {
                return !temple.location.includes("Utah");
            });
            displayTemples(filteredNotUtah);
            break;

        case "older":
            let olderTemples = templeList.filter((temple) => {
                return new Date(temple.dedicated) < new Date (1950, 0, 1)
            });
            displayTemples(olderTemples);
            break;

        case "all":
            displayTemples(templeList);
            break;
    }
}

getTemples();
/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)});

