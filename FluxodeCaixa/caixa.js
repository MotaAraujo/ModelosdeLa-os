let totalVendas = 0; /* Variável para armazenar o total acumulado*/
let venda; /*Variável para armazenar o valor de cada venda */

do {
    venda = prompt("Digite o valor da venda, ou 0 para finalizar:")
    let valorVenda = parseFloat(venda); /*Converte a entrada para um numero, parseFloat analisa um argumento, converte para string primeiro e retorna um numero de ponto flutuante(numero decimal*/

    switch (true) {
        case venda === "0": /*O laço será encerrado */
            break;
        case isNaN(valorVenda): /*Caso o valor não seja um numero valido */
            alert("Valor inválido! Digite um número válido!");
            break;
        case valorVenda > 0: /*Caso seja um numero valido e positivo, adiciona ao total */
            totalVendas += valorVenda;
            break;
        default: /*Para valores negativos ou outras entradas não esperadas */
            alert("Valor inválido! Digite um número positivo ou 0 para finalizar!");

    }
} while (venda  !== "0");

alert (`O total de vendas do dia é: R$ ${totalVendas.toFixed(2)}`); /*toFixed permite arredondar um numero para um numero especifico de casas decimais */
