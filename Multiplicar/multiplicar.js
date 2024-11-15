/*
Solicita ao usuário um numero inteiro
o  parseInt é usado para especificar qual o sistema de numeração 
que deseja converter a string
*/

let numero = parseInt(prompt("Digite um numero Inteiro!"))

if (!isNaN(numero)) { /*isNaN determina se valor é válido ou não*/
    let resultado = `Tabela de Multiplicação de ${numero}:\n` /* \n é usado para quebra de linha*/

    for (let n = 1; n <= 10; n++){ /*Gera a tabela usando laço for */
        resultado += `${numero} x ${n} = ${numero * n}\n`;
    }
    alert(resultado);
} else {
    alert("Por favor, digite um numero válido!")
}


