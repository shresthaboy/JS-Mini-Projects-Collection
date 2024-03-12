// counter program

const decreaseBtn = document.getElementById("decBtn")
const resetBtn = document.getElementById("resBtn")
const increaseBtn = document.getElementById("incBtn")
const countLabel = document.getElementById("countBtn");

let count = 0;

increaseBtn.onclick = () =>{
    count ++;
    countLabel.textContent = count;
};

decreaseBtn.onclick = () =>{
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = () =>{
    count = 0;
    countLabel.textContent = count;
}
