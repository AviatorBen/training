//description , make a calcuatlor , give there argumetns 2 number and a opeartion should comute the result
//1 read input from the user,
//write login for operation
// display output
//use npm to bring math lirabies over

var numOne,numTwo,oper;
var readline = require('readline-sync');
numOne=readline.question("enter first number  ");
console.log('you entered :' +numOne); 
numTwo=readline.question("enter the second number  ");
console.log('you entered :' +numTwo);
oper=readline.question('enter op');
console.log(oper);

let add = (numberA, numberB) => {
    return numberA + numberB;
};

let sub = (numberA, numberB) => {
    return numberA - numberB
};

let mul = (numberA, numberB) => {
    return numberA * numberB
};

let div = (numberA, numberB) => {
    return numberA / numberB
};

let calculator = (numA, numB, operatorString) => {
    switch (operatorString){
        case "+":
            return add(parseInt(numA), parseInt(numB));
            break;
        case "-":
            return sub(parseInt(numA), parseInt(numB));
            break;
        case "*":
            return mul(parseInt(numA), parseInt(numB));
            break;
        case "/":
            return div(parseInt(numA), parseInt(numB));
            break;
        default:
            break;
    }
};

console.log(calculator(numOne, numTwo, oper));