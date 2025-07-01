const readline = require("readline-sync")

let primeiroNumero = readline.questionFloat("\nDigite o primeiro numero: ")
let segundoNumero = readline.questionFloat("\nDigite o segundo numero: ")

console.log("\nSoma = 1")
console.log("subtracao = 2")
console.log("multiplicacao = 3")
console.log("Divisao = 4")

let operacao = readline.questionInt("\nOperacao: ")

switch (operacao){
    case 1:
     let soma = primeiroNumero + segundoNumero;
     console.log(`${primeiroNumero.toFixed(1)} + ${segundoNumero.toFixed(1)} = ${soma.toFixed(1)}`);
     break;
    case 2:
     let subtracao = primeiroNumero - segundoNumero;
     console.log(`${primeiroNumero.toFixed(1)} - ${segundoNumero.toFixed(1)} = ${subtracao.toFixed(1)}`);
     break;
    case 3:
     let multiplicacao = primeiroNumero * segundoNumero;
     console.log(`${primeiroNumero.toFixed(1)} * ${segundoNumero.toFixed(1)} = ${multiplicacao.toFixed(1)}`);
     break;
    case 4:
     let divisao = primeiroNumero / segundoNumero;
     console.log(`${primeiroNumero.toFixed(1)} / ${segundoNumero.toFixed(1)} = ${divisao.toFixed(1)}`);
     break;
    default:
        console.log("Operação inválida!");
}