const readline = require("readline-sync");

let nome = readline.question("\nDigite o nome do Doador: ");
let idade = readline.questionInt("\nDigite a idade do Doador: ");
let jaDoou = readline.keyInYNStrict("\nPrimeira doação de sangue? y - sim | n - nao ");

if(idade >=18 && idade <= 59){
    console.log(`\n${nome} está apto para doar sangue.`);
}else if(idade >= 60 && idade <= 69 && jaDoou === false){
    console.log(`\n${nome} está apto para doar sangue.`)
}else{
    console.log(`\n${nome} não está apto para doar sangue.`)
}