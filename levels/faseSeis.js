//typewrite:
let txtUm = `Estudar sempre é válido. Nesse caso, pra que estudar todos os dias durante 1 hora se posso estudar 4 horas em apenas um dia? 
Tenho a sexta-feira toda livre mesmo! Existe o melhor jeito de estudar?
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
Você estudou todos os dias durante 1 hora. Por isso fixou bem a matéria e conseguiu acompanhar as aulas com facilidade. Você está entre os alunos com as maiores notas da turma e não se sente sobrecarregado! Parabéns `

let txtDerrota = `Na sexta feira você começou bem, mas ficou muito cansado e não entendeu nada dos temas de aula, além de ficar ansioso devido a tanto de conteúdo acumulado. Você não conseguiu dar conta do curso e decidiu desistir. Que pena!`

//programação das funções
function avancar(){
    let resposta = prompt(`Digite A para "estudar um pouco a cada dia é mais produtivo" ou B para "1 hora não é suficiente, melhor estudar 1 dia durante 4 horas"`)

    while (resposta != 'a' && resposta != 'A' && resposta != 'b' && resposta != 'B'){
        resposta = prompt(`Resposta Inválida! Digite A para "estudar um pouco a cada dia é mais produtivo" ou B para "1 hora não é suficiente, melhor estudar 1 dia durante 4 horas"`)
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


