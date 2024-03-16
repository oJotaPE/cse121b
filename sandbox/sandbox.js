// var y = 8;
// var x = 10;
// var stringA = "I like ";
// var stringB = "french fries."
// var equal;
// var less;
// var comparison;

// let sum = x + y;
// let multiply = x * y;
// let subtraction = x - y;
// let concatinate = stringA + stringB;
// let incremetx = x += 3

// if ( x !== y)
// {
//     equal = "different";
// }
// if ( y < x)
// {
//     less = "y is smaller";
// }
// if (y < 10 && y > 0)
// {
//     comparison = "y is perfect!"
// }


// const display = `- sum: ${sum} \n- multiply: ${multiply} \n- subtraction: ${subtraction} \n- concatinate: ${concatinate} \n- Increment the value of x: ${incremetx} \n- are they the same number? ${equal} \n- which is smaller: ${less} \n- is y smaller than 10 and greater than 0? ${comparison}`;
// console.log(display);



// let output = "Welcome to " + courseSubject + " " + courseNumber + "!Credits: " + courseCredits + "Length: " + courseLength;
// let display = `Welcome to ${courseSubject} ${courseNumber} 
// !Creditds: ${courseCredits} 
// Length: ${courseLength}`;


// let temples = ["Rome", "Salt Lake", "Nauvoo"];
// let listItems = "";
// for (const temple of temples) {
//   listItems += `<li>${temple}</li>`;
// }

// document.querySelector("ul").innerHTML = listItems;

// const link = document.querySelector("a");
// link.textContent = "Mozilla Developer Network";
// link.href = "https://developer.mozilla.org"; 

// const sect = document.querySelector("section");
// const para = document.createElement("p");
// para.textContent = "Hope you enjoy the ride. "
// sect.appendChild(para);

// const text = document.createTextNode(
//   " - the premier source for web development knowledge."
// );
// const linkPara = document.querySelector("p");
// linkPara.appendChild(text);

// sect.appendChild(linkPara);

// // para.style.color = "white";
// // para.style.backgroundColor = "black";
// // para.style.padding = "10px";
// // para.style.width = "250px";
// // para.style.textAlign = "center";
// para.setAttribute("class", "highlight");

// let firstName = 'Antonia';
// let lastName = 'Francesca';

// const fullName = (first, last) => `${first} ${last}`;
// const paragraph = document.querySelector('p');
// paragraph.innerHTML = fullName(firstName, lastName);

let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

let namesB = names.filter((name) => name.charAt[0] === 'B');
let namesLength = names.map((name) => name.length);
const average = (total, number, array) => {
    total += number;
    final = total / array.length;
    return final;
}
let namesC = names.reduce((total, name) => total + name.length, 0)/names.length;
console.log(namesC);

// let namesC = names.reduce((accumulator, current) => (current.length + accumulator) );