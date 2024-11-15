let iniciar = alert("Pressione OK para exibir os números pares de 1 a 20!");

if (iniciar !== null) {
    for (let i = 1; i <= 20; i++){
        if (i % 2 === 0){
            console.log(i);
            alert(i);
        }
    }
}
alert("A contagem foi encerrada!")
