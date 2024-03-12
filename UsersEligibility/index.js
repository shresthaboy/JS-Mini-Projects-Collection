const inputData = document.getElementById("myText");
const submit = document.getElementById("subBtn");
const result = document.getElementById("result");

let age;

submit.onclick = function(){
    age = inputData.value;
    age = Number(age);
    if(age>=100){
        result.textContent = `You're too old to enter this site`
    }
    else if(age === 0){
        result.textContent = `You cannot enter. You were just born`
    }
    else if(age>=18){
        result.textContent =`You are old enough to enter this site`
    }
    else if(age<0){
        result.textContent = `You must be 18 to enter this site`
    }
}