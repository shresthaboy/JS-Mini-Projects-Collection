const rollbutton = document.getElementById("RollBtn");
const outputLabel1 = document.getElementById("rolledNum1");
const outputLabel2 = document.getElementById("rolledNum2");
const outputLabel3 = document.getElementById("rolledNum3");

let randomNum1;
let randomNum2;
let randomNum3;
let min = 1;
let max = 6;

rollbutton.onclick = function(){
    randomNum1 = (Math.floor(Math.random()*max)+min)
    randomNum2 = (Math.floor(Math.random()*max)+min)
    randomNum3 = (Math.floor(Math.random()*max)+min)
    outputLabel1.textContent = randomNum1;
    outputLabel2.textContent = randomNum2;
    outputLabel3.textContent = randomNum3;
    //setting the generated random number to the created label in the HTML
}

// // generate random number between 0 and 1
// let randomN = Math.random();
// console.log(randomN);

// // generate random number between 10 and 20
// let randombetween1and10 = Math.floor((Math.random()*10)+20);
// console.log(randombetween1and10);
