function primeiraFaseRachelRoss (resposta) {
    let pergunta = prompt("Qual é a resposta?")
    if (Number(pergunta) === resposta) {
        location.assign("/projetoFinal/rachel-ross/rachelRossSegunda.html")
    } 
    else if (Number(pergunta) != 1 && Number(pergunta) != 2 && Number(pergunta) !=3 && Number(pergunta) != 4) {
        alert("Essa resposta não existe no sistema")
    }
    else {
        location.assign("/projetoFinal/rachel-ross/perdeuRachelRoss.html")
    }
}

function segundaFaseRachelRoss (resposta) {
    let pergunta = prompt("Qual é a resposta?")
    if (Number(pergunta) === resposta) {
        location.assign("/projetoFinal/rachel-ross/rachelRossTerceira.html")
    } 
    else if (Number(pergunta) != 1 && Number(pergunta) != 2 && Number(pergunta) !=3 && Number(pergunta) != 4) {
        alert("Essa resposta não existe no sistema")
    }
    else {
        location.assign("/projetoFinal/rachel-ross/perdeuRachelRoss.html")
    }
}

function terceiraFaseRachelRoss (resposta) {
    let pergunta = prompt("Qual é a resposta?")
    if (Number(pergunta) === resposta) {
        location.assign("/projetoFinal/rachel-ross/ganhouRachelRoss.html")
    }
    else if(Number(pergunta) != 1 && Number(pergunta) != 2 && Number(pergunta) !=3 && Number(pergunta) != 4) {
        alert("Essa resposta não existe no sistema")
    }
    else {
        location.assign("/projetoFinal/rachel-ross/perdeuRachelRoss.html")
    }
}