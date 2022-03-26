//Função para deixar no canto inferior esquerdo das fases o personagem escolhido pelo pelo jogador
//O primeiro herói jogará as fases 1, 2 e 3;
//O segundo herói jogará as fases 4, 5 e 6;
//O terceiro herói jogará as fases 7, 8 e 9.

function avancar(){
    let selectedUm = document.getElementById("primeiro").value
    let selectedDois = document.getElementById("segundo").value
    let selectedTres = document.getElementById("terceiro").value

    if (selectedUm == "0" || selectedDois == "0" || selectedTres == "0"){
        alert("Atenção! Você deve selecionar um personagem em cada campo")
        return
        //"0" é a posição do <select> que tem o texto "escolha um personagem"
    }
    localStorage.setItem("primeiro", selectedUm);
    localStorage.setItem("segundo", selectedDois);
    localStorage.setItem("terceiro", selectedTres);

    window.location.href = '../levels/intro.html';

    //escolheu corretamente os personagens?
    //se nao, alertar e sair da função
    //se sim, guardar a info dos pers.
    //redirecionar para 1a fase
}

