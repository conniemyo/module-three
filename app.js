// FUNCTION #1: to roll
function rollDie(sides) {
    return Math.floor(Math.random() * sides) + 1;
}
// FUNCTION #2: generate "roll" message
function getDiceMessage(roll) {
    return `You rolled a ${roll}!`;
}