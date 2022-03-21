//typewrite:
let txtUm = `O trabalho é para amanhã e ainda não estou gostando da aparência da minha aplicação. Será que continuo ajustando esses detalhes?
`;
typeWriter(txtUm);

//personagem no canto esquerdo da página:
let personagem = localStorage.getItem("terceiro")

if(personagem == "1"){
    document.getElementById('imgHeroi').src = "../img/samira.png"
} else if (personagem == "2"){
    document.getElementById('imgHeroi').src = "../img/ashe.png"
} else if (personagem == "3"){
    document.getElementById('imgHeroi').src = "../img/darius.png"
}

//mensagens que aparecerão após o jogador escrever a resposta no prompt:
let txtVitoria = `
Você queria muito deixar a aplicação perfeita, mas ao invés de passar horas ajustando cores, fontes e imagens, decidiu reler os pontos avaliativos. Lá estava: "ajustar o media query para visualização em celulares". Você havia esquecido! Mas ajustou o media query  e depois percebeu que o css estava ótimo como estava! A facilitadora mostrou sua aplicação na aula dizendo que esse é o modo correto! Parabéns!`

let txtDerrota = `Você fez um trabalho lindo, caprichou no layout, nas cores e nas imagens. Mas esqueceu de ajustar o Media Query que era o ponto principal da avaliação. Seu trabalho reebeu 0 e você perdeu sua vaga no curso. Que pena!`

//programação das funções
function avancar(){
    let resposta = prompt(`Digite A para "Considerar como pronto e revisar o trabalho" e B para "continuar ajustando o CSS"`)

    while (resposta != 'a' && resposta != 'A' && resposta != 'b' && resposta != 'B'){
        resposta = prompt(`Resposta Inválida! Digite A para "Considerar como pronto e revisar o trabalho" e B para "continuar ajustando o CSS"`)
    }
    document.getElementById('next').style.visibility = 'hidden';

    if (resposta == "a" || resposta == "A"){
        alert (txtVitoria)
        let btnContinue = document.getElementById("btnContinue");
        btnContinue.classList.remove("hidden");
    } else {
        alert(txtDerrota)
        let btnGameOver = document.getElementById("btnGameOver");
        btnGameOver.classList.remove("hidden");
    }

    //ao clicar em avançar (on click) abrir prompt com a pergunta
        //enquanto resposta != A ou resposta != B 
    //abrir prompt com um alerta pra responder certo + pergunta

    //esconder botão avançar

    //se a resposta for "A" rodar texto de vitória e aparecer <a> "próximo" id vitoria
    //ao clicar no botão proximo, redirecionar para proxima fase
    //senão rodar texto de derrota e aparecer <a> "próximo" id derrota
    //ao clicar no botão proximo, redirecionar para tela de game over

}


