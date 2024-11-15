let senha; /*Armazena a senha digitada pelo usuário*/

do { /*O código dentro do bloco será executado pelo menos uma vez, continuará pedindo a senha enquanto for diferente de 1234 */
    senha = prompt("Digite a senha:");
} while (senha !== "1234");

/*Condição e parada, quando o usuário digitar 1234 */

alert("Acesso permitido");