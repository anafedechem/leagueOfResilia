//descobrir qual foi o primeiro pers selecionado usando localStorage.getItem

//código para colocar no cantinho a imagem do personagem selecionado (fase 1, 2 e 3)
let personagem = localStorage.getItem("primeiro")

if(personagem == "1"){
    document.getElementById('imgHeroi').src = "../img/samira.png"
} else if (personagem == "2"){
    document.getElementById('imgHeroi').src = "../img/ashe.png"
} else if (personagem == "3"){
    document.getElementById('imgHeroi').src = "../img/darius.png"
}




let txtUm = `Início de curso é sempre uma moleza, nem precisa estudar, são só conecitos básicos. 
Será que devo pôr minhas séries em dia antes que o curso fique mais pesado?
 (Clique em "avançar" para seguir jogando)
`;

typeWriter(txtUm);

let txtVitoria = `Na aula, a facilitadora fez uma pergunta que só você soube responder. Muito bem!`

let txtDerrota = `Terminar suas séries levou muito tempo e o conteúdo era mais difícil do que você imaginava. Você não sabia como fazer o Projeto de Final de Módulo e não conseguiu terminá-lo. Portanto, teve que ser desligado do curso. Que pena!`



//programação das funções
function avancar(){
    let resposta = prompt(`Digite A para "Revisar o conteúdo" ou B para "Colocar séries em dia"`)

    while (resposta != 'a' && resposta != 'A' && resposta != 'b' && resposta != 'B'){
        resposta = prompt(`Resposta Inválida! Digite A para "Revisar o conteúdo" ou B para "Colocar séries em dia"`)
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