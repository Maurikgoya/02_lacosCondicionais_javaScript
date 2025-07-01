const readline = require("readline-sync")

let numeroA = readline.questionInt('Digite o número A: ');

let numeroB = readline.questionInt('Digite o número B: ');

let numeroC = readline.questionInt('Digite o número C: ');

if(numeroA + numeroB > numeroC){
    console.log("A soma de A + B é Maior que C");
}else if(numeroA + numeroB < numeroC){
    console.log("A soma de A + B é menor que C");
}else{
    console.log("A soma de A + B é igual a C");
}