// // window.alert("Hey boys! What's up!")
// // alert("i'm doing good bro");

// document.getElementById("h1-el").textContent = `javascript is cool`;
// document.getElementById("p-el").textContent = `i love this`;



// // using template literals

// /*let firstname = `sabin`
// let lastname = `stha`
// let food = `pizza`

// let msg1 = `So my name is ${firstname} ${lastname}`
// let msg2  = `And talking about my favorite food, its ${food}`

// console.log(typeof food);
// console.log(msg1);
// console.log(msg2);
// document.getElementById("h2-el1").textContent = msg1;
// document.getElementById("h2-el2").textContent = msg2;
// */
// // variable - a container that stores a value

// let firstname = `Franky`
// let age = 25
// let isStudent = true

// document.getElementById("p1").textContent = `My name is ${firstname}`
// document.getElementById("p2").textContent = `I am ${age} years old`
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`

// //arithmetic operators: operands(values, variables)

// let x = 30;

// // to indicate exponent
// console.log(x ** 2);

// // How to accept user input

// // 1. easy way - window.prompt
// // 2. professional way - html textbox

// // let username = window.prompt("Enter your name");
// // console.log(username);
// // This is an easy way to accept user input

// // Now using the professional method to accept user input 
// // here we're performing; when user clicks on the submit button, then we run a function which
// // accepts the input box value and append it to the username variable
// let username;
// document.getElementById("subBtn").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`
// }
// // type conversion = change the datatype of a value to another
//                        // (strings, numbers, booleans)

// let p = "0"
// let y = "0"
// let z = "0"
//  // we can change the datatype of the variables by setting the variable with the specific changing datatype function
// p = Number(p)
// y = String(y)
// z = Boolean(z)

// console.log(p, typeof p);
// console.log(y, typeof y);
// console.log(z, typeof z);

// // const - a variable that can't be changed
// // finding the circumference of a circle

// const PI = 3.14159;
// let radius;
// let circumference;

// // radius = window.prompt("Enter the radius of a circle");


// document.getElementById("SUBBTN").onclick = function(){
//     radius = document.getElementById("MYText").value;
//     radius = Number(radius)
//     circumference = 2 * PI * radius;
//     document.getElementById("output").textContent = `The circumference of Circle is: ${circumference}`
  
// }
//  // arrays in JS
//  // a variable like structure that can hold more than one value

//  let fruits = ["orange", "fruits", "banana","coocnut"];
// console.log("Total number of fruits is: " + fruits.length);
// fruits[0] = "wasabi";
// console.log(fruits);
// console.log(fruits[0]);

// // accessing values of a multidimensional array which is an array inside an array
// const random =["apple",234,[0,1,2]];
// console.log(random[2][2]);
// random.push("i'm in"); // to add an item to the end of a array
// // console.log(random);
// // console.log(random.indexOf("apple"));

// // to add an item to the beginning of an array
// // random.unshift("mangoes");   
// // console.log(random);

// // to remove last item from an array
// // random.pop();
// // console.log(random);

// // to remove first item from the array
// const months = ["jan","feb","march"];
// console.log(months.shift());

// // if we know the index of an item, we can remove it using the splice() method
// const citie = ["Manchester","Liverpool","Edinburgh","Carlisle"];
// const index = citie.indexOf("Edinburgh");
// if( index !== -1){
//     citie.splice(index,2);
// }
// console.log(citie);
// // splice() method is mainly used to select the portion of the index and remove that much block of items from the array
// // first argument says where to start removing and second argument says how many items to remove

// // if we want to access each item in the array, we can use for..of statement
// const birds = ["falcon","owl","pigeon"];
// for (const bird of birds){
//     console.log(birds);
// }

// // map() is used to create a new array populated with the result of calling a function provided on every element

// const array1 =[1,2,3,4,5];
// // pass a function to map
// const map1 = array1.map((x)=>x*2);
// console.log(map1);

// const sample = ["a","b","c"];
// const map2 = sample.map((x)=> x+"d");
// console.log(map2);

// // filter(), to create a array with the items that only contain the items that match the test.
// function isLong(city){
//     return city.length>8;
// }
// const city = ["biratnagar","kanchanrup","itahari"];
// const newarray = city.filter(isLong);
// console.log(newarray);

// // split(), this method is used to separate useful items in a specified way from an array or strings
// const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
// const cities1 = data.split(",");
// console.log(cities1);
// cities1.length;
// cities1[0];


function charA(gf){
    return gf.length>5;
}
const gf = ["monika","sonia","ronish"];
const newgf = gf.filter(charA);
console.log(newgf);

let fruits = ["coconut","apple","banana","mango"];

fruits.sort().reverse();
for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}
for(let i =fruits.length; i>=0;i--){ // decrement array
    console.log(fruits[i]);
}
for(let fruit of fruits){ // enhanced for loop
    console.log(fruit);
}

// spread operator: allows an iterable such as an array or string to be expanded into separate elements (unpack the elements)

let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(minimum);
console.log(maximum);

// can also be used with strings

let username = "Sabin Bro";
let letters = [...username].join("-");
console.log(letters);

let fruit2 = ["apple","orange","banana"];
let vegs = ["potatoes","celery","spinach"];

let newfruits = [...fruit2, ...vegs,"eggs"]; // using spread operator to combine two arrays and can also add new item to the array
console.log(newfruits);


//rest parameters = (...rest) allow a function to work with a variable number of arguments by bundling them into an array
// spread = expands an arrray into separate elements
// rest= bundles the separated elements into an array


function openFridge(...foods){ // by using the rest paramater we can define an array name foods and log that food and then pass that function the desired arguments.
    console.log(...foods); // using the spread operator to separate the elements
}
function getFood(...foods){
    return foods;
}
 const food1="pizza";
 const food2="hamburger";
 const food3="sushi";
 const food4="ramen";

 const foods = getFood(food1,food2,food3,food4);
 console.log(...foods);
//  openFridge(food1,food2,food3,food4);

// the rest operator puts the rest of some specific user supplied values into a JavaScript Array

//Use rest to enclose the rest of specific user-supplied values into an array;
 function myBio(firstname, lastname, ...otherinfo){
    return otherinfo;
 }
 //Invoke myBio function while passing five arguments to its parameters;
 const user1 = myBio("sabin","shrestha","webdeveloper","male");
 console.log(user1);
 // In the above code we used the ...otherinfo rest parameter to put "webdeveloper" & "male" into an array.
 // Using spread operator : to output bunch of strings

 function bio(firstname,lastname,company){
    return `${firstname} ${lastname} runs ${company}`;
 }

 bio(["sabin","stha","PW"]);
 console.log(bio);

 function sum(...numbers){

    let result = 0;
    for (let number of numbers){
        result+=number;
    }
    return result;
 }
 const total = sum(1,2);
 console.log(`Your total is $${total}`);

 function getAvg(...numbers){

    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result / numbers.length;
 }
 const total2 = getAvg(75,90,85);
 console.log(`your average is ${total2}`);

 // rest parameters to combine strings together

 const Fullname = combineString("Mr","Spongebob","Squarepants","III");

 function combineString(...Strings){ // created a Strings array that accepts string arguments
    return Strings.join(" ");// then after running this function it will join the string and return.
 }
 console.log(Fullname);
