//typewrite:
let txtUm = `Chegou a hora do último módulo do curso. Fui forte e consegui chegar até aqui! Agora falta pouco para ser um Dev Resiliente! Só preciso continuar focad... Espera aí, acabei de receber uma mensagem de oportunidade de emprego como Dev que paga em dólar, mas a entrevista é no dia da apresentação do Projeto Final. O que devo fazer? `;
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
Você se manteve focado no curso da Resilia e se formou. Uma semana depois um recrutador entrou em contato com você oferecendo uma vaga de emprego ainda melhor que a anterior! Você é um sucesso!!!!!!!!! `

let txtDerrota = `Você chegou tão perto da formatura mas decidiu que já sabia tudo de programação e era mais vantajoso aceitar o emprego. Na entrevista de emprego perguntaram se você sabia falar em árabe, pois era requisito mínimo da vaga. Você não fala árabe e ficou sem o emprego e a formação da Resilia. Que pena! `

//programação das funções
function avancar(){
    let resposta = prompt(`Digite A para "priorizar o trabalho final e se formar no curso da Resilia" ou B para "Aceitar a entrevista de emprego"`)

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


