
let quantidadeDeAlunos = parseInt (prompt("Digite a quantidade de alunos da turma:"))

/*Verifica se a quantidade de alunos é válida */
if (isNaN(quantidadeDeAlunos || quantidadeDeAlunos <= 0)) {
    alert ("Por favor, insira uma quantidade válida de alunos.")
} else {
    let somaNotas = 0; /* variável para acumular notas*/

    /*Laço para capturar notas dos alunos */
    for (let i = 1; i <= quantidadeDeAlunos; i++) {
        let nota; 
        
        do { /*Solicita a nota do aluno e converte para número */
            nota = parseFloat(prompt(`Digite a nota do aluno ${i}:`));
            if (isNaN(nota) || nota < 0 || nota > 10) {
                alert("Nota Inválida! Por gentileza, insira um valor entre 0 a 10.");
            }
        }while (isNaN(nota) || nota < 0 || nota > 10);

        somaNotas += nota; /*Adiciona nota ao total */
    } 

    /*Calcula a media*/
let media = somaNotas / quantidadeDeAlunos;

/*Exibe a média da turma */
alert(`A media da turma é: ${media.toFixed(2)}`)

}

