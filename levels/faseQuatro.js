//typewrite:
let txtUm = `Prometi para 5 colegas que iria ajudá-los a entender o conteúdo, mas para hoje ainda preciso revisar conteúdo, 
organizar a casa, entregar os exercícios online, colocar meus 37 cursos online em dia, beber 3 litros de água, ir na academia 
e realizar as atividades extra do curso de programação. Mas antes, preciso tirar um cochilo de 20 minutos. Será que vou dar conta de tudo?
`;
typeWriter(txtUm);

//personagem no canto esquerdo da página:
let personagem = localStorage.getItem("segundo")

if(personagem == "1"){
    document.getElementById('imgHeroi').src = "../img/samira.png"
} else if (personagem == "2"){
    document.getElementById('imgHeroi').src = "../img/ashe.png"
} else if (personagem == "3"){
    document.getElementById('imgHeroi').src = "../img/darius.png"
}

//mensagens que aparecerão após o jogador escrever a resposta no prompt:
let txtVitoria = `
Você não conseguiu realizar todas as tarefas que havia se comprometido. Mas realizou as  mais importantes e arranjou um jeito de otimizar algumas delas, como a chamada de video em grupo que fez para ajudar todos os seus colegas ao mesmo tempo. Muito bem! `

let txtDerrota = `Oh, oh! O cochilho durou bem mais que apenas 20 minutos. Você ficou com vergonha de admitir para seus colegas que não dá conta de tudo e mudou de escola sem avisar ninguém. Cuidado, a história pode se repetir!`

//programação das funções
function avancar(){
    let resposta = prompt(`Digite A para "priorizar e selecionar poucas tarefas" ou  B para "tirar um cochilo e acordar com energia para entregar tudo"`)

    while (resposta != 'a' && resposta != 'A' && resposta != 'b' && resposta != 'B'){
        resposta = prompt(`Resposta Inválida! Digite A para "priorizar e selecionar poucas tarefas" ou  B para "tirar um cochilo e acordar com energia para entregar tudo"`)
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


