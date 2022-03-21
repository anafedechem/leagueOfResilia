//typewrite:
let txtUm = `Nesse módulo vou fazer o projeto mais incrível de todos, vai dar bastante trabalho mas vai ficar demais!
-faltando uma semana para entregar o projeto-
Achei que estava sendo produtivo mas agora falta 1 semana para a entrega e ainda não tenho nem a base pronta. O que devo fazer?
`;
typeWriter(txtUm);

//personagem no canto esquerdo da página:
let personagem = localStorage.getItem("primeiro")

if(personagem == "1"){
    document.getElementById('imgHeroi').src = "../img/samira.png"
} else if (personagem == "2"){
    document.getElementById('imgHeroi').src = "../img/ashe.png"
} else if (personagem == "3"){
    document.getElementById('imgHeroi').src = "../img/darius.png"
}

//mensagens que aparecerão após o jogador escrever a resposta no prompt:
let txtVitoria = `
Não foi fácil, você se esforçou bastante e, infelizmente, seu trabalho foi o mais simples da turma. Por outro lado, o trabalho estava muito caprichado e cumpriu todos os requisitos. Parabéns, você passou para o próximo módulo!`

let txtDerrota = `Você decidiu seguir com a ideia do projeto complicado. A data de entrega chegou e, apesar de passar as madrugadas tentando terminar, você não conseguiu deixar nada pronto. Você não entregou nenhum projeto e a escola teve que desligar você do curso.`

//programação das funções
function avancar(){
    let resposta = prompt(`Digite A para "insistir no projeto complicado com a possibilidade de não conseguir terminar a tempo mas também de fazer um trabalho incrível" ou B para "recomeçar com uma ideia mais simples e entregar um trabalho mediano"`)

    while (resposta != 'a' && resposta != 'A' && resposta != 'b' && resposta != 'B'){
        resposta = prompt(`Resposta Inválida! Digite A para "insistir no projeto complicado com a possibilidade de não conseguir terminar a tempo mas também de fazer um trabalho incrível" ou B para "recomeçar com uma ideia mais simples e entregar um trabalho mediano"`)
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


