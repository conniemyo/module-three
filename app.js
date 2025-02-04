// FUNCTION #1: to roll
function rollDice(sides) {
    let roll = Math.random() * sides;
    let wholeNumber = Math.floor(roll) + 1;
    return wholeNumber;
}

// FUNCTION #2: generate "roll" message
function showRollMessage(roll) {
    return "You rolled a... " + roll + "!";
}

// FUNCTION #3: check if roll = lucky number
function checkLuckyNumber(roll, luckyNumber) {
    if (roll == luckyNumber) {
        return "You got the Lucky Number!";
    } else {
        return "Roll again!";
    }
}

// OBJECT: dice
let dice = {
    sides: 6,
    lastRoll: 1,

    // METHOD: store the result
    roll: function() {
        this.lastRoll = rollDice(this.sides);
        return this.lastRoll;
    }
};

// EVENT: button
document.getElementById("rollDiceBtn").addEventListener("click", function() {
    let luckyNumber = prompt("Pick a lucky number (1-6):");
    luckyNumber = Number(luckyNumber);

    let roll = dice.roll();
    let rollMessage = showRollMessage(roll);
    let luckyMessage = checkLuckyNumber(roll, luckyNumber);

    console.log(rollMessage);
    console.log(luckyMessage);

    document.getElementById("diceOutput").innerHTML = rollMessage + "<br>" + luckyMessage;
});