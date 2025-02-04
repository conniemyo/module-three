// function #1: to roll
function rollDice(sides){
    let roll = Math.random() * sides;
    let wholeNumber = Math.floor(roll) + 1;
    return wholeNumber;
}

// function #2: generate "roll" message
function showRollMessage(roll){
    return "You rolled a... " + roll + "!";
}

// function #3: check if roll = lucky number
function checkLuckyNumber(roll, luckyNumber){
    if (roll == luckyNumber){
        return "Congrats, You got the Lucky Number!";
    } else {
        return "Roll again!";
    }
}

// object: dice
let dice = {
    sides: 6,
    lastRoll: 1,

    // method: store the result
    roll: function(){
        this.lastRoll = rollDice(this.sides);
        return this.lastRoll;
    }
};

// event: button
document.getElementById("rollDiceBtn").addEventListener("click", function(){
    let luckyNumber = prompt("Pick a lucky number from 1-6:");
    luckyNumber = Number(luckyNumber);

    let roll = dice.roll();
    let rollMessage = showRollMessage(roll);
    let luckyMessage = checkLuckyNumber(roll, luckyNumber);

    console.log(rollMessage);
    console.log(luckyMessage);

    document.getElementById("diceOutput").innerHTML = rollMessage + "<br>" + luckyMessage;
});