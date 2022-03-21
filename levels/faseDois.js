//typewrite:
let txtUm = `Após passar pelo módulo 1 deu pra perceber que o curso não é tão fácil assim... 
Na verdade, é bem difícil. Já sei! Vou ficar repetindo para mim mesmo o quanto é difícil e passar todo o meu tempo me culpando 
pois eu deveria estar estudando ao invés de aproveitar esse tempo para estudar com calma, pouco a pouco.
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
let txtVitoria = `O conteúdo que antes parecia impossível de ser aprendido agora não parece mais tão difícil. Alguns colegas até te chamaram para ajudá-los. Muito bem!`

let txtDerrota = `Você achou tão difícil ser programador que decidiu desistir do curso ao invés de empenhar mais esforço. Que pena!`

//programação das funções
function avancar(){
    let resposta = prompt(`Digite A para "estudar pouco a pouco" ou B para "não estudar pois é muito difícil"`)

    while (resposta != 'a' && resposta != 'A' && resposta != 'b' && resposta != 'B'){
        resposta = prompt(`Resposta Inválida! Digite A para "estudar pouco a pouco" ou B para "não estudar, pois é muito difícil"`)
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


