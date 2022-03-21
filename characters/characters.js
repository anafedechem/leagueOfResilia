function avancar(){
    let selectedUm = document.getElementById("primeiro").value
    let selectedDois = document.getElementById("segundo").value
    let selectedTres = document.getElementById("terceiro").value

    if (selectedUm == "0" || selectedDois == "0" || selectedTres == "0"){
        alert("Atenção! Você deve selecionar um personagem em cada campo")
        return
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

