const mycheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercard = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const submit = document.getElementById("SubBtn");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");

submit.onclick = function(){
    if(mycheckbox.checked){
        subResult.textContent = `You are Subscribed`
    }else{
        subResult.textContent = `You are NOT Subscribed`
    }

    if(visaBtn.checked){
        payResult.textContent = `You're paying with Visa card.`
    }
    else if (mastercard.checked){
        payResult.textContent = `You're paying with Master card.`
    }
    else if (paypalBtn.checked){
        payResult.textContent = `You're paying with Paypal card.`
    }
    else{
        payResult.textContent = `You must select a payment method.`
    }
}

// ternary operator - shorcut to if and else statement
// helps to assign a variable based on a condition
// let purchaseamt = window.prompt("enter the price of the product");
// let discount = purchaseamt >= 100 ? 10 : 0;

// console.log(`Your total is $${purchaseamt - purchaseamt * (discount/100) }`);

// string slicing = creating a substring from a portion
// of another string
// string.slice(start,end)

// const fullname = "Bro Code is lame";

// let firstname = fullname.slice(0,4);
// console.log(firstname);

// next example of slicing with the other methods of string

// const str = "Sabin23@gmail.com";
// let username  = str.slice(0, str.indexOf("@"));
// let extension = str.slice(str.indexOf("@") + 1); // after adding +1 we'll get the character after the specified index parameter

// console.log(username);
// console.log(extension);

// method chaining - calling one method after another in one continuous line of code.

// with no method chaining
// let username = window.prompt("Enter your name:");
// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extrachar = username.slice(1);
// extrachar = extrachar.toLowerCase();

// username = letter + extrachar;
// console.log(username);

// with method chaining

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);

// logical operators - used to manipulate or combine boolean values ( true or false)

// const temp = 30;
// if(temp<0 && temp>=30){
//     console.log(`The weather is good`);
// }
// else {
//     console.log(`The weather is bad`);
// }

// if(temp<0 || temp >=40){
//     console.log(`The weather is okay to go!`)
// }else{
//     console.log(`Don't mess up with ur body`);
// }
// let isSunny = true
// if(!isSunny){
//     console.log(`it is cloudy`)
// }
// else{
//     console.log(`it is sunny`)
// }

// other operator used while checking conditions

// = assignment operators
// == comparison operator ( compare if two values are equal)
// === strict comparison operator ( compare if two value & their datatypes are equal )
// != inequality operator 
// !== strict inequality operator

// const PI = 3.14;

// if(PI != 3.14){
//     console.log(`It is a PI`)
// }
// else{
//      console.log(`It is not a PI`);
// }
 
// While loop - used to repeat some condition until it is true

// let username = ""
// do{
//     username = window.prompt("enter your name");
// }while(username === "" || username === null)
// console.log(`Hello ${username}`);

// next variation of While LOOP

let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log(`You're logged in`);
    }else{
        console.log(`Invalid credentials`);
    }
}

