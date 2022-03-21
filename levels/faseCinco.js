//typewrite:
let txtUm = `Puxa, me esforcei muito no último modulo e consegui vencer o Ladrão da Produtividade. Acho que mereço um descanso, 
só um diazinho pra relaxar. Apesar de que um dia só não vai ser suficiente pra acompanhar todas as séries que acabaram de lançar. 
Talvez só mais um dia, ou então que tal uma semana inteira off?
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
let txtVitoria = `Descansar é importante, por isso, você estabeleceu que, se revesse todo o conteúdo e realizasse as atividades até sexta feira, o final de semana seria todo na frente da TV, acompanhado de várias guloseimas. Você estava tão ansioso por essa recompensa que terminou tudo muito antes do planejado! Parabéns pelo comprometimento. `

let txtDerrota = `Você tirou um descanso de 1 semana, participou apenas das aulas que eram sobre Flexbox. Na hora de fazer a atividade você não conseguiu aplicar os conceitos e tirou 0. Era uma atividade eliminatória. O pessoal do curso te convidou a se retirar do programa.`

//programação das funções
function avancar(){
    let resposta = prompt(`Digite A para "Algo me diz que isso daria muito errado" ou B para "uma semana off não faz mal, mereço um descanso!"`)

    while (resposta != 'a' && resposta != 'A' && resposta != 'b' && resposta != 'B'){
        resposta = prompt(`Resposta Inválida! Digite A para "Algo me diz que isso daria muito errado"         ou B para "uma semana off não faz mal, mereço um descanso!"`)
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


