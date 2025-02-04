// FUNCTION #1: to roll
function rollDie(sides) {
    let roll = Math.random() * sides;
    let wholeNumber = Math.floor(roll) + 1;
    return wholeNumber;
}

// FUNCTION #2: generate "roll" message
function showRollMessage(roll) {
    return "You rolled a " + roll + "!";
}

// FUNCTION #3: check if roll = lucky number
function checkLuckyNumber(roll, luckyNumber) {
    if (roll == luckyNumber) {
        return "You got the Lucky Number!";
    } else {
        return "Try again!";
    }
}

// FUNCTION #4: dice
let dice = {
    sides: 6,
    lastRoll: 1,

    roll: function() {
        this.lastRoll = rollDie(this.sides);
        return this.lastRoll;
    }
};