const readline = require("readline-sync")

let codigoProduto = readline.questionInt("Digite o codigo do produto: ");
let quantidade = readline.question("\nDigite a quantidade: ");

switch (codigoProduto){
    case 1:
        let cachorroQuente = 10.00 * quantidade;
        console.log("\nProduto: Cachorro Quente");
        console.log(`\nValor total: R$ ${cachorroQuente.toFixed(2)}`);
        break;
    case 2:
        let xSalada = 15.00 * quantidade;
        console.log("\nProduto: X-Salada");
        console.log(`\nValor total: R$ ${xSalada.toFixed(2)}`);
        break;
    case 3:
        let xBacon = 18.00 * quantidade;
        console.log("\nProduto: X-Bacon");
        console.log(`\nValor total: R$ ${xBacon.toFixed(2)}`);
        break;
    case 4:
        let bauru = 12.00 * quantidade;
        console.log("\nProduto: Bauru");
        console.log(`\nValor total: R$ ${bauru.toFixed(2)}`);
        break;
    case 5:
        let refrigerante = 18.00 * quantidade;
        console.log("\nProduto: Refrigerante");
        console.log(`\nValor total: R$ ${refrigerante.toFixed(2)}`);
        break;
    case 6:
        let sucoDeLaranja = 13.00 * quantidade;
        console.log("\nProduto: Suco de Laranja");
        console.log(`\nValor total: R$ ${sucoDeLaranja.toFixed(2)}`);
        break;
    default:
        console.log("\nProduto Invalido")
}