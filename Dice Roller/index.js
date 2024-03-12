// Roller Dice Program

function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = []; // array to store the values generated through random method
    const images = []; // to retrieve the images numerically based on the generated values

    for (let i =0; i<numOfDice; i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dice_images/${`dice-`+value}.png" alt="Dice ${value}">`);

    }
    diceResult.textContent = `Dice: ${values.join(",")}`;
    diceImages.innerHTML = images.join('');
}
