const prompt = require("prompt-sync")();

function getNumber(numberString){
    while(true){
        const number = parseFloat(prompt("Enter Number " + numberString + ": "));
        if(isNaN(number)){
            console.log("Invalid Input");
        }else{
            return number;
        }
    }
}

const number1=getNumber('one');
const number2=getNumber('two');

const operator = prompt("Enter Sign: ");

let result;
let valid=true;
switch(operator){
    case "+":
        result=number1+number2;
        break;
    case "-":
        result=number1-number2;
        break;
    case "/":
        if(number2===0){
            valid=false;
            console.log("Zero Division Error: ");
        }
        return number1/number2;
        break;
    case "*":
        result=number1*number2;
        break;
    default:
        console.log("Invalid Input");
        valid=false;
        break;
}

if(valid){
    console.log(number1,operator,number2,"=",result);
}