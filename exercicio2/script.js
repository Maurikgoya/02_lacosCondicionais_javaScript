const readline = require("readline-sync")

let numero = readline.questionInt("Digite um numero: ");

if (numero % 2 === 0 && numero > 0){
    console.log(`\nO Numero ${numero} é par e positivo!`);
}else if (numero % 2 === 0 && numero < 0){
    console.log(`\nO Numero ${numero} é par e negativo!`);
}else if (numero % 2 !== 0 && numero > 0){
    console.log(`\nO Numero ${numero} é impar e positivo!`);
}else{
    console.log(`\nO Numero ${numero} é impar e negativo!`);
}