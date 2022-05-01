function primeiraFaseChandlerMonica (resposta) {
    let pergunta = prompt("Qual a resposta?")
    if (Number(pergunta) === resposta) {
        location.assign("/projetoFinal/chandler-monica/chandlerMonicaSegunda.html")
    }
    else if (Number(pergunta) != 1 && Number(pergunta) != 2 && Number(pergunta) !=3 && Number(pergunta) != 4) {
        alert("Essa resposta não existe no sistema")
    }
    else {
        location.assign("/projetoFinal/chandler-monica/perdeuChandlerMonica.html")
    }
}

function segundaFaseChandlerMonica (resposta) {
    let pergunta = prompt("Qual a resposta?");
    if (Number(pergunta) === resposta) {
        location.assign("/projetoFinal/chandler-monica/chandlerMonicaTerceira.html")
    }
    else if (Number(pergunta) != 1 && Number(pergunta) != 2 && Number(pergunta) !=3 && Number(pergunta) != 4) {
        alert("Essa resposta não existe no sistema")
    }
    else {
        location.assign("/projetoFinal/chandler-monica/perdeuChandlerMonica.html")
    }
}

function terceiraFaseChandlerMonica (resposta) {
    let pergunta = prompt("Qual a resposta?")
    if (Number(pergunta) === resposta) {
        location.assign("/projetoFinal/chandler-monica/ganhouChandlerMonica.html")
    }
    else if (Number(pergunta) != 1 && Number(pergunta) != 2) {
        alert("Essa resposta não existe no sistema")
    }
    else {
        location.assign("/projetoFinal/chandler-monica/perdeuChandlerMonica.html")
    }
}