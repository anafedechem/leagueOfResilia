//typewrite:
let txtUm = `Final de módulo, sempre uma correria! Não tenho tempo de arrumar meu quarto, preciso codar o tempo todo para dar conta do projeto! 
Será que vou me arrepender se não parar tudo agora e limpar minha bagunça?
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
let txtVitoria = `O carregador do notebook estava dentro de um pacote de salgadinho. Imagina se sua mãe joga ele no lixo? Ainda bem que você percebeu que a Organização derrota o Vilão da Produtividade e agora pode terminar o trabalho mais tranquilo. Muito bem!
 `

let txtDerrota = `Você decidiu não limpar seu quarto. Então sua mãe resolveu te ajudar. Enquanto você tomava banho ela limpou tudo e jogou fora os lixos espalhados pelo chão, inclusive um pacote de salgadinho que tinha o carregador do notebook dentro dele. A apresentação do trabalho era pela manhã, mas seu computador está sem bateria e você não fez nenhum backup do projeto. Perdeu a apresentação e foi eliminado do curso.`

//programação das funções
function avancar(){
    let resposta = prompt(`Digite A para "limpar tudo agora" ou B para "terminar o projeto primeiro"`)

    while (resposta != 'a' && resposta != 'A' && resposta != 'b' && resposta != 'B'){
        resposta = prompt(`Resposta Inválida! Digite A para "limpar tudo agora" ou B para "terminar o projeto primeiro"`)
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


